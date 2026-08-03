import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/metadata";
import { company } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";

export const metadata: Metadata = createPageMetadata(
  "Privacy Policy",
  "NitiPlay LLC privacy policy — how we collect, use, and protect your data across our mobile apps and website.",
  "/privacy"
);

const sections = [
  {
    title: "Introduction",
    content: `This Privacy Policy describes how ${company.name} ("we," "us," or "our") collects, uses, and shares information when you use our mobile applications, website, and related services. By using our services, you agree to the collection and use of information in accordance with this policy.`,
  },
  {
    title: "Information We Collect",
    content: `We may collect information you provide directly (such as name and email when contacting us), device information (device type, operating system, unique device identifiers), usage data (app interactions, crash reports, performance metrics), and analytics data to improve our apps and services. Our mobile apps may use third-party analytics and advertising SDKs that collect data in accordance with their respective privacy policies.`,
  },
  {
    title: "How We Use Information",
    content: `We use collected information to provide, maintain, and improve our apps and services; respond to inquiries and support requests; analyze usage patterns and optimize performance; comply with legal obligations; and communicate updates about our products, where permitted by law.`,
  },
  {
    title: "Data Sharing",
    content: `We do not sell your personal information. We may share data with service providers who assist in operating our apps (hosting, analytics, crash reporting), when required by law, or in connection with a business transfer. All third-party partners are required to handle data securely and in compliance with applicable regulations.`,
  },
  {
    title: "Children's Privacy",
    content: `Our services are not directed to children under 13 (or the applicable age in your jurisdiction). We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us and we will promptly delete it.`,
  },
  {
    title: "Your Rights",
    content: `Depending on your location, you may have rights to access, correct, delete, or port your personal data, and to opt out of certain processing. To exercise these rights, contact us at the email address below. EU/EEA residents may also lodge a complaint with their local data protection authority.`,
  },
  {
    title: "Data Security",
    content: `We implement appropriate technical and organizational measures to protect your information. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.`,
  },
  {
    title: "Changes to This Policy",
    content: `We may update this Privacy Policy from time to time. We will notify you of material changes by posting the updated policy on this page with a revised "Last updated" date. Continued use of our services after changes constitutes acceptance of the updated policy.`,
  },
  {
    title: "Contact Us",
    content: `If you have questions about this Privacy Policy or our data practices, please contact us at ${company.email}. ${company.name} is based in ${company.location}.`,
  },
];

export default function PrivacyPage() {
  const lastUpdated = "August 3, 2025";

  return (
    <>
      <section className="pt-32 pb-16 lg:pt-40">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Legal"
            title="Privacy Policy"
            description={`Last updated: ${lastUpdated}`}
            align="left"
          />
        </div>
      </section>

      <section className="pb-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {sections.map((section) => (
              <GlassCard key={section.title} hover={false}>
                <h2 className="font-display text-xl font-bold text-foreground">
                  {section.title}
                </h2>
                <p className="mt-3 text-muted leading-relaxed">{section.content}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
