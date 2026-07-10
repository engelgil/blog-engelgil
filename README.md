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

1. Crea un repositorio nuevo en GitHub, por ejemplo `Blog-EngelTech`.
2. Sube todo el contenido de esta carpeta a la raíz del repositorio
   (puedes arrastrar los archivos desde la interfaz web de GitHub, o con git):
   ```bash
   git init
   git add .
   git commit -m "Primer commit del blog"
   git branch -M main
   git remote add origin https://github.com/TU-USUARIO/Blog-EngelTech.git
   git push -u origin main
   ```
3. En GitHub, entra a **Settings → Pages**.
4. En "Build and deployment", selecciona **Deploy from a branch**.
5. Elige la rama `main` y la carpeta `/ (root)`, luego guarda.
6. Espera uno o dos minutos: GitHub te dará la URL pública, algo como
   `https://tu-usuario.github.io/Blog-EngelTech/`.


