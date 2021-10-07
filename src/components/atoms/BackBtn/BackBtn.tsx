import React from "react";
import { memo } from "react";
import "./index.css";

interface IAddBtn {
  text: string;
  onClick: () => void;
}

export const BackBtn = memo(({ text, onClick }: IAddBtn) => {
  return (
    <button type="submit" className="back-btn" onClick={() => onClick()}>
      {text}
    </button>
  );
});
