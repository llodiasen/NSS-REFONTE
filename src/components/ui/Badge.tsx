import { cn } from "@/lib/cn";

type BadgeVariant =
  | "impact"
  | "pays"
  | "evenement"
  | "media"
  | "membre"
  | "partenaire"
  | "admin";

interface BadgeProps {
  variant: BadgeVariant;
  children: React.ReactNode;
  className?: string;
}

const variantClasses: Record<BadgeVariant, string> = {
  impact: "bg-primary-100 text-primary-700",
  pays: "bg-earth-100 text-earth-700",
  evenement: "bg-blue-100 text-blue-700",
  media: "bg-purple-100 text-purple-700",
  membre: "bg-primary-100 text-primary-700",
  partenaire: "bg-earth-100 text-earth-700",
  admin: "bg-neutral-800 text-white",
};

export default function Badge({ variant, children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center text-xs font-semibold px-2.5 py-0.5 rounded-full",
        variantClasses[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
