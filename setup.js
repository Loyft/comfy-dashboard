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
  favicons: true,                                    // true = show each site's own favicon (loaded from that site); false = letter badges only
  hnRange: "front",                                  // Hacker News widget: front | hour | day | week | month
  weather: { city: "Berlin", lat: 52.52, lon: 13.41 }, // shown in the top bar; coordinates: open-meteo.com
  themes: ["dusk", "moss", "ink", "matrix", "minimal", "artist", "cyber", "medieval", "sketch"], // the theme button cycles through these; first = default
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
