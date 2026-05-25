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

export function ContactConsultation({ showTitle = true }: ContactConsultationProps) {
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
            <form className="space-y-5" action="#" method="post">
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
                <div className="consultation-form__field">
                  <label className="consultation-form__label" htmlFor="contact-message">
                    {formFields.message.label}
                  </label>
                  <input
                    id="contact-message"
                    name="message"
                    type="text"
                    className="consultation-form__input"
                    placeholder={formFields.message.placeholder}
                  />
                </div>
              </div>
              <p className="text-xs leading-relaxed text-foreground-subtle">{contactPage.kvkk}</p>
              <Button type="button" size="lg" className="btn-premium w-full sm:w-auto">
                {contactPage.submit}
              </Button>
              <p className="text-xs text-foreground-subtle">
                Form entegrasyonu yakında aktif. Şimdilik{" "}
                <a href={`mailto:${site.email}`} className="link-interactive text-accent-bright">
                  {site.email}
                </a>{" "}
                veya telefon ile ulaşabilirsiniz.
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
