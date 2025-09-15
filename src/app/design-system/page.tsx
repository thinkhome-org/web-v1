import { DesignSystemDemo } from "@/components/ui/design-system-demo"

export default function DesignSystemPage() {
  return (
    <div className="container mx-auto py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Design System</h1>
        <p className="text-muted-foreground">
          Přehled všech UI komponent používaných v aplikaci.
        </p>
      </div>
      <DesignSystemDemo />
    </div>
  )
}