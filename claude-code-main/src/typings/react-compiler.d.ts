/**
 * Stub for React Compiler (React Forget) runtime.
 * The React Compiler transforms components and emits:
 *   import { c } from 'react/compiler-runtime'
 * This declaration satisfies TypeScript for that import.
 */
declare module 'react/compiler-runtime' {
  export function c(size: number): any[];
}
