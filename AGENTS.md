# AGENTS.md — Portfolio NuriaCD

Este archivo describe la arquitectura, convenciones y procesos del proyecto para agentes de código. El lector se asume sin conocimiento previo del repositorio.

---

## Project overview

Este es un **portfolio personal** (SPA) desarrollado con **React 19** y construido con **Vite**. Es un sitio estático que presenta proyectos personales y profesionales de la autora, con navegación interna, filtros por tecnología y cambio de tema claro/oscuro.

El idioma principal del proyecto es **español** (textos de UI, comentarios y documentación).

---

## Technology stack

| Capa                 | Tecnología                                                             |
| -------------------- | ---------------------------------------------------------------------- |
| Framework UI         | React 19 (JSX)                                                         |
| Routing              | React Router 7 (`react-router`)                                        |
| Bundler / dev server | Vite 7                                                                 |
| Estilos              | Sass (SCSS)                                                            |
| Iconos               | React Icons (`react-icons`)                                            |
| Linting              | ESLint 9 + `eslint-plugin-react-hooks` + `eslint-plugin-react-refresh` |
| Despliegue           | `gh-pages` (GitHub Pages)                                              |

---

## Project structure

```
├── public/                 # Assets estáticos servidos tal cual (favicon)
├── src/
│   ├── main.jsx            # Punto de entrada: monta App con StrictMode + BrowserRouter
│   ├── components/         # Componentes React organizados por dominio
│   │   ├── App.jsx         # Root component: estado global, rutas y layout
│   │   ├── header/         # Header, Nav_elements, Menu_hamburguesa
│   │   ├── projects/       # Projects, Projects_list, Project_card, Project_details
│   │   ├── projects/filters/  # Filters, FilterByTech, ResetButton
│   │   ├── footer/         # Footer
│   │   └── wip/            # Wip, Spinner (pantalla "Work In Progress")
│   ├── data/
│   │   └── projects.js     # Datos estáticos de los proyectos del portfolio
│   ├── styles/             # Hojas de estilo SCSS
│   │   ├── core/           # _reset.scss, _variables.scss
│   │   ├── pages/          # _index.scss (estilos de página/layout root)
│   │   └── layout/         # Estilos de componentes (misma estructura que components/)
│   └── assets/             # Imágenes (jpeg, png, webp)
├── index.html              # Template HTML de Vite
├── vite.config.js          # Configuración de Vite
├── eslint.config.js        # Configuración de ESLint (flat config)
└── package.json
```

---

## Build and test commands

Todos los comandos disponibles están definidos en `package.json`:

| Comando           | Descripción                                      |
| ----------------- | ------------------------------------------------ |
| `npm run dev`     | Inicia el servidor de desarrollo de Vite         |
| `npm run build`   | Genera la build de producción en `dist/`         |
| `npm run preview` | Previsualiza la build de producción localmente   |
| `npm run lint`    | Ejecuta ESLint sobre todo el proyecto            |
| `npm run deploy`  | Despliega el contenido de `dist/` a GitHub Pages |

**No hay tests automatizados** en el proyecto actualmente.

---

## Runtime architecture

- **Entry point**: `src/main.jsx` monta el árbol React en `#root` del `index.html`, envolviendo la app en `StrictMode` y `BrowserRouter`.
- **Routing**: gestionado por React Router. Rutas actuales:
  - `/` — Sobre mí (actualmente no renderiza contenido, solo header/footer)
  - `/projects` — Listado de proyectos con filtros
  - `/projects/:idProject` — Detalle de un proyecto
  - `/contact` — Contacta (no implementado)
- **State management**: solo React local state (`useState`). No se usa Redux, Zustand ni Context API. El estado global (tema, menú, filtro de tecnología) vive en `App.jsx` y se propaga mediante props.
- **Datos**: los proyectos se definen como objetos literales en `src/data/projects.js` y se importan en `App.jsx`.

---

## Code style guidelines

### JavaScript / React

- **Módulos ES**: `"type": "module"` en `package.json`. Todos los archivos usan `import`/`export`.
- **Extensiones**: los componentes React usan `.jsx`.
- **Nombres de componentes**: PascalCase en los archivos (ej. `Project_details.jsx`, `Menu_hamburguesa.jsx`).
- **Alias de rutas**: `@/` apunta a `/src`. Usado consistentemente en imports de componentes, estilos y assets.
- **Props**: desestructuración de props en los parámetros del componente.
- **Manejo de eventos**: las funciones handler se nombran con prefijo `handle` (ej. `handleToggleMenu`, `handleChangeInput`).
- **Comentarios**: se usan comentarios `// TODO:` para trabajo pendiente. Hay algunos en el código actual.

### SCSS / CSS

- **Preprocesador**: Sass con sintaxis SCSS.
- **Estructura de estilos**: organización inspirada en ITCSS:
  - `core/` — reset y variables globales
  - `pages/` — estilos de layout de página
  - `layout/` — estilos de componentes, reflejando la estructura de `src/components/`
- **Metodología de clases**: aproximación a BEM. Ejemplos:
  - Bloque: `.header`, `.projectsContainer`
  - Elemento: `.header__nav__list`, `.projectsContainer__project__title`
  - Modificador: `.mode__light`, `.mode__dark`, `.menu__open`, `.menu__close`
- **Variables**: definidas en `src/styles/core/_variables.scss` con nombres semánticos (`$primary-color`, `$secondary-color`, `$bg-light`, `$bg-dark`, `$text-dark`, `$text-light`).
- **Responsive**: media queries con breakpoints en `768px` y `1024px`.
- **Imports**: se usa `@use` para módulos core y `@import` para variables en archivos parciales.

---

## Testing instructions

No existen tests en el proyecto. Si se añaden, se recomienda usar el ecosistema estándar de React + Vite (Vitest + React Testing Library + jsdom).

---

## Deployment process

El proyecto se despliega a **GitHub Pages** mediante el paquete `gh-pages`:

1. Ejecutar `npm run build` para generar `dist/`.
2. Ejecutar `npm run deploy` para publicar el contenido de `dist/` en la rama `gh-pages` del repositorio.

La configuración de Vite usa `base: "/"`, lo que asume que la app se sirve desde el dominio raíz. Si el despliegue cambiara a un subdirectorio (por ejemplo, `https://usuario.github.io/portfolio/`), habría que actualizar `base` en `vite.config.js`.

---

## Security considerations

- **`dangerouslySetInnerHTML`**: se usa en `Project_card` y `Project_details` para renderizar descripciones de proyectos que contienen etiquetas HTML (`<b>`, `<br/>`, `<a>`, etc.). El contenido proviene de datos estáticos controlados (`src/data/projects.js`), por lo que el riesgo es bajo, pero cualquier nueva fuente de datos debería sanitizarse.
- **Enlaces externos**: todos los enlaces externos usan `target="_blank"` con `rel="noopener noreferrer"`, lo cual es correcto.
- **No hay manejo explícito de errores** en la UI para rutas no encontradas ni para proyectos inexistentes en `Project_details`.

---

## Development conventions

- **Idioma de la UI**: español.
- **Datos estáticos**: los proyectos se mantienen en `src/data/projects.js` como un objeto cuyas claves son identificadores internos (ej. `a1Gru`, `a3Ev`) y cuyos valores son objetos con metadatos del proyecto (`id`, `title`, `tech`, `url`, `urlCode`, `photo`, `smallText`, `longText`, `date`).
- **Rutas de imágenes**: se importan directamente desde `src/assets/` para que Vite procese el hash en build.
- **Fuentes**: se cargan desde Google Fonts en `index.html` (`Elms Sans`, `Patrick Hand SC`, `Ubuntu`).
