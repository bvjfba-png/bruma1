import { Link, createFileRoute, notFound } from "@tanstack/react-router";

import { Reveal } from "@/components/Reveal";
import { getArtist, projectsByArtist, worksByArtist } from "@/content";
import { dict, t, type Lang } from "@/lib/i18n";
import { localizedHead } from "@/lib/seo";

export const Route = createFileRoute("/$lang/artists/$artistId")({
  loader: ({ params }) => {
    const artist = getArtist(params.artistId);
    if (!artist) throw notFound();
    return { artistId: artist.id };
  },
  head: ({ params }) => {
    const lang = (params.lang as Lang) ?? "es";
    const artist = getArtist(params.artistId);
    if (!artist) {
      return {
        meta: [{ title: "Foundation Bruma" }, { name: "robots", content: "noindex" }],
      };
    }
    return localizedHead({
      lang,
      path: `/artists/${artist.id}`,
      title: `${artist.name} — Foundation Bruma`,
      description: t(artist.short, lang),
      type: "profile",
    });
  },
  component: ArtistPage,
});

function ArtistPage() {
  const { lang, artistId } = Route.useParams();
  const l = lang as Lang;
  const d = dict[l] ?? dict.es;
  const artist = getArtist(artistId)!;
  const works = worksByArtist(artistId);
  const related = projectsByArtist(artistId);

  const info: Array<[string, string]> = [
    [d.common.year, String(artist.birthYear)],
    [d.common.location, t(artist.city, l)],
    ["Practice", t(artist.practice, l)],
    ["Media", t(artist.media, l)],
  ];

  return (
    <article className="mx-auto max-w-[1600px] px-5 py-12 md:px-10 md:py-24">
      <Link to="/$lang/artists" params={{ lang: l }} className="label hover-underline text-muted-foreground">
        ← {d.nav.artists}
      </Link>

      <h1 className="display mt-6 text-4xl sm:text-6xl md:mt-8 md:text-8xl">{artist.name}</h1>

      <div className="mt-10 grid gap-10 md:mt-16 md:grid-cols-12 md:gap-12">
        <div className="md:col-span-5 lg:col-span-4">
          <img
            src={artist.portrait}
            alt={`Retrato de ${artist.name}`}
            width={1024}
            height={1280}
            className="aspect-[4/5] w-full object-cover"
          />
          <dl className="mt-6 border-t border-border">
            {info.map(([k, v]) => (
              <div key={k} className="flex flex-col gap-1 border-b border-border py-3 sm:flex-row sm:justify-between sm:gap-6">
                <dt className="label text-muted-foreground">{k}</dt>
                <dd className="text-sm sm:text-right">{v}</dd>
              </div>
            ))}
          </dl>
          <div className="mt-6">
            <h2 className="label text-muted-foreground">{d.common.links}</h2>
            <ul className="mt-2 space-y-1">
              {artist.website && (
                <li>
                  <a href={artist.website} target="_blank" rel="noreferrer noopener" className="text-sm hover-underline">
                    Website
                  </a>
                </li>
              )}
              {artist.instagram && (
                <li>
                  <a href="https://instagram.com/" target="_blank" rel="noreferrer noopener" className="text-sm hover-underline">
                    Instagram {artist.instagram}
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>

        <div className="md:col-span-7 lg:col-span-7 lg:col-start-6">
          <h2 className="label text-muted-foreground">{d.common.bio}</h2>
          <p className="mt-3 text-lg leading-relaxed md:text-xl">{t(artist.bio, l)}</p>

          <h2 className="label mt-12 text-muted-foreground">{d.common.statement}</h2>
          <p className="mt-3 text-xl leading-snug tracking-tight md:text-3xl">{t(artist.statement, l)}</p>
        </div>
      </div>

      <Reveal as="section" className="mt-24">
        <h2 className="display text-4xl md:text-6xl">{d.common.selectedWorks}</h2>
        <ul className="mt-10 grid gap-12 md:grid-cols-3">
          {works.map((w) => (
            <li key={w.id}>
              <img
                src={w.image}
                alt={`${artist.name}. ${w.title}, ${w.year}`}
                width={1400}
                height={1600}
                loading="lazy"
                className="w-full object-cover"
              />
              <div className="mt-3">
                <p className="label">{w.title}</p>
                <p className="text-sm text-muted-foreground">{w.year}</p>
                <p className="text-sm text-muted-foreground">{t(w.technique, l)}</p>
                <p className="text-sm text-muted-foreground">{w.dimensions}</p>
              </div>
            </li>
          ))}
        </ul>
      </Reveal>

      {related.length > 0 && (
        <Reveal as="section" className="mt-24 border-t border-border pt-10">
          <h2 className="label text-muted-foreground">{d.common.relatedProjects}</h2>
          <ul className="mt-6 grid gap-8 md:grid-cols-3">
            {related.map((p) => (
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
                </Link>
              </li>
            ))}
          </ul>
        </Reveal>
      )}
    </article>
  );
}
