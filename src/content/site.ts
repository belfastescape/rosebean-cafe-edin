import { BUSINESS } from "./business";

export type MenuItem = { name: string; desc: string; price: string; img: string };
export type AreaImage = { src: string; alt: string; caption: string };
export type NavItem = { label: string; href: string };
export type HourRow = { day: string; time: string };

// ── Template defaults ────────────────────────────────────────────────────────
// Every value here is what the site shows when the matching field in business.ts
// is left blank. This is the original Cafe Marigold content.
const DEFAULTS = {
  brand: {
    name: "Marigold",
    full: "Cafe Marigold",
    tagline: "A sunny little stop in the heart of town.",
  },

  nav: [
    { label: "About", href: "#about" },
    { label: "Menu", href: "#menu" },
    { label: "Our Location", href: "#area" },
    { label: "Opening Times", href: "#visit" },
  ] satisfies NavItem[],

  hero: {
    video: "/loop-hero-no-audio.mov",
    line1: "A pocket of sunshine",
    line2: "on the corner of the street.",
    sub: "Slow coffee and the best banana bread you've had this year. Open from 7.30, every day.",
    cta: "See you soon",
  },

  about: {
    quote:
      "We opened Marigold to be the kind of place we missed — somewhere warm, where the bread is real, the coffee is strong and nobody is in a rush.",
    attribution: "— Mira & Tom, owners",
  },

  area: {
    eyebrow: "The neighbourhood",
    title: "A street worth slowing down for.",
    sub: "We're tucked between a florist and a bookshop, two minutes from the river. Come early, stay late.",
    images: [
      { src: "/images/couple-cafe-coffee-date.webp", alt: "Sunlit cafe corner", caption: "Our corner, 8am" },
      { src: "/images/flower-shop-display.webp", alt: "Flowers on a market stall", caption: "Florist next door" },
      { src: "/images/parisian-covered-arcade-passage.webp", alt: "Bookshop window", caption: "Across the road" },
      { src: "/images/tropical-fruit-market-stall.webp", alt: "Quiet street with bicycles", caption: "Saturday market" },
    ] satisfies AreaImage[],
  },

  menu: {
    eyebrow: "Six things we love",
    title: "La Carte",
    sub: "Small menu, made well. Changes with the season.",
    items: [
      { name: "Garden Toast", desc: "Smashed avocado, soft herbs, lemon zest on sourdough.", price: "12", img: "https://images.unsplash.com/photo-1525351484163-7529414344d8?w=1200&q=80&auto=format&fit=crop" },
      { name: "Marigold Bowl", desc: "Turmeric rice, roast pumpkin, tahini, pickled onion.", price: "16", img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=1200&q=80&auto=format&fit=crop" },
      { name: "Slow Coffee", desc: "Single origin, brewed by hand. Ask what's on today.", price: "5", img: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1200&q=80&auto=format&fit=crop" },
      { name: "Almond Croissant", desc: "Twice-baked, golden, dusted heavy with sugar.", price: "6", img: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=1200&q=80&auto=format&fit=crop" },
      { name: "Olive & Feta Loaf", desc: "Warm, salty, generous slab. Best with butter.", price: "8", img: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=1200&q=80&auto=format&fit=crop" },
      { name: "Banana Bread", desc: "Brown butter, walnut, a little flaky salt on top.", price: "7", img: "https://images.unsplash.com/photo-1606101273945-e9eba91c0dc4?w=1200&q=80&auto=format&fit=crop" },
    ] satisfies MenuItem[],
  },

  contact: {
    eyebrow: "Say hello",
    title: "Reserve a table, ask us anything.",
    sub: "We'll get back the same day. For groups of six or more, drop the date and we'll sort the rest.",
  },

  visit: {
    eyebrow: "Find us",
    hours: [
      { day: "Mon — Fri", time: "7.30 — 4.00" },
      { day: "Saturday", time: "8.00 — 5.00" },
      { day: "Sunday", time: "8.30 — 3.00" },
    ] satisfies HourRow[],
    address: ["[14 Marigold Lane]", "[Newtown, London E1 7QX]"],
    phone: "[020 7946 0101]",
    email: "hello@cafemarigold.test",
    map: null as string | null,
  },

  footer: {
    line: "Cafe Marigold · 14 Marigold Lane · est. 2023",
    copyright: "© 2026 Cafe Marigold. All sunny things welcome.",
  },
};

// ── Resolver ─────────────────────────────────────────────────────────────────
// Merge the writable BUSINESS overrides over DEFAULTS. Blank/absent → default.
const str = (v?: string) => (v && v.trim() ? v.trim() : undefined);

const brandName = str(BUSINESS.businessName) ?? DEFAULTS.brand.name;

const addressLines =
  BUSINESS.address && BUSINESS.address.filter((l) => l && l.trim()).length
    ? BUSINESS.address.filter((l) => l && l.trim())
    : null;

export const SITE = {
  brand: {
    name: brandName,
    full: str(BUSINESS.businessName) ?? DEFAULTS.brand.full,
    tagline: DEFAULTS.brand.tagline,
  },

  nav: DEFAULTS.nav,

  hero: {
    image: str(BUSINESS.heroImage) ?? null, // image background takes priority over video when set
    video: str(BUSINESS.heroVideo) ?? DEFAULTS.hero.video,
    line1: str(BUSINESS.heroLine1) ?? DEFAULTS.hero.line1,
    line2: str(BUSINESS.heroLine2) ?? DEFAULTS.hero.line2,
    sub: str(BUSINESS.heroSub) ?? DEFAULTS.hero.sub,
    cta: DEFAULTS.hero.cta,
  },

  about: {
    quote: str(BUSINESS.aboutQuote) ?? DEFAULTS.about.quote,
    attribution: str(BUSINESS.aboutAttribution) ?? DEFAULTS.about.attribution,
  },

  area: {
    eyebrow: str(BUSINESS.areaEyebrow) ?? DEFAULTS.area.eyebrow,
    title: str(BUSINESS.areaTitle) ?? DEFAULTS.area.title,
    sub: str(BUSINESS.areaSub) ?? DEFAULTS.area.sub,
    images: DEFAULTS.area.images.map((def, i): AreaImage => {
      const ov = BUSINESS.areaImages?.[i] ?? {};
      return { src: str(ov.src) ?? def.src, alt: def.alt, caption: str(ov.caption) ?? def.caption };
    }),
  },

  menu: {
    eyebrow: DEFAULTS.menu.eyebrow,
    title: DEFAULTS.menu.title,
    sub: DEFAULTS.menu.sub,
    items: DEFAULTS.menu.items.map((def, i): MenuItem => {
      const ov = BUSINESS.menuItems?.[i] ?? {};
      return {
        name: str(ov.name) ?? def.name,
        desc: str(ov.desc) ?? def.desc,
        price: str(ov.price) ?? def.price,
        img: str(ov.img) ?? def.img,
      };
    }),
  },

  contact: {
    eyebrow: str(BUSINESS.contactEyebrow) ?? DEFAULTS.contact.eyebrow,
    title: str(BUSINESS.contactTitle) ?? DEFAULTS.contact.title,
    sub: str(BUSINESS.contactSub) ?? DEFAULTS.contact.sub,
  },

  visit: {
    eyebrow: DEFAULTS.visit.eyebrow,
    hours: [
      { day: DEFAULTS.visit.hours[0].day, time: str(BUSINESS.monFri) ?? DEFAULTS.visit.hours[0].time },
      { day: DEFAULTS.visit.hours[1].day, time: str(BUSINESS.saturday) ?? DEFAULTS.visit.hours[1].time },
      { day: DEFAULTS.visit.hours[2].day, time: str(BUSINESS.sunday) ?? DEFAULTS.visit.hours[2].time },
    ] satisfies HourRow[],
    address:
      BUSINESS.address && BUSINESS.address.filter((l) => l && l.trim()).length
        ? BUSINESS.address.filter((l) => l && l.trim())
        : DEFAULTS.visit.address,
    phone: str(BUSINESS.phone) ?? DEFAULTS.visit.phone,
    email: str(BUSINESS.email) ?? DEFAULTS.visit.email,
    map: str(BUSINESS.map) ?? DEFAULTS.visit.map,
  },

  footer: str(BUSINESS.businessName)
    ? {
        line: [brandName, addressLines?.[0]].filter(Boolean).join(" · "),
        copyright: `© ${new Date().getFullYear()} ${brandName}. All rights reserved.`,
      }
    : DEFAULTS.footer,

  meta: {
    title: str(BUSINESS.metaTitle) ?? `${brandName} — ${DEFAULTS.brand.tagline}`,
    description: str(BUSINESS.metaDescription) ?? str(BUSINESS.heroSub) ?? DEFAULTS.hero.sub,
  },
};
