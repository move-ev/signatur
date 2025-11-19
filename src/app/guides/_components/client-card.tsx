import { cn } from "@/lib/utils";
import type { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import Link from "next/link";

export function ClientCard({
  className,
  href,
  icon,
  label,
  ...props
}: React.ComponentProps<"div"> & {
  href: string;
  label: string;
  icon: StaticImport;
}) {
  return (
    <div
      className={cn(
        "bg-card hover:bg-muted/60 relative isolate flex flex-col items-center justify-center rounded-lg border p-4 pt-6 shadow-xs",
        className,
      )}
      {...props}
    >
      <Image
        src={icon}
        alt="Icon"
        className="max-h-8 max-w-12 object-contain"
      />
      <Link href={href} className="mt-6 text-center text-sm font-medium">
        <span className="absolute inset-0 h-full w-full" />
        {label}
      </Link>
    </div>
  );
}
