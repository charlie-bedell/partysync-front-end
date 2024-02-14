import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3000  // Set your desired port here
    ,
    NODE_ENV : "production"
  },
  plugins: [react()],
})
