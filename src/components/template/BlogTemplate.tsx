import React from "react";
import { memo } from "react";
import { Button } from "../atoms/Button";
import { Header } from "../molecules/Header";
import { PrivateHeader } from "../molecules/PrivateHeader";

interface IBlogTemplate {
  titleBlock: React.ReactNode;
  mainBlock: React.ReactNode;
}

export const BlogTemplate = memo(({ titleBlock, mainBlock }: IBlogTemplate) => {
  return (
    <div className="background-wrapper-blog">
      <div className="for-header">
        <PrivateHeader />
      </div>
      <div className="blog-template">
        <div>{titleBlock}</div>
        <div>{mainBlock}</div>
      </div>
    </div>
  );
});
