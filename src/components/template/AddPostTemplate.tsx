import React from "react";
import { memo } from "react";
import { AddPostHeader } from "../molecules/AddPostHeader";

interface IBlogTemplate {
  titleBlock: React.ReactNode;
  mainBlock: React.ReactNode;
}

export const AddPostTemplate = memo(
  ({ titleBlock, mainBlock }: IBlogTemplate) => {
    return (
      <div className="background-wrapper-blog">
        <div className="for-header">
          <AddPostHeader />
        </div>
        <div className="blog-template">
          <div>{titleBlock}</div>
          <div>{mainBlock}</div>
        </div>
      </div>
    );
  }
);
