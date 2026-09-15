import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useId, useState } from "react";

import { LANGS, dict, type Lang } from "@/lib/i18n";

const navItems = (lang: Lang) => {
  const d = dict[lang].nav;
  return [
    { to: "/$lang/about", label: d.about },
    { to: "/$lang/artists", label: d.artists },
    { to: "/$lang/projects", label: d.projects },
    { to: "/$lang/press", label: d.press },
    { to: "/$lang/contact", label: d.contact },
  ] as const;
};

export function LanguageSwitcher({ lang, className = "" }: { lang: Lang; className?: string }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const rest = pathname.replace(/^\/(es|en|ru)/, "");

  return (
    <div className={`label flex items-center gap-3 ${className}`} aria-label={dict[lang].common.language}>
      {LANGS.map((l) => (
        <a
          key={l}
          href={`/${l}${rest}`}
          hrefLang={l}
          aria-current={l === lang ? "true" : undefined}
          className={l === lang ? "text-foreground" : "text-muted-foreground hover:text-foreground transition-colors"}
        >
          {l.toUpperCase()}
        </a>
      ))}
    </div>
  );
}

function HamburgerIcon({ open }: { open: boolean }) {
  return (
    <span className="relative block h-3.5 w-5" aria-hidden="true">
      <span
        className={`absolute left-0 top-0 block h-px w-full bg-foreground transition-transform duration-300 ${
          open ? "translate-y-[7px] rotate-45" : ""
        }`}
      />
      <span
        className={`absolute left-0 top-[7px] block h-px w-full bg-foreground transition-opacity duration-300 ${
          open ? "opacity-0" : "opacity-100"
        }`}
      />
      <span
        className={`absolute left-0 top-[14px] block h-px w-full bg-foreground transition-transform duration-300 ${
          open ? "-translate-y-[7px] -rotate-45" : ""
        }`}
      />
    </span>
  );
}

export function SiteHeader({ lang }: { lang: Lang }) {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const menuId = useId();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const items = navItems(lang);
  const d = dict[lang];

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-[1600px] items-center justify-between gap-4 px-5 py-4 md:gap-6 md:px-10">
        <div className="flex min-w-0 items-center gap-3 sm:gap-4">
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls={menuId}
            aria-label={open ? d.common.close : d.common.menu}
            className="inline-flex h-10 w-10 shrink-0 items-center justify-center lg:hidden"
          >
            <HamburgerIcon open={open} />
          </button>

          <Link
            to="/$lang"
            params={{ lang }}
            className="label truncate text-foreground"
            aria-label="Foundation Bruma"
          >
            Foundation Bruma
          </Link>
        </div>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Main">
          {items.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              params={{ lang }}
              activeOptions={{ exact: "exact" in item }}
              className="label text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "label text-foreground" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <LanguageSwitcher lang={lang} className="shrink-0" />
      </div>

      <div
        id={menuId}
        className={`border-t border-border lg:hidden ${open ? "block" : "hidden"}`}
        hidden={!open}
      >
        <nav aria-label="Mobile" className="mx-auto max-w-[1600px] px-5 py-2 md:px-10">
          <ul>
            {items.map((item) => (
              <li key={item.to} className="border-b border-border last:border-0">
                <Link
                  to={item.to}
                  params={{ lang }}
                  className="block py-4 text-2xl tracking-tight"
                  activeProps={{ className: "block py-4 text-2xl tracking-tight underline underline-offset-8" }}
                  activeOptions={{ exact: "exact" in item }}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
