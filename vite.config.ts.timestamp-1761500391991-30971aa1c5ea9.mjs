// vite.config.ts
import { defineConfig } from "file:///D:/coding/KARIR%20AI/Karir.ai.id/node_modules/vite/dist/node/index.js";
import react from "file:///D:/coding/KARIR%20AI/Karir.ai.id/node_modules/@vitejs/plugin-react-swc/index.js";
import path from "path";
import { fileURLToPath } from "url";
import { componentTagger } from "lovable-tagger";
var __vite_injected_original_import_meta_url = "file:///d:/coding/KARIR%20AI/Karir.ai.id/vite.config.ts";
var __dirname = path.dirname(fileURLToPath(__vite_injected_original_import_meta_url));
var vite_config_default = defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    strictPort: false,
    middlewareMode: false,
    proxy: {
      "/.netlify/functions": {
        target: "http://localhost:9999",
        changeOrigin: true,
        secure: false
      }
    }
  },
  preview: {
    host: "0.0.0.0",
    port: 5e3,
    strictPort: true
  },
  plugins: [
    react(),
    mode === "development" && componentTagger()
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src")
    }
  }
}));
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJkOlxcXFxjb2RpbmdcXFxcS0FSSVIgQUlcXFxcS2FyaXIuYWkuaWRcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcImQ6XFxcXGNvZGluZ1xcXFxLQVJJUiBBSVxcXFxLYXJpci5haS5pZFxcXFx2aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vZDovY29kaW5nL0tBUklSJTIwQUkvS2FyaXIuYWkuaWQvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tIFwidml0ZVwiO1xyXG5pbXBvcnQgcmVhY3QgZnJvbSBcIkB2aXRlanMvcGx1Z2luLXJlYWN0LXN3Y1wiO1xyXG5pbXBvcnQgcGF0aCBmcm9tIFwicGF0aFwiO1xyXG5pbXBvcnQgeyBmaWxlVVJMVG9QYXRoIH0gZnJvbSAndXJsJztcclxuaW1wb3J0IHsgY29tcG9uZW50VGFnZ2VyIH0gZnJvbSBcImxvdmFibGUtdGFnZ2VyXCI7XHJcblxyXG5jb25zdCBfX2Rpcm5hbWUgPSBwYXRoLmRpcm5hbWUoZmlsZVVSTFRvUGF0aChpbXBvcnQubWV0YS51cmwpKTtcclxuXHJcbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXHJcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZygoeyBtb2RlIH0pID0+ICh7XHJcbiAgc2VydmVyOiB7XHJcbiAgICBob3N0OiBcIjo6XCIsXHJcbiAgICBwb3J0OiA4MDgwLFxyXG4gICAgc3RyaWN0UG9ydDogZmFsc2UsXHJcbiAgICBtaWRkbGV3YXJlTW9kZTogZmFsc2UsXHJcbiAgICBwcm94eToge1xyXG4gICAgICAnLy5uZXRsaWZ5L2Z1bmN0aW9ucyc6IHtcclxuICAgICAgICB0YXJnZXQ6ICdodHRwOi8vbG9jYWxob3N0Ojk5OTknLFxyXG4gICAgICAgIGNoYW5nZU9yaWdpbjogdHJ1ZSxcclxuICAgICAgICBzZWN1cmU6IGZhbHNlXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LFxyXG4gIHByZXZpZXc6IHtcclxuICAgIGhvc3Q6IFwiMC4wLjAuMFwiLFxyXG4gICAgcG9ydDogNTAwMCxcclxuICAgIHN0cmljdFBvcnQ6IHRydWUsXHJcbiAgfSxcclxuICBwbHVnaW5zOiBbXHJcbiAgICByZWFjdCgpLFxyXG4gICAgbW9kZSA9PT0gJ2RldmVsb3BtZW50JyAmJiBjb21wb25lbnRUYWdnZXIoKSxcclxuICBdLmZpbHRlcihCb29sZWFuKSxcclxuICByZXNvbHZlOiB7XHJcbiAgICBhbGlhczoge1xyXG4gICAgICBcIkBcIjogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgXCIuL3NyY1wiKSxcclxuICAgIH0sXHJcbiAgfSxcclxufSkpO1xyXG5cclxuXHJcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBc1IsU0FBUyxvQkFBb0I7QUFDblQsT0FBTyxXQUFXO0FBQ2xCLE9BQU8sVUFBVTtBQUNqQixTQUFTLHFCQUFxQjtBQUM5QixTQUFTLHVCQUF1QjtBQUoySSxJQUFNLDJDQUEyQztBQU01TixJQUFNLFlBQVksS0FBSyxRQUFRLGNBQWMsd0NBQWUsQ0FBQztBQUc3RCxJQUFPLHNCQUFRLGFBQWEsQ0FBQyxFQUFFLEtBQUssT0FBTztBQUFBLEVBQ3pDLFFBQVE7QUFBQSxJQUNOLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxJQUNOLFlBQVk7QUFBQSxJQUNaLGdCQUFnQjtBQUFBLElBQ2hCLE9BQU87QUFBQSxNQUNMLHVCQUF1QjtBQUFBLFFBQ3JCLFFBQVE7QUFBQSxRQUNSLGNBQWM7QUFBQSxRQUNkLFFBQVE7QUFBQSxNQUNWO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxJQUNOLFlBQVk7QUFBQSxFQUNkO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUCxNQUFNO0FBQUEsSUFDTixTQUFTLGlCQUFpQixnQkFBZ0I7QUFBQSxFQUM1QyxFQUFFLE9BQU8sT0FBTztBQUFBLEVBQ2hCLFNBQVM7QUFBQSxJQUNQLE9BQU87QUFBQSxNQUNMLEtBQUssS0FBSyxRQUFRLFdBQVcsT0FBTztBQUFBLElBQ3RDO0FBQUEsRUFDRjtBQUNGLEVBQUU7IiwKICAibmFtZXMiOiBbXQp9Cg==
