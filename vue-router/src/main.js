import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'


// import Bootsrapp CSS  y JS
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
//import Bopostrap icons
import 'bootstrap-icons/font/bootstrap-icons.css'

createApp(App)
.use(router)
.mount('#app')
