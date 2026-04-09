# Design System Strategy: The Architectural Standard

## 1. Overview & Creative North Star
The Creative North Star for this design system is **"The Architectural Standard."** This philosophy treats every digital layout like a blueprint for a high-end physical space—calculated, authoritative, and permanent. We are merging the strategic gravity of McKinsey with the technical precision of Stripe to create an experience that feels like a bespoke consultation.

To move beyond generic business templates, this system prioritizes **Intentional Asymmetry**. While rooted in a strict 12-column grid, we break the "repetitive block" rhythm by using overlapping editorial elements, generous vertical "breathing zones," and a high-contrast typography scale that demands attention. The result is an elite digital presence that doesn't scream for engagement but commands it through quiet confidence.

---

## 2. Colors: Tonal Depth & Atmospheric Layers
Our palette is extracted from the sophisticated grays and umbers of the cafe environment. It is not merely "monochrome," but a series of warm and cool neutrals that create an atmosphere of luxury.

### The "No-Line" Rule
Traditional 1px borders are prohibited for sectioning. Definition must be achieved through **Value Shifting**.
*   **The Rule:** To separate a new content block, transition the background from `surface` (#f9f9f9) to `surface-container-low` (#f2f4f4). 
*   **The Outcome:** This creates a seamless, "molded" look rather than a segmented, "boxed" one.

### Surface Hierarchy & Nesting
Treat the screen as a series of stacked, premium materials.
*   **Level 0 (Foundation):** `surface` or `background` for main page real estate.
*   **Level 1 (The Pedestal):** `surface-container` (#ebeeef) for secondary modules.
*   **Level 2 (The Focus):** `surface-container-lowest` (#ffffff) for primary cards or interactive elements.
*   **Nesting:** Always place a "Lower" value container inside a "Higher" value section to create a natural, recessed effect.

### The "Glass & Gradient" Rule
To bridge the gap between "Stark Corporate" and "Premium Lifestyle," use:
*   **Glassmorphism:** For navigation bars or floating action panels, use `surface` at 80% opacity with a 20px backdrop-blur.
*   **Signature Textures:** Main CTAs should use a subtle linear gradient from `primary` (#5f5e5e) to `primary-dim` (#535252) at a 45-degree angle. This adds a "metallic" weight to buttons that flat colors lack.

---

## 3. Typography: The Editorial Voice
We utilize a dual-font strategy to balance heritage with modernity.

*   **Display & Headlines (Manrope):** Chosen for its geometric precision. 
    *   `display-lg` (3.5rem) should be used for Hero statements with tight tracking (-0.02em).
    *   `headline-md` (1.75rem) serves as the "Consultant’s Voice"—clear, authoritative, and direct.
*   **Body & Labels (Inter):** The industry standard for legibility.
    *   `body-lg` (1rem) is the workhorse. Maintain a generous line-height (1.6) to ensure the "McKinsey" clarity.
    *   `label-sm` (0.6875rem) in All Caps with 0.1em letter spacing is used for "Elite Metadata" (e.g., project categories or small subtitles).

---

## 4. Elevation & Depth: Tonal Layering
In this design system, shadows are an exception, not a rule. We rely on **Tonal Layering** for 90% of our depth.

*   **The Layering Principle:** A white card (`surface-container-lowest`) on a light gray background (`surface-container-low`) provides enough contrast to signify elevation without the "dirtiness" of a shadow.
*   **Ambient Shadows:** For floating elements like a "Get Started" pop-over, use a shadow color derived from `on-surface` (#2d3435).
    *   *Setting:* 0px 20px 40px rgba(45, 52, 53, 0.06). It must feel like ambient light, not a drop shadow.
*   **The "Ghost Border" Fallback:** If a layout requires a boundary (e.g., a complex data table), use a "Ghost Border": `outline-variant` (#adb3b4) at 15% opacity. Never use a 100% opaque border.

---

## 5. Components: Precision Machining
Components must feel like they were machined from a single block of material.

*   **Buttons:**
    *   **Primary:** Solid `primary` background with `on-primary` text. No rounded corners beyond `sm` (0.125rem) to maintain a "sharp" professional edge.
    *   **Tertiary:** Only text in `primary` with a 1px "Ghost Border" underline that expands on hover.
*   **Cards:** Forbid the use of divider lines within cards. Use `spacing-lg` (vertical whitespace) to separate a card's image from its title.
*   **Input Fields:** Use a `surface-container-high` (#e4e9ea) background with no border. On focus, transition to a 1px `primary` bottom-border only—mimicking a high-end stationery feel.
*   **Lists:** Separate items using a 10% opacity `outline-variant` line that does not touch the edges of the container (inset by 24px).
*   **Standardization Badge (Signature Component):** A specialized `chip` using `tertiary-container` (#fdddb9) with `on-tertiary-fixed` (#503c22) text to highlight RASA’s unique certification or standards.

---

## 6. Do’s and Don'ts

### Do
*   **DO** use "Aggressive Whitespace." If you think a section has enough padding, add 24px more.
*   **DO** align text-heavy content to the center 8 columns of the 12-column grid to maximize focus.
*   **DO** use `tertiary` (#725b3f) accents sparingly—only for moments of "warmth" or "human touch" (e.g., a signature, a quote, or a high-end material detail).

### Don't
*   **DON'T** use generic icons. Use thin-stroke (1pt), sharp-cornered custom iconography.
*   **DON'T** use bright, saturated colors. If a status is "Success," use a muted teal; if "Error," use the sophisticated `error` (#9f403d).
*   **DON'T** use large border-radii. Stay strictly between `none` (0px) and `sm` (0.125rem). The `full` (9999px) radius is reserved only for pills and small tags.
*   **DON'T** use "Standard" center-aligned hero sections. Offset the text to the left and allow an image to bleed off the right edge of the screen to create a sense of scale.