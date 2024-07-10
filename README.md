# React Vite Telegram mini app template

This template provides a personal setup for Telegram Mini Apps development.

1. First of all, we have to generate ssl certificates, with this command inside the project directory.
```zsh
mkdir -p .cert && mkcert -key-file ./.cert/localhost-key.pem -cert-file ./.cert/localhost.pem 'tg-mini-app.local'
```
2. Configure the ```vite.config.ts``` with created certs.

```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import fs from 'fs'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 443,
    host: true,
    hmr: {
      host: "tg-mini-app.local",
      port: 443,
    },
    https: {
      key: fs.readFileSync('./.cert/localhost-key.pem'),
      cert: fs.readFileSync('./.cert/localhost.pem'),
    }
  }
})
```

3. Update ```/etc/hosts``` file with new host.
```shell
## development
127.0.0.1       tg-mini-app.local
127.0.0.1	local.test.com
```
4. Start project with ```npm run dev``` and open in browser with ```tg-mini-app.local``` to test that it works as should.
5. Configure this url in telegram bot for real time development inside telegram bot.
