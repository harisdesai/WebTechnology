import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    fs: {
      allow: [
        'C:/Users/haris/.git/WebTechnology/Lec/React/studentapp'
      ]
    }
  }
})