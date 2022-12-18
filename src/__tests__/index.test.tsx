import '@testing-library/jest-dom';
import { convertNumberIntoRomanNumber } from '../utility';

describe('convertNumberIntoRomanNumber function', () => {
  it('Converts max value (1000) correctly to a Roman numbers string (M)', () => {
    expect(convertNumberIntoRomanNumber('1000')).toMatch('M');
  });
  it('Converts max value (1000) correctly to a Roman number (M)', () => {
    expect(convertNumberIntoRomanNumber(1000)).toMatch('M');
  });
});
