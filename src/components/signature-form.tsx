"use client";

import { downloadSignature } from "@/lib/download-signature";
import { generateSignature } from "@/lib/generate-signature";
import { cn } from "@/lib/utils";
import { useForm } from "@tanstack/react-form";
import type React from "react";
import { toast } from "sonner";
import * as z from "zod";
import { Button } from "./ui/button";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "./ui/field";
import { Input } from "./ui/input";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
} from "./ui/input-group";

const formSchema = z.object({
  name: z.string().min(1, { message: "Name ist erforderlich" }),
  position: z.string(),
  username: z.string().regex(/^[a-zA-ZäöüÄÖÜß]+\.{1}[a-zA-ZäöüÄÖÜß]+$/, {
    message: "Username muss das Format <vorname>.<nachname> haben",
  }),
  phone: z.string().min(1, { message: "Telefonnummer ist erforderlich" }),
});

export function SignatureForm({
  className,
  ...props
}: React.ComponentProps<"form">) {
  const form = useForm({
    defaultValues: {
      name: "",
      position: "",
      username: "",
      phone: "",
    },
    validators: {
      onSubmit: formSchema,
    },
    onSubmit: async ({ value }) => {
      const signature = generateSignature({
        name: value.name,
        position: value.position,
        username: value.username,
        phone: value.phone,
      });

      downloadSignature(signature);

      toast("Deine Signatur wurde erstellt.", {
        description:
          "Folge nun der Anleitung um deine Signatur zu installieren.",
        position: "bottom-right",
      });
    },
  });

  return (
    <form
      id="signature-form"
      onSubmit={(e) => {
        e.preventDefault();
        form.handleSubmit();
      }}
      className={cn(className)}
    >
      <FieldGroup className="grid grid-cols-2 gap-8">
        <form.Field
          name="name"
          children={(field) => {
            const isInvalid =
              field.state.meta.isTouched && !field.state.meta.isValid;
            return (
              <Field data-invalid={isInvalid}>
                <FieldLabel htmlFor={field.name}>Name</FieldLabel>
                <Input
                  id={field.name}
                  name={field.name}
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value)}
                  aria-invalid={isInvalid}
                  placeholder="John Doe"
                  autoComplete="off"
                />
                <FieldDescription>Dein Vor- und Nachname.</FieldDescription>
                {isInvalid && <FieldError errors={field.state.meta.errors} />}
              </Field>
            );
          }}
        />
        <form.Field
          name="position"
          children={(field) => {
            const isInvalid =
              field.state.meta.isTouched && !field.state.meta.isValid;
            return (
              <Field data-invalid={isInvalid}>
                <FieldLabel htmlFor={field.name}>Position</FieldLabel>
                <Input
                  id={field.name}
                  name={field.name}
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value)}
                  placeholder="Ressortleitung für IT"
                  aria-invalid={isInvalid}
                />
                <FieldDescription>
                  Falls du keine Ressortleitung oder Vorstand bist, lass dieses
                  Feld leer.
                </FieldDescription>

                {isInvalid && <FieldError errors={field.state.meta.errors} />}
              </Field>
            );
          }}
        />
        <form.Field
          name="username"
          children={(field) => {
            const isInvalid =
              field.state.meta.isTouched && !field.state.meta.isValid;
            return (
              <Field data-invalid={isInvalid}>
                <FieldLabel htmlFor={field.name}>Username</FieldLabel>
                <InputGroup>
                  <InputGroupInput
                    id={field.name}
                    name={field.name}
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    onChange={(e) => field.handleChange(e.target.value)}
                    placeholder="john.doe"
                    aria-invalid={isInvalid}
                  />
                  <InputGroupAddon align={"inline-end"}>
                    <InputGroupText>@move-ev.de</InputGroupText>
                  </InputGroupAddon>
                </InputGroup>
                {isInvalid && <FieldError errors={field.state.meta.errors} />}
              </Field>
            );
          }}
        />
        <form.Field
          name="phone"
          children={(field) => {
            const isInvalid =
              field.state.meta.isTouched && !field.state.meta.isValid;
            return (
              <Field data-invalid={isInvalid}>
                <FieldLabel htmlFor={field.name}>Telefonnummer</FieldLabel>
                <Input
                  id={field.name}
                  name={field.name}
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value)}
                  aria-invalid={isInvalid}
                  placeholder="+49 176 12345678"
                  autoComplete="off"
                />
                <FieldDescription>
                  Deine Telefonnummer im Format +49 176 12345678
                </FieldDescription>
                {isInvalid && <FieldError errors={field.state.meta.errors} />}
              </Field>
            );
          }}
        />
      </FieldGroup>
      <div className="mt-8 flex justify-end">
        <Button type="submit" form="signature-form">
          Signatur generieren
        </Button>
      </div>
    </form>
  );
}
