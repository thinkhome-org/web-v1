import Link from "next/link";
import React from "react";

const LegalPage = () => {
  return (
    <main className="max-w-4xl mx-auto p-8 space-y-6">
      <h1 className="text-4xl font-bold text-foreground mb-6">
        Právní informace
      </h1>
      <p className="text-lg text-muted-foreground">
        Zde najdete všechny naše důležité právní dokumenty týkající se služeb
        ThinkHome s.r.o.
      </p>

      <ul className="list-disc list-inside space-y-3 text-foreground text-lg">
        <li>
          <Link
            href="/legal/obchodnipodminky"
            className="text-blue-600 hover:underline"
          >
            Všeobecné obchodní podmínky
          </Link>
        </li>
        <li>
          <Link
            href="/legal/ochranasoukromi"
            className="text-blue-600 hover:underline"
          >
            Ochrana soukromí
          </Link>
        </li>
        <li>
          <Link href="/legal/susenky" className="text-blue-600 hover:underline">
            Zásady používání cookies
          </Link>
        </li>
      </ul>
    </main>
  );
};

export default LegalPage;
