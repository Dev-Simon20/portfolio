# 🚀 Portafolio de Jeampierk Simon

Bienvenido a mi portafolio, un espacio donde muestro mis proyectos y habilidades como Ingeniero de Sistemas especializado en Desarrollo Web. Este proyecto está desarrollado con **Next.js**, **TypeScript**, **Tailwind CSS** y utiliza **NextAuth** para la autenticación en proyectos específicos.

## 📂 Estructura del Proyecto

```plaintext
portfolio-g/
│── public/                     
│── src/
│   ├── app/
│   │   ├── layout.tsx               # Layout general del portafolio
│   │   ├── page.tsx                 # Página principal
│   │   ├── global.css               # Estilos generales del proyecto
│   │   ├── favicon.ico              # Icono de la web 
│   │   ├── projects/               # Ruta para proyectos
│   │   │   ├── page.tsx             # Página de listado de proyectos
│   │   │   ├── pokedex/             # 🔥 Proyecto Pokedex
│   │   │   │   ├── layout.tsx
│   │   │   │   ├── page.tsx7
│   │   │   ├── my-little-shop/             # 🔥 Proyecto Colegio
│   │   │   │   ├── layout.tsx
│   │   │   │   ├── page.tsx
│   │   │   │   ├── dashboard/
│   │   │   │   ├── (auth)/            # 🔥 Autenticación del colegio (NextAuth)
│   │   │   │   │   ├── layout.tsx
│   │   │   │   │   ├── login.tsx
│   │   │   │   │   ├── register.tsx
│   │   │   │   │   ├── reset-password.tsx
│   │   │   │   ├── api/             # 🔥 API de la tienda
│   │   │   │   │   ├── route.ts
│   │   │   │   ├── services/        # 🔥 Servicios de la tienda
│   │   │   │   ├── prisma/          # 🔥 Base de datos de la tienda
│   │   │   │   │   ├── schema.prisma
│   │   │   │   │   ├── migrations/
│   │   │   │   ├── components/      # 📌 Componentes específicos del Colegio
│   │   │   │   │   ├── DashboardCard.tsx
│   │   │   │   │   ├── StudentTable.tsx
│   │   │   │   │   ├── FormRegistro.tsx
│   │   │   ├── colegio/             # 🔥 Proyecto Colegio
│   │   │   │   ├── layout.tsx
│   │   │   │   ├── page.tsx
│   │   │   │   ├── dashboard/
│   │   │   │   ├── auth/            # 🔥 Autenticación del colegio (NextAuth)
│   │   │   │   │   ├── login.tsx
│   │   │   │   │   ├── register.tsx
│   │   │   │   │   ├── reset-password.tsx
│   │   │   │   ├── api/             # 🔥 API del colegio
│   │   │   │   │   ├── route.ts
│   │   │   │   ├── services/        # 🔥 Servicios del colegio
│   │   │   │   ├── prisma/          # 🔥 Base de datos del colegio
│   │   │   │   │   ├── schema.prisma
│   │   │   │   │   ├── migrations/
│   │   │   │   ├── components/      # 📌 Componentes específicos del Colegio
│   │   │   │   │   ├── DashboardCard.tsx
│   │   │   │   │   ├── StudentTable.tsx
│   │   │   │   │   ├── FormRegistro.tsx
│   │   │   ├── universidad/         # 🔥 Proyecto Universidad
│   │   │   │   ├── layout.tsx
│   │   │   │   ├── page.tsx
│   │   │   │   ├── dashboard/
│   │   │   │   ├── auth/            # 🔥 Autenticación de la universidad (NextAuth)
│   │   │   │   │   ├── login.tsx
│   │   │   │   │   ├── register.tsx
│   │   │   │   │   ├── reset-password.tsx
│   │   │   │   ├── api/             # 🔥 API de la universidad
│   │   │   │   │   ├── route.ts
│   │   │   │   ├── services/        # 🔥 Servicios de la universidad
│   │   │   │   ├── prisma/          # 🔥 Base de datos de la universidad
│   │   │   │   │   ├── schema.prisma
│   │   │   │   │   ├── migrations/
│   │   │   │   ├── components/      # 📌 Componentes específicos de la Universidad
│   │   │   │   │   ├── CourseCard.tsx
│   │   │   │   │   ├── ProfesorTable.tsx
│   │   │   │   │   ├── FormInscripcion.tsx
│   ├── components/                  # 📌 Componentes globales reutilizables
│   │   ├── Button.tsx
│   │   ├── Modal.tsx
│   │   ├── Sidebar.tsx
│   │   ├── ui/                       # 📌 Componentes globales reutilizables de SHADCN
│   ├── libs/          
│   │   ├── auth.ts                   # Configuración global de autenticación
│   ├── services/
│   │   ├── db.ts                      # Conexión a la base de datos (por proyecto)
│── middleware.ts                       # Middleware para protección de rutas
│── .env                                # Variables de entorno (una por cada proyecto)
│── next.config.js
│── tsconfig.json
```

## 🛠️ Tecnologías Utilizadas

- **Frontend**: Next.js, React, TypeScript, Tailwind CSS
- **Backend**: API Routes en Next.js
- **Autenticación**: NextAuth.js
- **Base de Datos**: Prisma ORM con PostgreSQL

## 🌍 Proyectos dentro del Portafolio

### 🔍 **Pokédex**
Una web que utiliza una API para mostrar los Pokémon. Permite filtrarlos por tipo y, al hacer clic en uno, se despliega información detallada sobre el Pokémon seleccionado.

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
   NEXT_PUBLIC_POKE_API_URL=https://pokeapi.co
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

