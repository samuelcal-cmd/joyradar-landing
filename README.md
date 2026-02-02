# JoyRadAR Landing Page

Una landing page moderna y visualmente impactante para **JoyRadAR**, una agenda cultural de nueva generación con geolocalización y visualización tipo AR.

## 🚀 Stack Tecnológico

- **Vite** - Build tool ultrarrápido
- **React 18** - Biblioteca de UI
- **TypeScript** - Tipado estático
- **TailwindCSS** - Estilos utilitarios

## 📦 Instalación y Desarrollo Local

```bash
# Instalar dependencias
npm install

# Ejecutar servidor de desarrollo
npm run dev

# Construir para producción
npm run build

# Previsualizar build de producción
npm run preview
```

## 🔗 Configurar URLs

Edita el archivo `src/config.ts` para actualizar los enlaces de los botones CTA:

```typescript
export const PROTOTYPE_URL = "https://tu-prototipo.com";
export const INFOGRAPHIC_URL = "https://tu-infografia.com";
export const MEDIUM_URL = "https://medium.com/@tu-usuario";
```

## 🎬 Sustituir el Vídeo Hero

1. Coloca tu vídeo `.mp4` en la carpeta `public/`
2. Renómbralo a `hero.mp4` (o actualiza la referencia en `src/components/Hero.tsx`)
3. El vídeo debe ser:
   - Formato: MP4 (H.264 recomendado)
   - Resolución: 1920x1080 o superior
   - Sin texto superpuesto (el texto se añade con HTML)

Si el vídeo no carga, se mostrará automáticamente un fallback con anillos de radar animados.

## 🌐 Despliegue en GitHub Pages

### Paso 1: Configurar el nombre del repositorio

Edita `vite.config.ts` y cambia `<REPO_NAME>` por el nombre real de tu repositorio:

```typescript
export default defineConfig({
  plugins: [react()],
  base: '/mi-repositorio/', // ← Cambia esto
})
```

### Paso 2: Hacer push a GitHub

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/tu-usuario/tu-repo.git
git push -u origin main
```

### Paso 3: Habilitar GitHub Pages

1. Ve a **Settings** → **Pages** en tu repositorio
2. En **Source**, selecciona **GitHub Actions**
3. El workflow se ejecutará automáticamente en cada push a `main`

Tu sitio estará disponible en: `https://tu-usuario.github.io/tu-repo/`

## 📁 Estructura del Proyecto

```
landingv1/
├── public/
│   └── hero.mp4          # Vídeo de fondo del hero
├── src/
│   ├── components/
│   │   ├── Hero.tsx           # Sección hero con vídeo
│   │   ├── WhatIs.tsx         # Qué es JoyRadAR
│   │   ├── HowItWorks.tsx     # Cómo funciona
│   │   ├── EditorialValue.tsx # Valor editorial
│   │   └── Footer.tsx         # Pie de página
│   ├── App.tsx           # Componente principal
│   ├── config.ts         # URLs configurables
│   ├── index.css         # Estilos globales
│   └── main.tsx          # Punto de entrada
├── .github/
│   └── workflows/
│       └── deploy.yml    # Workflow de GitHub Actions
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.ts
└── README.md
```

## 🎨 Paleta de Colores

| Color | Hex | Uso |
|-------|-----|-----|
| Negro | `#000000` | Fondo principal |
| Naranja | `#FF9500` | Acento primario, CTAs |
| Azul | `#007AFF` | Acento secundario |

## 📄 Licencia

© 2026 JoyRadAR. Todos los derechos reservados.

---

**Nota de transparencia**: El vídeo de fondo ha sido generado con IA. La lógica y la interfaz se muestran en el prototipo.
