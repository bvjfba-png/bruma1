import { Link, createFileRoute } from "@tanstack/react-router";

import { Reveal } from "@/components/Reveal";
import { getProject, press } from "@/content";
import { LOCALE_TAG, dict, t, type Lang } from "@/lib/i18n";
import { localizedHead } from "@/lib/seo";

export const Route = createFileRoute("/$lang/press")({
  head: ({ params }) => {
    const lang = (params.lang as Lang) ?? "es";
    const m = (dict[lang] ?? dict.es).meta.press;
    return localizedHead({ lang, path: "/press", title: m.title, description: m.description });
  },
  component: PressPage,
});

function PressPage() {
  const { lang } = Route.useParams();
  const l = lang as Lang;
  const d = dict[l] ?? dict.es;

  const formatted = (date: string) =>
    new Intl.DateTimeFormat(LOCALE_TAG[l], { year: "numeric", month: "long", day: "numeric" }).format(new Date(date));

  return (
    <section className="mx-auto max-w-[1600px] px-5 py-12 md:px-10 md:py-24">
      <h1 className="display text-4xl sm:text-6xl md:text-8xl">{d.nav.press}</h1>

      <ul className="mt-16 border-t border-border">
        {[...press]
          .sort((a, b) => (a.date < b.date ? 1 : -1))
          .map((item) => {
            const project = item.projectId ? getProject(item.projectId) : undefined;
            return (
              <Reveal as="li" key={item.id} className="border-b border-border">
                <div className="grid gap-6 py-10 md:grid-cols-12">
                  <div className="overflow-hidden md:col-span-3">
                    <img
                      src={item.image}
                      alt={t(item.title, l)}
                      width={1400}
                      height={1000}
                      loading="lazy"
                      className="aspect-[7/5] w-full object-cover"
                    />
                  </div>
                  <div className="md:col-span-8 md:col-start-5">
                    <p className="label text-muted-foreground">
                      {item.outlet} — {formatted(item.date)}
                    </p>
                    <h2 className="mt-3 text-2xl tracking-tight md:text-3xl">{t(item.title, l)}</h2>
                    {project && (
                      <Link
                        to="/$lang/projects/$projectId"
                        params={{ lang: l, projectId: project.id }}
                        className="label mt-3 inline-block hover-underline text-muted-foreground"
                      >
                        {project.title}
                      </Link>
                    )}
                    <div className="mt-4">
                      <a href={item.url} target="_blank" rel="noreferrer noopener" className="label hover-underline">
                        {d.common.externalLink} ↗
                      </a>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
      </ul>
    </section>
  );
}
