/**
 * Central theme file — edit colors here to update the entire site.
 * Imported by tailwind.config.js. CSS variables in index.css must be kept in sync.
 */

export const colors = {
  'primary-bg':     '#1a1a2e',  // main page background
  'secondary-bg':   '#202040',  // alternate section background
  'bg-deep':        '#121233',  // used in body/hero gradient
  'accent-1':       '#00f5c3',  // primary accent (buttons, highlights)
  'accent-2':       '#e94560',  // secondary accent
  'accent-hover':   '#26ffe3',  // accent hover state
  'text-primary':   '#e0e0e0',  // headings and primary text
  'text-secondary': '#a0a0b0',  // body text and labels
  'tag-bg':         '#263859',  // tech tag background
  'tag-hover':      '#00f5c3',  // tech tag hover background
};

export const shadows = {
  card:       '0 4px 24px rgba(0, 0, 0, 0.4)',
  cardHover:  '0 6px 28px rgba(0, 245, 195, 0.2)',
  glowAccent: '0 0 16px rgba(0, 245, 195, 0.9)',
};

export const gradients = {
  hero: `linear-gradient(135deg, ${colors['primary-bg']}, ${colors['bg-deep']})`,
};
