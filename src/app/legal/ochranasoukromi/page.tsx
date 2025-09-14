import React from "react";

const PrivacyPage = () => {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12 space-y-8 text-foreground">
      <h1 className="text-4xl font-extrabold mb-6">Ochrana soukromí</h1>
      <p className="text-sm text-muted-foreground">
        Aktualizováno: 14. 9. 2025
      </p>

      <section>
        <h2 className="text-2xl font-bold mb-3">1. Úvod</h2>
        <p className="leading-relaxed">
          Společnost <strong>ThinkHome s.r.o.</strong> („my“, „nás“, „naše“)
          respektuje vaše právo na soukromí a chrání osobní údaje, které nám
          poskytujete. Tento dokument vysvětluje, jak shromažďujeme, používáme a
          chráníme vaše informace v souladu s nařízením GDPR a dalšími
          příslušnými právními předpisy.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-3">2. Jaké údaje shromažďujeme</h2>
        <ul className="list-disc list-inside space-y-1 leading-relaxed">
          <li>Kontaktní údaje (jméno, e-mail, telefon)</li>
          <li>Fakturační a platební údaje</li>
          <li>Informace o poskytovaných službách a komunikaci</li>
          <li>
            Technické informace (IP adresa, logy, cookies – pokud je používáte)
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-3">3. Účely zpracování</h2>
        <p className="leading-relaxed">Osobní údaje zpracováváme za účelem:</p>
        <ul className="list-disc list-inside space-y-1 leading-relaxed">
          <li>Poskytování našich služeb a plnění smluv</li>
          <li>Fakturace a účetnictví</li>
          <li>Zlepšování kvality služeb a zákaznické podpory</li>
          <li>Plnění zákonných povinností</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-3">4. Sdílení údajů</h2>
        <p className="leading-relaxed">
          Vaše údaje nesdílíme s třetími stranami, kromě případů, kdy je to
          nezbytné pro:
        </p>
        <ul className="list-disc list-inside space-y-1 leading-relaxed">
          <li>
            Plnění smlouvy (např. poskytovatelé hostingu, cloudu, e-mailu)
          </li>
          <li>Splnění zákonných povinností</li>
          <li>Ochranu našich práv nebo vymáhání smluvních nároků</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-3">5. Uchovávání údajů</h2>
        <p className="leading-relaxed">
          Osobní údaje uchováváme jen po dobu nezbytnou k naplnění účelu, pro
          který byly shromážděny, případně po dobu stanovenou právními předpisy
          (např. účetní a daňové povinnosti).
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-3">6. Vaše práva podle GDPR</h2>
        <ul className="list-disc list-inside space-y-1 leading-relaxed">
          <li>Právo na přístup k osobním údajům</li>
          <li>Právo na opravu nebo výmaz</li>
          <li>Právo vznést námitku proti zpracování</li>
          <li>Právo na omezení zpracování</li>
          <li>Právo na přenositelnost údajů</li>
          <li>Právo podat stížnost u Úřadu pro ochranu osobních údajů</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-3">7. Zabezpečení</h2>
        <p className="leading-relaxed">
          Přijímáme technická a organizační opatření, aby byly vaše osobní údaje
          chráněny před neoprávněným přístupem, ztrátou nebo zneužitím.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-3">8. Cookies</h2>
        <p className="leading-relaxed">
          Pokud náš web používá cookies, informujeme vás o tom a umožníme vám
          jejich nastavení či odmítnutí v souladu s platnými předpisy.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-3">9. Změny zásad</h2>
        <p className="leading-relaxed">
          Tyto Zásady ochrany soukromí můžeme čas od času upravit. Aktuální
          verze je vždy dostupná na našem webu a nabývá účinnosti dnem
          zveřejnění.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-3">10. Kontakt</h2>
        <p className="leading-relaxed">
          V případě dotazů ohledně ochrany osobních údajů nás kontaktujte:
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

export default PrivacyPage;
