import { Clock, Shield, Cpu, Users } from "lucide-react";
import { InteractiveGridPattern } from "@/components/magicui/interactive-grid-pattern";

const missions = [
    {
        icon: Clock,
        text: "Šetříme zákazníkům čas i peníze chytře automatizovaným a bezpečným IT.",
    },
    {
        icon: Shield,
        text: "Budujeme spolehlivé a stabilní prostředí, které roste s vaší firmou.",
    },
    {
        icon: Cpu,
        text: "Nasazujeme moderní technologie pro reálné potřeby klientů.",
    },
    {
        icon: Users,
        text: "Pomáháme s konzultací, správou i vývojem na míru – lidsky, rychle a srozumitelně.",
    },
];

export function MiseCile() {
    return (
        <section className="py-16 px-4 bg-background dark">
            <div className="max-w-6xl w-[75%] mx-auto">
                <div className="text-left z-20 mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance text-neutral-400">Naše mise</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {missions.map((mission, index) => {
                        const IconComponent = mission.icon;
                        return (
                            <div key={index} className="group p-6 rounded-lg bg-card/80 border z-20 border-border hover:border-muted-foreground/20 transition-all duration-300 backdrop-blur-md">
                                <div className="flex items-start gap-4">
                                    <div className="p-2 rounded-lg bg-muted/90 group-hover:bg-muted/80 transition-colors flex-shrink-0 backdrop-blur-sm">
                                        <IconComponent className="h-6 w-6 text-foreground" />
                                    </div>
                                    <p className="text-foreground leading-relaxed text-pretty">{mission.text}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
                <InteractiveGridPattern className="z-0 opacity-10" />
            </div>
        </section>
    );
}
