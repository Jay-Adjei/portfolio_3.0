'use client';
import { useEffect } from "react";

export default function Guestbook() {
  useEffect(() => {
    // Füge den giscus-Script-Tag ein
    const script = document.createElement("script");
    script.src = "https://giscus.app/client.js";
    script.async = true;
    script.setAttribute("data-repo", "GylanSalih/NextJS-Portify");
    script.setAttribute("data-default-comment-order", "newest");
    script.setAttribute("data-repo-id", "R_kgDONsIjJw");
    script.setAttribute("data-category", "General");
    script.setAttribute("data-category-id", "DIC_kwDONsIjJ84CmWBt");
    script.setAttribute("data-mapping", "pathname");
    script.setAttribute("data-strict", "0");
    script.setAttribute("data-reactions-enabled", "1");
    script.setAttribute("data-emit-metadata", "0");
    script.setAttribute("data-input-position", "bottom");
    script.setAttribute("data-theme", "dark");
    script.setAttribute("data-lang", "de");
    script.setAttribute("data-loading", "lazy");
    script.setAttribute("crossorigin", "anonymous");
    document.getElementById("giscus-container").appendChild(script);
  }, []);



  return (
    <div 
      className="container mx-auto"
      style={{
        padding: "2rem", // Increased padding for larger spaces
        paddingTop: "120px", // Slightly bigger top padding
        width: "60%", // Made width a bit wider
      }}
    >
      <h1 className="text-2xl font-bold mb-4">Guestbook</h1>
      <p className="mb-4">Leave a message in the guestbook!</p>
      <div id="giscus-container"></div>
    </div>
  );
}
