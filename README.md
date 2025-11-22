# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Variables de entorno

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

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
