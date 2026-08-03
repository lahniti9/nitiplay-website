import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/metadata";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ContactForm, ContactInfo } from "@/components/sections/ContactForm";

export const metadata: Metadata = createPageMetadata(
  "Contact",
  "Get in touch with NitiPlay LLC for partnerships, publishing inquiries, or app support.",
  "/contact"
);

export default function ContactPage() {
  return (
    <>
      <section className="pt-32 pb-16 lg:pt-40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Contact"
            title="Let's Build Together"
            description="Have a game to publish, a utility to build, or just want to say hello? We'd love to hear from you."
          />
        </div>
      </section>

      <section className="pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-5">
            <div className="lg:col-span-3">
              <ContactForm />
            </div>
            <div className="lg:col-span-2">
              <ContactInfo />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
