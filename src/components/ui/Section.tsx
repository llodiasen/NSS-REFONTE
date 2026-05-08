import { cn } from "@/lib/cn";

type SectionVariant = "white" | "neutral" | "primary-light" | "earth-light" | "dark";

interface SectionProps {
  variant?: SectionVariant;
  py?: string;
  className?: string;
  children: React.ReactNode;
  id?: string;
}

const variantClasses: Record<SectionVariant, string> = {
  white: "bg-white",
  neutral: "bg-neutral-50",
  "primary-light": "bg-primary-50",
  "earth-light": "bg-earth-100",
  dark: "bg-primary-900 text-white",
};

export default function Section({
  variant = "white",
  py = "py-16 lg:py-24",
  className,
  children,
  id,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(variantClasses[variant], py, className)}
    >
      {children}
    </section>
  );
}
