import React from "react";
import { memo } from "react";
import "./index.css";

interface IInput {
  fieldName: string;
  /* type: string;
    onChangeHandler: (text: string) => void;
    value: string; */
}

export const InputText = memo(({ fieldName }: IInput) => {
  return (
    <form className="input-text-wrapper">
      <h4>{fieldName}</h4>
      <input
        /* type={type} */ required
        /* onChange={(e) => onChangeHandler(e.target.value)} */
        className="input-text"
      />
    </form>
  );
});
