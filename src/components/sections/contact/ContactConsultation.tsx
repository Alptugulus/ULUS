"use client";

import { useState, type FormEvent } from "react";
import { site } from "@/content/site";
import { consultationMicrocopy, consultationSteps } from "@/content/agency";
import {
  contactPage,
  formFields,
  serviceOptions,
  whatsappCtaLabel,
  whatsappHref,
} from "@/content/microcopy";
import { Button } from "@/components/ui/Button";

interface ContactConsultationProps {
  showTitle?: boolean;
}

type SubmitState = "idle" | "error" | "sent";

export function ContactConsultation({ showTitle = true }: ContactConsultationProps) {
  const [status, setStatus] = useState<SubmitState>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    if (!name || !message) {
      setStatus("error");
      setErrorMessage("Lütfen ad soyad ve proje bilgisi alanlarını doldurun.");
      return;
    }
    if (!phone && !email) {
      setStatus("error");
      setErrorMessage("Size ulaşabilmemiz için telefon veya e-posta bilgisi gerekli.");
      return;
    }

    const company = String(data.get("company") ?? "").trim();
    const service = String(data.get("service") ?? "").trim();

    const bodyLines = [
      `Ad Soyad: ${name}`,
      company && `Firma / Marka: ${company}`,
      phone && `Telefon: ${phone}`,
      email && `E-posta: ${email}`,
      service && `İlgilendiği hizmet: ${service}`,
      "",
      "Proje hakkında:",
      message,
    ].filter(Boolean);

    const mailto = `mailto:${site.email}?subject=${encodeURIComponent(
      `Görüşme talebi — ${name}`
    )}&body=${encodeURIComponent(bodyLines.join("\n"))}`;

    setStatus("sent");
    setErrorMessage("");
    window.location.href = mailto;
  }

  return (
    <div className="consultation-scene">
      {showTitle && (
        <>
          <p className="text-overline mb-4">PROJE BAŞLAT</p>
          <div className="divider-tagline mb-6 max-w-xs" />
          <h1 className="text-display max-w-2xl">{contactPage.title}</h1>
          <p className="text-body-lg mt-5 max-w-xl">{contactPage.description}</p>
        </>
      )}

      <div className="mt-12 grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14 lg:items-start">
        <div className="consultation-panel">
          <div className="consultation-panel__glow" aria-hidden />
          <div className="relative z-10">
            <p className="label-chip mb-6">Görüşme talebi</p>
            <form className="space-y-5" onSubmit={handleSubmit} noValidate>
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="consultation-form__field sm:col-span-2">
                  <label className="consultation-form__label" htmlFor="contact-name">
                    {formFields.name.label}
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    className="consultation-form__input"
                    placeholder={formFields.name.placeholder}
                    autoComplete="name"
                    required
                  />
                </div>
                <div className="consultation-form__field">
                  <label className="consultation-form__label" htmlFor="contact-company">
                    {formFields.company.label}
                  </label>
                  <input
                    id="contact-company"
                    name="company"
                    type="text"
                    className="consultation-form__input"
                    placeholder={formFields.company.placeholder}
                  />
                </div>
                <div className="consultation-form__field">
                  <label className="consultation-form__label" htmlFor="contact-phone">
                    {formFields.phone.label}
                  </label>
                  <input
                    id="contact-phone"
                    name="phone"
                    type="tel"
                    className="consultation-form__input"
                    placeholder={formFields.phone.placeholder}
                    autoComplete="tel"
                  />
                </div>
                <div className="consultation-form__field sm:col-span-2">
                  <label className="consultation-form__label" htmlFor="contact-email">
                    {formFields.email.label}
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    className="consultation-form__input"
                    placeholder={formFields.email.placeholder}
                    autoComplete="email"
                  />
                </div>
                <div className="consultation-form__field">
                  <label className="consultation-form__label" htmlFor="contact-service">
                    {formFields.service.label}
                  </label>
                  <select
                    id="contact-service"
                    name="service"
                    className="consultation-form__input consultation-form__select"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      {formFields.service.placeholder}
                    </option>
                    {serviceOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="consultation-form__field sm:col-span-2">
                  <label className="consultation-form__label" htmlFor="contact-message">
                    {formFields.message.label}
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={4}
                    className="consultation-form__input consultation-form__textarea"
                    placeholder={formFields.message.placeholder}
                    required
                  />
                </div>
              </div>
              <p className="text-xs leading-relaxed text-foreground-subtle">{contactPage.kvkk}</p>
              <Button type="submit" size="lg" className="btn-premium w-full sm:w-auto">
                {contactPage.submit}
              </Button>
              <div role="status" aria-live="polite">
                {status === "error" && (
                  <p className="text-xs text-red-400">{errorMessage}</p>
                )}
                {status === "sent" && (
                  <p className="text-xs text-accent-bright">{contactPage.success}</p>
                )}
              </div>
              <p className="text-xs text-foreground-subtle">
                Form, e-posta uygulamanızı önceden doldurulmuş bir taslakla açar. Doğrudan yazmak isterseniz{" "}
                <a href={`mailto:${site.email}`} className="link-interactive text-accent-bright">
                  {site.email}
                </a>{" "}
                adresine ulaşabilirsiniz.
              </p>
            </form>
          </div>
        </div>

        <aside className="space-y-8">
          <div>
            <p className="label-chip mb-4">Süreç</p>
            <div className="consultation-steps">
              {consultationSteps.map((step) => (
                <div key={step.step} className="consultation-step">
                  <span className="consultation-step__num">{step.step}</span>
                  <div>
                    <p className="consultation-step__title">{step.title}</p>
                    <p className="consultation-step__desc">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="consultation-aside__channels">
            <div>
              <p className="text-overline mb-1.5">Doğrudan iletişim</p>
              <a href={site.phoneHref} className="link-interactive text-lg text-foreground">
                {site.phone}
              </a>
            </div>
            <div>
              <p className="text-overline mb-1.5">E-posta</p>
              <a href={`mailto:${site.email}`} className="link-interactive text-lg text-foreground">
                {site.email}
              </a>
            </div>
            <Button href={whatsappHref} variant="secondary" size="lg" external className="w-full">
              {whatsappCtaLabel}
            </Button>
          </div>

          <p className="microcopy-row text-sm">{consultationMicrocopy}</p>
        </aside>
      </div>
    </div>
  );
}
