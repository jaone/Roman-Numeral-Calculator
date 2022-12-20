import React, { useState, useCallback } from 'react';
import { convertNumberIntoRomanNumber, validationRules } from '@/utility';

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
    <div>
      <div className="result">{result}</div>
      <input type="text" placeholder="Enter an integer" onChange={handleCalc} />
      <div className="error">{validationMessage}</div>
    </div>
  );
};

export default IO;
