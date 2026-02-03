interface StructuredDataProps {
  type: 'organization' | 'website' | 'product' | 'breadcrumb';
  data?: any;
}

export default function StructuredData({ type, data }: StructuredDataProps) {
  const generateStructuredData = () => {
    switch (type) {
      case 'organization':
        return {
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Chelsea Dewa Perfume",
          "url": "https://chelsea-dewa-perfume.com",
          "logo": "https://chelsea-dewa-perfume.com/logo.png",
          "description": "Koleksi parfum pilihan dengan kualitas premium. Sentuhan elegan untuk setiap momen.",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Jakarta",
            "addressCountry": "ID"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+62-821-6272-4324",
            "contactType": "customer service",
            "availableLanguage": "Indonesian"
          },
          "sameAs": [
            "https://instagram.com/chelseadewastoreparfume",
            "https://shopee.co.id/chelseadewastoreparfume"
          ]
        };

      case 'website':
        return {
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "Chelsea Dewa Perfume",
          "url": "https://chelsea-dewa-perfume.com",
          "description": "Koleksi parfum pilihan dengan kualitas premium. Sentuhan elegan untuk setiap momen.",
          "potentialAction": {
            "@type": "SearchAction",
            "target": "https://chelsea-dewa-perfume.com/products?search={search_term_string}",
            "query-input": "required name=search_term_string"
          }
        };

      case 'product':
        return {
          "@context": "https://schema.org",
          "@type": "Product",
          "name": data.name,
          "description": data.description,
          "image": data.image,
          "brand": {
            "@type": "Brand",
            "name": "Chelsea Dewa Perfume"
          },
          "offers": {
            "@type": "Offer",
            "price": data.price,
            "priceCurrency": "IDR",
            "availability": "https://schema.org/InStock"
          },
          "category": data.category
        };

      case 'breadcrumb':
        return {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": data.map((item: any, index: number) => ({
            "@type": "ListItem",
            "position": index + 1,
            "name": item.name,
            "item": item.url
          }))
        };

      default:
        return null;
    }
  };

  const structuredData = generateStructuredData();

  if (!structuredData) return null;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData)
      }}
    />
  );
}
