import React, { StrictMode, Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import routes from './routes';
import '@icon-park/react/styles/index.css';
import './main.css';

const router = createBrowserRouter(routes);

export default function App() {
  return (
    <StrictMode>
      <Suspense fallback={<>loading...</>}>
        <RouterProvider router={router} />
      </Suspense>
    </StrictMode>
  );
}
