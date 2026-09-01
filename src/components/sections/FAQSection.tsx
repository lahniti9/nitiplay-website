import { SectionHeading } from "@/components/ui/SectionHeading";
import { FAQ } from "@/components/ui/FAQ";
import { faqs } from "@/lib/data";

export function FAQSection() {
  return (
    <section className="py-16 lg:py-24" aria-labelledby="faq-heading">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          id="faq-heading"
          eyebrow="FAQ"
          title="Quick answers"
          description="The basics about NitiPlay, our apps, and how to get in touch."
        />

        <div className="mt-12">
          <FAQ items={faqs} />
        </div>
      </div>
    </section>
  );
}
