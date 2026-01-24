# Portfolio 2026 - Joan Jimenez

> Mi portfolio personal demostrando habilidades en desarrollo web moderno, semántica HTML5, y arquitectura escalable. Proyecto académico para DAW en IFP.

## 📋 Tabla de Contenidos
- [Sobre el Proyecto](#sobre-el-proyecto)
- [Demo](#demo)
- [Características](#características)
- [Stack Tecnológico](#stack-tecnológico)
- [Instalación](#instalación)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Buenas Prácticas Implementadas](#buenas-prácticas-implementadas)
- [Estado del Desarrollo](#estado-del-desarrollo)
- [Aprendizajes](#aprendizajes)
- [Licencia](#licencia)

## 🎯 Sobre el Proyecto

Proyecto académico de desarrollo web enfocado en:
- ✅ **Semántica HTML5 correcta** → Accesibilidad + SEO desde el inicio
- ✅ **Arquitectura CSS escalable** → BEM + Variables CSS
- ✅ **Build moderno** → Vite en lugar de Webpack
- ✅ **Desarrollo orientado a componentes**

### ¿Por qué este proyecto?
Aplicar conocimientos de DAW en un caso real: un portfolio profesional que demuestre tanto diseño como arquitectura limpia.

## 🌐 Demo
📱 [Ver Portfolio](URL-aquí-cuando-esté-deployado)

## ✨ Características

- [ ] **Header responsive** con navegación semántica
- [ ] **Hero section** con call-to-actions
- [ ] **About Me** con descripción profesional
- [ ] **Projects** con filtrado dinámico
- [ ] **Contact form** accesible
- [ ] **Footer** con metadata de copyright
- [ ] **Responsive design** (Mobile First)
- [ ] **Dark mode** (planeado)

## 🛠️ Stack Tecnológico

| Aspecto | Tecnología |
|--------|-----------|
| **Build Tool** | Vite 5+ |
| **HTML** | HTML5 Semántico |
| **CSS** | SCSS + BEM |
| **JavaScript** | Vanilla JS (ES6+) |
| **Accesibilidad** | WCAG 2.1 AA |

## 📦 Instalación

```bash
# Clonar repositorio
git clone https://github.com/tuusuario/portfolio-2026.git
cd portfolio-2026

# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev

# Build para producción
npm run build
```

## 📁 Estructura del Proyecto

```
portfolio-2026/
├── src/
│   ├── main.js              # Entry point
│   ├── components/          # Componentes reutilizables
│   ├── pages/              # Páginas
│   ├── sections/           # Secciones del portfolio
│   ├── scripts/            # Lógica de negocio
│   ├── styles/
│   │   ├── main.scss       # Importador principal
│   │   ├── base/           # Reset, tipografía
│   │   ├── layout/         # Header, Footer
│   │   └── components/     # Estilos de componentes
│   └── assets/             # Imágenes, fuentes, iconos
├── public/                 # Archivos estáticos
├── index.html             # HTML principal
├── vite.config.js         # Configuración Vite
└── package.json           # Dependencias
```

## 🎓 Buenas Prácticas Implementadas

### Semántica HTML
- ✅ Un único `<h1>` por página
- ✅ Estructura lógica: `<header>`, `<nav>`, `<main>`, `<footer>`
- ✅ Atributos aria-label para accesibilidad
- ✅ `<time datetime="">` para fechas

### CSS Moderno (BEM + Preprocessor)
```scss
// Ejemplo: Componente Header
.header {
  // Bloque
  &__logo { }      // Elemento
  &__nav { }       // Elemento
  &--active { }    // Modificador
}
```

### JavaScript Limpio
- Modularidad con ES6 modules
- Sin dependencias innecesarias (vanilla JS)
- Event delegation

## 🚀 Estado del Desarrollo

| Componente | Estado | Prioridad |
|-----------|--------|-----------|
| HTML Semántico | ✅ | 🔴 |
| Estilos Base | 🔄 | 🔴 |
| Componentes | 🔄 | 🟡 |
| JavaScript | ⏳ | 🟡 |
| Accesibilidad | ⏳ | 🟢 |
| Testing | ⏳ | 🟢 |

**Leyenda:** ✅ Completado | 🔄 En progreso | ⏳ No iniciado

## 💡 Aprendizajes Clave

### De este proyecto aprendí:
1. **Vite vs Webpack** → Compilación más rápida, config mínima
2. **SCSS @use @forward** → Mejor que @import (módulos reales)
3. **BEM en proyectos reales** → Escalabilidad en CSS
4. **Semántica impacta SEO** → No es solo "correcto", es estrategia
5. **Mobile First** → Constraint-based design

## 📄 Licencia

Este proyecto está bajo licencia MIT. Puedes usarlo como referencia educativa.

---

**Nota:** Este es un proyecto académico en desarrollo. El código es parte de mi aprendizaje en DAW.