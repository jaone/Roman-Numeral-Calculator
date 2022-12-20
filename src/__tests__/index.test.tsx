import '@testing-library/jest-dom';
import IO from '@/components/io';
import { fireEvent, render } from '@testing-library/react';
import { convertNumberIntoRomanNumber } from '@/utility';

describe('convertNumberIntoRomanNumber function', () => {
  it('Converts max value (1000) correctly to a Roman numbers string (M)', () => {
    expect(convertNumberIntoRomanNumber('1000')).toMatch('M');
  });
  it('Converts max value (1000) correctly to a Roman number (M)', () => {
    expect(convertNumberIntoRomanNumber(1000)).toMatch('M');
  });
});

describe('UI Roman Numeral Input', () => {
  let setInputValue: Function;
  let resultEl: HTMLDivElement | null;
  let errorEl: HTMLDivElement | null;
  const errorMessages = {
    nan: 'Parameter is not a number!',
    minmax: 'Parameter must be bigger than 0 and less or equal than 1000',
  };
  beforeEach(() => {
    const { container } = render(<IO />);
    resultEl = container.querySelector('.result');
    errorEl = container.querySelector('.error');
    let inputNode: HTMLInputElement | null = container.querySelector('input');
    setInputValue = (val: string = '-123') => {
      fireEvent.change(inputNode!, { target: { value: val } });
      jest.advanceTimersByTime(300);
    };
  });
  // the following are success cases
  it('Romanian Numeric Input enters 123 and should not throw an error', () => {
    setInputValue('123');
    expect(() => setInputValue('123')).not.toThrow();
  });

  it('Entering 123 in Roman Numeral Input and the output looks like "CXXIII"', () => {
    setInputValue('123');
    expect(resultEl!.textContent).toBe('CXXIII');
  });

  // the following are error cases
  it('Entering -123 in Roman Numeral Input and expecting an error like "Parameter must be bigger than 0 and less or equal than 1000"', () => {
    setInputValue('-123');
    expect(errorEl!.textContent).toBe(errorMessages.minmax);
  });
  it('Entering 1234 in Roman Numeral Input and expecting an error like "Parameter must be bigger than 0 and less or equal than 1000"', () => {
    setInputValue('1234');
    expect(errorEl!.textContent).toBe(errorMessages.minmax);
  });
  it('Entering abc in Roman Numeral Input and expecting an error like "Parameter is not a number!"', () => {
    setInputValue('abc');
    expect(errorEl!.textContent).toBe(errorMessages.nan);
  });
});
