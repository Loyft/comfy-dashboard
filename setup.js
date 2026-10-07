/* ==========================================================================
   comfy-dashboard setup
   Edit the values below, save, and reload index.html. That's all.
   To share your setup, send this one file; to use someone else's, replace it.
   ========================================================================== */
window.SETUP = {
  name: "",                                          // shown in the greeting, e.g. "sam"
  searchUrl: "https://www.startpage.com/sp/search",  // any engine using ?q=
  askUrl: "https://www.perplexity.ai/search",        // second search bar (AI answers); any ?q= endpoint
  noAiBefore: "2022-01-01",                          // the "no ai" toggle limits results to before this date
  weather: { city: "Berlin", lat: 52.52, lon: 13.41 }, // coordinates: open-meteo.com
  wallpapers: ["dusk", "moss", "ink"],               // palettes defined in the CSS; first = default
  links: {                                           // group name -> [label, url]
    "daily": [
      ["Proton Mail", "https://mail.proton.me"],
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
      ["Bandcamp", "https://bandcamp.com"],
      ["Hacker News", "https://news.ycombinator.com"]
    ]
  },
  // Widgets enabled by default. Remove an id here, or toggle in the UI.
  defaultWidgets: ["weather", "news", "progress", "notes", "todo", "timer"]
};
