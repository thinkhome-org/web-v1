"use client";

import { InteractiveGridPattern } from "@/components/magicui/interactive-grid-pattern";
import { ServiceCard, servicesData } from "@/components/ui/service-card";

export default function ServicesPage() {
  return (
    <main className="webkit-no-bg">
      <div className="relative max-w-7xl mx-auto px-6 py-12">
        <h1 className="text-5xl font-extrabold mb-10 text-foreground drop-shadow-lg text-center">
          Naše služby
        </h1>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
          {servicesData.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              className="h-full webkit-no-bg"
            />
          ))}
        </div>
      </div>
      <InteractiveGridPattern className="absolute inset-0 z-0 opacity-10 webkit-no-grid" />
    </main>
  );
}
