"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { signOut } from "next-auth/react";
import {
  LayoutDashboard,
  User,
  Users,
  BookOpen,
  Settings,
  LogOut,
  Menu,
  X,
} from "lucide-react";
import Badge from "@/components/ui/Badge";
import type { Role } from "@prisma/client";

interface MemberSidebarProps {
  locale: string;
  user: {
    name: string | null | undefined;
    firstName: string | null | undefined;
    role: Role;
  };
}

interface NavItem {
  href: string;
  label: string;
  icon: React.ReactNode;
  adminOnly?: boolean;
}

const roleVariant = (role: Role) =>
  role === "ADMIN" ? "admin" : role === "PARTENAIRE" ? "partenaire" : "membre";

export default function MemberSidebar({ locale, user }: MemberSidebarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navItems: NavItem[] = [
    {
      href: `/${locale}/membre/dashboard`,
      label: "Tableau de bord",
      icon: <LayoutDashboard size={18} />,
    },
    {
      href: `/${locale}/membre/profil`,
      label: "Mon profil",
      icon: <User size={18} />,
    },
    {
      href: `/${locale}/membre/annuaire`,
      label: "Annuaire membres",
      icon: <Users size={18} />,
    },
    {
      href: `/${locale}/membre/ressources`,
      label: "Ressources",
      icon: <BookOpen size={18} />,
    },
    ...(user.role === "ADMIN"
      ? [
          {
            href: `/${locale}/admin/dashboard`,
            label: "Back-office",
            icon: <Settings size={18} />,
            adminOnly: true,
          },
        ]
      : []),
  ];

  const displayName = user.firstName ?? user.name ?? "Membre";

  return (
    <>
      {/* Mobile top bar */}
      <div className="lg:hidden flex items-center justify-between px-4 py-3 bg-primary-900 text-white">
        <span className="font-display font-bold text-base">NSS</span>
        <button
          onClick={() => setIsOpen(true)}
          aria-label="Ouvrir le menu"
          className="p-1 rounded-lg hover:bg-white/10 transition-colors"
        >
          <Menu size={22} />
        </button>
      </div>

      {/* Overlay mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 left-0 h-full w-64 bg-primary-900 z-50 flex flex-col
          transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          lg:static lg:translate-x-0
        `}
        aria-label="Navigation espace membre"
      >
        {/* Logo + close (mobile) */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
          <Link href={`/${locale}`} className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
              <span className="text-white font-bold text-xs font-display">NSS</span>
            </div>
            <span className="text-white font-display font-bold text-sm leading-tight">
              Espace membre
            </span>
          </Link>
          <button
            onClick={() => setIsOpen(false)}
            className="lg:hidden p-1 rounded-lg hover:bg-white/10 transition-colors text-white/70"
            aria-label="Fermer le menu"
          >
            <X size={18} />
          </button>
        </div>

        {/* Nav links */}
        <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
          {navItems.map((item) => {
            const isActive = pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`
                  flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium
                  transition-all duration-150
                  ${
                    isActive
                      ? "bg-white/15 text-white"
                      : "text-white/70 hover:bg-white/10 hover:text-white"
                  }
                  ${item.adminOnly ? "border border-white/20" : ""}
                `}
              >
                <span className={isActive ? "text-primary-300" : "text-white/50"}>
                  {item.icon}
                </span>
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* User info + logout */}
        <div className="px-4 py-4 border-t border-white/10">
          <div className="flex items-center gap-3 mb-3 px-1">
            <div className="w-8 h-8 rounded-full bg-primary-600 flex items-center justify-center flex-shrink-0">
              <span className="text-white text-xs font-semibold">
                {displayName.charAt(0).toUpperCase()}
              </span>
            </div>
            <div className="min-w-0">
              <p className="text-white text-sm font-medium truncate">{displayName}</p>
              <Badge variant={roleVariant(user.role)} className="mt-0.5">
                {user.role}
              </Badge>
            </div>
          </div>
          <button
            onClick={() => signOut({ callbackUrl: `/${locale}/login` })}
            className="flex items-center gap-2 w-full px-3 py-2 rounded-xl text-sm
                       text-white/60 hover:text-white hover:bg-white/10 transition-all duration-150"
          >
            <LogOut size={16} />
            Se déconnecter
          </button>
        </div>
      </aside>
    </>
  );
}
