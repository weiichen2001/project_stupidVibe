import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/project_stupidVibe/', // ← 這一行很關鍵！repo 名稱務必正確
  plugins: [react()],
})