import HeaderV2 from "@/components/layout/HeaderV2";
import FooterRedesign from "@/components/layout/FooterRedesign";

interface PublicLayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export default async function PublicLayout({ children, params }: PublicLayoutProps) {
  const { locale } = await params;

  return (
    <>
      <HeaderV2 />
      <main>{children}</main>
      <FooterRedesign locale={locale} />
    </>
  );
}
