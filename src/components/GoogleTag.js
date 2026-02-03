"use client"; // Required for Next.js App Router client components

import { useEffect } from "react";

const GoogleTag = () => {
  useEffect(() => {
    // Check if gtag is already loaded
    if (window.gtag) return;

    // Load the gtag.js script
    const script = document.createElement("script");
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${
      process.env.NEXT_PUBLIC_GOOGLE_TAG_ID || "AW-17023322270"
    }`;
    document.head.appendChild(script);

    // Initialize dataLayer and gtag
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    window.gtag = gtag;

    gtag("js", new Date());
    gtag("config", process.env.NEXT_PUBLIC_GOOGLE_TAG_ID || "AW-17023322270");
  }, []);

  return null;
};

export default GoogleTag;
