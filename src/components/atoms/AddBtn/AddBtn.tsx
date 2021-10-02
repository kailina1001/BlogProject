import React from "react";
import { memo } from "react";
import "./index.css";

interface IAddBtn {
  text: string;
  /* onClick: () => void; */
}

export const AddBtn = memo(({ text /* onClick */ }: IAddBtn) => {
  return (
    <button
      type="submit"
      className="add-btn"
      /* onClick={() => onClick()} */
    >
      {text}
    </button>
  );
});
