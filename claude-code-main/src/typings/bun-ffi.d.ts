/**
 * Shim for bun:ffi — Bun's foreign function interface.
 * Used in src/upstreamproxy/upstreamproxy.ts behind a conditional require.
 */
declare module 'bun:ffi' {
  export function dlopen(path: string, symbols: Record<string, any>): any;
  export function ptr(buffer: ArrayBuffer | Uint8Array): number;
  export function toBuffer(ptr: number, length: number): Buffer;
  export function toArrayBuffer(ptr: number, length: number): ArrayBuffer;
  export function CString(ptr: number): string;
  export const suffix: string;
}
