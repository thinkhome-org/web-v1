import { IconMail, IconPhone } from "@tabler/icons-react";
import { InteractiveGridPattern } from "@/components/magicui/interactive-grid-pattern";
import { CopyText } from "@/components/copy-text";
const contactWays = [
  {
    icon: IconMail,

    value: "info@thinkhome.org",
  },
  {
    icon: IconPhone,
    value: "+420 910 129 289",
  },
];

export default function ContactPage() {
  return (
    <main className="relative min-h-screen flex flex-col bg-background">
      {/* === Content section === */}
      <div className="flex-1 p-8 text-center flex flex-col items-center">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold pl-0 sm:pl-6 lg:pl-12 text-foreground p-3">
          Kontaktujte nás
        </h1>
        <p className="text-muted-foreground pl-0 sm:pl-6 lg:pl-12 w-full sm:w-5/6 lg:w-2/3 pb-3">
          Nevíte si rady? Chcete si poztěžovat?
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl w-full">
          {contactWays.map((way, index) => {
            const Icon = way.icon;
            return (
              <div
                key={index}
                className="group p-6 rounded-lg bg-card/60 border border-border hover:border-muted-foreground/20 transition-all duration-300 z-10 hover:scale-105 transform-gpu"
              >
                <div className="flex flex-col items-center justify-center gap-4 h-full">
                  <div className="p-3 rounded-lg bg-muted/70 group-hover:bg-muted/60 transition-colors">
                    <Icon className="h-6 w-6 text-foreground" />
                  </div>
                  <CopyText
                    text={way.value}
                    className="text-blue-400 text-lg text-center"
                  />
                </div>
              </div>
            );
          })}
        </div>

        <InteractiveGridPattern  className="z-0 opacity-10" />
      </div>
    </main>
  );
}
