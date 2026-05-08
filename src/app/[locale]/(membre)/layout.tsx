import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import MemberSidebar from "@/components/membre/MemberSidebar";
import type { Role } from "@prisma/client";

interface MemberLayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export default async function MemberLayout({ children, params }: MemberLayoutProps) {
  const { locale } = await params;
  const session = await auth();

  if (!session?.user) {
    redirect(`/${locale}/login`);
  }

  // Fetch user pour avoir firstName séparé de name
  const user = await prisma.user.findUnique({
    where: { id: session.user.id },
    select: { firstName: true, name: true, role: true },
  });

  if (!user) {
    redirect(`/${locale}/login`);
  }

  return (
    <div className="min-h-screen bg-neutral-100 flex flex-col lg:flex-row">
      <MemberSidebar
        locale={locale}
        user={{
          firstName: user.firstName,
          name: user.name,
          role: user.role as Role,
        }}
      />

      <main className="flex-1 min-w-0 overflow-y-auto">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {children}
        </div>
      </main>
    </div>
  );
}
