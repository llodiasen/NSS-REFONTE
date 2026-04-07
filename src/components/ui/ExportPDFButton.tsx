// NOUVEAU — Mission 4 : Bouton export PDF NSS
// Utilise @react-pdf/renderer en mode client (dynamic import pour éviter SSR)
"use client";

import { useState } from "react";
import { Download, Loader2 } from "lucide-react";

interface ExportPDFButtonProps {
  filename: string;
  label?: string;
  variant?: "fixed" | "inline";
  documentType: "presentation" | "videos";
}

export default function ExportPDFButton({
  filename,
  label = "Télécharger la présentation PDF",
  variant = "inline",
  documentType,
}: ExportPDFButtonProps) {
  const [loading, setLoading] = useState(false);

  const handleExport = async () => {
    setLoading(true);
    try {
      // Import dynamique pour éviter les erreurs SSR
      const { pdf } = await import("@react-pdf/renderer");
      const { createElement } = await import("react");

      // Sélection du document selon le type
      let Document: React.ComponentType;
      if (documentType === "presentation") {
        const mod = await import("@/components/pdf/NSS_PresentationDoc");
        Document = mod.default;
      } else {
        const mod = await import("@/components/pdf/NSS_VideosDoc");
        Document = mod.default;
      }

      const blob = await pdf(createElement(Document)).toBlob();

      // Déclencher le téléchargement
      const today = new Date().toISOString().slice(0, 10).replace(/-/g, "");
      const finalFilename = filename.replace("[date]", today);
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `${finalFilename}.pdf`;
      a.click();
      URL.revokeObjectURL(url);
    } catch (err) {
      console.error("[ExportPDF] Erreur génération PDF:", err);
      alert("La génération du PDF a échoué. Veuillez réessayer.");
    } finally {
      setLoading(false);
    }
  };

  if (variant === "fixed") {
    return (
      <button
        onClick={handleExport}
        disabled={loading}
        aria-label={loading ? "Génération du PDF en cours..." : label}
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2
                   bg-primary-700 hover:bg-primary-500 text-white font-semibold
                   px-4 py-3 rounded-xl shadow-xl hover:shadow-2xl
                   transition-all duration-200 hover:-translate-y-0.5
                   disabled:opacity-60 disabled:cursor-not-allowed text-sm
                   border border-primary-600"
      >
        {loading ? (
          <>
            <Loader2 size={16} className="animate-spin" />
            Génération…
          </>
        ) : (
          <>
            <Download size={16} />
            {label}
          </>
        )}
      </button>
    );
  }

  return (
    <button
      onClick={handleExport}
      disabled={loading}
      aria-label={loading ? "Génération du PDF en cours..." : label}
      className="inline-flex items-center gap-2 bg-primary-700 hover:bg-primary-500
                 text-white font-semibold px-5 py-2.5 rounded-xl
                 transition-all duration-200 shadow-md hover:shadow-lg
                 disabled:opacity-60 disabled:cursor-not-allowed text-sm"
    >
      {loading ? (
        <>
          <Loader2 size={15} className="animate-spin" />
          Génération…
        </>
      ) : (
        <>
          <Download size={15} />
          {label}
        </>
      )}
    </button>
  );
}
