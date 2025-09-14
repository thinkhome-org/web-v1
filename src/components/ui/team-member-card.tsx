"use client";

import React from "react";
import { IconUser } from "@tabler/icons-react";
import { cn } from "@/lib/utils";
import { 
  borderRadius, 
  spacing, 
  typography, 
  animations,
  getColor 
} from "@/lib/design-system";

export interface TeamMember {
  name: string;
  email: string;
  role: string;
  description: string;
  phone: string;
  photo_location?: string;
  tag?: string;
  department: string;
}

export interface TeamMemberCardProps {
  member: TeamMember;
  className?: string;
  avatarSize?: "sm" | "md" | "lg";
  showContactInfo?: boolean;
  onCardClick?: (member: TeamMember) => void;
}

const avatarSizes = {
  sm: { width: spacing[10], height: spacing[10] },
  md: { width: spacing[14], height: spacing[14] },
  lg: { width: spacing[20], height: spacing[20] }
};

const iconSizes = {
  sm: { width: spacing[5], height: spacing[5] },
  md: { width: spacing[8], height: spacing[8] },
  lg: { width: spacing[12], height: spacing[12] }
};

export function TeamMemberCard({
  member,
  className,
  avatarSize = "md",
  showContactInfo = true,
  onCardClick
}: TeamMemberCardProps) {
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.style.display = 'none';
    const nextElement = e.currentTarget.nextElementSibling as HTMLElement;
    if (nextElement) {
      nextElement.classList.remove('hidden');
    }
  };

  const handleCardClick = () => {
    if (onCardClick) {
      onCardClick(member);
    }
  };

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
      <div 
        className="flex flex-col items-center h-full"
        style={{ gap: spacing[4] }}
      >
        {/* Avatar */}
        <div 
          className="relative bg-muted/70 group-hover:bg-muted/60 transition-colors backdrop-blur-lg overflow-hidden"
          style={{
            borderRadius: borderRadius.lg,
            width: avatarSizes[avatarSize].width,
            height: avatarSizes[avatarSize].height,
          }}
        >
          {member.photo_location && member.photo_location !== '' ? (
            <img 
              src={member.photo_location.startsWith('/') ? member.photo_location : `/team/pictures/${member.photo_location}`} 
              alt={member.name}
              className="w-full h-full object-cover"
              onError={handleImageError}
            />
          ) : null}
          <IconUser 
            className={cn(
              "text-foreground absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2",
              member.photo_location && member.photo_location !== '' ? 'hidden' : ''
            )}
            style={{
              width: iconSizes[avatarSize].width,
              height: iconSizes[avatarSize].height,
            }}
          />
        </div>
        
        {/* Content */}
        <div className="text-center flex-1">
          <h2 
            className="text-foreground"
            style={{
              fontSize: typography.fontSize.xl,
              fontWeight: typography.fontWeight.bold,
              marginBottom: spacing[2],
            }}
          >
            {member.name}
          </h2>
          <p 
            className="font-medium"
            style={{
              color: getColor('chart', 'light').three, // blue-400 equivalent
              marginBottom: spacing[2],
            }}
          >
            {member.role}
          </p>
          <p 
            className="text-muted-foreground leading-relaxed"
            style={{
              fontSize: typography.fontSize.sm,
              marginBottom: spacing[3],
            }}
          >
            {member.description}
          </p>
          
          {showContactInfo && (
            <div 
              className="text-muted-foreground"
              style={{
                fontSize: typography.fontSize.xs,
                display: 'flex',
                flexDirection: 'column',
                gap: spacing[1],
              }}
            >
              <p>{member.email}</p>
              <p>{member.phone}</p>
              <p style={{ fontWeight: typography.fontWeight.medium }}>{member.department}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default TeamMemberCard;