import type { CaseStudy, WorkPreviewType } from "@/types/content";
import { cn } from "@/lib/cn";

interface WorkPreviewProps {
  type: WorkPreviewType;
  client: string;
  theme?: CaseStudy["theme"];
  featured?: boolean;
}

export function WorkPreview({ type, client, theme, featured }: WorkPreviewProps) {
  const accent = theme?.accent ?? "var(--color-accent-bright)";
  const surface = theme?.surface ?? "#0e1118";

  return (
    <div
      className={cn("work-preview", `work-preview--${type}`, featured && "work-preview--featured")}
      style={
        {
          "--preview-accent": accent,
          "--preview-surface": surface,
        } as React.CSSProperties
      }
      aria-hidden
    >
      {type === "website" && <WebsitePreview client={client} />}
      {type === "branding" && <BrandingPreview client={client} />}
      {type === "social" && <SocialPreview />}
      {type === "device" && <DevicePreview client={client} />}
      {type === "dashboard" && <DashboardPreview />}
      {type === "ads" && <AdsPreview />}
      <span className="work-preview__shine" />
      <span className="work-preview__vignette" />
    </div>
  );
}

function WebsitePreview({ client }: { client: string }) {
  return (
    <div className="work-preview__browser">
      <div className="work-preview__browser-bar">
        <span />
        <span />
        <span />
      </div>
      <div className="work-preview__browser-body">
        <div className="work-preview__site-hero" />
        <div className="work-preview__site-nav">
          <span />
          <span />
          <span />
        </div>
        <div className="work-preview__site-title">{client.split(" ")[0]}</div>
        <div className="work-preview__site-grid">
          <span />
          <span />
          <span />
        </div>
        <div className="work-preview__site-cta" />
      </div>
    </div>
  );
}

function BrandingPreview({ client }: { client: string }) {
  const initials = client
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div className="work-preview__brand">
      <div className="work-preview__brand-card work-preview__brand-card--main">
        <span className="work-preview__brand-mark">{initials}</span>
        <span className="work-preview__brand-name">{client}</span>
      </div>
      <div className="work-preview__brand-card work-preview__brand-card--card" />
      <div className="work-preview__brand-card work-preview__brand-card--envelope" />
      <div className="work-preview__brand-strip" />
    </div>
  );
}

function SocialPreview() {
  return (
    <div className="work-preview__social">
      <div className="work-preview__social-profile">
        <span className="work-preview__social-avatar" />
        <span className="work-preview__social-handle" />
      </div>
      <div className="work-preview__social-grid">
        {Array.from({ length: 6 }).map((_, i) => (
          <span
            key={i}
            className={cn("work-preview__social-tile", i === 0 && "work-preview__social-tile--accent")}
          />
        ))}
      </div>
    </div>
  );
}

function DevicePreview({ client }: { client: string }) {
  return (
    <div className="work-preview__device">
      <div className="work-preview__device-notch" />
      <div className="work-preview__device-screen">
        <div className="work-preview__device-hero" />
        <div className="work-preview__device-line" />
        <div className="work-preview__device-line work-preview__device-line--short" />
        <div className="work-preview__device-products">
          <span />
          <span />
        </div>
        <div className="work-preview__device-label">{client.split(" ")[0]}</div>
      </div>
    </div>
  );
}

function DashboardPreview() {
  return (
    <div className="work-preview__dash">
      <div className="work-preview__dash-header">
        <span />
        <span className="work-preview__dash-pill" />
      </div>
      <div className="work-preview__dash-metrics">
        <span />
        <span />
        <span />
      </div>
      <div className="work-preview__dash-chart">
        <span className="work-preview__dash-bar" style={{ height: "42%" }} />
        <span className="work-preview__dash-bar" style={{ height: "68%" }} />
        <span className="work-preview__dash-bar work-preview__dash-bar--peak" style={{ height: "88%" }} />
        <span className="work-preview__dash-bar" style={{ height: "55%" }} />
        <span className="work-preview__dash-bar" style={{ height: "72%" }} />
      </div>
    </div>
  );
}

function AdsPreview() {
  return (
    <div className="work-preview__ads">
      <div className="work-preview__ads-frame">
        <div className="work-preview__ads-sky" />
        <div className="work-preview__ads-ground" />
        <div className="work-preview__ads-play" />
      </div>
      <div className="work-preview__ads-meta">
        <span />
        <span />
      </div>
    </div>
  );
}
