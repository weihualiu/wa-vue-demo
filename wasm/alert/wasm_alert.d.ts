/* tslint:disable */
/* eslint-disable */
/**
* @param {JRData} _d
* @returns {any}
*/
export function tunnel(_d: JRData): any;
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
