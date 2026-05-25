import type { CSSProperties } from "react";

/** Hero — canlı ajans paneli mockup (light/dark uyumlu) */
export function HeroVisual() {
  return (
    <div className="template-hero__visual" aria-hidden>
      <div className="hero-mockup">
        <div className="hero-mockup__chrome">
          <div className="hero-mockup__dots">
            <span className="hero-mockup__dot hero-mockup__dot--close" />
            <span className="hero-mockup__dot hero-mockup__dot--min" />
            <span className="hero-mockup__dot hero-mockup__dot--max" />
          </div>
          <div className="hero-mockup__url">
            <span className="hero-mockup__url-lock" />
            <span className="hero-mockup__url-text">ulusmedia.com / panel</span>
          </div>
        </div>

        <div className="hero-mockup__viewport">
          <aside className="hero-mockup__rail">
            <span className="hero-mockup__rail-item hero-mockup__rail-item--active" />
            <span className="hero-mockup__rail-item" />
            <span className="hero-mockup__rail-item" />
            <span className="hero-mockup__rail-item" />
          </aside>

          <div className="hero-mockup__main">
            <div className="hero-mockup__head">
              <div>
                <p className="hero-mockup__label">Kampanya performansı</p>
                <p className="hero-mockup__metric">
                  +48<span className="hero-mockup__metric-unit">%</span>
                </p>
              </div>
              <span className="hero-mockup__badge">Canlı</span>
            </div>

            <div className="hero-mockup__chart" role="presentation">
              {[72, 48, 88, 56, 94, 68, 82].map((h, i) => (
                <span
                  key={h}
                  className="hero-mockup__bar"
                  style={
                    {
                      "--bar-h": `${h}%`,
                      "--bar-d": `${i * 0.08}s`,
                    } as CSSProperties
                  }
                />
              ))}
            </div>

            <div className="hero-mockup__tiles">
              <article className="hero-mockup__tile hero-mockup__tile--lead">
                <span className="hero-mockup__tile-tag">Web</span>
                <span className="hero-mockup__tile-title">Kurumsal site</span>
              </article>
              <article className="hero-mockup__tile hero-mockup__tile--social">
                <span className="hero-mockup__tile-tag">Sosyal</span>
                <span className="hero-mockup__tile-title">İçerik</span>
              </article>
              <article className="hero-mockup__tile hero-mockup__tile--ads">
                <span className="hero-mockup__tile-tag">Reklam</span>
                <span className="hero-mockup__tile-title">Meta Ads</span>
              </article>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
