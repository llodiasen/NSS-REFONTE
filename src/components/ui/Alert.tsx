"use client";

import { CheckCircle, AlertTriangle, XCircle, Info, X } from "lucide-react";
import { cn } from "@/lib/cn";

type AlertVariant = "success" | "error" | "warning" | "info";

interface AlertProps {
  variant: AlertVariant;
  message: string;
  onClose?: () => void;
  className?: string;
}

const config: Record<AlertVariant, { icon: React.ReactNode; classes: string }> = {
  success: {
    icon: <CheckCircle size={18} aria-hidden="true" />,
    classes: "bg-green-50 text-green-800 border-green-200",
  },
  error: {
    icon: <XCircle size={18} aria-hidden="true" />,
    classes: "bg-red-50 text-red-800 border-red-200",
  },
  warning: {
    icon: <AlertTriangle size={18} aria-hidden="true" />,
    classes: "bg-amber-50 text-amber-800 border-amber-200",
  },
  info: {
    icon: <Info size={18} aria-hidden="true" />,
    classes: "bg-blue-50 text-blue-800 border-blue-200",
  },
};

export default function Alert({ variant, message, onClose, className }: AlertProps) {
  const { icon, classes } = config[variant];

  return (
    <div
      role="alert"
      className={cn(
        "flex items-start gap-3 px-4 py-3 rounded-xl border text-sm font-medium",
        classes,
        className
      )}
    >
      <span className="mt-0.5 flex-shrink-0">{icon}</span>
      <p className="flex-1">{message}</p>
      {onClose && (
        <button
          onClick={onClose}
          aria-label="Fermer"
          className="flex-shrink-0 hover:opacity-70 transition-opacity mt-0.5"
        >
          <X size={16} />
        </button>
      )}
    </div>
  );
}
