import { Link, createFileRoute } from "@tanstack/react-router";

import { Reveal } from "@/components/Reveal";
import { artists } from "@/content";
import { dict, t, type Lang } from "@/lib/i18n";
import { localizedHead } from "@/lib/seo";

export const Route = createFileRoute("/$lang/artists/")({
  head: ({ params }) => {
    const lang = (params.lang as Lang) ?? "es";
    const m = (dict[lang] ?? dict.es).meta.artists;
    return localizedHead({ lang, path: "/artists", title: m.title, description: m.description });
  },
  component: ArtistsPage,
});

/** Vertical offsets create the staggered archive rhythm of the reference layout. */
const offsets = ["mt-0", "mt-16", "mt-8", "mt-24", "mt-4", "mt-20"];

function ArtistsPage() {
  const { lang } = Route.useParams();
  const l = lang as Lang;
  const d = dict[l] ?? dict.es;

  return (
    <section className="mx-auto max-w-[1600px] px-5 py-12 md:px-10 md:py-24">
      <h1 className="display text-4xl sm:text-6xl md:text-8xl">{d.nav.artists}</h1>

      <ul className="mt-10 grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 sm:gap-y-12 md:mt-16 md:grid-cols-3 lg:gap-x-10">
        {artists.map((a, i) => (
          <Reveal as="li" key={a.id} className={`lg:${offsets[i % offsets.length]}`}>
            <Link to="/$lang/artists/$artistId" params={{ lang: l, artistId: a.id }} className="group block">
              <p className="label mb-2 leading-snug">{a.name}</p>
              <div className="overflow-hidden">
                <img
                  src={a.portrait}
                  alt={`Retrato de ${a.name}`}
                  width={1024}
                  height={1280}
                  loading="lazy"
                  className="w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  style={{ aspectRatio: i % 3 === 1 ? "4 / 3" : "4 / 5" }}
                />
              </div>
              <p className="mt-2 text-sm text-muted-foreground">{t(a.city, l)}</p>
              <p className="text-sm text-muted-foreground">{t(a.practice, l)}</p>
            </Link>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}
