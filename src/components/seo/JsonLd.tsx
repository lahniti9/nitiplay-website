import { company, founder } from "@/lib/data";

export function JsonLd() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://nitiplay.com";

  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: company.name,
    url: siteUrl,
    logo: `${siteUrl}/logo.png`,
    description: company.description,
    email: company.email,
    foundingDate: company.founded,
    founder: {
      "@type": "Person",
      name: founder.name,
      jobTitle: founder.role,
      image: `${siteUrl}${founder.image}`,
      nationality: "Morocco",
    },
    sameAs: [company.appStoreDeveloperUrl],
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: company.name,
    url: siteUrl,
    description: company.description,
    publisher: {
      "@type": "Organization",
      name: company.name,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
    </>
  );
}
