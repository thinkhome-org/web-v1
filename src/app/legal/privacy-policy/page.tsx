import React from "react";
import MarkdownRenderer from "@/components/markdown-renderer";
import { getMarkdownContent, getMarkdownFilename } from "@/lib/markdown";

const PrivacyPage = async () => {
  const content = await getMarkdownContent(getMarkdownFilename('privacy-policy'));
  
  return <MarkdownRenderer content={content} />;
};

export default PrivacyPage;