import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import { IconBrandGithub, IconMail, IconExchange, IconHome, IconNewSection, IconTerminal2 } from "@tabler/icons-react";

export function FloatingDockDemo() {
    const links = [
        {
            title: "Domů",
            icon: <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
            href: "#",
        },

        {
            title: "Naše služby",
            icon: <IconNewSection className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
            href: "#",
        },
        {
            title: "Kontakt",
            icon: <IconMail className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
            href: "#",
        },
    ];
    return (
        <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50">
            <FloatingDock items={links} />
        </div>
    );
}
