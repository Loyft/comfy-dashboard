/* ==========================================================================
   comfy-dashboard setup
   Edit the values below, save, and reload index.html. That's all.
   To share your setup, send this one file; to use someone else's, replace it.
   You can also change most of this in the page itself: click "edit" in the top bar.
   ========================================================================== */
window.SETUP = {
  name: "",                                          // shown in the greeting, e.g. "sam"
  searchUrl: "https://www.startpage.com/sp/search",  // any engine using ?q=
  askUrl: "https://www.perplexity.ai/search",        // second search bar (AI answers); any ?q= endpoint
  noAiBefore: "2022-11-30",                          // the "no ai" toggle limits results to before this date (the day ChatGPT was released)
  favicons: true,                                    // true = show each site's own favicon (loaded from that site); false = letter badges only
  newTab: true,                                      // true = links open in a new tab; false = same tab
  hnRange: "front",                                  // Hacker News widget: front | hour | day | week | month
  pondHnRange: "day",                                // pond theme sidebar: front | hour | day | week | month (fixed there; change it here or in edit mode)
  pondHnPos: null,                                   // pond sidebar position as {x, y} fractions of the window; set it by dragging in edit mode (null = default left side)
  pondVideo: "auto",                                 // pond theme video quality: auto | 720p | 1080p | 1440p | 4K
  pondVideos: [                                      // video files for the pond theme (you provide them; put them in assets/)
    { label: "720p",  width: 1280, src: "assets/pond-720.mp4" },
    { label: "1080p", width: 1920, src: "assets/pond-1080.mp4" },
    { label: "1440p", width: 2560, src: "assets/pond-1440.mp4" },
    { label: "4K",    width: 3840, src: "assets/pond-2160.mp4" }
  ],
  weather: { city: "Berlin", lat: 52.52, lon: 13.41 }, // shown in the top bar; coordinates: open-meteo.com
  themes: ["dusk", "moss", "ink", "matrix", "minimal", "artist", "cyber", "medieval", "sketch", "pond"], // the theme button cycles through these; first = default
  greetings: {                                       // text of the greeting by time of day (any language)
    night: "still up", morning: "good morning", afternoon: "good afternoon", evening: "good evening"
  },
  links: {                                           // group name -> [label, url, optional icon url]
    "daily": [
      ["Proton Mail", "https://mail.proton.me", "https://mail.proton.me/assets/favicon.ico"],
      ["OpenStreetMap", "https://www.openstreetmap.org"],
      ["Internet Archive", "https://archive.org"],
      ["Wikipedia", "https://www.wikipedia.org"]
    ],
    "dev": [
      ["GitHub", "https://github.com"],
      ["Codeberg", "https://codeberg.org"],
      ["Stack Overflow", "https://stackoverflow.com"],
      ["Lobsters", "https://lobste.rs"]
    ],
    "media": [
      ["YouTube", "https://www.youtube.com"],
      ["Reddit", "https://www.reddit.com"],
      ["Bandcamp", "https://bandcamp.com", "https://s4.bcbits.com/img/favicon/favicon.ico"],
      ["Hacker News", "https://news.ycombinator.com"]
    ]
  },
  // Widgets enabled by default. Remove an id here, or toggle in the UI.
  defaultWidgets: ["news", "progress", "notes", "todo", "timer"]
};
