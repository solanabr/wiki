/**
 * Stub type declarations for @ant/computer-use-mcp/types subpath.
 */

export interface CoordinateMode {
  [key: string]: any;
}

export interface CuSubGates {
  [key: string]: any;
}

export interface CuPermissionRequest {
  [key: string]: any;
}

export interface CuPermissionResponse {
  granted: boolean;
  [key: string]: any;
}

export declare const DEFAULT_GRANT_FLAGS: Record<string, boolean>;

export interface ComputerUseHostAdapter {
  [key: string]: any;
}

export interface Logger {
  silly(message: string, ...args: unknown[]): void;
  debug(message: string, ...args: unknown[]): void;
  info(message: string, ...args: unknown[]): void;
  warn(message: string, ...args: unknown[]): void;
  error(message: string, ...args: unknown[]): void;
}
