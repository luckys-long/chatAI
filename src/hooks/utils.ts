// import bMd5 from 'blueimp-md5';
import mitt from 'mitt';
import { cloneDeep } from 'lodash';

// export const useMd5 = (plaintext: string): string => bMd5(`${plaintext}SEED`);
const emitter = mitt();
export const useMitt = () => emitter;
export const useDeepClone = () => cloneDeep;
export const isNotExist = (val: unknown): boolean => val === null || typeof val === 'undefined';


/**
 * @description: 生成uuid
 * @return {string}
 */
export function uuidGenerate() {
    const s:any = [];
    const hexDigits = '0123456789abcdef';
    for (let i = 0; i < 36; i += 1) {
      s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
      if ([8, 13, 18, 25].includes(i)) {
        s[i] = '-';
      }
    }
    s[14] = '4';
    s[19] = hexDigits.substr((s[19] && 0x3) || 0x8, 1);
    const uuid = s.join('');
    return uuid;
  }
  