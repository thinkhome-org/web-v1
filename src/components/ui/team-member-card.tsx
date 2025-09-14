"use client";

import React from "react";
import { IconUser } from "@tabler/icons-react";
import { cn } from "@/lib/utils";

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
  sm: "w-10 h-10",
  md: "w-14 h-14",
  lg: "w-20 h-20"
};

const iconSizes = {
  sm: "w-5 h-5",
  md: "w-8 h-8",
  lg: "w-12 h-12"
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
        "group p-6 rounded-lg bg-card/60 border border-border hover:border-muted-foreground/20 transition-all duration-300 backdrop-blur-xl z-10 hover:scale-105 transform-gpu",
        onCardClick && "cursor-pointer",
        className
      )}
      onClick={handleCardClick}
    >
      <div className="flex flex-col items-center gap-4 h-full">
        {/* Avatar */}
        <div className={cn(
          "relative rounded-lg bg-muted/70 group-hover:bg-muted/60 transition-colors backdrop-blur-lg overflow-hidden",
          avatarSizes[avatarSize]
        )}>
          {member.photo_location && member.photo_location !== '' ? (
            <img 
              src={member.photo_location.startsWith('/') ? member.photo_location : `/tym/pictures/${member.photo_location}`} 
              alt={member.name}
              className="w-full h-full object-cover"
              onError={handleImageError}
            />
          ) : null}
          <IconUser 
            className={cn(
              "text-foreground absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2",
              iconSizes[avatarSize],
              member.photo_location && member.photo_location !== '' ? 'hidden' : ''
            )} 
          />
        </div>
        
        {/* Content */}
        <div className="text-center flex-1">
          <h2 className="text-xl font-bold text-foreground mb-2">
            {member.name}
          </h2>
          <p className="text-blue-400 font-medium mb-2">{member.role}</p>
          <p className="text-muted-foreground text-sm mb-3 leading-relaxed">
            {member.description}
          </p>
          
          {showContactInfo && (
            <div className="space-y-1 text-xs text-muted-foreground">
              <p>{member.email}</p>
              <p>{member.phone}</p>
              <p className="font-medium">{member.department}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default TeamMemberCard;