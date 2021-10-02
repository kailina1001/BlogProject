import React from "react";
import { memo } from "react";
import { Button } from "../atoms/Button";
import { Header } from "../molecules/Header";

interface IBlogTemplate {
  titleBlock: React.ReactNode;
  mainBlock: React.ReactNode;
}

export const BlogTemplate = memo(({ titleBlock, mainBlock }: IBlogTemplate) => {
  return (
    <div className="background-wrapper-blog">
      <div className="for-header">
        <Header />
      </div>
      <div className="blog-template">
        <div>{titleBlock}</div>
        <div>{mainBlock}</div>
      </div>
    </div>
  );
});
