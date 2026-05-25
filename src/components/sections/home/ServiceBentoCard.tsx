import Link from "next/link";
import type { CaseStudyMetric } from "@/types/content";

const SERVICE_ICONS = [
  <svg key="web" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
    <rect x="3" y="4" width="18" height="14" rx="2" />
    <path d="M3 9h18" />
  </svg>,
  <svg key="ads" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
    <path d="M3 17l6-6 4 4 8-10" />
    <path d="M14 5h7v7" />
  </svg>,
  <svg key="social" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
    <circle cx="12" cy="12" r="9" />
    <path d="M8 12h8M12 8v8" />
  </svg>,
  <svg key="brand" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
    <path d="M12 2l2 6h6l-5 4 2 6-5-4-5 4 2-6-5-4h6z" />
  </svg>,
];

interface ServiceBentoCardProps {
  index: number;
  title: string;
  lead: string;
  tags: string[];
  highlights: string[];
  metric?: CaseStudyMetric;
  href: string;
  ctaLabel: string;
}

export function ServiceBentoCard({
  index,
  title,
  lead,
  tags,
  highlights,
  metric,
  href,
  ctaLabel,
}: ServiceBentoCardProps) {
  return (
    <Link href={href} className="template-card group">
      <div className="template-card__body">
        <div className="template-card__meta">
          <span className="template-card__index">{String(index + 1).padStart(2, "0")}</span>
          <span className="template-card__icon">{SERVICE_ICONS[index]}</span>
        </div>

        <h3 className="template-card__title">{title}</h3>
        <p className="template-card__desc">{lead}</p>

        <ul className="template-card__list">
          {highlights.slice(0, 2).map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <div className="template-card__footer">
          <div className="template-card__tags">
            {tags.slice(0, 3).map((tag) => (
              <span key={tag} className="template-card__tag">
                {tag}
              </span>
            ))}
          </div>
          {metric && (
            <div className="template-card__metric">
              <span className="template-card__metric-value">{metric.value}</span>
              <span className="template-card__metric-label">{metric.label}</span>
            </div>
          )}
        </div>

        <span className="template-card__link">
          {ctaLabel}
          <span aria-hidden>→</span>
        </span>
      </div>
    </Link>
  );
}
