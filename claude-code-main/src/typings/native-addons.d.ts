/**
 * Stub declarations for native addon modules (Rust/C++ NAPI).
 * These are optional platform-specific binaries that may not be present.
 */

declare module 'image-processor-napi' {
  export function processImage(input: Buffer, options?: any): Promise<Buffer>;
  export function resize(input: Buffer, width: number, height: number): Promise<Buffer>;
  export default any;
}

declare module 'audio-capture-napi' {
  export function startCapture(options?: any): any;
  export function stopCapture(): void;
  export default any;
}

declare module 'url-handler-napi' {
  export function registerProtocol(protocol: string, callback: (url: string) => void): void;
  export function unregisterProtocol(protocol: string): void;
  export default any;
}

declare module 'color-diff-napi' {
  export function diff(a: any, b: any): number;
  export default any;
}
