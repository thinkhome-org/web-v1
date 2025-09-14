import React from "react";

const CookiesPage = () => {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12 space-y-8 text-foreground">
      <h1 className="text-4xl font-extrabold mb-6">Zásady používání cookies</h1>
      <p className="text-sm text-muted-foreground">
        Aktualizováno: 14. 9. 2025
      </p>

      <section>
        <h2 className="text-2xl font-bold mb-3">1. Úvod</h2>
        <p className="leading-relaxed">
          Webové stránky <strong>ThinkHome s.r.o.</strong> používají soubory
          cookies a podobné technologie, aby zajistily správné fungování,
          personalizaci obsahu, analýzu návštěvnosti a zlepšení vašich
          uživatelských zkušeností.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-3">2. Co jsou cookies</h2>
        <p className="leading-relaxed">
          Cookies jsou malé textové soubory, které webové stránky ukládají do
          vašeho zařízení (počítače, telefonu nebo tabletu), když je navštívíte.
          Díky nim si stránka pamatuje vaše preference a nastavení.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-3">
          3. Druhy cookies, které používáme
        </h2>
        <ul className="list-disc list-inside space-y-1 leading-relaxed">
          <li>
            <strong>Nezbytné cookies:</strong> Umožňují správné fungování webu a
            nelze je vypnout.
          </li>
          <li>
            <strong>Analytické cookies:</strong> Pomáhají nám pochopit, jak
            návštěvníci používají naše stránky (např. Google Analytics).
          </li>
          <li>
            <strong>Preferenční cookies:</strong> Ukládají vaše nastavení, jako
            je jazyk nebo motiv.
          </li>
          <li>
            <strong>Marketingové cookies:</strong> Používají se pro cílenou
            reklamu a měření výkonu kampaní.
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-3">4. Jak spravovat cookies</h2>
        <p className="leading-relaxed">
          Při první návštěvě našich stránek si můžete vybrat, které cookies
          chcete povolit. Nastavení můžete kdykoli změnit ve svém prohlížeči
          nebo prostřednictvím našeho banneru pro správu souhlasu (pokud je
          implementován). Upozorňujeme, že zablokování některých cookies může
          ovlivnit funkčnost webu.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-3">5. Cookies třetích stran</h2>
        <p className="leading-relaxed">
          Některé cookies mohou pocházet od našich partnerů nebo poskytovatelů
          služeb (např. analytické a marketingové nástroje). Tyto subjekty mají
          své vlastní zásady ochrany soukromí a zpracování dat.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-3">6. Změny zásad</h2>
        <p className="leading-relaxed">
          Tyto zásady můžeme příležitostně aktualizovat, aby odrážely změny v
          našich postupech nebo legislativě. Aktuální verze je vždy dostupná na
          této stránce.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-3">7. Kontakt</h2>
        <p className="leading-relaxed">
          V případě dotazů ohledně používání cookies nás kontaktujte:
        </p>
        <p className="leading-relaxed">
          <strong>ThinkHome s.r.o.</strong>
          <br />
          E-mail: info@thinkhome.org
        </p>
      </section>
    </main>
  );
};

export default CookiesPage;