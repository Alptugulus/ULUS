export const easing = [0.22, 1, 0.36, 1] as const;
export const easingOut = [0.16, 1, 0.3, 1] as const;

export const duration = {
  micro: 0.28,
  section: 0.58,
  sectionMobile: 0.42,
  page: 0.2,
} as const;

/** Cinematic enter — opacity + translate, subtle scale */
export const fadeUp = {
  hidden: { opacity: 0, y: 24, scale: 0.988 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: duration.section,
      ease: easing,
    },
  },
};

export const fadeUpMobile = {
  hidden: { opacity: 0, y: 14, scale: 0.992 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: duration.sectionMobile,
      ease: easing,
    },
  },
};

/** Gradient / büyük başlık — scale yok (background-clip metin kırılmasını önler) */
export const fadeUpText = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: duration.section,
      ease: easing,
    },
  },
};

export const fadeUpTextMobile = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: duration.sectionMobile,
      ease: easing,
    },
  },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: duration.section,
      ease: easing,
    },
  },
};

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.075,
      delayChildren: 0.05,
    },
  },
};

export const staggerContainerMobile = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.055,
      delayChildren: 0.035,
    },
  },
};

export const staggerItem = fadeUp;

export function getTransition(
  reducedMotion: boolean,
  type: keyof typeof duration = "section",
  isMobile = false
) {
  if (reducedMotion) {
    return { duration: 0 };
  }
  const key = isMobile && type === "section" ? "sectionMobile" : type;
  return {
    duration: duration[key as keyof typeof duration] ?? duration.section,
    ease: easing,
  };
}
