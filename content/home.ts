import { archive, stock } from "./placeholders";

// Dummy data for the home page. Replace with real entries (or a CMS) later.
export const slides = [
  {
    title: "You are welcome here",
    text: "Join us this Sunday, or watch online from wherever you are.",
    cta: { label: "Plan your visit", href: "/new-here" },
    image: stock.liftedHands(1600, 900),
  },
  {
    title: "Annual convention",
    text: "Three days of worship, teaching and prayer. Dates to be announced.",
    cta: { label: "See events", href: "/events" },
    image: stock.worshipCrowd(1600, 900),
  },
  {
    title: "Stewardship parables",
    text: "A four-part series on living faithfully with what God has entrusted to us.",
    cta: { label: "Watch the series", href: "/sermons" },
    image: stock.openBible(1600, 900),
  },
];

export const sermons = [
  { title: "Faithful with little", speaker: "Senior Pastor", date: "18 Oct 2026", image: stock.worshipCrowd(960, 540) },
  { title: "The pattern on the mountain", speaker: "Guest speaker", date: "11 Oct 2026", image: archive.pulpit },
  { title: "Timber for the temple", speaker: "Pastor", date: "4 Oct 2026", image: stock.openBible(640, 360) },
];

export const devotionals = [
  { date: "Monday 19 October", verse: "Philippians 1:6", text: "He who began a good work in you will carry it on to completion." },
  { date: "Tuesday 20 October", verse: "Psalm 118:23", text: "The Lord has done this, and it is marvellous in our eyes." },
  { date: "Wednesday 21 October", verse: "Ephesians 2:20", text: "Built on the foundation of the apostles and prophets, Christ Jesus the cornerstone." },
];

export const events = [
  { title: "Youth worship night", date: "Sat 24 Oct", time: "5:00 PM", action: "Know more", image: archive.youngMen },
  { title: "Water baptism service", date: "Sun 1 Nov", time: "After worship", action: "Register", image: stock.shillongHills(640, 420) },
  { title: "Women's prayer breakfast", date: "Sat 7 Nov", time: "8:00 AM", action: "Register", image: archive.benches },
  { title: "Christmas carol outreach", date: "Dec 2026", time: "Dates soon", action: "Know more", image: archive.worshipLeader },
];

export const testimonies = [
  { title: "Healed through prayer", image: archive.praiseDance },
  { title: "A family restored", image: archive.groupPhoto },
  { title: "Found a church home", image: stock.liftedHands(480, 480) },
  { title: "Called into missions", image: stock.shillongHills(480, 480) },
];

export const actionTiles = [
  { title: "Sunday services", text: "Times, directions and what to expect on your first visit.", href: "/new-here", cta: "Plan a visit" },
  { title: "Watch live", text: "Join Sunday worship on YouTube, wherever you are.", href: "/sermons#live", cta: "Watch" },
  { title: "Give", text: "Partner with the work of God in Shillong and beyond.", href: "/give", cta: "Give" },
  { title: "Foundations", text: "First steps in following Jesus, with a study guide for each lesson.", href: "/ministries#discipleship", cta: "Start" },
  { title: "Get connected", text: "Join a cell group or a serving team near you.", href: "/ministries#cell-groups", cta: "Find a group" },
  { title: "Prayer request", text: "Tell us how we can pray. A pastor will follow up.", href: "/prayer", cta: "Send a request" },
];

export const ministries = [
  { id: "children", title: "Children", text: "Sunday school where little ones learn to love Jesus.", image: archive.congregation },
  { id: "youth", title: "Youth", text: "A generation on fire, worshipping and serving together.", image: archive.youngMen },
  { id: "families", title: "Families", text: "Strengthening marriages and homes on God's Word.", image: archive.groupPhoto },
  { id: "cell-groups", title: "Cell groups", text: "Small groups meeting in homes across Shillong.", image: stock.openBible(640, 480) },
  { id: "women", title: "Women", text: "Prayer, fellowship and growing in faith together.", image: archive.benches },
  { id: "men", title: "Men", text: "Men of faith, integrity and service.", image: archive.pulpit },
  { id: "missions", title: "Missions", text: "Carrying the Gospel to more than ten states and beyond.", image: stock.shillongHills(640, 480) },
];
