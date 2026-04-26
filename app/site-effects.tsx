"use client";

import { useEffect } from "react";

type TransitionDocument = Document & {
  startViewTransition?: (callback: () => void | Promise<void>) => void;
};

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
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const root = document.documentElement;
    root.classList.add("js-enhanced");

    const revealNodes = Array.from(
      new Set(
        revealSelectors.flatMap((selector) => Array.from(document.querySelectorAll<HTMLElement>(selector)))
      )
    ).filter((element) => element.dataset.reveal !== "false");

    revealNodes.forEach((element, index) => {
      if (!element.classList.contains("reveal-up") && !element.hasAttribute("data-reveal")) {
        element.classList.add("reveal-up");
      }

      const explicitDelay = element.dataset.revealDelay;
      const staggerDelay = `${Math.min(index % 4, 3) * 80}ms`;
      element.style.setProperty("--reveal-delay", explicitDelay ?? staggerDelay);
    });

    if (mediaQuery.matches) {
      revealNodes.forEach((element) => element.classList.add("is-visible"));
    } else {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              observer.unobserve(entry.target);
            }
          });
        },
        {
          threshold: 0.16,
          rootMargin: "0px 0px -10% 0px",
        }
      );

      revealNodes.forEach((element) => observer.observe(element));

      const handleLinkTransition = (event: MouseEvent) => {
        if (event.defaultPrevented || event.button !== 0) {
          return;
        }

        if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
          return;
        }

        const anchor = (event.target as Element | null)?.closest("a") as HTMLAnchorElement | null;

        if (!anchor || !anchor.href || anchor.target === "_blank" || anchor.hasAttribute("download")) {
          return;
        }

        const url = new URL(anchor.href, window.location.href);

        if (url.origin !== window.location.origin) {
          return;
        }

        if (url.pathname === window.location.pathname && url.hash) {
          return;
        }

        const startViewTransition = (document as TransitionDocument).startViewTransition;

        if (!startViewTransition) {
          return;
        }

        event.preventDefault();
        startViewTransition(() => {
          window.location.href = url.toString();
        });
      };

      document.addEventListener("click", handleLinkTransition);

      return () => {
        observer.disconnect();
        document.removeEventListener("click", handleLinkTransition);
        root.classList.remove("js-enhanced");
      };
    }

    return () => {
      root.classList.remove("js-enhanced");
    };
  }, []);

  return null;
}