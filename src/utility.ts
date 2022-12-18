import { RomanNumberList } from './constant';

export function convertNumberIntoRomanNumber(num: number): string {
  let result = '';

  for (const [key, value] of Object.entries(RomanNumberList)) {
    while (num >= value) {
      result += key;
      num -= value as number;
    }
  }

  return result;
}
