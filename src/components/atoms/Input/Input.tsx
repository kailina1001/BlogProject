import * as React from "react";
import { memo } from "react";
import "./index.css";

interface IInput {
  value: string;
  text: string;
  type: string;
  isValid: boolean;
  onChangeHandler: (text: string) => void;
}

export const Input = memo(
  ({ value, text, type, onChangeHandler, isValid }: IInput) => {
    return (
      <div>
        <h4 className="input-text">{text}</h4>
        <input
          type={type}
          required
          value={value}
          onChange={(e) => onChangeHandler(e.target.value)}
          className={isValid ? "input-wrapper active" : "input-wrapper"}
        />
      </div>
    );
  }
);
