import Link from "next/link";
import type { CaseStudy } from "@/types/content";
import { workCardCta } from "@/content/home";
import { WorkPreview } from "./WorkPreview";

interface WorkShowcaseCardProps {
  index: number;
  project: CaseStudy;
}

export function WorkShowcaseCard({ index, project }: WorkShowcaseCardProps) {
  return (
    <Link
      href={`/isler/${project.slug}`}
      className="template-card group"
      style={
        project.theme
          ? ({
              "--preview-accent": project.theme.accent,
              "--preview-surface": project.theme.surface,
            } as React.CSSProperties)
          : undefined
      }
    >
      <div className="template-card__media">
        <WorkPreview
          type={project.preview}
          client={project.client}
          theme={project.theme}
        />
      </div>

      <div className="template-card__body">
        <div className="template-card__meta">
          <span className="template-card__index">{String(index + 1).padStart(2, "0")}</span>
          <span>{project.year}</span>
        </div>

        <p className="mt-2 text-[0.6875rem] font-semibold uppercase tracking-wider text-foreground-subtle">
          {project.client}
        </p>
        <h3 className="template-card__title">{project.title}</h3>
        <p className="template-card__desc">{project.excerpt}</p>

        <div className="template-card__footer">
          <div className="template-card__tags">
            {project.services.slice(0, 3).map((service) => (
              <span key={service} className="template-card__tag">
                {service}
              </span>
            ))}
          </div>
          {project.metric && (
            <div className="template-card__metric">
              <span className="template-card__metric-value">{project.metric.value}</span>
              <span className="template-card__metric-label">{project.metric.label}</span>
            </div>
          )}
        </div>

        <span className="template-card__link">
          {workCardCta.label}
          <span aria-hidden>→</span>
        </span>
      </div>
    </Link>
  );
}
