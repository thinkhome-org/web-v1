import { InteractiveGridPattern } from "@/components/magicui/interactive-grid-pattern";

const teamMembers = [
  {
    name: "Samuel Paluba",
    role: "CEO, hlavní školitel, konzultant, obchodní zástupce",
  },
  {
    name: "Ondřej Jansa",
    role: "Chief of Full Stack Web Development, Chief of Cybersecurity, marketing, obchodní zástupce",
  },
  {
    name: "Erdinç Daşkın",
    role: "Vývojář moderních webů (Next.js)",
  },
  {
    name: "Vojtěch Pell",
    role: "WordPress developer, HW technik, školitel, obchodní zástupce",
  },
  {
    name: "Šimon Horák",
    role: "Hardware technik, obchodní zástupce",
  },
];

export default function TeamPage() {
  return (
    <main className="relative min-h-screen flex flex-col bg-background">
      <div className="p-8 text-center">
        <h1 className="text-5xl font-bold text-neutral-300 mb-4">
          Členové týmu
        </h1>
        <p className="text-neutral-400 mb-8">zde jsou členové našeho týmu :3</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="bg-neutral-800 p-6 rounded-xl shadow-lg hover:scale-105 transition-transform"
            >
              <h2 className="text-2xl font-bold text-neutral-100 mb-2">
                {member.name}
              </h2>
              <p className="text-neutral-400">{member.role}</p>
            </div>
          ))}
        </div>
      </div>

      <InteractiveGridPattern className="z-0 opacity-10" />
    </main>
  );
}
