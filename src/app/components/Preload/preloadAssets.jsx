const preloadAssets = [
    // Bilder
  
    // Videos
    { type: "video", path: "/assets/videos/Cloudy2.mp4" },
    { type: "video", path: "/assets/videos/drift.mp4" },
    { type: "video", path: "/assets/videos/Video2.mp4" },
    { type: "video", path: "/assets/videos/Video3.mp4" },
    { type: "video", path: "/assets/videos/redfire.mp4" },
  
    // Komponenten (Lazy Load)
  
    // Seiten (Lazy Load)
    { type: "page", path: () => import("../../blog/page.jsx") },
    { type: "page", path: () => import("../../portfolio/page.jsx") },
    { type: "page", path: () => import("../../guestbook/page.jsx") },

  ];
  
  export default preloadAssets;
  