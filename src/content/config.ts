// Type definitions for the one writable config object (business.ts).
// The form-app imports the palette/font keys (as types only) so the two stay in sync.

export type PaletteKey =
  | "marigold-green"
  | "sage-forest"
  | "midnight-gold"
  | "linen-rose";

export type FontSetKey =
  | "fraunces-dmsans"
  | "playfair-figtree"
  | "newsreader-hanken"
  | "cormorant-nunito";

// Each item/image override is partial — only the fields the user changed are written;
// site.ts merges them over the template defaults item-by-item.
export interface MenuItemOverride {
  name?: string;
  desc?: string;
  price?: string;
  img?: string;
}

export interface AreaImageOverride {
  src?: string;
  caption?: string;
}

export interface MarigoldConfig {
  // Required identity
  businessName: string;
  location: string;

  // Theme
  palette: PaletteKey;
  fontSet: FontSetKey;

  // Hero
  heroVideo?: string; // path under /public or a full URL; blank → default loop video
  heroImage?: string; // image URL background; when set, takes priority over heroVideo
  heroLine1?: string; // main headline line
  heroLine2?: string; // script-styled second line
  heroSub?: string; // hero sub-headline

  // About — the owners' comment
  aboutQuote?: string;
  aboutAttribution?: string;

  // Neighbourhood / Area
  areaEyebrow?: string;
  areaTitle?: string;
  areaSub?: string;
  areaImages?: AreaImageOverride[]; // 4 postcards

  // Menu — 6 items
  menuItems?: MenuItemOverride[];

  // Contact section headline
  contactEyebrow?: string;
  contactTitle?: string;
  contactSub?: string;

  // Contact information (Find Us / Visit)
  phone?: string;
  email?: string;
  address?: string[]; // one entry per address line
  monFri?: string;
  saturday?: string;
  sunday?: string;
  map?: string; // optional Google Maps embed URL

  // Meta (rarely needed — auto-derived from businessName otherwise)
  metaTitle?: string;
  metaDescription?: string;
}
