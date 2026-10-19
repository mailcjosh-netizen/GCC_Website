import type { Metadata } from "next";
import "./globals.css";
import DraftBanner from "@/components/DraftBanner";
import UtilityBar from "@/components/UtilityBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LivePill from "@/components/LivePill";

export const metadata: Metadata = {
  title: { default: "Grace Covenant Church, Shillong", template: "%s | Grace Covenant Church, Shillong" },
  description:
    "Grace Covenant Church, Laban, Shillong: a multilingual, Spirit-filled, Word-based family church built on the five-fold ministry since 1990.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:bg-white focus:p-3">Skip to content</a>
        <DraftBanner />
        <UtilityBar />
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <LivePill />
      </body>
    </html>
  );
}
