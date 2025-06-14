import { useState, type SetStateAction } from 'react';

export const usePersistedState = <T>(key: string, initialValue: T) => {
  const [state, setState] = useState<T>(() => {
    const persistedValue = localStorage.getItem(key);
    return persistedValue ? JSON.parse(persistedValue) : initialValue;
  });

  const persistState = (value: SetStateAction<T>) => {
    let newValue: T;

    if (typeof value === 'function') {
      // Handle functional update pattern
      newValue = (value as (prevState: T) => T)(state);
    } else {
      // Handle direct value
      newValue = value;
    }

    setState(newValue);
    localStorage.setItem(key, JSON.stringify(newValue));
  };

  return [state, persistState] as const;
};
