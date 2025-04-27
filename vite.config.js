import { defineConfig } from 'vite'

import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  plugins: [
    tailwindcss(),

    
  ],
  base:'/My_Portfolio/',
  build:{
    outDir:"./docs",
  }
  ,
  
})