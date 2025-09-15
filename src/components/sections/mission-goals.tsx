"use client";


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
    <section className="w-full">
      <div className="w-full py-16 px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {missions.map((mission, index) => (
            <FeatureCard
              key={index}
              icon={mission.icon}
              description={mission.text}
              className="z-20"
            />
          ))}
        </div>
  
      </div>
    </section>
  );
}
