export const site = {
  name: "Grace Covenant Church",
  short: "GCC Shillong",
  address: "Grace Covenant Church, Laban, Shillong, Meghalaya 793004",
  serviceTimes: [
    { label: "Sunday worship", time: "10:00 AM" }, // TODO: confirm with church office
    { label: "Mid-week Bible study", time: "Wednesday, 6:00 PM" }, // TODO: confirm
  ],
  vision:
    "To glorify God by using media, digital publishing and the written word to reach the world through the five-fold ministry, bringing the message of Jesus Christ to diverse audiences in many languages.",
  mission:
    "To produce and share Gospel-centred content in many languages and formats, so people can encounter Christ, grow spiritually, stay informed and stay connected with the GCC family wherever they are.",
  socials: [
    { label: "YouTube", href: "#" },
    { label: "Facebook", href: "#" },
    { label: "Instagram", href: "#" },
    { label: "WhatsApp Channel", href: "#" },
    { label: "Telegram", href: "#" },
  ],
};

export type NavItem = { label: string; href: string };
export type NavGroup = { label: string; columns: { heading: string; items: NavItem[] }[] };

export const nav: (NavItem | NavGroup)[] = [
  { label: "Home", href: "/" },
  {
    label: "About",
    columns: [
      {
        heading: "Who we are",
        items: [
          { label: "About GCC", href: "/about" },
          { label: "Our story", href: "/about/our-story" },
          { label: "What we believe", href: "/about/beliefs" },
          { label: "Leadership", href: "/about/leadership" },
        ],
      },
      {
        heading: "Our approach",
        items: [
          { label: "Five-fold ministry", href: "/about#five-fold" },
          { label: "Seven visions", href: "/about/our-story#visions" },
          { label: "Core values", href: "/about#values" },
        ],
      },
    ],
  },
  {
    label: "Connect",
    columns: [
      {
        heading: "Get involved",
        items: [
          { label: "New here?", href: "/new-here" },
          { label: "Cell groups", href: "/ministries#cell-groups" },
          { label: "Prayer request", href: "/prayer" },
          { label: "Member portal", href: "/members" },
        ],
      },
    ],
  },
  { label: "Events", href: "/events" },
  {
    label: "Ministries",
    columns: [
      {
        heading: "For every age",
        items: [
          { label: "Children", href: "/ministries#children" },
          { label: "Youth", href: "/ministries#youth" },
          { label: "Families", href: "/ministries#families" },
        ],
      },
      {
        heading: "Serve and grow",
        items: [
          { label: "Women", href: "/ministries#women" },
          { label: "Men", href: "/ministries#men" },
          { label: "Missions", href: "/ministries#missions" },
          { label: "Worship", href: "/ministries#worship" },
        ],
      },
    ],
  },
  {
    label: "Resources",
    columns: [
      {
        heading: "Watch and read",
        items: [
          { label: "Sermons", href: "/sermons" },
          { label: "Newsletter", href: "/newsletter" },
          { label: "Watch live", href: "/sermons#live" },
        ],
      },
    ],
  },
  { label: "Give", href: "/give" },
  { label: "Contact", href: "/contact" },
];

export const coreValues = [
  { name: "Excellence for God's glory", text: "Colossians 3:23 sets the standard for everything we make." },
  { name: "Integrity", text: "Faithful, accountable care of every resource, platform and piece of member data entrusted to us." },
  { name: "Collaboration", text: "Working in unity with church leadership, volunteers and every ministry." },
  { name: "Creativity", text: "New ways to share the timeless Gospel without diluting sound doctrine." },
  { name: "Servant leadership", text: "Humility and spiritual health matter more than technical performance." },
  { name: "Many tongues, one family", text: "Honouring India's languages and cultures while staying faithful to Scripture." },
];

export const fiveFold = [
  { office: "Apostolic", text: "Vision, values, oversight and church planting across the region." },
  { office: "Prophetic", text: "Seasonal words and exhortation, shared with the congregation." },
  { office: "Evangelistic", text: "Reaching seekers in Shillong and beyond with the Gospel." },
  { office: "Pastoral", text: "Prayer, care, family life and discipleship for every member." },
  { office: "Teaching", text: "Sound teaching, sermon notes and study resources from the Word." },
];
