import type { Metadata } from "next";
import { prisma } from "@/lib/prisma";
import {
  Users,
  Mail,
  FileText,
  Calendar,
  AlertTriangle,
  Clock,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Vue d'ensemble — Administration NSS",
};

export default async function AdminDashboardPage() {
  const now = new Date();
  const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
  const sevenDaysAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);

  const [
    totalMembers,
    pendingInvitations,
    expiredInvitations,
    publishedArticles,
    draftArticles,
    staleDrafts,
    upcomingEvents,
    newMembersThisMonth,
  ] = await Promise.all([
    prisma.user.count({ where: { isActive: true } }),
    prisma.invitation.count({
      where: { usedAt: null, expiresAt: { gte: now } },
    }),
    prisma.invitation.count({
      where: { usedAt: null, expiresAt: { lt: now } },
    }),
    prisma.article.count({ where: { published: true } }),
    prisma.article.count({ where: { published: false } }),
    prisma.article.count({
      where: { published: false, updatedAt: { lt: sevenDaysAgo } },
    }),
    prisma.event.count({
      where: { published: true, startDate: { gte: now } },
    }),
    prisma.user.count({
      where: { isActive: true, createdAt: { gte: startOfMonth } },
    }),
  ]);

  const hasAlerts = expiredInvitations > 0 || staleDrafts > 0;

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="font-display text-2xl font-bold text-neutral-800">
          Vue d&apos;ensemble
        </h1>
        <p className="text-neutral-500 text-sm mt-1">
          Tableau de bord d&apos;administration — NSS
        </p>
      </div>

      {/* Alertes */}
      {hasAlerts && (
        <div className="space-y-3">
          {expiredInvitations > 0 && (
            <Alert
              icon={<Mail size={16} />}
              message={`${expiredInvitations} invitation${expiredInvitations > 1 ? "s" : ""} expirée${expiredInvitations > 1 ? "s" : ""} non utilisée${expiredInvitations > 1 ? "s" : ""}.`}
            />
          )}
          {staleDrafts > 0 && (
            <Alert
              icon={<Clock size={16} />}
              message={`${staleDrafts} article${staleDrafts > 1 ? "s" : ""} en brouillon depuis plus de 7 jours.`}
            />
          )}
        </div>
      )}

      {/* KPIs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        <KpiCard
          icon={<Users size={20} className="text-primary-600" />}
          label="Membres actifs"
          value={totalMembers.toLocaleString("fr-FR")}
          sub={`+${newMembersThisMonth} ce mois`}
          bg="bg-primary-50"
        />
        <KpiCard
          icon={<Mail size={20} className="text-earth-600" />}
          label="Invitations en attente"
          value={String(pendingInvitations)}
          sub={expiredInvitations > 0 ? `${expiredInvitations} expirée(s)` : "Aucune expirée"}
          bg="bg-earth-50"
          highlight={expiredInvitations > 0}
        />
        <KpiCard
          icon={<FileText size={20} className="text-blue-600" />}
          label="Articles publiés"
          value={String(publishedArticles)}
          sub={`${draftArticles} en brouillon`}
          bg="bg-blue-50"
        />
        <KpiCard
          icon={<Calendar size={20} className="text-purple-600" />}
          label="Événements à venir"
          value={String(upcomingEvents)}
          sub="publiés et planifiés"
          bg="bg-purple-50"
        />
      </div>

      {/* Activité récente */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <RecentMembers />
        <RecentInvitations now={now} />
      </div>
    </div>
  );
}

async function RecentMembers() {
  const members = await prisma.user.findMany({
    where: { isActive: true },
    orderBy: { createdAt: "desc" },
    take: 5,
    select: { id: true, firstName: true, name: true, role: true, createdAt: true },
  });

  return (
    <section className="bg-white rounded-2xl shadow-card p-6">
      <h2 className="font-display font-bold text-neutral-800 text-base mb-4">
        Derniers membres inscrits
      </h2>
      {members.length === 0 ? (
        <p className="text-sm text-neutral-400 italic">Aucun membre.</p>
      ) : (
        <ul className="divide-y divide-neutral-100">
          {members.map((m) => (
            <li key={m.id} className="py-2.5 flex items-center justify-between gap-3">
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0">
                  <span className="text-primary-700 text-xs font-bold">
                    {m.firstName.charAt(0)}{m.name.charAt(0)}
                  </span>
                </div>
                <p className="text-sm font-medium text-neutral-800 truncate">
                  {m.firstName} {m.name}
                </p>
              </div>
              <span className="text-xs text-neutral-400 flex-shrink-0">
                {new Date(m.createdAt).toLocaleDateString("fr-FR", { day: "numeric", month: "short" })}
              </span>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

async function RecentInvitations({ now }: { now: Date }) {
  const invitations = await prisma.invitation.findMany({
    orderBy: { createdAt: "desc" },
    take: 5,
    select: { id: true, email: true, role: true, expiresAt: true, usedAt: true, createdAt: true },
  });

  return (
    <section className="bg-white rounded-2xl shadow-card p-6">
      <h2 className="font-display font-bold text-neutral-800 text-base mb-4">
        Dernières invitations envoyées
      </h2>
      {invitations.length === 0 ? (
        <p className="text-sm text-neutral-400 italic">Aucune invitation.</p>
      ) : (
        <ul className="divide-y divide-neutral-100">
          {invitations.map((inv) => {
            const isUsed = !!inv.usedAt;
            const isExpired = !isUsed && inv.expiresAt < now;
            const status = isUsed ? "Activé" : isExpired ? "Expiré" : "En attente";
            const statusColor = isUsed
              ? "text-green-600 bg-green-50"
              : isExpired
              ? "text-danger bg-red-50"
              : "text-earth-700 bg-earth-50";

            return (
              <li key={inv.id} className="py-2.5 flex items-center justify-between gap-3">
                <p className="text-sm text-neutral-700 truncate min-w-0">{inv.email}</p>
                <span className={`text-xs font-semibold px-2 py-0.5 rounded-full flex-shrink-0 ${statusColor}`}>
                  {status}
                </span>
              </li>
            );
          })}
        </ul>
      )}
    </section>
  );
}

function KpiCard({
  icon,
  label,
  value,
  sub,
  bg,
  highlight = false,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  sub: string;
  bg: string;
  highlight?: boolean;
}) {
  return (
    <div className={`${bg} rounded-2xl p-5 ${highlight ? "ring-1 ring-danger/30" : ""}`}>
      <div className="flex items-center justify-between mb-3">
        <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-sm">
          {icon}
        </div>
        {highlight && <AlertTriangle size={16} className="text-danger" />}
      </div>
      <p className="text-2xl font-display font-bold text-neutral-800">{value}</p>
      <p className="text-xs text-neutral-500 font-medium mt-0.5">{label}</p>
      <p className={`text-xs mt-1 ${highlight ? "text-danger font-semibold" : "text-neutral-400"}`}>
        {sub}
      </p>
    </div>
  );
}

function Alert({ icon, message }: { icon: React.ReactNode; message: string }) {
  return (
    <div className="flex items-center gap-3 bg-amber-50 border border-amber-200 rounded-xl px-4 py-3">
      <span className="text-amber-600 flex-shrink-0">{icon}</span>
      <p className="text-sm text-amber-800 font-medium">{message}</p>
    </div>
  );
}
