import { defineConfig, mergeConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

const toPath = (filePath: string) => path.join(process.cwd(), filePath);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@components": toPath("src/components"),
      "@pages": toPath("src/pages"),
    }
  }
})
