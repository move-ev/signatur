import { SignatureForm } from "@/components/signature-form";
import { Separator } from "@/components/ui/separator";

export default function HomePage() {
  return (
    <main className="py-12">
      <header className="mx-auto w-full max-w-3xl px-8">
        <h1 className="text-foreground text-lg font-medium">
          Signatur Generator
        </h1>
        <p className="text-muted-foreground mt-2 max-w-prose text-sm">
          Verwende den Signatur Generator um deine persönliche move Email
          Signatur zu erstellen. Solltest du Schwierigkeiten haben, sprich bitte
          das IT Ressort an.
        </p>
      </header>
      <Separator className="mx-auto my-8 max-w-[calc(var(--container-3xl)-4rem)]" />
      <section className="mx-auto w-full max-w-3xl px-8">
        <SignatureForm />
      </section>
    </main>
  );
}
