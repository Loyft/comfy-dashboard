# comfy-dashboard

A cozy, single-file browser start page. One `index.html`, no build step, no dependencies, no tracking. Set it as your homepage and make it yours.

![dusk theme](docs/dusk.jpg)

| `moss` | `ink` |
|---|---|
| ![moss theme](docs/moss.jpg) | ![ink theme](docs/ink.jpg) |
| **`matrix`** | **`minimal`** |
| ![matrix theme](docs/matrix.jpg) | ![minimal theme](docs/minimal.jpg) |
| **`artist`** | **`cyber`** |
| ![artist theme](docs/artist.jpg) | ![cyber theme](docs/cyber.jpg) |
| **`medieval`** | **`sketch`** (hand drawn) |
| ![medieval theme](docs/medieval.jpg) | ![sketch theme](docs/sketch.jpg) |
| **`pond`** (video background) | |
| ![pond theme](docs/pond.jpg) | |

## Features
- **Favorite links**, grouped, with each site's own favicon (letter badge as a fallback; switch off with `favicons: false`).
- **Two search bars:** Startpage (default, configurable) and a second one that asks Perplexity directly.
- **"ai" toggle** inside the Startpage search bar (crossed out = on): adds `before:2022-11-30` (the day ChatGPT was released) to your query so results predate the AI boom (the choice is remembered; change the date with `noAiBefore`).
- **Edit mode:** the pencil button opens a side panel to change your name, links (add, rename, reorder, delete), greetings, search engines, location and themes, and the page updates live. You can export your settings as `setup.local.js` or import someone else's.
- **Weather in the top bar** (Open-Meteo), next to the clock.
- **Optional widgets** you can toggle on and off in the page: Hacker News (front page, or top of the past hour / day / week / month), time progress (day / week / year), notes, to-do list, focus timer.
- **Ten themes** with their own artwork, colors, fonts and shapes: `dusk`, `moss`, `ink`, `matrix` (falling code), `minimal`, `artist`, `cyber`, `medieval`, `sketch` (hand drawn) and `pond` (a looping video background). Everything except the `pond` video is drawn in code, so there are no image files to license. Pick one from the theme dropdown in the top bar (hover an entry to preview it, click to apply); your choice is remembered.
- **Private:** notes, to-dos, widget choices and wallpaper are stored only in your browser (`localStorage`).
- Works offline apart from the weather and the news widget.

**About `pond`:** this theme plays a looping video behind the page. The video "Pond Ripples Black Cat" from MyLiveWallpapers is included in `assets/` in four sizes (720p, 1080p, 1440p and 4K); see Credits. The page picks the smallest one that still covers your screen's pixels, and you can force a quality in *edit* → *pond theme*. Want a different video? Put your own files in `assets/` and list them under `pondVideos` in `setup.js` (any subset of sizes works); the cat position used to place the search bars is the `CAT` constant in `index.html`. Without any video the theme is just a dark green background. The greeting is hand-lettered in a small single-stroke script that is drawn in code (no font) and written out stroke by stroke on first load; characters it has no glyph for fall back to plain text. Clicking makes a ripple.

## Use it
1. Download or clone this repo.
2. Open `setup.js` and fill in your name, links, weather city and so on.
3. Open `index.html` in your browser to try it.
4. Set it as your homepage, using the file URL, e.g. `file:///path/to/comfy-dashboard/index.html`.
   - Firefox: Settings → Home → Custom URLs.
   - Chrome / Edge: Settings → On startup → Open a specific page (and Appearance → Show home button).

## Customize
**In the page:** click *edit* in the top bar. Changes apply instantly and are saved in your browser. They override `setup.js`, so use *export* / *download setup.local.js* if you want them in a file (to back them up, share them, or use them in another browser), and *reset edits* to go back to the files.

**In a file:**
All your data lives in **`setup.js`**, a plain list of variables. Edit it, save, reload the page. To share your setup, send that one file; to import someone else's, drop it in place of yours.

| Option | What it does |
|---|---|
| `name` | Name shown in the greeting |
| `searchUrl` | Search engine endpoint that takes `?q=` |
| `askUrl` | Endpoint for the second search bar (Perplexity by default) |
| `noAiBefore` | Cut-off date used by the crossed-out "ai" toggle |
| `favicons` | `true` (default) shows each site's own favicon, fetched from that site; `false` uses letter badges only. A link can take a third entry with a custom icon URL |
| `newTab` | `true` (default) opens links in a new tab, `false` in the same tab |
| `pondVideo` | Quality of the `pond` video: `auto`, or one of the labels in `pondVideos` |
| `pondVideos` | List of `{ label, width, src }` video files for the `pond` theme |
| `hnRange` | Default range of the Hacker News widget: `front`, `hour`, `day`, `week` or `month` |
| `weather` | City label (shown in the top bar) plus latitude/longitude ([find coordinates](https://open-meteo.com)) |
| `themes` | Which themes the theme button cycles through (first = default) |
| `greetings` | Greeting text for night / morning / afternoon / evening, in any language |
| `links` | Groups of `[label, url]` pairs |
| `defaultWidgets` | Widgets enabled on first load |

If `setup.js` is missing or leaves something out, sensible defaults are used. Priority, lowest to highest: built-in defaults, `setup.js`, `setup.local.js`, edits made in the page.

**Add a theme:** copy a `:root[data-wp=…]` block in the CSS of `index.html` (colors, fonts, corner shapes), optionally add a `PAINT.yourname` function that draws its background as SVG, and add the name to `themes` in `setup.js`.

**Add a widget:** add an entry to `WIDGETS` in `index.html` with a `title`, a window-title `file`, and a `render(body)` function. It then appears in the widgets panel automatically. Return a timer id from `render` if it needs cleaning up.

## Privacy
The weather in the top bar calls `api.open-meteo.com` (and `geocoding-api.open-meteo.com` only when you search for a city in edit mode); the news widget calls `hacker-news.firebaseio.com` (front page) or `hn.algolia.com` (other time ranges). With `favicons` on, the page also requests each linked site's own `favicon.ico` (no third-party icon service). The weather request can't be switched off, so the page is not fully offline. Turn off the news widget and set `favicons: false` to limit it to that one call.

## License
MIT, see [LICENSE](LICENSE). The themes are drawn by the page's own code. The one exception is the video in `assets/` (see Credits), which is third-party and not covered by the MIT license.

## Credits
The `pond` theme background is the live wallpaper "Pond Ripples Black Cat" from MyLiveWallpapers. All rights to the video belong to its creator.
