import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './src/app';

createRoot(document.querySelector('#root') as Element).render(<App />);
