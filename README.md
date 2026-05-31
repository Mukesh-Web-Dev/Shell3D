# 🐚 Shell3D — Animated 3D Ring Shell Visualization

> A mesmerizing 3D visualization of concentric, rotating cylindrical rings that form a shell-like structure. Built with React Three Fiber and GPU-instanced rendering for smooth, colorful animation.

## 🔗 Live Demo

**[▶ View Live Project](https://Mukesh-Web-Dev.github.io/Shell3D)**

---

## 📖 About

This project creates a **dynamic 3D ring shell** composed of 50 nested open-ended cylinders, each with progressively increasing radii and slight rotational offsets. The rings rotate continuously on the X-axis, producing a hypnotic spiral tunnel effect. Each ring is randomly colored, and the entire structure uses GPU instancing for high-performance rendering.

### ✨ Key Features

- 🌀 **Animated Ring Shell** — 50 concentric cylinders rotate together, creating a spiraling tunnel effect
- 🎨 **Random Colors** — Each ring is assigned a unique random RGB color for a vibrant, kaleidoscopic look
- ⚡ **GPU Instancing** — All 50 rings are rendered as instances of a single geometry for optimal performance
- 🔄 **Continuous Rotation** — The ring group rotates on the X-axis every frame for smooth perpetual motion
- 🕹️ **Orbit Controls** — Mouse-driven camera controls with auto-rotation for an immersive experience
- 💡 **Configurable Lighting System** — Full Leva GUI controls for ambient, directional, spot, hemisphere, point, and rect area lights (available in source code)
- 🖼️ **High-Fidelity Geometry** — 64 radial segments and 20 height segments for smooth cylindrical surfaces

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| [React](https://react.dev/) | UI framework |
| [Three.js](https://threejs.org/) | 3D rendering engine |
| [React Three Fiber](https://r3f.docs.pmnd.rs/) | React renderer for Three.js |
| [React Three Drei](https://drei.docs.pmnd.rs/) | Instanced rendering, OrbitControls |
| [Leva](https://github.com/pmndrs/leva) | Real-time GUI controls for lighting parameters |
| [Vite](https://vite.dev/) | Build tool & dev server |

---

## 📁 Project Structure

```
Shell3D/
├── public/
│   ├── favicon.svg                # Custom SVG favicon
│   └── icons.svg                  # SVG icons
├── dist/                          # Production build output
├── src/
│   ├── main.jsx                   # React entry point
│   ├── App.jsx                    # Main app — Canvas, lighting system (Leva controls), OrbitControls
│   ├── App.css                    # App-specific styles
│   ├── index.css                  # Global styles (fullscreen canvas layout)
│   ├── RingShell/
│   │   └── RingShell.jsx          # Core component — instanced cylinder ring with rotation animation
│   └── assets/                    # Additional assets directory
├── index.html                     # HTML entry point
├── vite.config.js                 # Vite config (base path for GitHub Pages)
├── eslint.config.js               # ESLint configuration
├── package.json                   # Dependencies & scripts
├── package-lock.json              # Dependency lock file
└── .gitignore                     # Git ignore rules
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/Mukesh-Web-Dev/Shell3D.git
   cd Shell3D
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

4. **Open in browser**

   Navigate to the local URL shown in the terminal (typically `http://localhost:5173/Shell3D/`).

### 💡 Enabling the Lighting GUI

The source code includes a full `MyLight` component with [Leva](https://github.com/pmndrs/leva) GUI controls for 6 types of lights. To enable it:

1. Open `src/App.jsx`
2. Uncomment `<MyLight />` inside the `<Canvas>` component
3. The Leva panel will appear in the top-right corner, letting you tweak all lighting parameters in real-time

---

## 📦 Build & Deployment

### Build for Production

```bash
npm run build
```

This generates optimized files in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

### Deploy to GitHub Pages

This project is pre-configured for GitHub Pages deployment using the [`gh-pages`](https://www.npmjs.com/package/gh-pages) package.

```bash
npm run deploy
```

This command will:
1. Run `npm run build` automatically (via the `predeploy` script)
2. Push the `dist/` folder to the `gh-pages` branch
3. Make the project live at `https://Mukesh-Web-Dev.github.io/Shell3D`

---

## 📜 Available Scripts

| Script | Command | Description |
|---|---|---|
| `dev` | `npm run dev` | Start Vite dev server with HMR |
| `build` | `npm run build` | Build for production |
| `preview` | `npm run preview` | Preview production build locally |
| `lint` | `npm run lint` | Run ESLint |
| `deploy` | `npm run deploy` | Deploy to GitHub Pages |

---

## 📄 License

This project is open source and available for learning and experimentation.
