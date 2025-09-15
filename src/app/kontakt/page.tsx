import { IconMail, IconPhone } from "@tabler/icons-react";

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

export default function KontaktPage() {
  return (
    <main className="relative min-h-screen flex flex-col bg-background">
      {/* === Content section === */}
      <div className="flex-1 p-8 text-center flex flex-col items-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Kontaktujte nás</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {contactWays.map((contact, index) => {
              const IconComponent = contact.icon;
              return (
                <div key={index} className="flex flex-col items-center p-6 border rounded-lg">
                  <IconComponent className="w-8 h-8 mb-4 text-primary" />
                  <CopyText text={contact.value} className="text-lg" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
      

    </main>
  );
}
