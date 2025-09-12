import React from "react";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";
import { InteractiveGridPattern } from "@/components/magicui/interactive-grid-pattern";
import Image from "next/image";

export const Hero = () => {
  return (
    <div className="relative">
      <div className="justify-left items-center pl-32 pt-48 pb-48 z-20">
        <Image src="/logo.svg" alt="ThinkHome Logo" width={383} height={50} />
        <h2 className="text-4xl font-bold pl-12 text-neutral-300 p-3">
          Moderní IT bez starostí
        </h2>
        <p className="text-neutral-400 pl-12 w-2/3 pb-3">
          Zbavte se starostí o technologie a zaměřte se na své podnikání.
          ThinkHome nabízí kompletní správu firemního IT – od hardware, přes
          weby až po moderní bezpečnostní řešení. Vše vyřešíme spolehlivě,
          rychle a efektivně. Přitom nic nemusíte řešit!
        </p>
        <InteractiveHoverButton className="w-fit z-20 ml-12">
          To chceme!
        </InteractiveHoverButton>
      </div>
      <InteractiveGridPattern className="z-0 opacity-10" />
    </div>
  );
};
