import { CONTACT_INFO } from "@/lib/i18n";

export type ContactPayload = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type FormSubmitResponse = {
  success?: string | boolean;
  message?: string;
};

export async function sendContactMessage(payload: ContactPayload): Promise<{ ok: true }> {
  const response = await fetch(`https://formsubmit.co/ajax/${CONTACT_INFO.email}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      name: payload.name,
      email: payload.email,
      subject: payload.subject,
      message: payload.message,
      _replyto: payload.email,
      _subject: `Foundation Bruma — ${payload.subject}`,
      _template: "table",
      _captcha: "false",
    }),
  });

  const data = (await response.json().catch(() => null)) as FormSubmitResponse | null;
  if (!response.ok || !data) {
    throw new Error("send_failed");
  }

  const success = data.success === true || data.success === "true";
  const activationPending =
    typeof data.message === "string" && /activat/i.test(data.message);

  // First submission to a new address asks FormSubmit to email an activation link.
  // Treat that as accepted so the visitor still gets a success state.
  if (success || activationPending) {
    return { ok: true };
  }

  throw new Error(data.message || "send_failed");
}
