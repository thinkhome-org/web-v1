import React from "react";
import MarkdownRenderer from "@/components/markdown-renderer";
import PageHeader from "@/components/ui/page-header";
import { getMarkdownContent, getMarkdownFilename } from "@/lib/markdown";

const TermsPage = async () => {
  const content = await getMarkdownContent(getMarkdownFilename('terms-of-service'));
  
  return (
    <div className="container mx-auto px-4 py-8">
      <PageHeader 
        title="Všeobecné obchodní podmínky" 
        date="14. 9. 2025"
        alignment="left"
      />
      <MarkdownRenderer content={content} />
    </div>
  );
};

export default TermsPage;