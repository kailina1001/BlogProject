import * as React from "react";
import { memo, LegacyRef } from "react";
import "./index.css";

interface IInput {
  value: string;
  onChangeHandler: (text: string) => void;
  title: string;
  isValid: boolean;
  inputRef?: LegacyRef<HTMLInputElement>;
  autoFocus?: boolean;
  type?: string;
}

export const InputCommon = memo(
  ({
    value,
    onChangeHandler,
    title,
    isValid,
    inputRef,
    autoFocus,
    type = "text",
  }: IInput) => (
    <form className="input-title-wrapper">
      <h4>{title}</h4>
      <input
        ref={inputRef}
        className={isValid ? "input-title" : "input-title _error"}
        value={value}
        onChange={(e) => onChangeHandler(e.target.value)}
        autoFocus={autoFocus}
        type={type}
      />
    </form>
  )
);
