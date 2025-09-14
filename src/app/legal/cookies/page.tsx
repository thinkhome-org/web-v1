import React from "react";
import MarkdownRenderer from "@/components/markdown-renderer";
import PageHeader from "@/components/ui/page-header";
import { getMarkdownContent, getMarkdownFilename } from "@/lib/markdown";

const CookiesPage = async () => {
  const content = await getMarkdownContent(getMarkdownFilename('cookies'));
  
  return (
    <div className="container mx-auto px-4 py-8">
      <PageHeader 
        title="Zásady používání cookies" 
        date="14. 9. 2025"
        alignment="left"
      />
      <MarkdownRenderer content={content} />
    </div>
  );
};

export default CookiesPage;