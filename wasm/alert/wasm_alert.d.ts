/* tslint:disable */
/* eslint-disable */
/**
* @param {JRData} d
* @returns {JRData}
*/
export function tunnel(d: JRData): JRData;
/**
* @param {string} name
*/
export function greet(name: string): void;
/**
*/
export class JRData {
  free(): void;
/**
* @param {string} mem
* @param {string} data
* @returns {JRData}
*/
  static new(mem: string, data: string): JRData;
/**
* @returns {string}
*/
  mem(): string;
/**
* @param {string} mem
*/
  set_mem(mem: string): void;
/**
* @returns {string}
*/
  data(): string;
/**
* @param {string} data
*/
  set_data(data: string): void;
}
/**
*/
export class JRHttpRequest {
  free(): void;
/**
* @returns {string}
*/
  readonly body: string;
/**
* @returns {string}
*/
  readonly header: string;
/**
* @returns {string}
*/
  readonly param: string;
}
