"use client"

import { Button } from "./button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./card-advanced"
import { InputAdvanced } from "./input-advanced"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "./dialog"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./dropdown-menu"
import { IconUser, IconMail, IconLock, IconChevronDown } from "@tabler/icons-react"

export function DesignSystemDemo() {
  return (
    <div className="space-y-12">
      {/* Buttons Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-6">Tlačítka</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Button variant="default">Default</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="link">Link</Button>
          <Button size="sm">Small</Button>
          <Button size="lg">Large</Button>
          <Button loading>Loading</Button>
          <Button disabled>Disabled</Button>
        </div>
      </section>

      {/* Cards Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-6">Karty</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card variant="default" size="default" hover="lift">
            <CardHeader>
              <CardTitle>Default Card</CardTitle>
              <CardDescription>Základní karta s hover efektem</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Obsah karty s výchozím stylem.</p>
            </CardContent>
          </Card>

          <Card variant="elevated" size="lg" hover="glow">
            <CardHeader>
              <CardTitle>Elevated Card</CardTitle>
              <CardDescription>Karta s výrazným stínem</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Větší karta s glow efektem při hoveru.</p>
            </CardContent>
          </Card>

          <Card variant="glass" size="sm" hover="scale">
            <CardHeader>
              <CardTitle>Glass Card</CardTitle>
              <CardDescription>Průhledná karta</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Malá karta s glass efektem.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Forms Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-6">Formuláře</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <InputAdvanced
              label="Jméno"
              placeholder="Zadejte své jméno"
              icon={<IconUser className="h-4 w-4" />}
            />
            <InputAdvanced
              label="Email"
              type="email"
              placeholder="vas@email.cz"
              icon={<IconMail className="h-4 w-4" />}
              helperText="Použijeme pro komunikaci"
            />
            <InputAdvanced
              label="Heslo"
              type="password"
              placeholder="Zadejte heslo"
              icon={<IconLock className="h-4 w-4" />}
              showPasswordToggle
            />
          </div>
          <div className="space-y-4">
            <InputAdvanced
              label="Úspěšný vstup"
              placeholder="Validní hodnota"
              state="success"
              message="Skvělé! Hodnota je validní."
            />
            <InputAdvanced
              label="Chybný vstup"
              placeholder="Nevalidní hodnota"
              state="error"
              message="Toto pole je povinné."
            />
            <InputAdvanced
              label="Zakázaný vstup"
              placeholder="Nelze editovat"
              disabled
            />
          </div>
        </div>
      </section>

      {/* Interactive Elements */}
      <section>
        <h2 className="text-2xl font-semibold mb-6">Interaktivní prvky</h2>
        <div className="flex flex-wrap gap-4">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline">Otevřít Dialog</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Ukázkový Dialog</DialogTitle>
                <DialogDescription>
                  Toto je ukázka dialogového okna s obsahem.
                </DialogDescription>
              </DialogHeader>
              <div className="py-4">
                <p>Zde může být libovolný obsah dialogu.</p>
              </div>
            </DialogContent>
          </Dialog>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">
                Dropdown Menu
                <IconChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>Možnost 1</DropdownMenuItem>
              <DropdownMenuItem>Možnost 2</DropdownMenuItem>
              <DropdownMenuItem>Možnost 3</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </section>
    </div>
  )
}