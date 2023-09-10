/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react"


export const useLocalStorage = <T>(key: string, initialValue: T):[T, (value:T)=> void] => {
  const [value, setValue] = useState<T>(initialValue);

  const saveValue = (value: T) => {
    setValue(value);
    localStorage.setItem(key, JSON.stringify(value));
  }
  useEffect(() => {
    const item = localStorage.getItem(key);
    if (item) {
      setValue(JSON.parse(item));
    }
    else{
      saveValue(initialValue);
    }
  }, [key, initialValue, saveValue]);
  return [value, saveValue];

}