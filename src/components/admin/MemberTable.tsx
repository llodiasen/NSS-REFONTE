"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { Pencil, Ban, CheckCircle, Trash2, Loader2 } from "lucide-react";
import Badge from "@/components/ui/Badge";
import type { Role } from "@prisma/client";

interface Member {
  id: string;
  firstName: string;
  name: string;
  email: string;
  role: Role;
  country: string | null;
  isActive: boolean;
  createdAt: Date;
}

interface MemberTableProps {
  members: Member[];
  currentUserId: string;
}

const roleVariant = (role: Role) =>
  role === "ADMIN" ? "admin" : role === "PARTENAIRE" ? "partenaire" : "membre";

const ROLES: Role[] = ["MEMBRE", "PARTENAIRE", "ADMIN"];

export default function MemberTable({ members, currentUserId }: MemberTableProps) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [editingId, setEditingId] = useState<string | null>(null);
  const [deleteTarget, setDeleteTarget] = useState<Member | null>(null);
  const [loadingId, setLoadingId] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const patch = async (id: string, body: object) => {
    setLoadingId(id);
    setError(null);
    const res = await fetch(`/api/admin/membres/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    setLoadingId(null);
    if (!res.ok) {
      const json = await res.json();
      setError(json.error ?? "Erreur.");
      return false;
    }
    startTransition(() => router.refresh());
    return true;
  };

  const handleDelete = async () => {
    if (!deleteTarget) return;
    setLoadingId(deleteTarget.id);
    setError(null);
    const res = await fetch(`/api/admin/membres/${deleteTarget.id}`, { method: "DELETE" });
    setLoadingId(null);
    setDeleteTarget(null);
    if (!res.ok) {
      const json = await res.json();
      setError(json.error ?? "Erreur.");
      return;
    }
    startTransition(() => router.refresh());
  };

  return (
    <>
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 text-sm px-4 py-3 rounded-xl mb-4">
          {error}
        </div>
      )}

      <div className="bg-white rounded-2xl shadow-card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-neutral-100 bg-neutral-50">
                <th className="text-left px-4 py-3 font-semibold text-neutral-600">Membre</th>
                <th className="text-left px-4 py-3 font-semibold text-neutral-600">Email</th>
                <th className="text-left px-4 py-3 font-semibold text-neutral-600">Rôle</th>
                <th className="text-left px-4 py-3 font-semibold text-neutral-600">Pays</th>
                <th className="text-left px-4 py-3 font-semibold text-neutral-600">Statut</th>
                <th className="text-left px-4 py-3 font-semibold text-neutral-600">Inscrit le</th>
                <th className="text-right px-4 py-3 font-semibold text-neutral-600">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-100">
              {members.map((m) => {
                const isSelf = m.id === currentUserId;
                const isLoading = loadingId === m.id || isPending;

                return (
                  <tr key={m.id} className="hover:bg-neutral-50 transition-colors">
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0">
                          <span className="text-primary-700 text-xs font-bold">
                            {m.firstName.charAt(0)}{m.name.charAt(0)}
                          </span>
                        </div>
                        <span className="font-medium text-neutral-800 whitespace-nowrap">
                          {m.firstName} {m.name}
                        </span>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-neutral-500 max-w-[180px] truncate">{m.email}</td>
                    <td className="px-4 py-3">
                      {editingId === m.id ? (
                        <select
                          defaultValue={m.role}
                          autoFocus
                          className="border border-neutral-200 rounded-lg px-2 py-1 text-xs focus:outline-none focus:ring-2 focus:ring-primary-500"
                          onChange={async (e) => {
                            const ok = await patch(m.id, { action: "role", role: e.target.value });
                            if (ok) setEditingId(null);
                          }}
                          onBlur={() => setEditingId(null)}
                        >
                          {ROLES.map((r) => (
                            <option key={r} value={r}>{r}</option>
                          ))}
                        </select>
                      ) : (
                        <Badge variant={roleVariant(m.role)}>{m.role}</Badge>
                      )}
                    </td>
                    <td className="px-4 py-3 text-neutral-500">{m.country ?? "—"}</td>
                    <td className="px-4 py-3">
                      <span className={`inline-flex items-center text-xs font-semibold px-2 py-0.5 rounded-full ${
                        m.isActive
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-600"
                      }`}>
                        {m.isActive ? "Actif" : "Suspendu"}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-neutral-400 whitespace-nowrap">
                      {new Date(m.createdAt).toLocaleDateString("fr-FR", { day: "numeric", month: "short", year: "numeric" })}
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center justify-end gap-1">
                        {isLoading && loadingId === m.id ? (
                          <Loader2 size={16} className="animate-spin text-neutral-400" />
                        ) : (
                          <>
                            {!isSelf && (
                              <button
                                onClick={() => setEditingId(m.id)}
                                title="Modifier le rôle"
                                className="p-1.5 rounded-lg text-neutral-400 hover:text-primary-700 hover:bg-primary-50 transition-colors"
                              >
                                <Pencil size={15} />
                              </button>
                            )}
                            {!isSelf && (
                              <button
                                onClick={() => patch(m.id, { action: m.isActive ? "suspend" : "reactivate" })}
                                title={m.isActive ? "Suspendre" : "Réactiver"}
                                className={`p-1.5 rounded-lg transition-colors ${
                                  m.isActive
                                    ? "text-neutral-400 hover:text-amber-600 hover:bg-amber-50"
                                    : "text-neutral-400 hover:text-green-600 hover:bg-green-50"
                                }`}
                              >
                                {m.isActive ? <Ban size={15} /> : <CheckCircle size={15} />}
                              </button>
                            )}
                            {!isSelf && (
                              <button
                                onClick={() => setDeleteTarget(m)}
                                title="Supprimer"
                                className="p-1.5 rounded-lg text-neutral-400 hover:text-danger hover:bg-red-50 transition-colors"
                              >
                                <Trash2 size={15} />
                              </button>
                            )}
                          </>
                        )}
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal confirmation suppression */}
      {deleteTarget && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center px-4">
          <div className="bg-white rounded-2xl shadow-xl p-6 w-full max-w-sm">
            <h3 className="font-display font-bold text-neutral-800 text-lg mb-2">
              Confirmer la suppression
            </h3>
            <p className="text-sm text-neutral-500 mb-6">
              Supprimer définitivement{" "}
              <strong>{deleteTarget.firstName} {deleteTarget.name}</strong> ({deleteTarget.email}) ?
              Cette action est irréversible.
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => setDeleteTarget(null)}
                className="flex-1 px-4 py-2.5 border border-neutral-200 rounded-xl text-sm
                           font-semibold text-neutral-700 hover:bg-neutral-50 transition-colors"
              >
                Annuler
              </button>
              <button
                onClick={handleDelete}
                disabled={loadingId === deleteTarget.id}
                className="flex-1 px-4 py-2.5 bg-danger text-white rounded-xl text-sm
                           font-semibold hover:bg-red-700 transition-colors
                           disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {loadingId === deleteTarget.id && <Loader2 size={15} className="animate-spin" />}
                Supprimer
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
