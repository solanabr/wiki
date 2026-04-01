/**
 * Stub type declarations for @ant/computer-use-mcp (Anthropic-internal).
 * All runtime code paths are gated behind feature('CHICAGO_MCP') and
 * dead-code-eliminated in external builds. Only type-level references remain.
 */

export interface ComputerExecutor {
  [key: string]: any;
}

export interface DisplayGeometry {
  width: number;
  height: number;
  scaleFactor: number;
}

export interface FrontmostApp {
  bundleId: string;
  name: string;
}

export interface InstalledApp {
  bundleId: string;
  name: string;
}

export interface RunningApp {
  bundleId: string;
  name: string;
  isActive: boolean;
}

export interface ResolvePrepareCaptureResult {
  [key: string]: any;
}

export interface ScreenshotResult {
  base64: string;
  width: number;
  height: number;
}

export interface ScreenshotDims {
  width: number;
  height: number;
}

export interface ComputerUseSessionContext {
  [key: string]: any;
}

export interface CuCallToolResult {
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

export declare const API_RESIZE_PARAMS: {
  width: number;
  height: number;
};

export declare function targetImageSize(width: number, height: number): { width: number; height: number };

export declare function bindSessionContext(context: ComputerUseSessionContext): any;

export declare function buildComputerUseTools(options?: any): any[];

export declare function createComputerUseMcpServer(options?: any): any;
