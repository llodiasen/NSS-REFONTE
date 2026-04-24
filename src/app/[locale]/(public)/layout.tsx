import Header from "@/components/layout/Header";
import FooterRedesign from "@/components/layout/FooterRedesign";

interface PublicLayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export default async function PublicLayout({ children, params }: PublicLayoutProps) {
  const { locale } = await params;

  return (
    <>
      <Header />
      <main>{children}</main>
      <FooterRedesign locale={locale} />
    </>
  );
}
