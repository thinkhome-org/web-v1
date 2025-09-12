import { InteractiveGridPattern } from "@/components/magicui/interactive-grid-pattern";
export default function teamPage() {
  return (
    <main className="relative min-h-screen flex flex-col bg-background">
      <div className="flex-1 p-8 text-center flex flex-col items-center">
        <h1 className="text-5xl font-bold pl-12 text-neutral-300 p-3">
          Členové týmu
        </h1>
        <p className="text-neutral-400 pl-12 w-2/3 pb-3">
          zde jsou členové našeho týmu :3
        </p>
        <h1 className="text-4xl font-bold pl-12 text-neutral-300 p-3">
          Samuel Paluba
        </h1>
        <p className="text-neutral-400 pl-12 w-2/3 pb-3">
          CEO, hlavní školitel, konzultant, obchodní zástupce
        </p>
        <h1 className="text-4xl font-bold pl-12 text-neutral-300 p-3">
          Ondřej Jansa
        </h1>
        <p className="text-neutral-400 pl-12 w-2/3 pb-3">
          Chief of Full Stack Web Development, Chief of Cybersecurity,
          marketing, obchodní zástupce
        </p>
        <h1 className="text-4xl font-bold pl-12 text-neutral-300 p-3">
          Erdinç Daşkın
        </h1>
        <p className="text-neutral-400 pl-12 w-2/3 pb-3">
          Vývojář moderních webů (Next.js)
        </p>
        <h1 className="text-4xl font-bold pl-12 text-neutral-300 p-3">
          Vojtěch Pell
        </h1>
        <p className="text-neutral-400 pl-12 w-2/3 pb-3">
          WordPress developer, HW technik, školitel, obchodní zástupce
        </p>
        <h1 className="text-4xl font-bold pl-12 text-neutral-300 p-3">
          Šimon Horák
        </h1>
        <p className="text-neutral-400 pl-12 w-2/3 pb-3">
          {" "}
          Hardware technik, obchodní zástupce
        </p>
      </div>
      <InteractiveGridPattern className="z-0 opacity-10" />
    </main>
  );
}
