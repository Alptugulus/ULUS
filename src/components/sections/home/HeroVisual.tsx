"use client";

import { useRef, type CSSProperties, type MouseEvent } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useReducedMotion } from "@/motion/useReducedMotion";

/** Hero — canlı ajans paneli mockup (light/dark uyumlu), imleçle hafif 3D tilt */
export function HeroVisual() {
  const reducedMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const springX = useSpring(mx, { stiffness: 150, damping: 20, mass: 0.4 });
  const springY = useSpring(my, { stiffness: 150, damping: 20, mass: 0.4 });
  const rotateX = useTransform(springY, [0, 1], [6, -6]);
  const rotateY = useTransform(springX, [0, 1], [-6, 6]);

  function handleMouseMove(event: MouseEvent<HTMLDivElement>) {
    if (reducedMotion || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    mx.set((event.clientX - rect.left) / rect.width);
    my.set((event.clientY - rect.top) / rect.height);
  }

  function handleMouseLeave() {
    mx.set(0.5);
    my.set(0.5);
  }

  return (
    <div
      className="template-hero__visual"
      aria-hidden
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: 1400 }}
    >
      <motion.div
        className="hero-mockup"
        style={
          reducedMotion
            ? undefined
            : ({ rotateX, rotateY, transformStyle: "preserve-3d" } as CSSProperties)
        }
      >
        <div className="hero-mockup__chrome">
          <div className="hero-mockup__dots">
            <span className="hero-mockup__dot hero-mockup__dot--close" />
            <span className="hero-mockup__dot hero-mockup__dot--min" />
            <span className="hero-mockup__dot hero-mockup__dot--max" />
          </div>
          <div className="hero-mockup__url">
            <span className="hero-mockup__url-lock" />
            <span className="hero-mockup__url-text">ulusmedya.tr / panel</span>
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
      </motion.div>
    </div>
  );
}
