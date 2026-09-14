import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";

import { CONTACT_INFO, dict, t, type Lang } from "@/lib/i18n";
import { sendContactMessage } from "@/lib/send-contact";
import { localizedHead } from "@/lib/seo";

export const Route = createFileRoute("/$lang/contact")({
  head: ({ params }) => {
    const lang = (params.lang as Lang) ?? "es";
    const m = (dict[lang] ?? dict.es).meta.contact;
    return localizedHead({ lang, path: "/contact", title: m.title, description: m.description });
  },
  component: ContactPage,
});

type Errors = Partial<Record<"name" | "email" | "subject" | "message", string>>;

function ContactPage() {
  const { lang } = Route.useParams();
  const l = lang as Lang;
  const d = dict[l] ?? dict.es;

  const [errors, setErrors] = useState<Errors>({});
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [sendError, setSendError] = useState(false);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formEl = e.currentTarget;
    const form = new FormData(formEl);
    if (String(form.get("company") ?? "")) return; // honeypot

    const values = {
      name: String(form.get("name") ?? "").trim(),
      email: String(form.get("email") ?? "").trim(),
      subject: String(form.get("subject") ?? "").trim(),
      message: String(form.get("message") ?? "").trim(),
    };

    const next: Errors = {};
    (Object.keys(values) as Array<keyof typeof values>).forEach((k) => {
      if (!values[k]) next[k] = d.contact.errorRequired;
    });
    if (values.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) next.email = d.contact.errorEmail;
    setErrors(next);
    setSendError(false);
    setSent(false);
    if (Object.keys(next).length > 0) return;

    setSending(true);
    try {
      await sendContactMessage(values);
      setSent(true);
      formEl.reset();
    } catch {
      setSendError(true);
    } finally {
      setSending(false);
    }
  };

  const field = "mt-2 w-full border-b border-border bg-transparent py-3 text-lg outline-none focus:border-foreground";

  return (
    <section className="mx-auto max-w-[1600px] px-5 py-16 md:px-10 md:py-24">
      <h1 className="display text-6xl md:text-8xl">{d.nav.contact}</h1>

      <div className="mt-16 grid gap-16 md:grid-cols-12">
        <div className="md:col-span-4">
          <p className="text-lg leading-relaxed">{d.contact.collaboration}</p>
          <ul className="mt-10 border-t border-border">
            <li className="border-b border-border py-3">
              <a href={`mailto:${CONTACT_INFO.email}`} className="hover-underline text-lg">
                {CONTACT_INFO.email}
              </a>
            </li>
            <li className="border-b border-border py-3">
              <a href={CONTACT_INFO.instagramUrl} target="_blank" rel="noreferrer noopener" className="hover-underline text-lg">
                Instagram {CONTACT_INFO.instagram}
              </a>
            </li>
            <li className="border-b border-border py-3 text-lg text-muted-foreground">{t(CONTACT_INFO.location, l)}</li>
          </ul>
        </div>

        <form noValidate onSubmit={onSubmit} className="md:col-span-7 md:col-start-6">
          <input type="text" name="company" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <label htmlFor="name" className="label text-muted-foreground">
                {d.contact.formName}
              </label>
              <input id="name" name="name" className={field} />
              {errors.name && <p className="mt-2 text-sm text-muted-foreground">{errors.name}</p>}
            </div>
            <div>
              <label htmlFor="email" className="label text-muted-foreground">
                {d.contact.formEmail}
              </label>
              <input id="email" name="email" type="email" className={field} />
              {errors.email && <p className="mt-2 text-sm text-muted-foreground">{errors.email}</p>}
            </div>
          </div>

          <div className="mt-8">
            <label htmlFor="subject" className="label text-muted-foreground">
              {d.contact.formSubject}
            </label>
            <input id="subject" name="subject" className={field} />
            {errors.subject && <p className="mt-2 text-sm text-muted-foreground">{errors.subject}</p>}
          </div>

          <div className="mt-8">
            <label htmlFor="message" className="label text-muted-foreground">
              {d.contact.formMessage}
            </label>
            <textarea id="message" name="message" rows={6} className={`${field} resize-none`} />
            {errors.message && <p className="mt-2 text-sm text-muted-foreground">{errors.message}</p>}
          </div>

          <button
            type="submit"
            disabled={sending}
            className="label mt-10 border border-foreground px-8 py-4 transition-colors hover:bg-foreground hover:text-background disabled:opacity-50"
          >
            {sending ? d.contact.sending : d.contact.send}
          </button>

          <p aria-live="polite" className="mt-6 text-lg">
            {sent ? d.contact.success : sendError ? d.contact.errorSend : ""}
          </p>
        </form>
      </div>
    </section>
  );
}
