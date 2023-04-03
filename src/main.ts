import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


if(!navigator.geolocation){
    alert('Tu navegador no soporta geoLocation')
    throw new Error('Tu navegador no soporta geolocation')
}


const app = createApp(App)
app.use(store)
app.use(router)

app.mount('#app')
