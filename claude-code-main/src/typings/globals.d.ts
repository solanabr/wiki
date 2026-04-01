/**
 * Global declarations for build-time constants and runtime checks.
 */

/**
 * MACRO — Bun bundler build-time constants.
 * In external builds, these are replaced with static values.
 */
declare const MACRO: {
  VERSION: string;
  PACKAGE_URL: string;
  NATIVE_PACKAGE_URL: string;
  FEEDBACK_CHANNEL: string;
  [key: string]: any;
};

/**
 * Bun — global Bun runtime object.
 * Only accessed via `typeof Bun !== 'undefined'` runtime checks.
 */
declare const Bun: {
  which(name: string): string | null;
  YAML: {
    parse(input: string): any;
  };
  env: Record<string, string | undefined>;
  version: string;
  serve(options: any): any;
  write(dest: any, data: any): Promise<number>;
  file(path: string): any;
  sleep(ms: number): Promise<void>;
  spawn(cmd: string[], options?: any): any;
  [key: string]: any;
};

/**
 * ErrnoException — Node.js error with errno fields.
 */
interface ErrnoException extends Error {
  errno?: number;
  code?: string;
  path?: string;
  syscall?: string;
}
