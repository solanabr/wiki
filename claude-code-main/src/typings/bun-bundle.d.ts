/**
 * Shim for bun:bundle — Bun's build-time feature flag system.
 * In external (non-Bun) builds, feature() always returns false,
 * which dead-code-eliminates all feature-gated code paths.
 */
declare module 'bun:bundle' {
  export function feature(name: string): boolean;
}
