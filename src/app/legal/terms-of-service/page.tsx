import React from "react";
import MarkdownRenderer from "@/components/markdown-renderer";
import { getMarkdownContent, getMarkdownFilename } from "@/lib/markdown";

const TermsPage = async () => {
  const content = await getMarkdownContent(getMarkdownFilename('terms-of-service'));
  
  return <MarkdownRenderer content={content} />;
};

export default TermsPage;