/** Hero arka planı — yumuşak gradient + 2 yavaş orb (premium, abartısız) */
export function HeroBackdrop() {
  return (
    <div className="template-hero__ambient" aria-hidden>
      <div className="template-hero__ambient-base" />
      <div className="template-hero__ambient-orb template-hero__ambient-orb--a" />
      <div className="template-hero__ambient-orb template-hero__ambient-orb--b" />
      <div className="template-hero__ambient-grid" />
      <div className="template-hero__ambient-fade" />
    </div>
  );
}
