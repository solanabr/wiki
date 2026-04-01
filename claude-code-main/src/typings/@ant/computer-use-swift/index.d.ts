/**
 * Stub type declarations for @ant/computer-use-swift (Anthropic-internal).
 * Native Swift module for screenshots, app listing, TCC checks.
 * All runtime code paths are gated behind feature flags and dead-code-eliminated
 * in external builds. Only type-level references remain.
 */

export interface ComputerUseAPI {
  isSupported: boolean;
  apps: {
    listInstalled(): Promise<Array<{ bundleId: string; name: string }>>;
    listRunning(): Promise<Array<{ bundleId: string; name: string; isActive: boolean }>>;
    getFrontmost(): Promise<{ bundleId: string; name: string } | null>;
    [key: string]: any;
  };
  captureExcluding(allowedBundleIds: string[], options?: any): Promise<{ base64: string; width: number; height: number }>;
  captureRegion(x: number, y: number, width: number, height: number): Promise<{ base64: string; width: number; height: number }>;
  listInstalledApps(): Promise<Array<{ bundleId: string; name: string }>>;
  listRunningApps(): Promise<Array<{ bundleId: string; name: string; isActive: boolean }>>;
  resolvePrepareCapture(options?: any): Promise<any>;
  registerEscHandler(callback: () => void): () => void;
  drainRunLoop(durationMs: number): Promise<void>;
  [key: string]: any;
}

export default ComputerUseAPI;
