import { IconMail, IconPhone } from "@tabler/icons-react";
import { InteractiveGridPattern } from "@/components/magicui/interactive-grid-pattern";
import { CopyText } from "@/components/copy-text";
import { 
  spacing, 
  typography, 
  borderRadius, 
  animations,
  getColor 
} from "@/lib/design-system";
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
      <div 
        className="flex-1 text-center flex flex-col items-center"
        style={{ padding: spacing[8] }}
      >
        <h1 
          className="text-foreground"
          style={{
            fontSize: typography.fontSize['2xl'],
            fontWeight: typography.fontWeight.bold,
            paddingLeft: spacing[0],
            padding: spacing[3],
          }}
        >
          Kontaktujte nás
        </h1>
        <p 
          className="text-muted-foreground w-full"
          style={{
            paddingLeft: spacing[0],
            paddingBottom: spacing[3],
            fontSize: typography.fontSize.base,
            lineHeight: typography.lineHeight.relaxed,
          }}
        >
          Nevíte si rady? Chcete si poztěžovat?
        </p>

        <div 
          className="grid grid-cols-1 md:grid-cols-2 max-w-6xl w-full"
          style={{ gap: spacing[6] }}
        >
          {contactWays.map((way, index) => {
            const Icon = way.icon;
            return (
              <div
                key={index}
                className="group bg-card/60 border border-border hover:border-muted-foreground/20 backdrop-blur-xl z-10 hover:scale-105 transform-gpu"
                style={{
                  padding: spacing[6],
                  borderRadius: borderRadius.lg,
                  transition: `all ${animations.duration[300]} ${animations.easing.out}`,
                }}
              >
                <div 
                  className="flex flex-col items-center justify-center h-full"
                  style={{ gap: spacing[4] }}
                >
                  <div 
                    className="bg-muted/70 group-hover:bg-muted/60 transition-colors backdrop-blur-lg"
                    style={{
                      padding: spacing[3],
                      borderRadius: borderRadius.lg,
                    }}
                  >
                    <Icon 
                      className="text-foreground" 
                      style={{
                        height: spacing[6],
                        width: spacing[6],
                      }}
                    />
                  </div>
                  <CopyText
                    text={way.value}
                    className="text-center"
                    style={{
                      color: getColor('chart', 'light').three, // blue-400 equivalent
                      fontSize: typography.fontSize.lg,
                    }}
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
