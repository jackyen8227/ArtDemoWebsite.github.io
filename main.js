/* ═══════════════════════════════════════════════════════════
   DATA — edit these arrays to add / remove your content
   ═══════════════════════════════════════════════════════════ */

const GAMES = [
    {
        id: 1, name: "Golden Dragon", cat: "Classic", rtp: "96.5%",
        desc: "5-reel Chinese dragon with immersive bonus rounds",
        colors: ["#c9a84c", "#7a1520", "#0e0e1a"],
        symbols: ["🐉", "💎", "🏯"],
        feats: ["Bonus Round", "Wild"],
        link: "games/golden-dragon/index.html"   // ← point to your game page
    },
    {
        id: 2, name: "Cyber Neon", cat: "Feature", rtp: "97.2%",
        desc: "Cyberpunk neon-drenched 5-reel universe",
        colors: ["#00c8d4", "#7c3aed", "#0a0a12"],
        symbols: ["⚡", "🤖", "🔮"],
        feats: ["Free Spins", "Multiplier"],
        link: "games/cyber-neon/index.html"
    },
    {
        id: 3, name: "Ocean Depths", cat: "Classic", rtp: "95.8%",
        desc: "Deep-sea treasure hunting adventure",
        colors: ["#0077b6", "#00b4d8", "#023e8a"],
        symbols: ["🐠", "⚓", "💰"],
        feats: ["Scatter", "Bonus"],
        link: "#"
    },
    {
        id: 4, name: "Space Voyage", cat: "Feature", rtp: "96.9%",
        desc: "Stellar exploration with cosmic jackpots",
        colors: ["#6a0572", "#ad2f86", "#0a0010"],
        symbols: ["🪐", "🚀", "⭐"],
        feats: ["Wilds", "Jackpot"],
        link: "#"
    },
    {
        id: 5, name: "Jungle Rush", cat: "Medium", rtp: "96.1%",
        desc: "Tropical adventure with exotic creatures",
        colors: ["#2d6a4f", "#40916c", "#1b3322"],
        symbols: ["🦜", "🌺", "💎"],
        feats: ["Tumble", "Free Spins"],
        link: "#"
    },
    {
        id: 6, name: "Vegas Royale", cat: "Classic", rtp: "95.5%",
        desc: "Classic Las Vegas casino nostalgia",
        colors: ["#c9a84c", "#1a1a2e", "#2d2d44"],
        symbols: ["🍒", "7️⃣", "🎰"],
        feats: ["Classic", "Bonus"],
        link: "#"
    },
    {
        id: 7, name: "Mythology", cat: "Feature", rtp: "97.0%",
        desc: "Epic battles of the ancient Greek gods",
        colors: ["#d4c5a9", "#1d3557", "#0a1520"],
        symbols: ["⚡", "🏛️", "🛡️"],
        feats: ["Pick Bonus", "Respin"],
        link: "#"
    },
    {
        id: 8, name: "Sakura Bloom", cat: "Medium", rtp: "96.3%",
        desc: "Serene Japanese cherry blossom setting",
        colors: ["#e8856a", "#c45a3c", "#1a0f0a"],
        symbols: ["🌸", "🏯", "🎋"],
        feats: ["Cascade", "Wild"],
        link: "#"
    }
];

const WORKS = [
    { id: 1, title: "Dragon Creature", cat: "Character", desc: "High-poly PBR character with full rigging", tools: ["Blender", "Substance"], poly: "45K", color: "#7c6aff", img: "" },
    { id: 2, title: "Ancient Temple", cat: "Environment", desc: "Modular env set with multi-LOD support", tools: ["Maya", "Unreal"], poly: "120K", color: "#d96898", img: "" },
    { id: 3, title: "Slot Symbol Pack", cat: "Props", desc: "Animated 3D symbols optimised for slots", tools: ["Blender", "Pixi.js"], poly: "8K", color: "#2dd4bf", img: "" },
    { id: 4, title: "Cyberpunk City", cat: "Environment", desc: "Noir urban landscape, dynamic lighting", tools: ["Blender", "HDRI"], poly: "200K", color: "#f97316", img: "" },
    { id: 5, title: "Treasure Chest", cat: "Props", desc: "Interactive chest with particle burst fx", tools: ["Three.js", "Blender"], poly: "12K", color: "#60a5fa", img: "" },
    { id: 6, title: "Alien Creature", cat: "Character", desc: "Sci-fi creature, fully rigged & animated", tools: ["Maya", "ZBrush"], poly: "68K", color: "#34d399", img: "" }
];
// ↑ set `img` to a path like "assets/images/dragon.jpg" to replace the placeholder icon

const SHADERS = [
    { id: 1, title: "Neon Glow", cat: "Symbol", desc: "Bloom-based neon glow for slot symbols", color: "#00c8d4", shape: "◆", demo: "#" },
    { id: 2, title: "Fire Burst", cat: "Win", desc: "Explosive fire particles on jackpot", color: "#ff6b35", shape: "✦", demo: "#" },
    { id: 3, title: "Diamond Shimmer", cat: "Symbol", desc: "Realistic diamond refraction shader", color: "#a855f7", shape: "◇", demo: "#" },
    { id: 4, title: "Water Ripple", cat: "BG", desc: "Animated caustic water surface", color: "#06b6d4", shape: "〰", demo: "#" },
    { id: 5, title: "Star Field", cat: "BG", desc: "Parallax star field with nebula clouds", color: "#7c3aed", shape: "✧", demo: "#" },
    { id: 6, title: "Lightning", cat: "Win", desc: "Dynamic strike effect for big wins", color: "#facc15", shape: "⟡", demo: "#" }
];
// ↑ set `demo` to a URL or an in-page anchor where the live shader demo lives

const TECHS = [
    { name: "Pixi.js", desc: "2D WebGL Renderer", icon: "🎮", note: "Game Engine" },
    { name: "Go", desc: "RTP Calculation Engine", icon: "🐹", note: "Backend" },
    { name: "WebGL / GLSL", desc: "GPU Shader Programs", icon: "🌐", note: "Graphics" },
    { name: "Three.js", desc: "3D Model Preview", icon: "📦", note: "3D Viewer" },
    { name: "Blender", desc: "3D Modeling & Rigging", icon: "🎨", note: "Assets" },
    { name: "WebSocket", desc: "Real-time Communication", icon: "⚡", note: "Networking" }
];

/* ═══════════════════════════════════════════════════════════
   FILTER BAR — reusable for every section
   ═══════════════════════════════════════════════════════════ */

function createFilterBar(containerId, items, accentColor, onFilter) {
    const container = document.getElementById(containerId);
    let active = "All";

    function render() {
        container.innerHTML = items
            .map(item => `<button class="filter-btn" data-filter="${item}">${item}</button>`)
            .join('');

        container.querySelectorAll('.filter-btn').forEach(btn => {
            const isActive = btn.dataset.filter === active;
            btn.style.background = isActive ? accentColor : 'rgba(255,255,255,0.06)';
            btn.style.color = isActive ? '#0a0a12' : '#7a7a8a';
            btn.style.borderColor = isActive ? accentColor : 'transparent';

            btn.addEventListener('click', () => {
                active = btn.dataset.filter;
                onFilter(active);
                render(); // re-style buttons
            });
        });
    }

    render();
}

/* ═══════════════════════════════════════════════════════════
   GAMES SECTION
   ═══════════════════════════════════════════════════════════ */

function renderGameCard(game) {
    return `
    <div class="game-card reveal">
        <div class="game-card__banner">
            <div class="game-card__banner-bg"
                 style="background: linear-gradient(135deg, ${game.colors[0]}55, ${game.colors[1]}45, ${game.colors[2]}60);"></div>
            <div class="game-card__shimmer"></div>
            <div class="game-card__symbols">
                ${game.symbols.map(s => `<span class="game-card__symbol">${s}</span>`).join('')}
            </div>
            <div class="game-card__rtp">RTP ${game.rtp}</div>
            <div class="game-card__banner-fade"></div>
        </div>
        <div class="game-card__body">
            <div class="game-card__header">
                <div>
                    <h3 class="game-card__name">${game.name}</h3>
                    <p class="game-card__desc">${game.desc}</p>
                </div>
                <span class="game-card__cat">${game.cat}</span>
            </div>
            <div class="game-card__footer">
                <div class="game-card__feats">
                    ${game.feats.map(f => `<span class="game-card__feat">${f}</span>`).join('')}
                </div>
                <a href="${game.link}" class="game-card__play">
                    <i class="fas fa-play"></i> Play
                </a>
            </div>
        </div>
    </div>`;
}

function renderGamesSection() {
    const grid = document.getElementById('games-grid');

    function render(filter) {
        const list = filter === 'All' ? GAMES : GAMES.filter(g => g.cat === filter);
        grid.innerHTML = list.map(renderGameCard).join('');
        initScrollReveal();
    }

    createFilterBar('games-filter', ['All', 'Classic', 'Feature', 'Medium'], '#c9a84c', render);
    render('All');

    // Architecture flow
    document.getElementById('arch-flow').innerHTML = `
        <span class="arch-chip" style="background:#3a86ff12; border:1px solid #3a86ff28;">
            <span class="arch-chip__name" style="color:#3a86ff;">Pixi.js</span>
            <span class="arch-chip__sub">Renderer</span>
        </span>
        <span class="arch-arrow"><i class="fas fa-arrow-right"></i></span>
        <span class="arch-chip" style="background:#8b5cf612; border:1px solid #8b5cf628;">
            <span class="arch-chip__name" style="color:#8b5cf6;">WebSocket</span>
            <span class="arch-chip__sub">↕ duplex</span>
        </span>
        <span class="arch-arrow"><i class="fas fa-arrow-right"></i></span>
        <span class="arch-chip" style="background:#00add812; border:1px solid #00add828;">
            <span class="arch-chip__name" style="color:#00add8;">Go</span>
            <span class="arch-chip__sub">RTP Engine</span>
        </span>
        <span class="arch-bar__note">← server calculates fair RTP per spin</span>
    `;
}

/* ═══════════════════════════════════════════════════════════
   3D WORKS SECTION
   ═══════════════════════════════════════════════════════════ */

function renderWorkCard(work) {
    // If an image path is set, show it; otherwise show the cube icon placeholder
    const bannerContent = work.img
        ? `<img src="${work.img}" alt="${work.title}"
               style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;">`
        : `<div class="work-card__icon"><i class="fas fa-cube"></i></div>`;

    return `
    <div class="work-card reveal" data-color="${work.color}">
        <div class="work-card__banner" style="background: linear-gradient(145deg, ${work.color}45, ${work.color}10);">
            ${bannerContent}
            <div class="work-card__banner-fade"></div>
            <span class="work-card__poly">${work.poly} poly</span>
        </div>
        <div class="work-card__body">
            <div class="work-card__header">
                <h3 class="work-card__name">${work.title}</h3>
                <span class="tag" style="background:${work.color}18; color:${work.color};">${work.cat}</span>
            </div>
            <p class="work-card__desc">${work.desc}</p>
            <div class="work-card__tools">
                ${work.tools.map(t => `<span class="work-card__tool">${t}</span>`).join('')}
            </div>
        </div>
    </div>`;
}

function render3DWorksSection() {
    const grid = document.getElementById('works-grid');

    function render(filter) {
        const list = filter === 'All' ? WORKS : WORKS.filter(w => w.cat === filter);
        grid.innerHTML = list.map(renderWorkCard).join('');
        initCardHovers();
        initScrollReveal();
    }

    createFilterBar('works-filter', ['All', 'Character', 'Environment', 'Props'], '#a78bfa', render);
    render('All');
}

/* ═══════════════════════════════════════════════════════════
   SHADER LAB SECTION
   ═══════════════════════════════════════════════════════════ */

function renderShaderCard(shader, index) {
    return `
    <div class="shader-card reveal" data-color="${shader.color}">
        <div class="shader-card__preview"
             style="background: radial-gradient(circle at 50% 50%, ${shader.color}22, #080810 72%);">
            <div class="shader-card__glow"
                 style="background:${shader.color};
                        box-shadow:0 0 22px ${shader.color}55, 0 0 44px ${shader.color}22;
                        animation:glowPulse 2.4s ease-in-out ${index * 0.3}s infinite;">
                ${shader.shape}
            </div>
        </div>
        <div class="shader-card__body">
            <div class="shader-card__header">
                <h3 class="shader-card__name">${shader.title}</h3>
                <span class="tag" style="background:${shader.color}18; color:${shader.color};">${shader.cat}</span>
            </div>
            <p class="shader-card__desc">${shader.desc}</p>
            <a href="${shader.demo}" class="shader-card__demo" data-color="${shader.color}">▶ Live Demo</a>
        </div>
    </div>`;
}

function renderShadersSection() {
    const grid = document.getElementById('shaders-grid');

    function render(filter) {
        const list = filter === 'All' ? SHADERS : SHADERS.filter(s => s.cat === filter);
        grid.innerHTML = list.map((s, i) => renderShaderCard(s, i)).join('');
        initCardHovers();
        initScrollReveal();
    }

    createFilterBar('shaders-filter', ['All', 'Symbol', 'Win', 'BG'], '#22d3ee', render);
    render('All');
}

/* ═══════════════════════════════════════════════════════════
   TECH STACK SECTION
   ═══════════════════════════════════════════════════════════ */

function renderTechSection() {
    document.getElementById('tech-grid').innerHTML = TECHS.map(t => `
    <div class="tech-card reveal">
        <span class="tech-card__icon">${t.icon}</span>
        <div class="tech-card__info">
            <h3 class="tech-card__name">${t.name}</h3>
            <p class="tech-card__desc">${t.desc}</p>
        </div>
        <span class="tech-card__note">${t.note}</span>
    </div>`).join('');
}

/* ═══════════════════════════════════════════════════════════
   INTERACTIONS
   ═══════════════════════════════════════════════════════════ */

// --- Navbar frosted-glass on scroll ---
function initNav() {
    const nav = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        nav.classList.toggle('scrolled', window.scrollY > 60);
    });
}

// --- Per-card hover colours (work + shader cards) ---
function initCardHovers() {
    // Cards with unique border colour on hover
    document.querySelectorAll('.work-card[data-color], .shader-card[data-color]').forEach(card => {
        const c = card.dataset.color;
        card.addEventListener('mouseenter', () => {
            card.style.borderColor = c + '38';
            card.style.transform = 'translateY(-3px)';
        });
        card.addEventListener('mouseleave', () => {
            card.style.borderColor = 'rgba(255,255,255,0.06)';
            card.style.transform = 'translateY(0)';
        });
    });

    // Shader "Live Demo" buttons
    document.querySelectorAll('.shader-card__demo[data-color]').forEach(btn => {
        const c = btn.dataset.color;
        btn.addEventListener('mouseenter', () => {
            btn.style.borderColor = c;
            btn.style.color = c;
        });
        btn.addEventListener('mouseleave', () => {
            btn.style.borderColor = 'rgba(255,255,255,0.08)';
            btn.style.color = '#5a5a6a';
        });
    });
}

// --- Scroll-triggered reveal with staggered delay ---
let revealObserver = null;

function initScrollReveal() {
    if (revealObserver) revealObserver.disconnect();

    revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;

            // Calculate sibling index for stagger
            const siblings = Array.from(entry.target.parentElement.children);
            const index = siblings.indexOf(entry.target);
            entry.target.style.transitionDelay = `${index * 0.08}s`;
            entry.target.classList.add('visible');
            revealObserver.unobserve(entry.target);
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal:not(.visible)').forEach(el => {
        revealObserver.observe(el);
    });
}

/* ═══════════════════════════════════════════════════════════
   BOOT
   ═══════════════════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {
    initNav();
    renderGamesSection();
    render3DWorksSection();
    renderShadersSection();
    renderTechSection();
    initCardHovers();
    initScrollReveal();
});