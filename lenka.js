tailwind.config = {
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                "surface-container": "#efeeec",
                "surface-container-high": "#e9e8e6",
                "on-primary-container": "#ddeedd",
                "on-primary-fixed-variant": "#3b4a3e",
                background: "#faf9f7",
                "primary-fixed": "#d6e7d6",
                "on-tertiary-fixed": "#1c1c15",
                "tertiary-fixed": "#e5e2d8",
                "on-primary-fixed": "#101f14",
                "tertiary-container": "#6a6960",
                "surface-dim": "#dadad8",
                "primary-fixed-dim": "#bacbba",
                "on-surface": "#1a1c1b",
                "outline-variant": "#c3c8c1",
                error: "#ba1a1a",
                "surface-container-highest": "#e3e2e0",
                secondary: "#6a5c4a",
                "inverse-primary": "#bacbba",
                "on-secondary-fixed-variant": "#524533",
                "on-secondary-container": "#6f604e",
                "on-surface-variant": "#434843",
                outline: "#747872",
                "secondary-fixed-dim": "#d6c4ad",
                "on-tertiary": "#ffffff",
                "on-background": "#1a1c1b",
                "on-primary": "#ffffff",
                "surface-variant": "#e3e2e0",
                "tertiary-fixed-dim": "#c9c7bc",
                "surface-container-lowest": "#ffffff",
                "primary-container": "#5d6d5f",
                "on-error-container": "#93000a",
                "inverse-surface": "#2f3130",
                tertiary: "#525149",
                "secondary-container": "#f0ddc5",
                "inverse-on-surface": "#f1f1ef",
                "on-tertiary-container": "#ece9de",
                primary: "#455548",
                "on-tertiary-fixed-variant": "#48473f",
                surface: "#faf9f7",
                "surface-bright": "#faf9f7",
                "surface-tint": "#526255",
                "secondary-fixed": "#f3dfc8",
                "on-error": "#ffffff",
                "on-secondary": "#ffffff",
                "on-secondary-fixed": "#241a0b",
                "surface-container-low": "#f4f3f1",
                "error-container": "#ffdad6",
            },
            borderRadius: {
                DEFAULT: "0.25rem",
                lg: "0.5rem",
                xl: "0.75rem",
                full: "9999px",
            },
            spacing: {
                lg: "48px",
                xl: "80px",
                md: "24px",
                base: "8px",
                xs: "4px",
                gutter: "24px",
                "margin-mobile": "20px",
                sm: "12px",
                "max-width-desktop": "1140px",
            },
            fontFamily: {
                "body-lg": ["Hanken Grotesk"],
                "label-sm": ["Hanken Grotesk"],
                "headline-lg": ['"Source Serif 4"'],
                "label-md": ["Hanken Grotesk"],
                "headline-md": ['"Source Serif 4"'],
                "headline-xl": ['"Source Serif 4"'],
                "headline-lg-mobile": ['"Source Serif 4"'],
                "body-md": ["Hanken Grotesk"],
            },
            fontSize: {
                "body-lg": ["18px", { lineHeight: "28px", fontWeight: "400" }],
                "label-sm": ["12px", { lineHeight: "16px", fontWeight: "500" }],
                "headline-lg": [
                    "32px",
                    { lineHeight: "40px", fontWeight: "600" },
                ],
                "label-md": [
                    "14px",
                    {
                        lineHeight: "20px",
                        letterSpacing: "0.05em",
                        fontWeight: "600",
                    },
                ],
                "headline-md": [
                    "24px",
                    { lineHeight: "32px", fontWeight: "500" },
                ],
                "headline-xl": [
                    "48px",
                    {
                        lineHeight: "56px",
                        letterSpacing: "-0.02em",
                        fontWeight: "600",
                    },
                ],
                "headline-lg-mobile": [
                    "28px",
                    { lineHeight: "36px", fontWeight: "600" },
                ],
                "body-md": ["16px", { lineHeight: "24px", fontWeight: "400" }],
            },
        },
    },
};

// Smooth Scroll Logic
const initSmoothScroll = () => {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", function (e) {
            const href = this.getAttribute("href");
            if (href === "#") return;

            const targetElement = document.querySelector(href);
            if (targetElement) {
                e.preventDefault();

                // Close mobile menu if open
                if (!mobileMenuOverlay.classList.contains("hidden")) {
                    toggleMenu(false);
                }

                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition =
                    elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth",
                });
            }
        });
    });

    // Brand name scroll to top logic
    document.querySelectorAll(".brand-link").forEach((brandLink) => {
        brandLink.addEventListener("click", function (e) {
            e.preventDefault();

            // Close mobile menu if open
            if (!mobileMenuOverlay.classList.contains("hidden")) {
                toggleMenu(false);
            }

            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        });
    });
};

// Mobile Menu Logic
const initMobileMenu = () => {
    const mobileMenuBtn = document.getElementById("mobile-menu-btn");
    const closeMenuBtn = document.getElementById("close-menu-btn");
    const mobileMenuOverlay = document.getElementById("mobile-menu-overlay");
    const mobileNavLinks = document.querySelectorAll(".mobile-nav-link");

    const toggleMenu = (isOpen) => {
        if (isOpen) {
            mobileMenuOverlay.classList.remove("hidden");
            setTimeout(() => {
                mobileMenuOverlay.classList.remove("translate-x-full");
            }, 10);
            document.body.style.overflow = "hidden";
        } else {
            mobileMenuOverlay.classList.add("translate-x-full");
            setTimeout(() => {
                mobileMenuOverlay.classList.add("hidden");
            }, 500);
            document.body.style.overflow = "auto";
        }
    };

    mobileMenuBtn.addEventListener("click", () => toggleMenu(true));
    closeMenuBtn.addEventListener("click", () => toggleMenu(false));
    mobileNavLinks.forEach((link) => {
        link.addEventListener("click", () => toggleMenu(false));
    });

    // Header Scroll interaction
    window.addEventListener("scroll", () => {
        const header = document.querySelector("header");
        if (window.scrollY > 50) {
            header.classList.add("h-16", "shadow-md");
            header.classList.remove("h-20", "shadow-sm");
        } else {
            header.classList.add("h-20", "shadow-sm");
            header.classList.remove("h-16", "shadow-md");
        }
    });

    // Reveal animations
    const observerOptions = {
        threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("opacity-100", "translate-y-0");
                entry.target.classList.remove("opacity-0", "translate-y-10");
            }
        });
    }, observerOptions);
};

document.querySelectorAll("section").forEach((section) => {
    if (
        !section.classList.contains("page-section") &&
        !section.classList.contains("opacity-100")
    ) {
        section.classList.add(
            "transition-all",
            "duration-1000",
            "opacity-0",
            "translate-y-10",
        );
    }
    observer.observe(section);
});

// Initialize all logic
document.addEventListener("DOMContentLoaded", () => {
    initSmoothScroll();
    initMobileMenu();
});