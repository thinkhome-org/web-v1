"use client";

import { InteractiveGridPattern } from "@/components/magicui/interactive-grid-pattern";
import { FeatureCard } from "@/components/ui/feature-card";

const missions = [
  {
    icon: 'clock' as const,
    text: "Šetříme zákazníkům čas i peníze chytře automatizovaným a bezpečným IT.",
  },
  {
    icon: 'shield' as const,
    text: "Budujeme spolehlivé a stabilní prostředí, které roste s vaší firmou.",
  },
  {
    icon: 'cpu' as const,
    text: "Nasazujeme moderní technologie pro reálné potřeby klientů.",
  },
  {
    icon: 'users' as const,
    text: "Pomáháme s konzultací, správou i vývojem na míru – lidsky, rychle a srozumitelně.",
  },
];

export function MiseCile() {
  return (
    <section className="py-16 px-4 bg-background dark">
      <div className="max-w-6xl w-[75%] mx-auto">
        <div className="text-left z-20 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Naše mise
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {missions.map((mission, index) => (
            <FeatureCard
              key={index}
              icon={mission.icon}
              description={mission.text}
              className="z-20"
            />
          ))}
        </div>
        <InteractiveGridPattern className="z-0 opacity-10" />
      </div>
    </section>
  );
}
