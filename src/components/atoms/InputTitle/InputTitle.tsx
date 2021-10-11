import React from "react";
import { memo } from "react";
import "./index.css";

interface IInput {
  text: string;
  /* type: string;
    onChangeHandler: (text: string) => void;
    value: string; */
}

export const InputTitle = memo(({ text }: IInput) => {
  return (
    <form className="input-title-wrapper">
      <h4>{text}</h4>
      <input
        /* type={type} */ required
        /* onChange={(e) => onChangeHandler(e.target.value)} */
        className="input-title"
      />
    </form>
  );
});
