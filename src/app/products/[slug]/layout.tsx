import { Metadata } from "next";
import { generateMetadata } from "./metadata";

interface LayoutProps {
  children: React.ReactNode;
  params: Promise<{
    slug: string;
  }>;
}

export { generateMetadata };

export default async function ProductLayout({
  children,
}: LayoutProps) {
  return <>{children}</>;
}
