/* tslint:disable */
/* eslint-disable */
/**
* Models chips and gates.
* Every inner element and pins are labeled with Strings.
*/
export class Component {
  free(): void;
/**
* @param {string} id
* @returns {Component}
*/
  static blank(id: string): Component;
/**
* @returns {string}
*/
  info(): string;
/**
*/
  update(): void;
/**
* @returns {string}
*/
  show(): string;
}
/**
* Contains a new version of every available component
*/
export class Library {
  free(): void;
/**
* @param {string} json
* @returns {Library}
*/
  static from_json(json: string): Library;
/**
* @param {string} component_id
* @returns {Component}
*/
  instance_wasm(component_id: string): Component;
/**
* @returns {string}
*/
  static test(): string;
}

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
  readonly memory: WebAssembly.Memory;
  readonly __wbg_component_free: (a: number) => void;
  readonly component_blank: (a: number, b: number) => number;
  readonly component_info: (a: number, b: number) => void;
  readonly component_update: (a: number) => void;
  readonly component_show: (a: number, b: number) => void;
  readonly __wbg_library_free: (a: number) => void;
  readonly library_from_json: (a: number, b: number) => number;
  readonly library_instance_wasm: (a: number, b: number, c: number, d: number) => void;
  readonly library_test: (a: number) => void;
  readonly __wbindgen_malloc: (a: number) => number;
  readonly __wbindgen_realloc: (a: number, b: number, c: number) => number;
  readonly __wbindgen_add_to_stack_pointer: (a: number) => number;
  readonly __wbindgen_free: (a: number, b: number) => void;
}

/**
* Synchronously compiles the given `bytes` and instantiates the WebAssembly module.
*
* @param {BufferSource} bytes
*
* @returns {InitOutput}
*/
export function initSync(bytes: BufferSource): InitOutput;

/**
* If `module_or_path` is {RequestInfo} or {URL}, makes a request and
* for everything else, calls `WebAssembly.instantiate` directly.
*
* @param {InitInput | Promise<InitInput>} module_or_path
*
* @returns {Promise<InitOutput>}
*/
export default function init (module_or_path?: InitInput | Promise<InitInput>): Promise<InitOutput>;
