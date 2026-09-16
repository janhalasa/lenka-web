---
name: Modern Serenity
colors:
  surface: '#faf9f7'
  surface-dim: '#dadad8'
  surface-bright: '#faf9f7'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f4f3f1'
  surface-container: '#efeeec'
  surface-container-high: '#e9e8e6'
  surface-container-highest: '#e3e2e0'
  on-surface: '#1a1c1b'
  on-surface-variant: '#434843'
  inverse-surface: '#2f3130'
  inverse-on-surface: '#f1f1ef'
  outline: '#747872'
  outline-variant: '#c3c8c1'
  surface-tint: '#526255'
  primary: '#455548'
  on-primary: '#ffffff'
  primary-container: '#5d6d5f'
  on-primary-container: '#ddeedd'
  inverse-primary: '#bacbba'
  secondary: '#6a5c4a'
  on-secondary: '#ffffff'
  secondary-container: '#f0ddc5'
  on-secondary-container: '#6f604e'
  tertiary: '#525149'
  on-tertiary: '#ffffff'
  tertiary-container: '#6a6960'
  on-tertiary-container: '#ece9de'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d6e7d6'
  primary-fixed-dim: '#bacbba'
  on-primary-fixed: '#101f14'
  on-primary-fixed-variant: '#3b4a3e'
  secondary-fixed: '#f3dfc8'
  secondary-fixed-dim: '#d6c4ad'
  on-secondary-fixed: '#241a0b'
  on-secondary-fixed-variant: '#524533'
  tertiary-fixed: '#e5e2d8'
  tertiary-fixed-dim: '#c9c7bc'
  on-tertiary-fixed: '#1c1c15'
  on-tertiary-fixed-variant: '#48473f'
  background: '#faf9f7'
  on-background: '#1a1c1b'
  surface-variant: '#e3e2e0'
typography:
  headline-xl:
    fontFamily: Source Serif 4
    fontSize: 48px
    fontWeight: '600'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Source Serif 4
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  headline-lg-mobile:
    fontFamily: Source Serif 4
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
  headline-md:
    fontFamily: Source Serif 4
    fontSize: 24px
    fontWeight: '500'
    lineHeight: 32px
  body-lg:
    fontFamily: Hanken Grotesk
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Hanken Grotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: Hanken Grotesk
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.05em
  label-sm:
    fontFamily: Hanken Grotesk
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  xs: 4px
  sm: 12px
  md: 24px
  lg: 48px
  xl: 80px
  gutter: 24px
  margin-mobile: 20px
  max-width-desktop: 1140px
---

## Brand & Style
The design system is centered on the concept of "Modern Serenity," tailored specifically for a psychology practice that balances clinical expertise with deep empathy. The brand personality is grounded, nurturing, and safe, aiming to reduce the cortisol levels of the user from the moment they land on the page.

The visual style is a refined mix of **Minimalism** and **Tactile Softness**. It avoids the sterile coldness of traditional medical platforms by using organic tones and generous whitespace, ensuring the interface feels like a digital extension of a calm, physical therapy room. The goal is to evoke an emotional response of relief and quiet confidence, signaling to the client that they are in professional, capable hands.

## Colors
The palette is derived from natural, earthy elements to ground the user experience.
- **Primary (Sage Green):** Used for primary actions, active states, and headings where authority and growth need to be communicated.
- **Secondary (Warm Taupe):** Used for supportive elements, secondary buttons, and icons to provide a sense of stability and warmth.
- **Tertiary (Cream/Stone):** Acts as a soft alternative to pure white for large surface areas, reducing eye strain and screen glare.
- **Neutral (Parchment):** The foundational background color, creating a subtle contrast against white content cards.

Functional colors for success, error, and warning should be desaturated to maintain the serene atmosphere, avoiding jarring "alarm" tones.

## Typography
This design system utilizes a high-contrast pairing to reflect the dual nature of therapy: professional wisdom and modern accessibility.

**Source Serif 4** is used for headlines. Its sturdy yet elegant letterforms provide the "authoritative" voice of the psychologist while remaining warm and readable. **Hanken Grotesk** is used for all functional and body text; its contemporary geometry and clear legibility ensure that even complex therapeutic information is easy to digest. 

Line heights are intentionally generous to increase "breathing room" within the text, preventing the UI from feeling cramped or overwhelming.

## Layout & Spacing
The layout follows a **Fixed Grid** philosophy on desktop to maintain a sense of containment and order, transitioning to a fluid model on mobile. 

- **Desktop:** 12-column grid with a 1140px max-width to ensure line lengths remain optimal for reading.
- **Tablet:** 8-column grid with 32px side margins.
- **Mobile:** 4-column grid with 20px side margins.

Spacing is used as a tool for hierarchy. Vertical rhythms should lean towards the larger end of the scale (using `xl` or `lg` between sections) to reinforce the "Serenity" narrative and prevent information density from causing user anxiety.

## Elevation & Depth
Depth in this design system is achieved through **Tonal Layers** and **Ambient Shadows**. Instead of harsh black shadows, we use "Atmospheric Shadows"—soft, diffused blurs with a slight tint of the Primary Sage color at very low opacity (5-8%).

1.  **Level 0 (Base):** Neutral Parchment background.
2.  **Level 1 (Cards/Surface):** White or Light Cream surfaces with a 1px stroke in a slightly darker cream to define boundaries without heavy shadows.
3.  **Level 2 (Interactive):** Used for hovered buttons or active cards, utilizing the soft ambient shadow to suggest a gentle "lift" from the page.

Glassmorphism should be used sparingly, primarily for sticky navigation bars to maintain a sense of context with the content below while providing a frosted, high-end feel.

## Shapes
The shape language is strictly **Rounded**. Sharp corners are avoided to remove any sense of "edge" or "hardness" from the experience. 

- Standard components (Inputs, Buttons) use `0.5rem` (8px).
- Large containers (Cards, Modals) use `1rem` (16px).
- Special accent elements (Avatar frames, featured images) can use `1.5rem` or even organic, asymmetrical blob shapes to reinforce the human, non-linear nature of the healing process.

## Components
- **Buttons:** Primary buttons are solid Sage Green with white text; secondary buttons are Ghost-style with a Taupe border. All buttons have a transition duration of 300ms for a "soft" feel.
- **Inputs:** Text fields use a Cream background with a subtle Taupe bottom border or light outline. Focus states should use a soft Sage glow.
- **Cards:** Cards are the primary vessel for information. They should feature generous internal padding (`24px` to `32px`) and the "Level 1" elevation treatment.
- **Chips:** Used for therapy specializations (e.g., "Couple Therapy," "Anxiety"). These should be pill-shaped with a low-contrast Taupe background.
- **Lists:** Use custom bullet points (soft dots or small Sage leaf icons) rather than standard browser defaults to maintain the bespoke, professional feel.
- **Calendar/Booking:** This is a critical component. It must be clean, using the Secondary Taupe for available dates and Primary Sage for the selected slot, emphasizing clarity and ease of use.