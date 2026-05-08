import Link from "next/link";
import { cn } from "@/lib/cn";

type ButtonVariant = "primary" | "secondary" | "earth" | "ghost";

interface ButtonProps {
  variant?: ButtonVariant;
  size?: "sm" | "md" | "lg"; // conservé pour compatibilité, ignoré
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  loading?: boolean;
  className?: string;
  children: React.ReactNode;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary: "btn btn-primary",
  secondary: "btn btn-secondary",
  earth: "btn btn-primary",
  ghost: "btn btn-ghost",
};

const Spinner = () => (
  <svg
    className="animate-spin h-4 w-4"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
  </svg>
);

export default function Button({
  variant = "primary",
  href,
  onClick,
  type = "button",
  disabled = false,
  loading = false,
  className,
  children,
}: ButtonProps) {
  const classes = cn(
    variantClasses[variant],
    (disabled || loading) && "opacity-40 cursor-not-allowed pointer-events-none",
    className
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {loading && <Spinner />}
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={classes}
    >
      {loading && <Spinner />}
      {children}
    </button>
  );
}
