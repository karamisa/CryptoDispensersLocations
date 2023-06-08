"use client";

import React from "react";
import Script from "next/script";

export default function StoreLocator() {
  return (
    <>
    <div className="storerocket-store-locator flex-1"></div>
      <Script
        src="//cdn.storerocket.io/widget.js"
        strategy="afterInteractive"
        id="storerocket-widget"
        onReady={() => {
          StoreRocket.init({
            selector: ".storerocket-store-locator",
            account: "MZponO58DN",
          });
        }}
      />
    </>
  );
}

