"use client";

import { useState } from "react";
import { RefreshCw, Loader2 } from "lucide-react";
import type { Role } from "@prisma/client";

interface ResendInviteButtonProps {
  email: string;
  role: Role;
}

export default function ResendInviteButton({ email, role }: ResendInviteButtonProps) {
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  const handleResend = async () => {
    setLoading(true);
    await fetch("/api/invitations", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, role }),
    });
    setLoading(false);
    setDone(true);
  };

  if (done) {
    return <span className="text-xs text-green-600 font-semibold">Envoyé ✓</span>;
  }

  return (
    <button
      onClick={handleResend}
      disabled={loading}
      className="flex items-center gap-1 text-xs font-semibold text-primary-700
                 hover:text-primary-500 transition-colors disabled:opacity-50"
      title="Renvoyer l'invitation"
    >
      {loading ? <Loader2 size={13} className="animate-spin" /> : <RefreshCw size={13} />}
      Renvoyer
    </button>
  );
}
