import { ArrowLeftIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import MailIcon from "../../../public/icon-apple-mail.png";
import OutlookIcon from "../../../public/icon-outlook.svg";
import OutlookCorrectFormat from "../../../public/screenshots/outlook-correct-format.png";
import OutlookWrongFormat from "../../../public/screenshots/outlook-wrong-format.png";
import SignatureCopied from "../../../public/screenshots/signature-copied.png";
import { ClientCard } from "./_components/client-card";

export default async function GuidesPage() {
  return (
    <main className="py-12">
      <header className="mx-auto w-full max-w-3xl px-8">
        <Link
          href="/"
          className="text-muted-foreground hover:text-foreground mb-8 flex items-center gap-1 text-sm font-medium transition-colors"
        >
          <ArrowLeftIcon className="size-3.5" /> Zurück
        </Link>
        <h1 className="text-foreground text-xl font-medium">Anleitungen</h1>
        <p className="text-muted-foreground mt-2 max-w-prose text-sm">
          Verwende die folgenden Anleitungen um deine Signatur in deinem
          Mail-Programm zu installieren. Solltest du Schwierigkeiten haben, lies
          dir bitte den{" "}
          <Link href={"#troubleshooting"} className="text-primary font-medium">
            Troubleshooting Guide
          </Link>{" "}
          durch
        </p>
      </header>
      <section className="mx-auto mt-8 grid w-full max-w-3xl grid-cols-3 gap-8 px-8">
        <ClientCard
          href="#outlook-web"
          label="Outlook (Web)"
          icon={OutlookIcon}
        />
        <ClientCard
          href="#outlook-ios"
          label="Outlook (iOS)"
          icon={OutlookIcon}
        />
        <ClientCard href="#mail-mac" label="Mail (MacOS)" icon={MailIcon} />
      </section>
      <section
        id="outlook-web"
        className="mx-auto mt-20 w-full max-w-3xl scroll-mt-12 px-8"
      >
        <h2 className="text-foreground text-lg font-medium">Outlook Web</h2>
        <p className="text-muted-foreground mt-4 max-w-prose text-sm leading-relaxed">
          Um deine Signatur in Outlook für das Web zu installieren, erstelle
          zunächst deine E-Mail Signatur und lade sie herunter. Öffne
          anschließend die Web-App und navigiere zu deinen Signaturen (
          <span className="text-foreground">
            Datei &gt; Einstellungen &gt; Konto &gt; Signaturen
          </span>
          ).
        </p>
        <p className="text-muted-foreground mt-4 max-w-prose text-sm leading-relaxed">
          Erstelle nun eine neue Signatur und ziehe die herunterladene Signatur
          in das Textfeld. Gib deiner Signatur einen Namen und wähle die neue
          Signatur abschließend als Standard für das Senden von neuen
          Nachrichten (weiter unten).
        </p>
      </section>
      <section
        id="outlook-ios"
        className="mx-auto mt-20 w-full max-w-3xl scroll-mt-12 px-8"
      >
        <h2 className="text-foreground text-lg font-medium">Outlook (iOS)</h2>
        <p className="text-muted-foreground mt-4 max-w-prose text-sm leading-relaxed">
          Das hinzufügen von HTML E-Mail Signaturen in Outlook für iOS ist etwas
          umständlich. Folge daher bitte{" "}
          <Link
            href={
              "https://learn.microsoft.com/en-us/answers/questions/4599052/is-it-possible-to-configure-html-signature-on-ios#answer-9108604"
            }
            className="text-primary hover:text-primary/70 font-medium transition-colors"
            target="_blank"
          >
            diesem Guide
          </Link>{" "}
          zur Einrichtung von HTML Signaturen in Outlook für iOS.
        </p>
        <p className="text-muted-foreground mt-4 max-w-prose text-sm leading-relaxed font-medium">
          Wir empfehlen auch hier ausdrücklich, die Outlook IOS App
          ausschließlich für das Lesen von E-Mails zu verwenden. Verwende zum
          Schreiben von E-Mails die Outlook Web App.
        </p>
      </section>
      <section
        id="mail-mac"
        className="mx-auto mt-20 w-full max-w-3xl scroll-mt-12 px-8"
      >
        <h2 className="text-foreground text-lg font-medium">Mail (MacOS)</h2>
        <p className="text-muted-foreground mt-4 max-w-prose text-sm leading-relaxed">
          Das Hinzufügen von HTML E-Mail Signaturen in Mail für MacOS gestaltet
          sich als relativ kompliziert, da Mail die HTML Signaturen nicht nativ
          unterstützt.{" "}
          <span className="text-foreground font-medium">
            Wir empfehlen daher ausdrücklich, Mail ausschließlich für das Lesen
            von E-Mails zu verwenden und keine HTML Signaturen hinzuzufügen.
          </span>
        </p>
        <p className="text-muted-foreground mt-4 max-w-prose text-sm leading-relaxed">
          Solltest du dennoch eine HTML Signatur in Mail für MacOS verwenden
          wollen, kannst du{" "}
          <Link
            href={
              "https://www.hubspot.com/email-signature-generator/add-html-signature-mail-mac"
            }
            className="text-primary hover:text-primary/70 font-medium transition-colors"
            target="_blank"
          >
            diesem Guide
          </Link>{" "}
          von Hubspot folgen.
        </p>
      </section>
      <section
        id="troubleshooting"
        className="mx-auto mt-20 w-full max-w-3xl scroll-mt-12 px-8"
      >
        <h2 className="text-foreground text-lg font-medium">Troubleshooting</h2>
      </section>
      <section
        id="#troubleshooting-wrong-format"
        className="mx-auto mt-6 w-full max-w-3xl scroll-mt-6 px-8"
      >
        <h3 className="text-foreground mt-6 font-medium">
          Falsche Formatierung
        </h3>
        <p className="text-muted-foreground mt-2 max-w-prose text-sm leading-relaxed">
          <span className="text-foreground font-medium">Achtung:</span> Wenn du
          deine Signatur einfügst kann es sein, dass Outlook die Formatierung
          nicht richtig übernimmt und automatische Zeilenbrüche einfügt. Prüfe
          daher, ob die Zeilenumbrüche korrekt sind und passe sie ggf. manuell
          an.
        </p>
        <figure className="mt-6">
          <Image
            src={OutlookWrongFormat}
            alt="Outlook Wrong Format"
            className="mt-4 rounded-md border shadow-xs"
          />
          <figcaption className="text-muted-foreground mt-3 text-center text-xs">
            Beispiel: Outlook übernimmt Formatierung mit Zeilenumbrüchen nicht
            korrekt
          </figcaption>
        </figure>
        <figure className="mt-6">
          <Image
            src={OutlookCorrectFormat}
            alt="Outlook correct Format"
            className="mt-4 rounded-md border shadow-xs"
          />
          <figcaption className="text-muted-foreground mt-3 text-center text-xs">
            Anpassen der Formatierung, um Zeilenumbrüche zu erhalten
          </figcaption>
        </figure>
      </section>
      <section
        id="#troubleshooting-signature-not-recognized"
        className="mx-auto mt-20 w-full max-w-3xl scroll-mt-6 px-8"
      >
        <h3 className="text-foreground mt-6 font-medium">
          Signatur wird nicht erkannt
        </h3>
        <p className="text-muted-foreground mt-2 max-w-prose text-sm leading-relaxed">
          Manche E-Mail Clients haben Schwierigkeiten, die Signatur korrekt zu
          erkennen. Wenn du die Datei in das Textfeld einfügst und diese nicht
          angezeigt wird, folge den folgenden Schritten:
        </p>
        <ol className="text-muted-foreground mt-4 space-y-4 text-sm leading-relaxed">
          <li className="max-w-prose">
            <span className="text-foreground font-medium">
              1. Datei herunterladen:{" "}
            </span>
            Lade dir die Signatur als .html Datei herunter und speichere sie auf
            deinem Desktop.
          </li>
          <li className="max-w-prose">
            <span className="text-foreground font-medium">
              2. Datei öffnen:{" "}
            </span>
            Öffne die herunterladene Signatur mit einem Browser (z.B. Chrome,
            Firefox, Edge, Safari). Du solltest nun deine Signatur sehen.
          </li>
          <li>
            <p className="max-w-prose">
              <span className="text-foreground font-medium">
                3. Signatur kopieren:{" "}
              </span>
              Wähle den gesamten Inhalt deiner Signatur aus und kopiere ihn in
              die Zwischenablage.
            </p>
            <figure className="mt-6">
              <Image
                src={SignatureCopied}
                alt="Signature copied"
                className="mt-4 rounded-md border shadow-xs"
              />
              <figcaption className="text-muted-foreground mt-3 text-center text-xs">
                Kopieren der Signatur in die Zwischenablage
              </figcaption>
            </figure>
          </li>
          <li>
            <span className="text-foreground font-medium">
              4. Signatur einfügen:{" "}
            </span>
            Navigiere nun zu deinem gewünschten E-Mail Client und füge die
            Signatur aus der Zwischenablage ein (nicht die herunterladene .html
            Datei).
          </li>
        </ol>
      </section>
      <section className="mx-auto mt-20 w-full max-w-3xl scroll-mt-6 px-8">
        <h3 className="text-foreground mt-6 font-medium">Weitere Probleme</h3>
        <p className="text-muted-foreground mt-2 max-w-prose text-sm leading-relaxed">
          Falls du weitere Probleme mti deiner Signatur hast, kontaktiere bitte
          das IT Ressort persönlich oder per E-Mail.
        </p>
      </section>
    </main>
  );
}
