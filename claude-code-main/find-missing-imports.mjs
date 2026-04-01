// Finds all relative imports in dist/ that point to non-existent files
import { readFileSync, existsSync, readdirSync } from 'fs';
import { join, dirname, resolve, relative } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const DIST_SRC = join(__dirname, 'dist', 'src');

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
  // Match: from "./foo.js"  or  from '../bar.js'
  const re = /from\s+["'](\.[^"']+)["']/g;
  let m;
  while ((m = re.exec(code)) !== null) {
    const resolved = resolve(dirname(f), m[1]);
    if (!existsSync(resolved) && !existsSync(resolved + '.js') && !existsSync(resolved + '/index.js')) {
      missing.add(resolved);
    }
  }
}

const sorted = [...missing].sort();
console.log(`Missing files: ${sorted.length}`);
sorted.forEach(f => console.log(relative(join(__dirname, 'dist'), f)));
