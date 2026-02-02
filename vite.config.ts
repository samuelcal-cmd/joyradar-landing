import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // IMPORTANT: Change '<REPO_NAME>' to your actual GitHub repository name
  // Example: base: '/joyradar-landing/'
  base: '/joyradar-landing/',
})
