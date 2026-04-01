/**
 * Stub type declarations for @ant/claude-for-chrome-mcp (Anthropic-internal).
 * All runtime code paths using this package are gated behind feature('CHROME_MCP')
 * and dead-code-eliminated in external builds. Only type-level references remain.
 */

export declare const BROWSER_TOOLS: readonly string[];

export declare function createClaudeForChromeMcpServer(context: ClaudeForChromeContext): any;

export interface ClaudeForChromeContext {
  [key: string]: any;
}

export interface Logger {
  silly(message: string, ...args: unknown[]): void;
  debug(message: string, ...args: unknown[]): void;
  info(message: string, ...args: unknown[]): void;
  warn(message: string, ...args: unknown[]): void;
  error(message: string, ...args: unknown[]): void;
}

export type PermissionMode = 'always-allow' | 'default' | string;
