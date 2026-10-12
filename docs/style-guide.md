# Khallaslak (خلّصلك) — Internal Style Guide & Token Reference

> **INTERNAL REFERENCE ONLY** — Not for public site display.

## Color Palette ("Official Document")
- **Kraft Paper**: `#CBAB80` — Page desk background with subtle SVG noise grain.
- **Parchment**: `#F5EDDA` — Sheets, procedure cards, modals.
- **Ink Navy**: `#14284B` — Headings, body text, primary buttons, footer.
- **Seal Burgundy**: `#7B1E2B` — Scalloped wax-seal logo, accents, warnings.
- **Antique Gold**: `#B08D3C` — Double-rules, borders, hairline outlines. Never body text.
- **Verified Green**: `#2F6B4F` — Verified rubber stamp (used ONLY on verified data).
- **Faded Ink**: `#5E5442` — Secondary captions, kickers, dates.

## Typography
- **Arabic Headings**: `Amiri` 700
- **Arabic Body & UI**: `IBM Plex Sans Arabic` 400 / 600
- **Latin Headings**: `Playfair Display` 700 / 900
- **Latin Body & UI**: `Inter` 400 / 600
- **Numerals**: Western digits (0–9) everywhere.

## Card Construction
- Parchment background (`#F5EDDA`)
- Outer 1px solid Antique Gold (`#B08D3C`)
- Inner hairline outline (`rgba(176,141,60,0.45)`, offset -6px)
- Stacked paper shadow: `0 1px 0 #e4d7b3, 0 6px 0 -3px #ddcfa6, 0 14px 28px rgba(60,40,10,0.22)`
- Interactive lift: 3px lift + deeper shadow on hover/focus-within (200ms).

## Motion
- Scroll reveal: `.reveal` with `opacity: 0; transform: translateY(24px)` easing into `.show`.
- Stagger: 80ms delay per sibling.
- Respect `prefers-reduced-motion: reduce`.
