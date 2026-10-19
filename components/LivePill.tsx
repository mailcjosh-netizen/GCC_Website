"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

// Shows a floating "Watch live" button on Sundays (India time).
export default function LivePill() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const day = new Date().toLocaleDateString("en-IN", { weekday: "long", timeZone: "Asia/Kolkata" });
    setShow(day === "Sunday");
  }, []);
  if (!show) return null;
  return (
    <Link
      href="/sermons#live"
      className="fixed bottom-5 right-5 z-30 flex items-center gap-2 rounded-full bg-pine px-5 py-3 text-mist shadow-lg hover:bg-pine-soft"
    >
      <span className="h-2.5 w-2.5 rounded-full bg-red-500" aria-hidden="true" />
      Watch live
    </Link>
  );
}
