import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { company, navLinks } from "@/lib/data";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-border bg-[rgba(5,5,8,0.72)] backdrop-blur-md" role="contentinfo">
      <div className="pointer-events-none absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Logo size="md" />
            <p className="mt-4 max-w-md text-muted leading-relaxed">
              {company.description}
            </p>
            <p className="mt-4 text-sm text-muted">
              Founded by{" "}
              <span className="text-foreground font-medium">Ismail Lahniti</span>
              {" · "}
              {company.location}
            </p>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-foreground">
              Navigation
            </h3>
            <ul className="mt-4 space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-foreground">
              Legal
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <Link
                  href="/privacy"
                  className="text-muted transition-colors hover:text-foreground"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <a
                  href="/ff4-tool/privacy.html"
                  className="text-muted transition-colors hover:text-foreground"
                >
                  FF4 Tool Privacy
                </a>
              </li>
              <li>
                <a
                  href="/ff4-tool/"
                  className="text-muted transition-colors hover:text-foreground"
                >
                  FF4 Tool Support
                </a>
              </li>
              <li>
                <a
                  href={company.appStoreDeveloperUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted transition-colors hover:text-foreground"
                >
                  App Store Developer Page
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${company.email}`}
                  className="text-muted transition-colors hover:text-foreground"
                >
                  {company.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="text-sm text-muted">
            © {currentYear} {company.name}. All rights reserved.
          </p>
          <p className="text-sm text-muted">
            Crafted with precision for gamers worldwide.
          </p>
        </div>
      </div>
    </footer>
  );
}
