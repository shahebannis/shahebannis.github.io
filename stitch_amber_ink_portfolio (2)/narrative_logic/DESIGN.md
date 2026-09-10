---
name: Narrative Logic
colors:
  surface: '#fbfaee'
  surface-dim: '#dbdbcf'
  surface-bright: '#fbfaee'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f5f4e8'
  surface-container: '#efeee3'
  surface-container-high: '#e9e9dd'
  surface-container-highest: '#e4e3d7'
  on-surface: '#1b1c15'
  on-surface-variant: '#584238'
  inverse-surface: '#303129'
  inverse-on-surface: '#f2f1e5'
  outline: '#8c7166'
  outline-variant: '#e0c0b2'
  surface-tint: '#a04100'
  primary: '#9c3f00'
  on-primary: '#ffffff'
  primary-container: '#c45100'
  on-primary-container: '#fffbff'
  inverse-primary: '#ffb693'
  secondary: '#934b19'
  on-secondary: '#ffffff'
  secondary-container: '#ffa26a'
  on-secondary-container: '#783603'
  tertiary: '#9c3e2b'
  on-tertiary: '#ffffff'
  tertiary-container: '#bc5540'
  on-tertiary-container: '#fffbff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdbcc'
  primary-fixed-dim: '#ffb693'
  on-primary-fixed: '#351000'
  on-primary-fixed-variant: '#7a3000'
  secondary-fixed: '#ffdbc9'
  secondary-fixed-dim: '#ffb68c'
  on-secondary-fixed: '#321200'
  on-secondary-fixed-variant: '#753401'
  tertiary-fixed: '#ffdad3'
  tertiary-fixed-dim: '#ffb4a5'
  on-tertiary-fixed: '#3e0500'
  on-tertiary-fixed-variant: '#802918'
  background: '#fbfaee'
  on-background: '#1b1c15'
  surface-variant: '#e4e3d7'
typography:
  display-lg:
    fontFamily: Montserrat
    fontSize: 48px
    fontWeight: '900'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Montserrat
    fontSize: 32px
    fontWeight: '900'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Montserrat
    fontSize: 24px
    fontWeight: '800'
    lineHeight: '1.3'
  body-lg:
    fontFamily: JetBrains Mono
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-sm:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.5'
  label-caps:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '700'
    lineHeight: '1'
    letterSpacing: 0.05em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base-unit: 8px
  gutter: 24px
  panel-margin: 32px
  container-max: 1200px
---

## Brand & Style
The design system adopts a "Cartoon-Professional" aesthetic, merging the structured world of computer science with the expressive energy of a graphic novel. It targets a technical audience while showcasing a distinctive creative personality.

The style is defined by **Neo-Brutalism mixed with Comic Illustration**. Key characteristics include:
- **Defined Line Work:** Every container and interactive element is framed by bold, consistent black strokes.
- **Offset Geometry:** Elements often feature "hard-drop" shadows that aren't blurred, but rather solid color offsets to simulate physical depth in a 2D space.
- **Technical Texture:** Subtle halftone dot patterns are used in place of traditional gradients to provide depth and a tactile, printed feel to technical components.
- **Structured Whimsy:** While the visual language is playful, the information architecture remains rigid and logical, mirroring the discipline of software engineering.

## Colors
The palette is grounded in warm, organic tones to contrast the cold nature of code.

- **Primary (Burnt Orange):** Used for primary actions, branding, and key highlights.
- **Secondary (Saddle Brown):** Used for "Hard-Drop" shadows and secondary structural elements.
- **Tertiary (Terracotta):** Used for accents, hover states, and categorizing secondary content.
- **Background (Off-White):** A warm, paper-like foundation that reduces eye strain and fits the "printed comic" vibe.
- **Stroke/Text (Deep Charcoal):** A 100% opaque, near-black used for all borders (2px to 4px) and primary reading text to ensure maximum contrast.

## Typography
The typography strategy creates a tension between "Action" and "Logic."

- **Headlines:** Use **Montserrat** in heavy weights (ExtraBold/Black). These should feel like "sound effects" in a comic—impactful and assertive. Use tight letter-spacing for large displays.
- **Body & Technical Info:** Use **JetBrains Mono**. This reinforces the computer science theme, ensuring code snippets and descriptive text feel authentic to the craft. 
- **Hierarchy:** Use the `label-caps` style for metadata like "Project Date" or "Language" to create a clear distinction from narrative body text.

## Layout & Spacing
The layout is inspired by **comic book panels**. 

- **The Panel System:** Content should be housed in bordered containers ("panels"). Avoid floating text; everything belongs to a cell.
- **Grid:** Use a 12-column fluid grid for desktop. On mobile, transition to a single-column stack where panels maintain their 4px borders.
- **Gaps:** Use wide gutters (24px) to ensure the bold borders of adjacent panels do not blur together visually.
- **Asymmetry:** Occasionally offset a panel by 4px-8px relative to its neighbor to create a dynamic, less "corporate" feel.

## Elevation & Depth
In this design system, depth is **physical and literal**, not atmospheric.

- **No Soft Shadows:** Avoid Gaussian blurs entirely. 
- **Hard-Drop Shadows:** Depth is indicated by a solid color block (Secondary Brown or Charcoal) offset 4px to the right and 4px down.
- **Layering:** When an element is "raised" (like a hovered button), its offset shadow should increase in size (e.g., from 4px to 8px), and the element should translate -2px/-2px to simulate a lift.
- **Halftone Texture:** Use a CSS `background-image` radial-dot pattern on background layers or within secondary panels to create a tactile "printed" feel without using heavy imagery.

## Shapes
Shapes are generally rectangular to mimic comic panels, but with slightly softened corners to keep the "cartoon" friendliness.

- **Borders:** All containers must have a `4px` solid border in `accent_charcoal`.
- **Interactive Elements:** Buttons and inputs use a `2px` border to feel slightly more refined but still part of the same universe.
- **Corner Radius:** A subtle `0.25rem` (4px) radius prevents the design from feeling too sharp or aggressive (Brutalist-lite).

## Components

- **Buttons:** Bold background (`primary_color`), `2px` black border, and a solid `4px` black offset shadow. On click, the shadow disappears and the button translates to "press" into the page.
- **Cards (Panels):** Off-white or light orange background, `4px` border. Headers within cards should be separated by a `2px` horizontal rule.
- **Chips/Labels:** Small capsules with `2px` borders and no shadows. Use these for tech stacks (e.g., "React", "Python").
- **Input Fields:** Thick `2px` borders. On focus, the border changes to `primary_color` and the hard-drop shadow intensifies. Use the mono font for all user input.
- **Code Blocks:** Deep charcoal background with off-white text. Use a halftone pattern in the corner of the block to signify a "technical" area.
- **Lists:** Bullet points should be replaced by small solid squares or "check" icons with thick outlines.