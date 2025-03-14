# 🚀 Portafolio de Jemapierk Simon

Bienvenido a mi portafolio, un espacio donde muestro mis proyectos y habilidades como Ingeniero de Sistemas especializado en Desarrollo Web. Este proyecto está desarrollado con **Next.js**, **TypeScript**, **Tailwind CSS** y utiliza **NextAuth** para la autenticación en proyectos específicos.

## 📂 Estructura del Proyecto

```plaintext
portfolio-g/
│── public/                     # Archivos estáticos
│── src/
│   ├── app/
│   │   ├── layout.tsx          # Layout general del portafolio
│   │   ├── page.tsx            # Página principal
│   │   ├── proyectos/          # Sección de proyectos
│   │   │   ├── page.tsx        # Listado de proyectos
│   │   │   ├── colegio/        # Proyecto Colegio
│   │   │   │   ├── layout.tsx
│   │   │   │   ├── page.tsx
│   │   │   │   ├── dashboard/
│   │   │   │   ├── auth/       # Autenticación Colegio (NextAuth)
│   │   │   │   ├── api/        # API del Colegio
│   │   │   │   ├── services/   # Servicios Colegio
│   │   │   │   ├── prisma/     # Base de datos Colegio
│   │   │   ├── universidad/    # Proyecto Universidad
│   │   │   │   ├── layout.tsx
│   │   │   │   ├── page.tsx
│   │   │   │   ├── dashboard/
│   │   │   │   ├── auth/       # Autenticación Universidad (NextAuth)
│   │   │   │   ├── api/        # API Universidad
│   │   │   │   ├── services/   # Servicios Universidad
│   │   │   │   ├── prisma/     # Base de datos Universidad
│   ├── components/             # 🔥 Componentes reutilizables
│   ├── libs/                   # Librerías y utilidades
│   ├── services/               # Servicios globales
│── .env                        # Variables de entorno
│── next.config.mjs             # Configuración de Next.js
│── tsconfig.json               # Configuración de TypeScript
```

## 🛠️ Tecnologías Utilizadas

- **Frontend**: Next.js, React, TypeScript, Tailwind CSS
- **Backend**: API Routes en Next.js
- **Autenticación**: NextAuth.js
- **Base de Datos**: Prisma ORM con PostgreSQL

## 🌍 Proyectos dentro del Portafolio

### 🎓 **Colegio**
Un sistema de gestión para colegios, donde los administradores pueden gestionar estudiantes, cursos y profesores.

### 🏛️ **Universidad**
Una plataforma para la administración universitaria, con funcionalidades específicas como inscripción de alumnos, gestión de horarios y evaluaciones.

## 🚀 Instalación y Ejecución

1. Clonar el repositorio:
   ```bash
   git clone https://github.com/tu-usuario/portfolio-g.git
   ```
2. Instalar dependencias:
   ```bash
   cd portfolio-g
   npm install
   ```
3. Configurar variables de entorno (`.env`):
   ```plaintext
   DATABASE_URL_COLEGIO=postgres://...
   DATABASE_URL_UNIVERSIDAD=postgres://...
   NEXTAUTH_SECRET=tu_secreto
   ```
4. Ejecutar el proyecto:
   ```bash
   npm run dev
   ```

## 📌 Mejoras Futuras

- **📸 Capturas de pantalla** – Agregar imágenes o gifs de la UI en acción.
- **🛠 Configuración avanzada** – Explicar cómo cambiar configuraciones como personalizar el tema o modificar endpoints.
- **🚀 Despliegue** – Documentar cómo desplegar el proyecto en Vercel, Netlify o un VPS.
- **✅ Pruebas** – Incluir detalles sobre testing con Jest, Cypress, etc.
- **📊 Métricas y Analíticas** – Explicar cómo integrar Google Analytics o herramientas de monitoreo.
- **🎨 Diseño y UX** – Enlazar mockups o prototipos si los hay.
- **📌 Roadmap** – Lista de mejoras o características futuras.
- **👥 Contribuciones** – Guía para colaboradores si el proyecto es open source.
- **📄 Licencia** – Definir los derechos de uso del código.

## 📌 Notas Finales
Este portafolio no solo es una muestra de mis habilidades, sino una plataforma modular donde cada proyecto tiene su propia arquitectura independiente. 🚀

¡Gracias por visitar mi portafolio! Si tienes alguna pregunta o sugerencia, no dudes en contactarme. 😊

