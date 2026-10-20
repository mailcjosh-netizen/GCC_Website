// Every image on the site is defined here, so real photos can be swapped in
// from one place.
//
// Two kinds of image are used for now:
//  1. archive: GCC's own photos, taken from "God's Call" (2018), in /public/images/archive
//  2. stock: free Unsplash photos used as visual references (see docs/image-credits.md).
//     Replace these with GCC's own photos before launch.
//
// NOTE (Policy §10): photos showing minors need parental consent on file before
// they appear on any public page. The archive photos are from the early 1990s;
// the Core Committee should still confirm they may be published.

export function ph(w: number, h: number, label: string, bg = "2C5545", fg = "E6ECEE") {
  return `https://placehold.co/${w}x${h}/${bg}/${fg}?text=${encodeURIComponent(label).replace(/%20/g, "+")}`;
}

const unsplash = (id: string, w: number, h?: number) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&q=70&w=${w}${h ? `&h=${h}` : ""}`;

export const stock = {
  worshipCrowd: (w = 1600, h?: number) => unsplash("photo-1635178945103-fb817c1476fd", w, h), // Terren Hurst
  liftedHands: (w = 1600, h?: number) => unsplash("photo-1666713937678-1dedb9b8f9ff", w, h), // Caitlyn Wilson
  openBible: (w = 1600, h?: number) => unsplash("photo-1469228252629-cbe7cb7db2c8", w, h), // Aaron Burden
  shillongHills: (w = 1600, h?: number) => unsplash("photo-1665551896704-b0f439e7087d", w, h), // Abhishek Barooah, Shillong
};

// Prefix for files in /public when the site is served from a sub-folder (GitHub Pages).
const base = process.env.NEXT_PUBLIC_BASE_PATH || "";

export const archive = {
  apostleDas: `${base}/images/archive/apostle-harry-das.jpg`,
  pulpit: `${base}/images/archive/early-01.jpg`, // preaching in the Laban house
  groupPhoto: `${base}/images/archive/early-02.jpg`, // early congregation group photo
  congregation: `${base}/images/archive/early-03.jpg`, // full congregation with children
  worshipLeader: `${base}/images/archive/early-04.jpg`, // worship with guitar
  praiseDance: `${base}/images/archive/early-05.jpg`, // joyful praise in the hall
  guitarSolo: `${base}/images/archive/early-06.jpg`, // special song at the cross
  youngMen: `${base}/images/archive/early-07.jpg`, // young people in worship
  benches: `${base}/images/archive/early-08.jpg`, // fellowship on the wooden benches
};

export const glimpses = [
  { src: archive.pulpit, caption: "Preaching in the rented house at Laban" },
  { src: archive.groupPhoto, caption: "The early church family" },
  { src: archive.congregation, caption: "A full house, children and all" },
  { src: archive.worshipLeader, caption: "Worship in the old Assam-type hall" },
  { src: archive.praiseDance, caption: "Joyful praise" },
  { src: archive.guitarSolo, caption: "A song at the cross" },
  { src: archive.youngMen, caption: "Young people in worship" },
  { src: archive.benches, caption: "Fellowship on the donated benches" },
];

export const placeholders = {
  welcomeVideo: archive.pulpit,
  storyTeaser: archive.groupPhoto,
  newsletterCover: stock.shillongHills(600, 800),
  mapEmbed: "https://www.google.com/maps?q=Laban,+Shillong,+Meghalaya&output=embed", // TODO: replace with exact church pin
};
