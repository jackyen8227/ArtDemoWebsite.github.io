# YourName.dev — Portfolio

A static portfolio site for slot-game development, 3D modelling, and shader work.  
**No build step.** Open `index.html` directly or deploy to GitHub Pages in two clicks.

---

## Project Structure

```
your-portfolio/
│
├── index.html              ← Single-page portfolio (entry point)
│
├── css/
│   └── style.css           ← All styles (dark theme, cards, animations)
│
├── js/
│   └── main.js             ← Data arrays + rendering + interactions
│
├── assets/
│   └── images/             ← Put your 3D renders / screenshots here
│                              then set the `img` field in WORKS[]
│
├── games/                  ← One folder per playable slot game
│   ├── golden-dragon/
│   │   └── index.html      ← Standalone Pixi.js game page
│   └── cyber-neon/
│       └── index.html
│
├── .gitignore
└── README.md
```

---

## Quick Start (local)

```bash
git clone https://github.com/YourName/your-portfolio.git
cd your-portfolio
# open index.html in any browser — that's it, no install needed
```

---

## Deploy to GitHub Pages

1. Push this repo to GitHub.
2. **Settings → Pages → Source: main branch, root folder (`/`)**.
3. Your site is live at:  
   `https://YourName.github.io/your-portfolio/`

---

## How to Customise

### 1. Replace your name & links

Search-and-replace in `index.html`:

| Placeholder | Replace with |
|---|---|
| `YourName` | Your actual GitHub username |
| `your@email.com` | Your contact email |

### 2. Add or edit games

Open `js/main.js` and edit the `GAMES` array.  
Each entry looks like:

```js
{
    id: 1,
    name: "Golden Dragon",
    cat: "Classic",             // Classic | Feature | Medium
    rtp: "96.5%",
    desc: "Short description",
    colors: ["#c9a84c", "#7a1520", "#0e0e1a"],  // banner gradient (3 hex)
    symbols: ["🐉", "💎", "🏯"],                 // 3 emoji shown on banner
    feats: ["Bonus Round", "Wild"],              // feature tags
    link: "games/golden-dragon/index.html"       // path to your Pixi.js game
}
```

### 3. Add 3D work screenshots

1. Put your render image in `assets/images/` (e.g. `dragon.jpg`).
2. In the `WORKS` array, set the `img` field:

```js
{ ..., img: "assets/images/dragon.jpg" }
```

Leave `img` as an empty string `""` to keep the default cube-icon placeholder.

### 4. Add shader demos

In the `SHADERS` array, set `demo` to a URL or anchor:

```js
{ ..., demo: "shaders/neon-glow.html" }   // relative page
{ ..., demo: "#shader-neon" }              // in-page anchor
{ ..., demo: "https://glsl.io/..." }       // external link
```

### 5. Add a new game page

```
games/
└── my-new-game/
    ├── index.html          ← your Pixi.js game entry point
    ├── css/
    └── js/
```

Then add an entry to `GAMES[]` pointing `link` to `games/my-new-game/index.html`.

---

## Tech Used (in this portfolio site itself)

| What | Why |
|---|---|
| Plain HTML / CSS / JS | Zero dependencies, instant GitHub Pages deploy |
| Google Fonts — Rajdhani, Outfit | Display + body typefaces |
| Font Awesome 6 (CDN) | Icons (GitHub, envelope, play, etc.) |
| IntersectionObserver | Scroll-triggered card reveals |

---

## Game Stack (your actual games)

| Layer | Technology |
|---|---|
| Frontend renderer | Pixi.js (WebGL 2D) |
| Game logic & RTP | Go (served via WebSocket) |
| Real-time comms | WebSocket (duplex) |
| 3D previews | Three.js |
| Shader effects | WebGL / GLSL |
| 3D asset creation | Blender, Maya, ZBrush |
