"use client";

import React from "react";
import { cn } from "@/lib/utils";

type IconName = 'clock' | 'shield' | 'cpu' | 'users';

// Simple SVG icon components to avoid serialization issues
const ClockIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="10"/>
    <polyline points="12,6 12,12 16,14"/>
  </svg>
);

const ShieldIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
  </svg>
);

const CpuIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <rect x="4" y="4" width="16" height="16" rx="2" ry="2"/>
    <rect x="9" y="9" width="6" height="6"/>
    <line x1="9" y1="1" x2="9" y2="4"/>
    <line x1="15" y1="1" x2="15" y2="4"/>
    <line x1="9" y1="20" x2="9" y2="23"/>
    <line x1="15" y1="20" x2="15" y2="23"/>
    <line x1="20" y1="9" x2="23" y2="9"/>
    <line x1="20" y1="14" x2="23" y2="14"/>
    <line x1="1" y1="9" x2="4" y2="9"/>
    <line x1="1" y1="14" x2="4" y2="14"/>
  </svg>
);

const UsersIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
    <circle cx="9" cy="7" r="4"/>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
  </svg>
);

export interface FeatureCardProps {
  icon: IconName;
  title?: string;
  description: string;
  className?: string;
  iconClassName?: string;
  iconContainerClassName?: string;
  layout?: "horizontal" | "vertical";
  iconSize?: "sm" | "md" | "lg";
  onCardClick?: () => void;
}

const iconSizes = {
  sm: "h-4 w-4",
  md: "h-6 w-6",
  lg: "h-8 w-8"
};

export function FeatureCard({
  icon,
  title,
  description,
  className,
  iconClassName,
  iconContainerClassName,
  layout = "horizontal",
  iconSize = "md",
  onCardClick
}: FeatureCardProps) {
  const handleCardClick = () => {
    if (onCardClick) {
      onCardClick();
    }
  };

  // Define icon map with simple SVG components
  const iconMap = {
    clock: ClockIcon,
    shield: ShieldIcon,
    cpu: CpuIcon,
    users: UsersIcon
  };

  // Get the icon component from the map
  const IconComponent = iconMap[icon];

  return (
    <div
      className={cn(
        "group p-6 rounded-lg bg-card/80 border border-border hover:border-muted-foreground/20 transition-all duration-300 backdrop-blur-md z-10",
        onCardClick && "cursor-pointer",
        className
      )}
      onClick={handleCardClick}
    >
      <div className={cn(
        "flex gap-4",
        layout === "vertical" ? "flex-col items-center text-center" : "items-start"
      )}>
        {/* Icon Container */}
        <div className={cn(
          "p-2 rounded-lg bg-muted/90 group-hover:bg-muted/80 transition-colors flex-shrink-0 backdrop-blur-sm",
          layout === "vertical" ? "" : "",
          iconContainerClassName
        )}>
          <IconComponent 
            className={cn(
              "text-foreground",
              iconSizes[iconSize],
              iconClassName
            )} 
          />
        </div>
        
        {/* Content */}
        <div className={cn(
          "flex-1",
          layout === "vertical" ? "text-center" : ""
        )}>
          {title && (
            <h3 className="text-lg font-semibold text-foreground mb-2">
              {title}
            </h3>
          )}
          <p className="text-foreground leading-relaxed text-pretty">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default FeatureCard;