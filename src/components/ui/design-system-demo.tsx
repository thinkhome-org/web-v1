"use client";

import React from 'react';
import { designTokens, buttonStyles, cardStyles, typographyStyles } from '@/styles/design-tokens';
import { Button } from './button';
import { Card } from './card-advanced';
import { Input } from './input-advanced';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from './dialog';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from './dropdown-menu';
import { Search, Settings, User, Home, Zap, Mail, Lock } from 'lucide-react';

/**
 * Ukázkový komponent demonstrující použití ThinkHome Design Systému
 */
export function DesignSystemDemo() {
  return (
    <div className="p-8 space-y-12 bg-th-bg-secondary min-h-screen">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="th-heading-1">ThinkHome Design System</h1>
        <p className="th-body-large max-w-2xl mx-auto">
          Centralizovaný systém pro správu všech stylových prvků webové stránky.
          Konzistentní barvy, typografie, spacing a komponenty.
        </p>
      </div>

      {/* Barevná paleta */}
      <section className="space-y-6">
        <h2 className="th-heading-2">Barevná paleta</h2>
        
        {/* Primární barvy */}
        <div className="space-y-4">
          <h3 className="th-heading-3">Primární barvy</h3>
          <div className="grid grid-cols-5 md:grid-cols-11 gap-2">
            {Object.entries(designTokens.colors.primary).map(([key, value]) => (
              <div key={key} className="space-y-2">
                <div 
                  className="w-16 h-16 rounded-lg border border-th-border-medium shadow-th-sm"
                  style={{ backgroundColor: value }}
                />
                <div className="text-center">
                  <div className="th-caption">{key}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Akcentové barvy */}
        <div className="space-y-4">
          <h3 className="th-heading-3">Akcentové barvy</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="space-y-2">
              <div 
                className="w-16 h-16 rounded-lg border border-th-border-medium shadow-th-sm"
                style={{ backgroundColor: designTokens.colors.accent.red }}
              />
              <div className="th-caption">Red</div>
            </div>
            <div className="space-y-2">
              <div 
                className="w-16 h-16 rounded-lg border border-th-border-medium shadow-th-sm"
                style={{ backgroundColor: designTokens.colors.accent.blue }}
              />
              <div className="th-caption">Blue</div>
            </div>
            <div className="space-y-2">
              <div 
                className="w-16 h-16 rounded-lg border border-th-border-medium shadow-th-sm"
                style={{ backgroundColor: designTokens.colors.accent.green }}
              />
              <div className="th-caption">Green</div>
            </div>
            <div className="space-y-2">
              <div 
                className="w-16 h-16 rounded-lg border border-th-border-medium shadow-th-sm"
                style={{ backgroundColor: designTokens.colors.accent.orange }}
              />
              <div className="th-caption">Orange</div>
            </div>
          </div>
         </div>
       </section>

       {/* Interaktivní prvky */}
       <section className="space-y-6">
         <h2 className="th-heading-2">Interaktivní prvky</h2>
         <div className="grid md:grid-cols-2 gap-8">
           <div className="space-y-4">
             <h3 className="th-heading-3">Dialog</h3>
             <Dialog>
               <DialogTrigger asChild>
                 <Button variant="outline">Otevřít dialog</Button>
               </DialogTrigger>
               <DialogContent>
                 <DialogHeader>
                   <DialogTitle>Potvrzení akce</DialogTitle>
                   <DialogDescription>
                     Opravdu chcete pokračovat? Tato akce nelze vrátit zpět.
                   </DialogDescription>
                 </DialogHeader>
                 <div className="flex justify-end gap-3 mt-6">
                   <Button variant="outline">Zrušit</Button>
                   <Button>Potvrdit</Button>
                 </div>
               </DialogContent>
             </Dialog>
           </div>
           
           <div className="space-y-4">
             <h3 className="th-heading-3">Dropdown Menu</h3>
             <DropdownMenu>
               <DropdownMenuTrigger asChild>
                 <Button variant="outline">
                   <User className="mr-2 h-4 w-4" />
                   Uživatelské menu
                 </Button>
               </DropdownMenuTrigger>
               <DropdownMenuContent>
                 <DropdownMenuItem>
                   <User className="mr-2 h-4 w-4" />
                   Profil
                 </DropdownMenuItem>
                 <DropdownMenuItem>
                   <Settings className="mr-2 h-4 w-4" />
                   Nastavení
                 </DropdownMenuItem>
                 <DropdownMenuItem>
                   <Lock className="mr-2 h-4 w-4" />
                   Odhlásit se
                 </DropdownMenuItem>
               </DropdownMenuContent>
             </DropdownMenu>
           </div>
         </div>
       </section>

       {/* Typografie */}
      <section className="space-y-6">
        <h2 className="th-heading-2">Typografie</h2>
        <div className="space-y-4">
          <div>
            <h1 className="th-heading-1">Heading 1 - Hlavní nadpis</h1>
            <p className="th-caption mt-1">Font: {designTokens.typography.fontFamily.sans}, Size: {designTokens.typography.fontSize['4xl']}, Weight: {designTokens.typography.fontWeight.bold}</p>
          </div>
          <div>
            <h2 className="th-heading-2">Heading 2 - Sekundární nadpis</h2>
            <p className="th-caption mt-1">Font: {designTokens.typography.fontFamily.sans}, Size: {designTokens.typography.fontSize['3xl']}, Weight: {designTokens.typography.fontWeight.semibold}</p>
          </div>
          <div>
            <h3 className="th-heading-3">Heading 3 - Terciární nadpis</h3>
            <p className="th-caption mt-1">Font: {designTokens.typography.fontFamily.sans}, Size: {designTokens.typography.fontSize['2xl']}, Weight: {designTokens.typography.fontWeight.semibold}</p>
          </div>
          <div>
            <p className="th-body-large">Body Large - Větší text pro důležité informace</p>
            <p className="th-caption mt-1">Font: {designTokens.typography.fontFamily.sans}, Size: {designTokens.typography.fontSize.lg}, Weight: {designTokens.typography.fontWeight.normal}</p>
          </div>
          <div>
            <p className="th-body">Body - Standardní text pro běžný obsah a odstavce</p>
            <p className="th-caption mt-1">Font: {designTokens.typography.fontFamily.sans}, Size: {designTokens.typography.fontSize.base}, Weight: {designTokens.typography.fontWeight.normal}</p>
          </div>
          <div>
            <p className="th-body-small">Body Small - Menší text pro doplňující informace</p>
            <p className="th-caption mt-1">Font: {designTokens.typography.fontFamily.sans}, Size: {designTokens.typography.fontSize.sm}, Weight: {designTokens.typography.fontWeight.normal}</p>
          </div>
          <div>
            <p className="th-caption">Caption - Nejmenší text pro popisky a metadata</p>
            <p className="th-caption mt-1">Font: {designTokens.typography.fontFamily.sans}, Size: {designTokens.typography.fontSize.xs}, Weight: {designTokens.typography.fontWeight.medium}</p>
          </div>
        </div>
      </section>

      {/* Tlačítka */}
      <section className="space-y-6">
        <h2 className="th-heading-2">Tlačítka</h2>
        <div className="space-y-8">
          {/* Varianty tlačítek */}
          <div className="space-y-4">
            <h3 className="th-heading-3">Varianty</h3>
            <div className="flex flex-wrap gap-4">
              <Button variant="default">Primární tlačítko</Button>
              <Button variant="secondary">Sekundární tlačítko</Button>
              <Button variant="outline">Outline tlačítko</Button>
              <Button variant="ghost">Ghost tlačítko</Button>
              <Button variant="destructive">Destructive tlačítko</Button>
            </div>
          </div>
          
          {/* Velikosti tlačítek */}
          <div className="space-y-4">
            <h3 className="th-heading-3">Velikosti</h3>
            <div className="flex flex-wrap items-center gap-4">
              <Button size="sm">Malé</Button>
              <Button size="default">Standardní</Button>
              <Button size="lg">Velké</Button>
              <Button size="icon"><Settings className="h-4 w-4" /></Button>
            </div>
          </div>
          
          {/* Stavy tlačítek */}
          <div className="space-y-4">
            <h3 className="th-heading-3">Stavy a ikony</h3>
            <div className="flex flex-wrap gap-4">
              <Button>Normální</Button>
              <Button disabled>Zakázané</Button>
              <Button loading>Načítání...</Button>
              <Button>
                <Mail className="mr-2 h-4 w-4" />
                S ikonou
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Karty */}
      <section className="space-y-6">
        <h2 className="th-heading-2">Karty</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Základní karta */}
          <Card variant="default" size="default">
            <div className="p-6">
              <h3 className="th-heading-3 mb-2">Základní karta</h3>
              <p className="th-body mb-4">Toto je obsah základní karty s použitím našeho design systému.</p>
              <Button size="sm">Akce</Button>
            </div>
          </Card>
          
          {/* Karta s ikonou */}
          <Card variant="elevated" size="default" hover="glow">
            <div className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-full bg-th-accent-blue flex items-center justify-center">
                  <Home className="h-4 w-4 text-white" />
                </div>
                <h3 className="th-heading-3">Smart Home</h3>
              </div>
              <p className="th-body">Inteligentní řízení domácnosti s AI technologiemi.</p>
            </div>
          </Card>
          
          {/* Karta s gradientem */}
          <Card variant="glass" size="default" hover="scale" animated>
            <div className="p-6 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-th-accent-blue to-th-accent-red opacity-10 rounded-lg"></div>
              <div className="relative">
                <h3 className="th-heading-3 th-text-gradient mb-2">Premium karta</h3>
                <p className="th-body">Speciální karta s gradientním pozadím a animacemi.</p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Spacing */}
      <section className="space-y-6">
        <h2 className="th-heading-2">Spacing systém</h2>
        <div className="space-y-4">
          <h3 className="th-heading-3">Ukázka rozestupů</h3>
          <div className="space-y-2">
            {[1, 2, 4, 6, 8, 12, 16, 24].map((space) => (
              <div key={space} className="flex items-center gap-4">
                <div className="w-16 th-caption">Space {space}</div>
                <div 
                  className="bg-th-accent-blue h-4"
                  style={{ width: designTokens.spacing[space as keyof typeof designTokens.spacing] }}
                />
                <div className="th-caption">{designTokens.spacing[space as keyof typeof designTokens.spacing]}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inputy */}
      <section className="space-y-6">
        <h2 className="th-heading-2">Formulářové prvky</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="th-heading-3">Základní inputy</h3>
            <Input 
              label="Jméno a příjmení"
              placeholder="Zadejte své jméno..."
              helperText="Toto jméno bude zobrazeno na vašem profilu"
            />
            <Input 
              label="Email"
              type="email" 
              placeholder="vas@email.cz"
              leftIcon={<Mail className="h-4 w-4" />}
            />
            <Input 
              label="Heslo"
              type="password" 
              placeholder="Zadejte heslo"
              showPasswordToggle
              helperText="Heslo musí mít alespoň 8 znaků"
            />
          </div>
          
          <div className="space-y-4">
            <h3 className="th-heading-3">Stavy inputů</h3>
            <Input 
              label="Úspěšný input"
              placeholder="Validní hodnota"
              success="Skvělé! Toto vypadá dobře."
              rightIcon={<Zap className="h-4 w-4" />}
            />
            <Input 
              label="Chybový input"
              placeholder="Nevalidní hodnota"
              error="Toto pole je povinné"
            />
            <Input 
              label="Vyhledávání"
              placeholder="Hledat..."
              leftIcon={<Search className="h-4 w-4" />}
              variant="ghost"
              size="lg"
            />
          </div>
        </div>
      </section>

      {/* Utility třídy */}
      <section className="space-y-6">
        <h2 className="th-heading-2">Utility třídy</h2>
        <div className="space-y-6">
          {/* Glass efekt */}
          <div className="space-y-4">
            <h3 className="th-heading-3">Glass efekt</h3>
            <div className="relative h-32 bg-gradient-to-r from-th-accent-blue to-th-accent-red rounded-xl overflow-hidden">
              <div className="absolute inset-4 th-glass rounded-lg flex items-center justify-center">
                <p className="th-body text-white">Glass efekt s backdrop blur</p>
              </div>
            </div>
          </div>
          
          {/* Animace */}
          <div className="space-y-4">
            <h3 className="th-heading-3">Animace</h3>
            <div className="flex gap-4">
              <div className="th-card th-animate-fade-in p-4">
                <p className="th-body-small">Fade in</p>
              </div>
              <div className="th-card th-animate-slide-up p-4">
                <p className="th-body-small">Slide up</p>
              </div>
              <div className="th-card th-animate-scale-in p-4">
                <p className="th-body-small">Scale in</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center pt-12 border-t border-th-border-medium">
        <p className="th-body-small">
          ThinkHome Design System - Centralizovaná správa stylů pro konzistentní uživatelské rozhraní
        </p>
      </footer>
    </div>
  );
}

export default DesignSystemDemo;