// Finds all bare specifier imports in dist/ that can't be resolved from node_modules
import { readFileSync, existsSync, readdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const DIST_SRC = join(__dirname, 'dist', 'src');
const NODE_MODULES = join(__dirname, 'node_modules');

function walkDir(dir) {
  const results = [];
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) walkDir(full).forEach(f => results.push(f));
    else if (entry.name.endsWith('.js')) results.push(full);
  }
  return results;
}

const missing = new Set();
for (const f of walkDir(DIST_SRC)) {
  const code = readFileSync(f, 'utf-8');
  // Match bare specifier imports (not starting with . or /)
  const re = /from\s+["']([^."'/][^"']*)["']/g;
  let m;
  while ((m = re.exec(code)) !== null) {
    const spec = m[1];
    // Skip node: builtins
    if (spec.startsWith('node:')) continue;
    // Get package name (handle scoped packages)
    let pkgName;
    if (spec.startsWith('@')) {
      const parts = spec.split('/');
      pkgName = parts[0] + '/' + parts[1];
    } else {
      pkgName = spec.split('/')[0];
    }
    // Check if it exists in node_modules
    const pkgDir = join(NODE_MODULES, pkgName);
    if (!existsSync(pkgDir)) {
      missing.add(pkgName);
    }
  }
}

const sorted = [...missing].sort();
console.log('Missing packages: ' + sorted.length);
sorted.forEach(p => console.log(p));
