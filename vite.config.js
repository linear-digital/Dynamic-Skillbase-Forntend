import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import fs from 'fs'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist", // Specify your custom build output directory
  },
  server: {
    port: 8000,
  },
});
