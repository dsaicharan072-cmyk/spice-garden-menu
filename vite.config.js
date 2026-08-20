import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  // GitHub Pages serves this project from the repository subpath.
  base: '/spice-garden-menu/',
  plugins: [react()],
});
