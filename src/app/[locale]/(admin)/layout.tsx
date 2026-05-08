import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import AdminSidebar from "@/components/admin/AdminSidebar";

interface AdminLayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export default async function AdminLayout({ children, params }: AdminLayoutProps) {
  const { locale } = await params;
  const session = await auth();

  if (!session?.user) {
    redirect(`/${locale}/login`);
  }

  if (session.user.role !== "ADMIN") {
    redirect(`/${locale}/access-denied?reason=role`);
  }

  // Double vérification en base (le token JWT peut être périmé)
  const user = await prisma.user.findUnique({
    where: { id: session.user.id },
    select: { firstName: true, name: true, role: true, isActive: true },
  });

  if (!user || !user.isActive || user.role !== "ADMIN") {
    redirect(`/${locale}/access-denied?reason=role`);
  }

  const displayName = `${user.firstName} ${user.name}`;

  return (
    <div className="min-h-screen bg-neutral-100 flex flex-col lg:flex-row">
      <AdminSidebar locale={locale} userName={displayName} />

      <main className="flex-1 min-w-0 overflow-y-auto">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {children}
        </div>
      </main>
    </div>
  );
}
