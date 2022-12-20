import React, { useState, useCallback } from 'react';
import { convertNumberIntoRomanNumber } from '@/utility';

const IO: React.FC = () => {
  const [result, setResult] = useState<string | null>(null);

  const handleCalc = useCallback(
    (e: React.ChangeEvent<EventTarget>): void => {
      const val = (e.target as HTMLInputElement).value as string;
      setResult(convertNumberIntoRomanNumber(parseInt(val)));
    },
    [result]
  );

  return (
    <div>
      <div>{result}</div>
      <input type="text" placeholder="Enter an integer" onChange={handleCalc} />
    </div>
  );
};

export default IO;
