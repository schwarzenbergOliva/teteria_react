import React, { useEffect } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './Pages/home';
import News from './Pages/news';
import Contact from './Pages/contact';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/news",
    element: <News />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);

function App() {
  useEffect(() => {
    // helper to add <link> only once
    const addLink = (href, rel = 'stylesheet', integrity, crossOrigin, referrerPolicy) => {
      if (!document.querySelector(`link[href="${href}"]`)) {
        const l = document.createElement('link');
        l.href = href;
        l.rel = rel;
        if (integrity) l.integrity = integrity;
        if (crossOrigin) l.crossOrigin = crossOrigin;
        if (referrerPolicy) l.referrerPolicy = referrerPolicy;
        document.head.appendChild(l);
      }
    };

    const addScript = (src, integrity, crossOrigin) => {
      if (!document.querySelector(`script[src="${src}"]`)) {
        const s = document.createElement('script');
        s.src = src;
        if (integrity) s.integrity = integrity;
        if (crossOrigin) s.crossOrigin = crossOrigin;
        s.defer = true;
        document.body.appendChild(s);
      }
    };

    // Bootstrap CSS
    addLink(
      'https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css',
      'stylesheet',
      'sha384-sRIl4kxILFvY47J16cr9ZwB07vP4J8+LH7qKQnuqkuIAvNWLzeN8tE5YBujZqJLB',
      'anonymous'
    );

    // Font Awesome
    addLink(
      'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.1/css/all.min.css',
      'stylesheet',
      'sha512-2SwdPD6INVrV/lHTZbO2nodKhrnDdJK9/kg2XD1r9uGqPo1cUbujc+IYdlYdEErWNu69gVcYgdxlmVmzTWnetw==',
      'anonymous',
      'no-referrer'
    );

    // Bootstrap JS bundle
    addScript(
      'https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js',
      'sha384-FKyoEForCGlyvwx9Hj09JcYn3nv7wiPVlz7YYwJrWVcXK/BmnVDxM+D2scQbITxI',
      'anonymous'
    );
  }, []);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
