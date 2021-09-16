import * as React from "react";
import { memo } from "react";
import "./index.css";

interface IInput {
  searchValue: string;
  text: string;
  type: string;
}

export const Input = memo(({ searchValue, text, type }: IInput) => {
  return (
    <div>
      <h4 className="input-text">{text}</h4>
      <input className="input-wrapper" type={type} required />
    </div>
  );
});
