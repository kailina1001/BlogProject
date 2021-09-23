import * as React from "react";
import { memo } from "react";
import "./index.css";

interface IButton {
  text: string;
  isValid: boolean;
  onClick: () => void;
}

export const Button = memo(({ text, isValid, onClick }: IButton) => {
  return (
    <button
      type="submit"
      className={isValid ? "button-wrapper" : "button-wrapper _disable"}
      disabled={!isValid}
      onClick={() => onClick()}
    >
      {text}
    </button>
  );
});
