import { Link, createFileRoute } from "@tanstack/react-router";

import { Reveal } from "@/components/Reveal";
import { IMAGES, artists, projects } from "@/content";
import { about, activities } from "@/content/about";
import { dict, type Lang, CONTACT_INFO, t } from "@/lib/i18n";
import { localizedHead } from "@/lib/seo";

export const Route = createFileRoute("/$lang/")({
  head: ({ params }) => {
    const lang = (params.lang as Lang) ?? "es";
    const m = (dict[lang] ?? dict.es).meta.home;
    return localizedHead({ lang, path: "/", title: m.title, description: m.description });
  },
  component: HomePage,
});

function HomePage() {
  const { lang } = Route.useParams();
  const l = lang as Lang;
  const d = dict[l] ?? dict.es;
  const a = about[l] ?? about.es;
  const featured = artists.slice(0, 6);
  const recent = projects.slice(0, 3);

  return (
    <>
      <section className="mx-auto max-w-[1600px] px-5 pt-16 pb-10 md:px-10 md:pt-24">
        <h1 className="display text-[19vw] leading-[0.82] md:text-[15vw]">BRUMA</h1>
        <p className="label mt-6 max-w-lg text-muted-foreground">
          Migration · Memory · Identity · Transformation · Liminality · Archive
        </p>
      </section>

      <figure className="mx-auto max-w-[1600px] px-5 md:px-10">
        <img
          src={IMAGES.work1}
          alt="Vista de sala con pinturas de niebla en una galería blanca"
          width={1600}
          height={1100}
          className="w-full object-cover"
        />
        <figcaption className="label mt-3 text-muted-foreground">
          BRUMA CERO, 2026 — Villa Crespo, Buenos Aires
        </figcaption>
      </figure>

      <Reveal as="section" className="mx-auto max-w-[1600px] px-5 py-24 md:px-10">
        <div className="grid gap-10 md:grid-cols-12">
          <h2 className="label md:col-span-3">{a.heading}</h2>
          <div className="md:col-span-9">
            <p className="text-2xl leading-snug tracking-tight md:text-4xl">{a.lead}</p>
            <Link to="/$lang/about" params={{ lang: l }} className="label mt-8 inline-block hover-underline">
              {d.common.learnMore} →
            </Link>
          </div>
        </div>
      </Reveal>

      <Reveal as="section" className="mx-auto max-w-[1600px] px-5 pb-24 md:px-10">
        <div className="flex items-baseline justify-between gap-6 border-t border-border pt-10">
          <h2 className="display text-5xl md:text-7xl">{d.nav.artists}</h2>
          <Link to="/$lang/artists" params={{ lang: l }} className="label hover-underline">
            {d.common.viewAllArtists} →
          </Link>
        </div>

        <ul className="mt-12 grid grid-cols-2 gap-x-6 gap-y-14 md:grid-cols-3 lg:grid-cols-6">
          {featured.map((artist) => (
            <li key={artist.id}>
              <Link to="/$lang/artists/$artistId" params={{ lang: l, artistId: artist.id }} className="group block">
                <p className="label mb-2">{artist.name}</p>
                <div className="overflow-hidden">
                  <img
                    src={artist.portrait}
                    alt={`Retrato de ${artist.name}`}
                    width={1024}
                    height={1280}
                    loading="lazy"
                    className="aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </Reveal>

      <Reveal as="section" className="mx-auto max-w-[1600px] px-5 pb-24 md:px-10">
        <div className="flex items-baseline justify-between gap-6 border-t border-border pt-10">
          <h2 className="display text-5xl md:text-7xl">{d.nav.projects}</h2>
          <Link to="/$lang/projects" params={{ lang: l }} className="label hover-underline">
            {d.common.all} →
          </Link>
        </div>
        <ul className="mt-12 grid gap-12 md:grid-cols-3">
          {recent.map((p) => (
            <li key={p.id}>
              <Link to="/$lang/projects/$projectId" params={{ lang: l, projectId: p.id }} className="group block">
                <p className="label mb-2">
                  {p.year} — {d.projectTypes[p.type]}
                </p>
                <div className="overflow-hidden">
                  <img
                    src={p.cover}
                    alt={p.title}
                    width={1600}
                    height={1100}
                    loading="lazy"
                    className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                </div>
                <h3 className="mt-3 text-xl tracking-tight">{p.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{p.location[l]}</p>
              </Link>
            </li>
          ))}
        </ul>
      </Reveal>

      <Reveal as="section" className="border-t border-border">
        <div className="mx-auto max-w-[1600px] px-5 py-24 md:px-10">
          <Link to="/$lang/contact" params={{ lang: l }} className="display block text-8xl hover-underline md:text-10xl">
            {d.common.getInTouch} →
          </Link>
        </div>
      </Reveal>
    </>
  );
}
