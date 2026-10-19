// Every placeholder image on the site is generated here, so real photos
// can be swapped in from one place. Replace `ph(...)` calls with paths in
// /public/images once approved photos are available.
// NOTE (Policy §10): photos showing minors need parental consent on file
// before they appear on any public page.

export function ph(w: number, h: number, label: string, bg = "2C5545", fg = "E6ECEE") {
  return `https://placehold.co/${w}x${h}/${bg}/${fg}?text=${encodeURIComponent(label).replace(/%20/g, "+")}`;
}

export const placeholders = {
  heroWelcome: ph(1600, 900, "Sunday worship at GCC Laban"),
  heroConference: ph(1600, 900, "Annual convention banner", "3E5C76"),
  heroSeries: ph(1600, 900, "Sermon series artwork", "0F2A21"),
  welcomeVideo: ph(960, 540, "Welcome video", "173A2E"),
  storyTeaser: ph(800, 1000, "Early congregation, 1990s", "3E5C76"),
  newsletterCover: ph(600, 800, "Newsletter cover", "173A2E", "E4CC8C"),
  map: ph(1200, 600, "Map of GCC Laban, Shillong", "C9D4D8", "173A2E"),
};
