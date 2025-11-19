import { SignatureForm } from "@/components/signature-form";
import { Separator } from "@/components/ui/separator";
import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="py-12">
      <header className="mx-auto w-full max-w-3xl px-8">
        <h1 className="text-foreground text-lg font-medium">
          Signatur Generator
        </h1>
        <p className="text-muted-foreground mt-2 max-w-prose text-sm">
          Verwende den Signatur Generator um deine persönliche move Email
          Signatur zu erstellen. Solltest du Schwierigkeiten bei der
          Installation haben,{" "}
          <span className="font-medium">
            lies dir bitte die Anleitungen durch.
          </span>
        </p>
        <Link
          href="/guides"
          className="text-primary hover:text-primary/70 mt-4 mb-8 flex items-center gap-1 text-sm font-medium transition-colors"
        >
          Anleitungen <ArrowRightIcon className="size-3.5" />
        </Link>
      </header>
      <Separator className="mx-auto my-8 max-w-[calc(var(--container-3xl)-4rem)]" />
      <section className="mx-auto w-full max-w-3xl px-8">
        <SignatureForm />
      </section>
    </main>
  );
}
