import { Link } from "@tanstack/react-router";

import { CONTACT_INFO, dict, t, type Lang } from "@/lib/i18n";
import { LanguageSwitcher } from "./SiteHeader";

export function SiteFooter({ lang }: { lang: Lang }) {
  const d = dict[lang];

  return (
    <footer className="border-t border-border">
      <div className="mx-auto grid max-w-[1600px] gap-10 px-5 py-14 md:grid-cols-12 md:px-10">
        <div className="md:col-span-4">
          <p className="display text-4xl md:text-5xl">BRUMA</p>
          <p className="mt-4 max-w-xs text-sm text-muted-foreground">{t(CONTACT_INFO.location, lang)}</p>
        </div>

        <nav className="md:col-span-3" aria-label="Footer">
          <ul className="space-y-2">
            {[
              { to: "/$lang/about" as const, label: d.nav.about },
              { to: "/$lang/artists" as const, label: d.nav.artists },
              { to: "/$lang/projects" as const, label: d.nav.projects },
              { to: "/$lang/press" as const, label: d.nav.press },
              { to: "/$lang/contact" as const, label: d.nav.contact },
            ].map((i) => (
              <li key={i.to}>
                <Link to={i.to} params={{ lang }} className="label hover-underline text-muted-foreground hover:text-foreground">
                  {i.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="md:col-span-3">
          <ul className="space-y-2">
            <li>
              <a href={`mailto:${CONTACT_INFO.email}`} className="label hover-underline break-all">
                {CONTACT_INFO.email}
              </a>
            </li>
            <li>
              <a href={CONTACT_INFO.instagramUrl} target="_blank" rel="noreferrer noopener" className="label hover-underline">
                Instagram {CONTACT_INFO.instagram}
              </a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between sm:gap-6 md:col-span-2 md:flex-col md:items-end">
          <LanguageSwitcher lang={lang} />
          <p className="label text-muted-foreground">© {new Date().getFullYear()} Foundation Bruma</p>
        </div>
      </div>
    </footer>
  );
}
