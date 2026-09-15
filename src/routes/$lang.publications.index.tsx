import { Link, createFileRoute } from "@tanstack/react-router";

import { Reveal } from "@/components/Reveal";
import { publications } from "@/content";
import { dict, t, type Lang } from "@/lib/i18n";
import { localizedHead } from "@/lib/seo";

export const Route = createFileRoute("/$lang/publications/")({
  head: ({ params }) => {
    const lang = (params.lang as Lang) ?? "es";
    const m = (dict[lang] ?? dict.es).meta.publications;
    return localizedHead({ lang, path: "/publications", title: m.title, description: m.description });
  },
  component: PublicationsPage,
});

function PublicationsPage() {
  const { lang } = Route.useParams();
  const l = lang as Lang;
  const d = dict[l] ?? dict.es;

  return (
    <section className="mx-auto max-w-[1600px] px-5 py-12 md:px-10 md:py-24">
      <h1 className="display text-4xl sm:text-6xl md:text-8xl">{d.nav.publications}</h1>

      <ul className="mt-16 border-t border-border">
        {[...publications]
          .sort((a, b) => b.year - a.year)
          .map((p) => (
            <Reveal as="li" key={p.id} className="border-b border-border">
              <Link
                to="/$lang/publications/$publicationId"
                params={{ lang: l, publicationId: p.id }}
                className="group grid gap-6 py-10 md:grid-cols-12"
              >
                <div className="overflow-hidden md:col-span-3">
                  <img
                    src={p.cover}
                    alt={t(p.title, l)}
                    width={1400}
                    height={1000}
                    loading="lazy"
                    className="aspect-[7/5] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="md:col-span-8 md:col-start-5">
                  <p className="label text-muted-foreground">
                    {p.year} — {t(p.kind, l)} — {p.author}
                  </p>
                  <h2 className="mt-3 text-2xl tracking-tight md:text-4xl">{t(p.title, l)}</h2>
                  <p className="mt-3 max-w-prose text-sm text-muted-foreground">{t(p.excerpt, l)}</p>
                  <span className="label mt-4 inline-block hover-underline">{d.common.readMore}</span>
                </div>
              </Link>
            </Reveal>
          ))}
      </ul>
    </section>
  );
}
