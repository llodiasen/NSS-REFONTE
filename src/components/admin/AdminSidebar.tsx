"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { signOut } from "next-auth/react";
import {
  LayoutDashboard,
  Users,
  Mail,
  FileText,
  Calendar,
  DollarSign,
  LogOut,
  Menu,
  X,
  Shield,
  ArrowLeft,
} from "lucide-react";

interface AdminSidebarProps {
  locale: string;
  userName: string;
}

interface NavItem {
  href: string;
  label: string;
  icon: React.ReactNode;
}

export default function AdminSidebar({ locale, userName }: AdminSidebarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navItems: NavItem[] = [
    {
      href: `/${locale}/admin/dashboard`,
      label: "Vue d'ensemble",
      icon: <LayoutDashboard size={18} />,
    },
    {
      href: `/${locale}/admin/membres`,
      label: "Membres",
      icon: <Users size={18} />,
    },
    {
      href: `/${locale}/admin/invitations`,
      label: "Invitations",
      icon: <Mail size={18} />,
    },
    {
      href: `/${locale}/admin/actualites`,
      label: "Actualités",
      icon: <FileText size={18} />,
    },
    {
      href: `/${locale}/admin/evenements`,
      label: "Événements",
      icon: <Calendar size={18} />,
    },
    {
      href: `/${locale}/admin/dons`,
      label: "Dons",
      icon: <DollarSign size={18} />,
    },
  ];

  return (
    <>
      {/* Mobile top bar */}
      <div className="lg:hidden flex items-center justify-between px-4 py-3 bg-neutral-900 text-white">
        <div className="flex items-center gap-2">
          <Shield size={16} className="text-primary-400" />
          <span className="font-display font-bold text-sm">Administration</span>
        </div>
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
          className="fixed inset-0 bg-black/60 z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 left-0 h-full w-64 bg-neutral-900 z-50 flex flex-col
          transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          lg:static lg:translate-x-0
        `}
        aria-label="Navigation back-office"
      >
        {/* Logo + badge + close */}
        <div className="px-5 py-5 border-b border-white/10">
          <div className="flex items-center justify-between mb-3">
            <Link href={`/${locale}`} className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-primary-700 flex items-center justify-center">
                <span className="text-white font-bold text-xs font-display">NSS</span>
              </div>
              <span className="text-white font-display font-bold text-sm">wasafrica.org</span>
            </Link>
            <button
              onClick={() => setIsOpen(false)}
              className="lg:hidden p-1 rounded-lg hover:bg-white/10 transition-colors text-white/70"
              aria-label="Fermer le menu"
            >
              <X size={18} />
            </button>
          </div>
          <div className="flex items-center gap-1.5 px-2 py-1 bg-primary-900/60 rounded-lg w-fit">
            <Shield size={12} className="text-primary-400" />
            <span className="text-primary-300 text-xs font-semibold tracking-wide">Administration</span>
          </div>
        </div>

        {/* Nav */}
        <nav className="flex-1 px-3 py-4 space-y-0.5 overflow-y-auto">
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
                  ${isActive
                    ? "bg-white/15 text-white"
                    : "text-neutral-400 hover:bg-white/8 hover:text-white"
                  }
                `}
              >
                <span className={isActive ? "text-primary-400" : "text-neutral-500"}>
                  {item.icon}
                </span>
                {item.label}
              </Link>
            );
          })}

          <div className="pt-3 mt-3 border-t border-white/10">
            <Link
              href={`/${locale}/membre/dashboard`}
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium
                         text-neutral-400 hover:bg-white/8 hover:text-white transition-all duration-150"
            >
              <ArrowLeft size={18} className="text-neutral-500" />
              Espace membre
            </Link>
          </div>
        </nav>

        {/* User + logout */}
        <div className="px-4 py-4 border-t border-white/10">
          <div className="flex items-center gap-3 mb-3 px-1">
            <div className="w-8 h-8 rounded-full bg-primary-700 flex items-center justify-center flex-shrink-0">
              <span className="text-white text-xs font-semibold">
                {userName.charAt(0).toUpperCase()}
              </span>
            </div>
            <div className="min-w-0">
              <p className="text-white text-sm font-medium truncate">{userName}</p>
              <p className="text-neutral-400 text-xs">Administrateur</p>
            </div>
          </div>
          <button
            onClick={() => signOut({ callbackUrl: `/${locale}/login` })}
            className="flex items-center gap-2 w-full px-3 py-2 rounded-xl text-sm
                       text-neutral-400 hover:text-white hover:bg-white/10 transition-all duration-150"
          >
            <LogOut size={16} />
            Se déconnecter
          </button>
        </div>
      </aside>
    </>
  );
}
