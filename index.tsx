/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import React from 'react';
import {createRoot} from 'react-dom/client';
import App from './App'; // Komponen aplikasi utama
import '@tailwindcss/browser'; // Menginisialisasi TailwindCSS

const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
} else {
  console.error(
    'Fatal error: The root element with ID "root" was not found in the DOM.',
  );
}
