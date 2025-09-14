import React from "react";
import { cn } from "@/lib/utils";

interface BackgroundContainerProps {
  children: React.ReactNode;
  className?: string;
}

const BackgroundContainer: React.FC<BackgroundContainerProps> = ({
  children,
  className,
}) => {
  return (
    <div className={cn(
      "p-6 rounded-lg bg-card/60 border border-border backdrop-blur-xl",
      className
    )}>
      {children}
    </div>
  );
};

export default BackgroundContainer;