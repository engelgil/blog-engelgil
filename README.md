# Blog personal — Engel Gil

Blog estático (HTML + CSS + JS puro, sin frameworks ni dependencias de build)
sobre integración de sistemas, Inteligencia Artificial y software a medida
para pymes.

## Estructura del proyecto

```
├── index.html                 # Inicio
├── sobre-mi.html               # Página "Sobre mí"
├── contacto.html                # Página de contacto
├── blog.html                    # Listado de entradas
├── posts/
│   ├── entrada-1-bienvenida.html
│   ├── entrada-2-marca-personal-redes.html
│   └── entrada-3-reflexion.html
├── css/style.css                # Estilos
├── js/main.js                   # Menú móvil, año dinámico, formulario
└── assets/favicon.svg
```

## Publicar en GitHub Pages (paso a paso)

1. Crea un repositorio nuevo en GitHub, por ejemplo `blog-engelgil`.
2. Sube todo el contenido de esta carpeta a la raíz del repositorio
   (puedes arrastrar los archivos desde la interfaz web de GitHub, o con git):
   ```bash
   git init
   git add .
   git commit -m "Primer commit del blog"
   git branch -M main
   git remote add origin https://github.com/TU-USUARIO/blog-engelgil.git
   git push -u origin main
   ```
3. En GitHub, entra a **Settings → Pages**.
4. En "Build and deployment", selecciona **Deploy from a branch**.
5. Elige la rama `main` y la carpeta `/ (root)`, luego guarda.
6. Espera uno o dos minutos: GitHub te dará la URL pública, algo como
   `https://tu-usuario.github.io/blog-engelgil/`.

## Antes de entregar la tarea

- Reemplaza el correo de ejemplo en `contacto.html` (`tucorreo@ejemplo.com`)
  por tu correo real.
- Si quieres que el formulario de contacto envíe mensajes de verdad,
  conéctalo a un servicio como Formspree o EmailJS (el formulario actual
  es una demo que solo funciona en el navegador).
- Verifica que los enlaces de LinkedIn e Instagram funcionen correctamente.
- Toma las capturas de pantalla de las tres entradas publicadas para
  incluirlas en el PDF que pide la actividad, junto con la URL final del blog.

## Personalización rápida

- Colores y tipografía: variables CSS al inicio de `css/style.css` (bloque `:root`).
- Textos e íconos: directamente en cada archivo `.html`.
- Nuevas entradas: copia cualquier archivo dentro de `posts/`, edita el
  contenido y agrega una tarjeta nueva en `blog.html` e `index.html`.
