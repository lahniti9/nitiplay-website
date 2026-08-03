import { SectionHeading } from "@/components/ui/SectionHeading";
import { FAQ } from "@/components/ui/FAQ";
import { faqs } from "@/lib/data";

export function FAQSection() {
  return (
    <section className="py-20 lg:py-28" aria-labelledby="faq-heading">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="FAQ"
          title="Common Questions"
          description="Everything you need to know about NitiPlay and our apps."
        />

        <div className="mt-12">
          <FAQ items={faqs} />
        </div>
      </div>
    </section>
  );
}
