import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

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
      <Footer locale={locale} />
    </>
  );
}
