import { Link, createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";

import { Reveal } from "@/components/Reveal";
import { projects } from "@/content";
import type { ProjectType } from "@/content/types";
import { dict, t, type Lang } from "@/lib/i18n";
import { localizedHead } from "@/lib/seo";

export const Route = createFileRoute("/$lang/projects/")({
  head: ({ params }) => {
    const lang = (params.lang as Lang) ?? "es";
    const m = (dict[lang] ?? dict.es).meta.projects;
    return localizedHead({ lang, path: "/projects", title: m.title, description: m.description });
  },
  component: ProjectsPage,
});

const TYPES: ProjectType[] = ["exhibition", "feria", "event", "research", "collaboration"];

function ProjectsPage() {
  const { lang } = Route.useParams();
  const l = lang as Lang;
  const d = dict[l] ?? dict.es;

  const [type, setType] = useState<ProjectType | "all">("all");
  const [year, setYear] = useState<number | "all">("all");

  const years = useMemo(
    () => Array.from(new Set(projects.map((p) => p.year))).sort((a, b) => b - a),
    [],
  );

  const list = projects
    .filter((p) => (type === "all" ? true : p.type === type))
    .filter((p) => (year === "all" ? true : p.year === year))
    .sort((a, b) => b.year - a.year);

  const chip = (active: boolean) =>
    `label transition-colors ${active ? "text-foreground underline underline-offset-8" : "text-muted-foreground hover:text-foreground"}`;

  return (
    <section className="mx-auto max-w-[1600px] px-5 py-12 md:px-10 md:py-24">
      <h1 className="display text-4xl sm:text-6xl md:text-8xl">{d.nav.projects}</h1>

      <div className="mt-8 space-y-4 border-y border-border py-5 md:mt-12" role="group" aria-label={d.common.filters}>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-3 sm:gap-5">
          <span className="label text-muted-foreground">{d.common.type}</span>
          <button type="button" onClick={() => setType("all")} className={chip(type === "all")} aria-pressed={type === "all"}>
            {d.common.all}
          </button>
          {TYPES.map((ty) => (
            <button key={ty} type="button" onClick={() => setType(ty)} className={chip(type === ty)} aria-pressed={type === ty}>
              {d.projectTypes[ty]}
            </button>
          ))}
        </div>
        <div className="flex flex-wrap items-center gap-5">
          <span className="label text-muted-foreground">{d.common.year}</span>
          <button type="button" onClick={() => setYear("all")} className={chip(year === "all")} aria-pressed={year === "all"}>
            {d.common.all}
          </button>
          {years.map((y) => (
            <button key={y} type="button" onClick={() => setYear(y)} className={chip(year === y)} aria-pressed={year === y}>
              {y}
            </button>
          ))}
        </div>
      </div>

      {list.length === 0 ? (
        <p className="mt-16 text-lg text-muted-foreground">{d.common.noResults}</p>
      ) : (
        <ul className="mt-16 grid gap-x-8 gap-y-16 md:grid-cols-2">
          {list.map((p) => (
            <Reveal as="li" key={p.id}>
              <Link to="/$lang/projects/$projectId" params={{ lang: l, projectId: p.id }} className="group block">
                <p className="label mb-2 text-muted-foreground">
                  {p.year} — {d.projectTypes[p.type]} — {t(p.location, l)}
                </p>
                <div className="overflow-hidden">
                  <img
                    src={p.cover}
                    alt={p.title}
                    width={1600}
                    height={1100}
                    loading="lazy"
                    className="aspect-[16/11] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                </div>
                <h2 className="mt-4 text-2xl tracking-tight md:text-3xl">{p.title}</h2>
                <p className="mt-2 max-w-prose text-sm text-muted-foreground opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  {t(p.intro, l)}
                </p>
              </Link>
            </Reveal>
          ))}
        </ul>
      )}
    </section>
  );
}
