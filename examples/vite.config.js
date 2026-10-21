import { fileURLToPath } from 'node:url';
import { defineConfig, transformWithOxc } from 'vite';
import react from '@vitejs/plugin-react';
import flowRemoveTypes from 'flow-remove-types';

const librarySrc = fileURLToPath(new URL('../src', import.meta.url));

// The library source is Flow-typed JSX in .js files, which Vite does not
// compile by default. Strip the types and compile the JSX here.
function librarySource() {
  return {
    name: 'react-input-shortcut-source',
    enforce: 'pre',
    async transform(code, id) {
      if (!id.startsWith(librarySrc) || !id.endsWith('.js')) {
        return;
      }
      const result = await transformWithOxc(flowRemoveTypes(code).toString(), id, {
        lang: 'jsx',
        jsx: { runtime: 'classic' },
      });
      return { code: result.code, map: result.map };
    },
  };
}

export default defineConfig({
  plugins: [librarySource(), react()],
  resolve: {
    alias: {
      'react-input-shortcut': librarySrc,
    },
  },
  // The dependency scanner cannot parse the Flow-typed library source, so
  // list the dependencies to pre-bundle instead.
  optimizeDeps: {
    noDiscovery: true,
    include: ['react', 'react-dom/client'],
  },
  server: {
    port: 3000,
  },
});
