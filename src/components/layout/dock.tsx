import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBrandGithub,
  IconMail,
  IconExchange,
  IconHome,
  IconNewSection,
  IconUser,
  IconTerminal2,
  IconSectionSign,
} from "@tabler/icons-react";

export function FloatingDockDemo() {
  const links = [
    {
      title: "Domů",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/",
    },

    {
      title: "Naše služby",
      icon: (
        <IconNewSection className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/services",
    },
    {
      title: "Kontakt",
      icon: (
        <IconMail className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/contact",
    },
    {
      title: "Tým",
      icon: (
        <IconUser className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/team",
    },
    {
      title: "Podmínky a zásady",
      icon: (
        <IconSectionSign className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/legal",
    },
    {
      title: "Github",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://github.com/thinkhome-org/web-v1",
    },
  ];
  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50">
      <FloatingDock items={links} />
    </div>
  );
}
