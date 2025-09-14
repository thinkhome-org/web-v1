import React from "react";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";
import { InteractiveGridPattern } from "@/components/magicui/interactive-grid-pattern";
import Image from "next/image";
import { 
  spacing, 
  typography, 
  breakpoints 
} from "@/lib/design-system";
import { Subtitle, Body } from "@/components/ui/text";

export const Hero = () => {
  return (
    <div className="relative">
      <div 
        className="justify-left items-center z-20"
        style={{
          paddingLeft: spacing[4],
          paddingRight: spacing[4],
          paddingTop: spacing[24],
          paddingBottom: spacing[24],
        }}
      >
        <Image
          src="/logo/black.svg"
          alt="ThinkHome Logo"
          width={383}
          height={50}
          className="w-auto dark:hidden"
          style={{ height: spacing[12] }}
        />
        <Image
          src="/logo/white.svg"
          alt="ThinkHome Logo"
          width={383}
          height={50}
          className="w-auto hidden dark:block"
          style={{ height: spacing[12] }}
        />
        <Subtitle 
          color="title" 
          mode="light"
          style={{
            paddingLeft: spacing[0],
            padding: spacing[3],
          }}
        >
          Moderní IT bez starostí
        </Subtitle>
        <Body 
          color="secondary" 
          mode="light"
          className="w-full"
          style={{
            paddingLeft: spacing[0],
            paddingBottom: spacing[3],
          }}
        >
          Zbavte se starostí o technologie a zaměřte se na své podnikání.
          ThinkHome nabízí kompletní správu firemního IT – od hardware, přes
          weby až po moderní bezpečnostní řešení. Vše vyřešíme spolehlivě,
          rychle a efektivně. Přitom nic nemusíte řešit!
        </Body>
      </div>
      <InteractiveGridPattern className="z-0 opacity-10" />
    </div>
  );
};
