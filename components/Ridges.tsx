// Layered silhouette of the Khasi Hills, the signature motif of the site.
export default function Ridges({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 1440 320" preserveAspectRatio="none" aria-hidden="true">
      <path d="M0 210 C120 170 220 120 340 150 C460 180 520 90 650 100 C780 110 860 170 980 140 C1100 110 1220 60 1440 120 L1440 320 L0 320 Z" fill="#6B8BA4" opacity="0.55" />
      <path d="M0 250 C160 210 260 190 380 220 C520 255 600 170 760 180 C900 190 1000 240 1140 215 C1260 195 1360 170 1440 190 L1440 320 L0 320 Z" fill="#2C5545" opacity="0.85" />
      <path d="M0 290 C180 260 300 270 460 285 C640 300 760 250 920 262 C1080 274 1240 300 1440 270 L1440 320 L0 320 Z" fill="#0F2A21" />
    </svg>
  );
}
