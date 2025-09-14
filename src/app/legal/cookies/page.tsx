import React from "react";
import MarkdownRenderer from "@/components/markdown-renderer";
import { getMarkdownContent, getMarkdownFilename } from "@/lib/markdown";

const CookiesPage = async () => {
  const content = await getMarkdownContent(getMarkdownFilename('cookies'));
  
  return <MarkdownRenderer content={content} />;
};

export default CookiesPage;