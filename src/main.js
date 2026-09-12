import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { inject } from '@vercel/analytics'
import './assets/tailwind.css'

// Vercel Web Analytics — hanya aktif di production (deployed di Vercel).
// Melacak page view & referrer tanpa cookie, sesuai GDPR.
// Route change SPA otomatis terlacak (script memantau History API).
inject()

const app = createApp(App)

app.use(router)
app.mount('#app')


