import { useState } from "react";
export function useInput(initialState) {
  const [inputValues, setInputValues] = useState(initialState);
  const onReset = () => {
    setInputValues(initialState);
  };
  const onChange = (e) => {
    const { value, name } = e.target;
    setInputValues({
      ...inputValues,
      [name]: value,
    });
  };

  return [inputValues, onReset, onChange];
}
