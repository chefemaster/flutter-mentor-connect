import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
// Altere o valor de "base" para o nome do repositório do GitHub Pages, por exemplo: "/flutter-mentor-connect/"
const repoName = "flutter-mentor-connect";

export default defineConfig(({ mode }) => ({
  base: `/flutter-mentor-connect`,
  server: {
    host: "::",
    port: 8080,
  },
  build: {
    outDir: "dist",
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
