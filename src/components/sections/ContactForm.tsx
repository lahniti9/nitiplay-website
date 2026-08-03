"use client";

import { useState, FormEvent } from "react";
import { Mail, MapPin, Send, CheckCircle } from "lucide-react";
import { company } from "@/lib/data";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 800));
    setLoading(false);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <GlassCard className="p-8 text-center sm:p-12">
        <CheckCircle
          className="mx-auto h-12 w-12 text-emerald-400"
          aria-hidden="true"
        />
        <h3 className="mt-4 font-display text-xl font-bold text-foreground">
          Message Sent!
        </h3>
        <p className="mt-2 text-muted">
          Thank you for reaching out. We&apos;ll get back to you within 24–48
          hours.
        </p>
      </GlassCard>
    );
  }

  return (
    <GlassCard className="p-8">
      <form onSubmit={handleSubmit} className="space-y-6" noValidate>
        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <label htmlFor="name" className="mb-2 block text-sm font-medium text-foreground">
              Name <span className="text-red-400">*</span>
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              autoComplete="name"
              className="w-full rounded-lg border border-border bg-surface px-4 py-3 text-foreground placeholder:text-muted/60 transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              placeholder="Your name"
            />
          </div>
          <div>
            <label htmlFor="email" className="mb-2 block text-sm font-medium text-foreground">
              Email <span className="text-red-400">*</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              autoComplete="email"
              className="w-full rounded-lg border border-border bg-surface px-4 py-3 text-foreground placeholder:text-muted/60 transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              placeholder="you@example.com"
            />
          </div>
        </div>

        <div>
          <label htmlFor="subject" className="mb-2 block text-sm font-medium text-foreground">
            Subject
          </label>
          <select
            id="subject"
            name="subject"
            className="w-full rounded-lg border border-border bg-surface px-4 py-3 text-foreground transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            defaultValue="general"
          >
            <option value="general">General Inquiry</option>
            <option value="partnership">Partnership / Publishing</option>
            <option value="support">App Support</option>
            <option value="press">Press & Media</option>
          </select>
        </div>

        <div>
          <label htmlFor="message" className="mb-2 block text-sm font-medium text-foreground">
            Message <span className="text-red-400">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            className="w-full resize-y rounded-lg border border-border bg-surface px-4 py-3 text-foreground placeholder:text-muted/60 transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            placeholder="Tell us about your project or question..."
          />
        </div>

        <Button type="submit" className={cn("w-full sm:w-auto", loading && "opacity-70")} disabled={loading}>
          {loading ? "Sending..." : "Send Message"}
          <Send className="h-4 w-4" aria-hidden="true" />
        </Button>
      </form>
    </GlassCard>
  );
}

export function ContactInfo() {
  return (
    <div className="space-y-6">
      <GlassCard>
        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg icon-surface">
            <Mail className="h-6 w-6 text-primary" aria-hidden="true" />
          </div>
          <div>
            <h3 className="font-semibold text-foreground">Email</h3>
            <a
              href={`mailto:${company.email}`}
              className="mt-1 text-muted transition-colors hover:text-primary"
            >
              {company.email}
            </a>
          </div>
        </div>
      </GlassCard>

      <GlassCard>
        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg icon-surface">
            <MapPin className="h-6 w-6 text-muted" aria-hidden="true" />
          </div>
          <div>
            <h3 className="font-semibold text-foreground">Location</h3>
            <p className="mt-1 text-muted">{company.location}</p>
          </div>
        </div>
      </GlassCard>

      <GlassCard>
        <h3 className="font-semibold text-foreground">Response Time</h3>
        <p className="mt-2 text-muted leading-relaxed">
          We typically respond within 24–48 business hours. For urgent app support
          issues, please include your app name and device details.
        </p>
      </GlassCard>
    </div>
  );
}
