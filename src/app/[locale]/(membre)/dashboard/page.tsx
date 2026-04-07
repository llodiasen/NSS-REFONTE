import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { CalendarDays, FileText, Users, ArrowRight, UserCircle } from "lucide-react";
import Badge from "@/components/ui/Badge";
import type { Role } from "@prisma/client";

export const metadata: Metadata = {
  title: "Tableau de bord — Espace membre NSS",
};

interface DashboardPageProps {
  params: Promise<{ locale: string }>;
}

const roleVariant = (role: Role) =>
  role === "ADMIN" ? "admin" : role === "PARTENAIRE" ? "partenaire" : "membre";

export default async function DashboardPage({ params }: DashboardPageProps) {
  const { locale } = await params;
  const session = await auth();

  if (!session?.user) {
    redirect(`/${locale}/login`);
  }

  const [user, totalMembers, recentArticles, upcomingEvents] = await Promise.all([
    prisma.user.findUnique({
      where: { id: session.user.id },
      select: { firstName: true, name: true, role: true, country: true, organisation: true, bio: true, avatarUrl: true },
    }),
    prisma.user.count({ where: { isActive: true } }),
    prisma.article.findMany({
      where: { published: true },
      orderBy: { publishedAt: "desc" },
      take: 3,
      select: { id: true, title: true, slug: true, publishedAt: true, excerpt: true },
    }),
    prisma.event.findMany({
      where: { published: true, startDate: { gte: new Date() } },
      orderBy: { startDate: "asc" },
      take: 3,
      select: { id: true, title: true, slug: true, startDate: true, location: true },
    }),
  ]);

  if (!user) {
    redirect(`/${locale}/login`);
  }

  const isProfileComplete = !!(user.country && user.organisation && user.bio);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-start justify-between flex-wrap gap-4">
        <div>
          <h1 className="font-display text-2xl font-bold text-neutral-800">
            Bonjour, {user.firstName} 👋
          </h1>
          <p className="text-neutral-500 text-sm mt-1">
            Bienvenue dans votre espace membre NSS.
          </p>
        </div>
        <Badge variant={roleVariant(user.role as Role)}>
          {user.role}
        </Badge>
      </div>

      {/* CTA profil incomplet */}
      {!isProfileComplete && (
        <div className="bg-earth-50 border border-earth-200 rounded-2xl px-5 py-4 flex items-center justify-between gap-4 flex-wrap">
          <div className="flex items-center gap-3">
            <UserCircle size={22} className="text-earth-600 flex-shrink-0" />
            <p className="text-sm text-earth-800 font-medium">
              Complétez votre profil pour apparaître dans l&apos;annuaire des membres.
            </p>
          </div>
          <Link
            href={`/${locale}/membre/profil`}
            className="flex items-center gap-1.5 text-sm font-semibold text-earth-700
                       hover:text-earth-900 transition-colors whitespace-nowrap"
          >
            Compléter <ArrowRight size={14} />
          </Link>
        </div>
      )}

      {/* Stats rapides */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <StatCard
          icon={<Users size={20} className="text-primary-600" />}
          label="Membres actifs"
          value={totalMembers.toLocaleString("fr-FR")}
          bg="bg-primary-50"
        />
        <StatCard
          icon={<FileText size={20} className="text-earth-600" />}
          label="Actualités publiées"
          value={recentArticles.length > 0 ? `${recentArticles.length}+` : "–"}
          bg="bg-earth-50"
        />
        <StatCard
          icon={<CalendarDays size={20} className="text-blue-600" />}
          label="Événements à venir"
          value={upcomingEvents.length > 0 ? String(upcomingEvents.length) : "–"}
          bg="bg-blue-50"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Actualités récentes */}
        <section className="bg-white rounded-2xl shadow-card p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-display font-bold text-neutral-800 text-lg">
              Actualités récentes
            </h2>
            <Link
              href={`/${locale}/ressources/actualites`}
              className="text-sm text-primary-700 font-semibold hover:underline flex items-center gap-1"
            >
              Toutes <ArrowRight size={14} />
            </Link>
          </div>
          {recentArticles.length === 0 ? (
            <p className="text-sm text-neutral-400 italic">Aucune actualité pour le moment.</p>
          ) : (
            <ul className="divide-y divide-neutral-100 space-y-0">
              {recentArticles.map((article) => (
                <li key={article.id} className="py-3 first:pt-0 last:pb-0">
                  <Link
                    href={`/${locale}/ressources/actualites/${article.slug}`}
                    className="group"
                  >
                    <p className="text-sm font-semibold text-neutral-800 group-hover:text-primary-700 transition-colors line-clamp-1">
                      {article.title}
                    </p>
                    {article.excerpt && (
                      <p className="text-xs text-neutral-400 mt-0.5 line-clamp-1">{article.excerpt}</p>
                    )}
                    {article.publishedAt && (
                      <p className="text-xs text-neutral-400 mt-1">
                        {new Date(article.publishedAt).toLocaleDateString("fr-FR", {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        })}
                      </p>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </section>

        {/* Prochains événements */}
        <section className="bg-white rounded-2xl shadow-card p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-display font-bold text-neutral-800 text-lg">
              Prochains événements
            </h2>
            <Link
              href={`/${locale}/ressources/evenements`}
              className="text-sm text-primary-700 font-semibold hover:underline flex items-center gap-1"
            >
              Tous <ArrowRight size={14} />
            </Link>
          </div>
          {upcomingEvents.length === 0 ? (
            <p className="text-sm text-neutral-400 italic">Aucun événement à venir.</p>
          ) : (
            <ul className="divide-y divide-neutral-100 space-y-0">
              {upcomingEvents.map((event) => (
                <li key={event.id} className="py-3 first:pt-0 last:pb-0">
                  <Link
                    href={`/${locale}/ressources/evenements/${event.slug}`}
                    className="group"
                  >
                    <p className="text-sm font-semibold text-neutral-800 group-hover:text-primary-700 transition-colors line-clamp-1">
                      {event.title}
                    </p>
                    <div className="flex items-center gap-3 mt-1">
                      <span className="text-xs text-neutral-400 flex items-center gap-1">
                        <CalendarDays size={12} />
                        {new Date(event.startDate).toLocaleDateString("fr-FR", {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        })}
                      </span>
                      <span className="text-xs text-neutral-400 truncate">{event.location}</span>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </section>
      </div>
    </div>
  );
}

function StatCard({
  icon,
  label,
  value,
  bg,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  bg: string;
}) {
  return (
    <div className={`${bg} rounded-2xl p-5 flex items-center gap-4`}>
      <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-sm flex-shrink-0">
        {icon}
      </div>
      <div>
        <p className="text-xs text-neutral-500 font-medium">{label}</p>
        <p className="text-2xl font-display font-bold text-neutral-800 mt-0.5">{value}</p>
      </div>
    </div>
  );
}
