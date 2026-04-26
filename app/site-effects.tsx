"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const revealSelectors = [
  "[data-reveal]",
  ".reveal-up",
  "section img",
  "section h1",
  "section h2",
  "section h3",
  "section p",
  ".menu-card",
  "[data-menu-card]",
  ".gallery-item",
  "[data-gallery-item]",
];

export function SiteEffects() {
  const pathname = usePathname();

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const root = document.documentElement;
    root.classList.add("js-enhanced");

    let observer: IntersectionObserver | null = null;
    let frameId = window.requestAnimationFrame(() => {
      const revealNodes = Array.from(
        new Set(
          revealSelectors.flatMap((selector) => Array.from(document.querySelectorAll<HTMLElement>(selector)))
        )
      ).filter((element) => element.dataset.reveal !== "false");

      revealNodes.forEach((element, index) => {
        if (!element.classList.contains("reveal-up") && !element.hasAttribute("data-reveal")) {
          element.classList.add("reveal-up");
        }

        element.classList.remove("is-visible");

        const explicitDelay = element.dataset.revealDelay;
        const staggerDelay = `${Math.min(index % 4, 3) * 80}ms`;
        element.style.setProperty("--reveal-delay", explicitDelay ?? staggerDelay);
      });

      if (mediaQuery.matches) {
        revealNodes.forEach((element) => element.classList.add("is-visible"));
        return;
      }

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              observer?.unobserve(entry.target);
            }
          });
        },
        {
          threshold: 0.16,
          rootMargin: "0px 0px -10% 0px",
        }
      );

      revealNodes.forEach((element) => observer?.observe(element));
    });

    return () => {
      window.cancelAnimationFrame(frameId);
      observer?.disconnect();
      root.classList.remove("js-enhanced");
    };
  }, [pathname]);

  return null;
}