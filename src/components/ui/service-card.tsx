"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { 
  IconServer, 
  IconDeviceDesktop, 
  IconWorld, 
  IconCloud, 
  IconBrandGoogle, 
  IconCamera, 
  IconLicense, 
  IconSchool, 
  IconShield, 
  IconRobot 
} from "@tabler/icons-react";

export interface ServiceCardProps {
  title: string;
  description: string | React.ReactNode;
  icon: React.ComponentType<{ className?: string }>;
  className?: string;
  variant?: "default" | "featured";
}

const ServiceCard = React.forwardRef<HTMLDivElement, ServiceCardProps>(
  ({ title, description, icon: Icon, className, variant = "default" }, ref) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
      <motion.div
        ref={ref}
        className={cn(
          "group relative overflow-hidden rounded-xl transition-all duration-300",
          className
        )}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        whileHover={{ y: -4 }}
        transition={{ duration: 0.2 }}
      >
        
        {/* Content */}
        <div className="relative p-6">
          {/* Icon */}
          <div className="mb-4">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg transition-all duration-300 text-primary">
              <Icon className="h-6 w-6" />
            </div>
          </div>

          {/* Title */}
          <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
            {title}
          </h3>

          {/* Description */}
          <div className="text-muted-foreground leading-relaxed">
            {description}
          </div>

          {/* Hover indicator */}
          <motion.div
            className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-primary to-primary/60"
            initial={{ width: 0 }}
            animate={{ width: isHovered ? "100%" : 0 }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </motion.div>
    );
  }
);

ServiceCard.displayName = "ServiceCard";

// Service data with icons
export const servicesData = [
  {
    title: "Turn-key IT management a Vzdálená správa",
    description: "Kompletní péče o vaše IT prostředí včetně vzdáleného dohledu a podpory. Minimalizujeme výpadky, řešíme i drobnosti na dálku.",
    icon: IconServer
  },
  {
    title: "Repasování PC a notebooků",
    description: "Výkup, repas a instalace spolehlivé techniky. Ekologické řešení pro každou firmu.",
    icon: IconDeviceDesktop
  },
  {
    title: "Webové systémy",
    description: (
      <div>
        <p className="mb-3">Kompletní tvorba webů včetně textů, grafiky i správy. Nabízíme dvě varianty podle potřeb klienta:</p>
        <ul className="space-y-2 text-sm">
          <li className="flex items-start gap-2">
            <span className="text-primary font-semibold">•</span>
            <span><strong>Next.js – ADVANCED:</strong> Moderní pokročilá webová řešení, vysoká rychlost, bezpečnost, škálovatelnost.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary font-semibold">•</span>
            <span><strong>WordPress/BrakeDance – STANDARD:</strong> Rychlé a flexibilní nasazení webu, snadná editace obsahu.</span>
          </li>
        </ul>
      </div>
    ),
    icon: IconWorld
  },
  {
    title: "Backup, emaily, privátní cloud/server",
    description: "Pravidelné zálohování, firemní e-maily, privátní cloud nebo vlastní server podle vašich potřeb.",
    icon: IconCloud
  },
  {
    title: "Podpora Google Workspace, Microsoft 365, ZoHo",
    description: "Správa, nastavení i školení pro nejpoužívanější firemní platformy.",
    icon: IconBrandGoogle
  },
  {
    title: "Kamerové systémy, tiskárny, sítě a WiFi (Unifi), private NAS",
    description: "Komplexní instalace a správa firemní infrastruktury – od sítí a WiFi přes tiskárny a kamery až po privátní síťové úložiště (NAS).",
    icon: IconCamera
  },
  {
    title: "Licenční systémy, poradenství",
    description: "Pomůžeme s výběrem i správou všech potřebných licencí.",
    icon: IconLicense
  },
  {
    title: "Školení zaměstnanců (vč. bezpečnosti)",
    description: "Školíme v oblasti efektivity práce s IT i kybernetické bezpečnosti, práce s e-mailem a vnitrofiremní ochraně dat.",
    icon: IconSchool
  },
  {
    title: "Bezpečnostní audit a penetrační testy",
    description: "Prověříme bezpečnost vašeho IT, odhalíme slabá místa a připravíme nápravná opatření.",
    icon: IconShield
  },
  {
    title: "AI & Chatboti na míru",
    description: "Vytváříme firemní AI řešení, postupnou automatizaci i inteligentní chatboty přesně dle požadavků.",
    icon: IconRobot
  }
];

export { ServiceCard };
