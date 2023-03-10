import React, { useState, useCallback } from 'react';
import styles from './io.module.css';
import {
  convertNumberIntoRomanNumber,
  validationRules,
  debounce,
} from '@/utility';

const IO: React.FC = () => {
  const [result, setResult] = useState<string | null>(null);
  const [validationMessage, setValidationMessage] = useState<string | null>(
    null
  );

  const handleCalc = useCallback(
    (e: React.ChangeEvent<EventTarget>): void => {
      const val = (e.target as HTMLInputElement).value as string;
      try {
        handleValidation(val);
        setResult(convertNumberIntoRomanNumber(parseInt(val)));
        // if there is not an error, validationMessage should be empty
        setValidationMessage(null);
      } catch (err: any) {
        // if there is an error, result should be empty
        setResult('');
        setValidationMessage(err);
      }
    },
    [result]
  );

  const debouncedHandleCalc = debounce(handleCalc);

  const handleValidation = (value: string) => {
    if (!value) return false;
    const numberedVal = Number(value);

    validationRules.forEach((rule) => {
      if (rule.condition(numberedVal)) {
        throw rule.message;
      }
    });
  };
  return (
    <div className={styles.grid}>
      <div className={styles.result}>{result}</div>
      <input
        className={styles.input}
        type="text"
        placeholder="Enter an integer"
        onChange={debouncedHandleCalc}
      />
      <div className={styles.error}>{validationMessage}</div>
    </div>
  );
};

export default IO;
