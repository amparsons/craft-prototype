# Craft CMS Project

This is a Craft CMS site running locally with [DDEV](https://ddev.readthedocs.io/en/stable/) for development.

The project creates a theme using Twig rather than a headless approach.

---

## 🚀 Requirements

- [Docker](https://www.docker.com/get-started)  
- [DDEV](https://ddev.readthedocs.io/en/stable/) – I use OrbStack  
- PHP 8.x (handled by DDEV)  
- Composer (handled by DDEV)  
- Node.js 18+ (we’re using v22.x in this example)  

---

## 📦 Setup

### 1. Clone the repository
```bash
git clone https://github.com/amparsons/craft-prototype.git
cd craft-prototype
```

---

### 2. Install dependencies
```bash
npm install
```
This installs:
- **Vite** – bundling
- **TypeScript** – for our accordion
- **Sass** – styling
- **Browsersync** – live reload

---

### 3. Start DDEV
```bash
ddev start
```
Your site will be available at:  
`https://craft-prototype.ddev.site`

---

### 4. Development commands

#### Start watching files + auto-reload browser
```bash
npm run dev
```
- Watches `src/sass` and `src/js` for changes using Vite  
- Rebuilds into `web/dist/`  
- Proxies your DDEV site through Browsersync and reloads when files change  

Local dev URL:  
`http://localhost:3000`

---

#### Build production assets
```bash
npm run build
```
- Compiles Sass → CSS  
- Transpiles TypeScript → JavaScript  
- Outputs versioned files into `web/dist/`  

---

#### Preview production build
```bash
npm run serve
```
Serves the built files locally to preview exactly what will run in production.

---

### 5. Stop DDEV
```bash
ddev stop
```
Stops and removes the running containers.
