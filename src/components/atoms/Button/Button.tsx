import * as React from "react";
import { memo } from "react";
import "./index.css";

interface IButton {
  text: string;
}

export const Button = memo(({ text }: IButton) => {
  return (
    <button className="button-wrapper" type="submit">
      {text}
    </button>
  );
});
