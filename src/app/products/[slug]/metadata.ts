import { Metadata } from "next";
import { products } from "@/data/products";

interface MetadataPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: MetadataPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find(p => p.slug === slug);
  
  if (!product) {
    return {
      title: "Produk Tidak Ditemukan",
      description: "Produk yang Anda cari tidak tersedia."
    };
  }

  return {
    title: `${product.name} - Chelsea Dewa Store Parfume`,
    description: product.description,
    keywords: [
      product.name,
      product.category,
      "parfum original",
      "parfum premium",
      "jual parfum",
      "Chelsea Dewa Store Parfume",
      `parfum ${product.category.toLowerCase()}`,
    ],
    openGraph: {
      title: product.name,
      description: product.description,
      url: `https://chelsea-dewa-perfume.com/products/${product.slug}`,
      type: "website",
      images: product.image ? [
        {
          url: product.image,
          width: 800,
          height: 800,
          alt: product.name,
        }
      ] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: product.name,
      description: product.description,
      images: product.image ? [product.image] : [],
    },
    alternates: {
      canonical: `/products/${product.slug}`,
    },
  };
}
