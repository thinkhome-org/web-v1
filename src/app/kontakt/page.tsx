import { Mail, Phone } from "lucide-react";
import { InteractiveGridPattern } from "@/components/magicui/interactive-grid-pattern";
import { CopyText } from "@/components/copyText";
import { Footer } from "@/app/components/footer";
const contactWays = [
  {
    icon: Mail,

    value: "info@thinkhome.org",
  },
  {
    icon: Phone,
    value: "+420 910 129 289",
  },
];

export default function ContactPage() {
  return (
    <main className="relative min-h-screen flex flex-col bg-background">
      {/* === Content section === */}
      <div className="flex-1 p-8 text-center flex flex-col items-center">
        <h1 className="text-4xl font-bold pl-12 text-neutral-300 p-3">
          Kontaktujte nás
        </h1>
        <p className="text-neutral-400 pl-12 w-2/3 pb-3">
          Nevíte si rady? Chcete si poztěžovat?
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl w-full">
          {contactWays.map((way, index) => {
            const Icon = way.icon;
            return (
              <div
                key={index}
                className="group p-6 rounded-lg bg-card/80 border border-border hover:border-muted-foreground/20 transition-all duration-300 backdrop-blur-md z-10"
              >
                <div className="flex flex-col items-center justify-center gap-4 h-full">
                  <div className="p-3 rounded-lg bg-muted/90 group-hover:bg-muted/80 transition-colors backdrop-blur-sm">
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

      <Footer />
    </main>
  );
}
