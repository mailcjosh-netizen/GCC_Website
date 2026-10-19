# Grace Covenant Church, Shillong: website (draft)

Official website for Grace Covenant Church (GCC), Laban, Shillong.
**Status: draft, subject to Core Committee approval.**

## Run it locally
```bash
npm install
npm run dev        # open http://localhost:3000
npm run build      # production build check
```
Needs Node.js 20 or newer.

## Folder structure
```
app/            Pages (Next.js App Router)
  about/        About, Our story, Beliefs, Leadership
  new-here/     Visitor page
  ministries/   Ministry listing with anchors
  prayer/       Public prayer request form (UI only)
  members/      Member portal login shell (no auth yet)
components/     Header, footer, hero slider, timeline, shared UI
content/        All text and dummy data. Edit these, not the pages
  site.ts       Nav, vision, mission, values, five-fold
  history.ts    Timeline and seven visions (from "God's Call", 2018)
  beliefs.ts    Condensed Confession of Faith
  home.ts       Home page sermons, events, testimonies, ministries
  placeholders.ts  Every placeholder image in one place
docs/           Content sources and notes
```

## Design tokens ("Pine & Mist")
| Token | Hex | Use |
|---|---|---|
| pine | #173A2E | Primary, headings |
| pine-deep | #0F2A21 | Dark sections, footer |
| mist | #E6ECEE | Light text on dark, backgrounds |
| slate | #3E5C76 | Secondary text, tiles |
| gold | #C8A24A | Accent, buttons, rules |

Fonts: Cormorant Garamond (headings), Source Sans 3 (body), Noto Sans Devanagari (Hindi).

## Swapping images
All images are defined in `content/placeholders.ts`: `archive` (GCC photos from the 2018 book) and `stock` (Unsplash references, see `docs/image-credits.md`).
1. Put approved photos in `public/images/`.
2. Point the entry in `content/placeholders.ts` or `content/home.ts` to `"/images/your-photo.jpg"`.
3. Photos of minors need parental consent on file first (Policy §10).

## Branches
- `main`: approved content only
- `draft`: work in progress (default for review)
- `feature/<page>`: one branch per page or section

## Before anything goes to `main`
- [ ] Doctrinal content approved by Senior Pastor (Policy §9)
- [ ] History wording approved by Core Committee
- [ ] Every form shows a DPDP Act privacy notice
- [ ] No placeholder images left on public pages
- [ ] Khasi/Hindi translations proofread by Translation Wing

## Not built yet
Real i18n routes (/en, /kha, /hi), member authentication, sermon archive, events calendar, giving gateway, CMS.
