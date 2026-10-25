"use client";
import { useEffect, useRef } from "react";
import { setupProductExplorer } from "@/script/script";

export default function CardProduct() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    // render kartu + pasang search & filter, cleanup otomatis saat unmount
    return setupProductExplorer(ref.current);
  }, []);

  return <div ref={ref} className="card-product" />;
}