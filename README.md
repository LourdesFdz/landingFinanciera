# Landing Page - Plan Inversión Fácil 

Este proyecto fue desarrollado como parte de un reto técnico para evaluar habilidades en Angular, accesibilidad, SEO, performance y analítica digital. La aplicación consiste en una landing page moderna y responsiva para promocionar un producto financiero.

---

## Tecnologías utilizadas

- **Angular 16:** 
Framework principal del proyecto, utilizado para construir una SPA moderna, modular y mantenible.
- **Angular Router (con lazy loading):** 
Sistema de enrutamiento que permite dividir la aplicación en módulos cargados bajo demanda para mejorar el rendimiento.
- **Angular Reactive Forms:** 
Formularios controlados desde el componente con validaciones reactivas y control total del estado.
- **JSON Server:** 
API falsa que simula un backend RESTful para recibir los datos del formulario de contacto.
- **Google Tag Manager (simulado):** 
Implementación del objeto `dataLayer` para simular eventos de analítica y seguimiento de interacciones del usuario.
- **HTML5 semántico:** 
Uso correcto de etiquetas estructurales (`<section>`, `<header>`, `<main>`, etc.) para SEO y accesibilidad.
- **SCSS:** 
Preprocesador CSS que permite una mejor organización, reutilización y mantenimiento de estilos.
- **Lighthouse:** 
Herramienta de Google utilizada para medir y mejorar el rendimiento, accesibilidad y SEO de la página.

---

## Estructura del sitio

La landing page incluye las siguientes secciones principales:

1. **Hero:** Imagen de fondo cambiante con título, descripción y CTA.
2. **Cómo funciona:** Explicación visual del proceso de inversión.
3. **Testimonios:** Opiniones de usuarios simuladas.
4. **Nosotros:** Quiénes somos y qué ofrecemos.
5. **Únete al equipo:** Enlace para postulaciones.
6. **Formulario de contacto:** Nombre, correo y mensaje con validación reactiva.
7. **Footer:** Enlaces legales y redes sociales.

---

## Pasos para correr el proyecto

1. Clona el repositorio:
git clone https://github.com/tu-usuario/landingFinanciera.git
cd landing-financiera

2. Instala las dependencias:
npm install

3. Inicia el proyecto:
npm run start

4. Abre tu navegador en:
http://localhost:4200

Nota--El proyecto incluye una API simulada con JSON Server. Para levantarla, ejecuta:
npm run start:json

O para iniciar simultáneamente el frontend y la API:
npm run start:all