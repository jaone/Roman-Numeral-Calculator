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

export const validationRules = [
  //just number
  {
    condition: (val: number) => isNaN(val),
    message: 'Parameter is not a number!',
  },
  // min - max controll
  {
    condition: (val: number) => !(val > 0 && val <= 1000),
    message: 'Parameter must be bigger than 0 and less or equal than 1000',
  },
];