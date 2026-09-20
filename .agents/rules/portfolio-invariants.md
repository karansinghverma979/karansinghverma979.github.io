# 🌐 Portfolio Workspace Rules & Web Invariants

> **Project**: karansinghverma979.github.io (Sovereign Executive Portfolio)  
> **Deployment**: GitHub Pages (Raw Static Hosting via `.nojekyll`)  
> **Author**: Karan Singh Verma

---

## 🏛️ Core Principles & Invariants

### 1. ⚡ Zero Framework & 0% Hydration Bloat
- **Vanilla Web Platform**: Single-page architecture powered strictly by semantic HTML5, modern vanilla CSS3, and lean vanilla JavaScript (<10 KB total payload).
- **Zero Heavy Bundlers**: No React, Vue, Angular, or heavy node bundlers. Raw static assets served directly with `.nojekyll`.
- **Sub-100ms FCP**: Maintain 100/100 Google Lighthouse performance score.

### 2. 🎨 Obsidian AMOLED Design System (#07080B)
- **Visual Baseline**: Deep `#07080B` backdrop with glassmorphism (`backdrop-filter: blur(16px)`), subtle atmospheric radial glow fields, and high-contrast typography.
- **Mobile Responsiveness**: Fluid viewport adaptation down to 320px mobile screens with zero horizontal overflow or clipping.

### 3. 🛡️ 5-Pass Vibe-Coding Pre-Launch Defense
- **Zero In-Source Secrets**: Never commit private keys, tokens, or environment files.
- **Private Telegram Isolation**: Never expose private bot tokens, owner chat IDs, or personal bot URLs on public portfolio pages.
- **No Third-Party Analytics Trackers**: Respect user privacy; zero intrusive telemetry or surveillance scripts.

### 4. 🛣️ Zero Absolute Machine Path Invariant
- **Relative Web Paths**: All CSS, JS, and image asset references must use relative URLs (`./assets/...`) ensuring universal portability across domains and local file previews.
