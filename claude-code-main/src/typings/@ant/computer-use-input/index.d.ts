/**
 * Stub type declarations for @ant/computer-use-input (Anthropic-internal).
 * Native Rust/enigo module for mouse, keyboard, frontmost app detection.
 * All runtime code paths are gated behind feature flags and dead-code-eliminated
 * in external builds. Only type-level references remain.
 */

export interface ComputerUseInputAPI {
  isSupported: boolean;
  key(key: string): Promise<void>;
  keys(keys: string[]): Promise<void>;
  mouseMove(x: number, y: number): Promise<void>;
  mouseClick(button?: string): Promise<void>;
  mouseDown(button?: string): Promise<void>;
  mouseUp(button?: string): Promise<void>;
  mouseScroll(dx: number, dy: number): Promise<void>;
  getFrontmostApp(): Promise<{ bundleId: string; name: string } | null>;
  type(text: string): Promise<void>;
}

export interface ComputerUseInput {
  isSupported: boolean;
  default: ComputerUseInputAPI;
}

export default ComputerUseInput;
