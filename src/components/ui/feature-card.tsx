"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { 
  borderRadius, 
  spacing, 
  typography, 
  animations,
  getColor 
} from "@/lib/design-system";

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
  sm: { width: spacing[4], height: spacing[4] },
  md: { width: spacing[6], height: spacing[6] },
  lg: { width: spacing[8], height: spacing[8] }
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
        "group bg-card/60 border border-border hover:border-muted-foreground/20 backdrop-blur-xl z-10 hover:scale-105 transform-gpu",
        onCardClick && "cursor-pointer",
        className
      )}
      style={{
        padding: spacing[6],
        borderRadius: borderRadius.lg,
        transition: animations.transition.all,
        transitionDuration: animations.duration[300],
      }}
      onClick={handleCardClick}
    >
      <div className={cn(
        "flex",
        layout === "vertical" ? "flex-col items-center text-center" : "items-start"
      )}
      style={{ gap: spacing[4] }}
      >
        {/* Icon Container */}
        <div className={cn(
          "bg-muted/70 group-hover:bg-muted/60 transition-colors flex-shrink-0 backdrop-blur-lg",
          layout === "vertical" ? "" : "",
          iconContainerClassName
        )}
        style={{
          padding: spacing[2],
          borderRadius: borderRadius.lg,
        }}
        >
          <div
            style={{
              width: iconSizes[iconSize].width,
              height: iconSizes[iconSize].height,
            }}
          >
            <IconComponent 
              className={cn(
                "text-foreground",
                iconClassName
              )}
            />
          </div>
        </div>
        
        {/* Content */}
        <div className={cn(
          "flex-1",
          layout === "vertical" ? "text-center" : ""
        )}>
          {title && (
            <h3 
              className="text-foreground"
              style={{
                fontSize: typography.fontSize.lg,
                fontWeight: typography.fontWeight.semibold,
                marginBottom: spacing[2],
              }}
            >
              {title}
            </h3>
          )}
          <p 
            className="text-foreground text-pretty"
            style={{
              lineHeight: typography.lineHeight.relaxed,
            }}
          >
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default FeatureCard;