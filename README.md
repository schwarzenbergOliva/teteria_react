# Teteria React

Aplicación móvil desarrollada con React que interactúa con múltiples APIs para proporcionar funcionalidades de noticias y contacto

## 📋 Requisitos

- **Node.js**: v16.0.0 o superior
- **npm**: v7.0.0 o superior (incluido con Node.js)

## 📦 Dependencias Principales

Las siguientes librerías son necesarias para el funcionamiento de esta aplicación:

| Librería | Versión | Descripción |
|----------|---------|-------------|
| react | ^19.2.0 | Librería base para construir interfaces |
| react-dom | ^19.2.0 | Renderización de componentes React en el DOM |
| react-router-dom | ^7.9.4 | Enrutamiento y navegación entre páginas |
| react-scripts | ^5.0.1 | Scripts y configuración para Create React App |
| @testing-library/react | ^16.3.0 | Herramientas para testing de componentes |
| @testing-library/jest-dom | ^6.9.1 | Matchers personalizados para Jest |
| @testing-library/dom | ^10.4.1 | Utilidades para testing del DOM |
| @testing-library/user-event | ^13.5.0 | Simulación de eventos de usuario |
| web-vitals | ^2.1.4 | Métricas de rendimiento web |

## 🚀 Instalación

1. Clona el repositorio:
```bash
git clone <url-del-repositorio>
cd teteria-react
```

2. Instala las dependencias:
```bash
npm install
```

3. Configura las variables de entorno (ver sección Variables de entorno más abajo).

4. Inicia el servidor de desarrollo:
```bash
npm start
```

La aplicación se abrirá automáticamente en [http://localhost:3000](http://localhost:3000).

## 📝 Scripts Disponibles

- `npm start` — Inicia el servidor de desarrollo
- `npm build` — Compila la aplicación para producción
- `npm test` — Ejecuta los tests
- `npm eject` — Expone la configuración de Create React App (no reversible)

## 🔌 Integración con APIs

Esta aplicación se conecta con las siguientes APIs:

- **StatsUp API** — Para obtener noticias y datos estadísticos
- **EmailJS API** — Para envío de correos electrónicos desde formularios de contacto

## 🔐 Variables de entorno

Esta aplicación utiliza variables de entorno para configurar endpoints y credenciales necesarias en tiempo de ejecución. Para facilitar la configuración existe el archivo `.env.example` en la raíz del proyecto. Crea un archivo `.env` (no lo subas al repositorio) con los valores adecuados.

Variables esperadas (definidas en `.env.example`):

- `REACT_APP_API_NEWS_STATSUP` — URL para obtener noticias desde StatsUp (ej.: https://utils.statsup.cl/api/get-json/<id>).
- `REACT_APP_API_EMAILJS_ENDPOINT` — Endpoint para envío de correos (por defecto usamos `https://api.emailjs.com/api/v1.0/email/send`).
- `REACT_APP_API_EMAILJS_SERVICE_ID` — Service ID para EmailJS.
- `REACT_APP_API_EMAILJS_TEMPLATE_ID` — Template ID para EmailJS.
- `REACT_APP_API_EMAILJS_USER_ID` — User ID para EmailJS.
- `REACT_APP_API_EMAILJS_ACCESS_TOKEN` — Token de acceso (uso interno en la petición a EmailJS).

Ejemplo de `.env` (no subas este archivo a git):

REACT_APP_API_NEWS_STATSUP=https://utils.statsup.cl/api/get-json/XXXXXXXXX
REACT_APP_API_EMAILJS_ENDPOINT=https://api.emailjs.com/api/v1.0/email/send
REACT_APP_API_EMAILJS_SERVICE_ID=service_XXXXXXXX
REACT_APP_API_EMAILJS_TEMPLATE_ID=template_XXXXXXXX
REACT_APP_API_EMAILJS_USER_ID=user_XXXXXXXX
REACT_APP_API_EMAILJS_ACCESS_TOKEN=xxxxxxxxxxxxxxxxxxxx

Cómo usar en el código

Desde React accedes a estas variables mediante `process.env.REACT_APP_*`, por ejemplo:

const endpoint = process.env.REACT_APP_API_EMAILJS_ENDPOINT || 'https://api.emailjs.com/api/v1.0/email/send';

Notas importantes

- Reinicia el servidor de desarrollo (`npm start`) después de añadir o cambiar variables en `.env` para que Create React App las recoja.
- Nunca subas tus secretos o tokens al repositorio. Usa `.env` local y `gitignore` para evitarlo. Considera usar un gestor de secretos o variables del CI/CD para despliegues en producción.

