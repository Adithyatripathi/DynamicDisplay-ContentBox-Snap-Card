import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/DynamicDisplay-ContentBox-Snap-Card/',  // 👈 Add this line
  plugins: [react()],
})
