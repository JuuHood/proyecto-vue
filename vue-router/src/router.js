import {createRouter, createWebHistory } from 'vue-router';
import Home from './components/Home.vue';
import About from './components/About.vue';
import ApiView from './components/ApiView.vue'


    const routes =[
    {
        path: '/',
        name: 'Home',
        component: Home
    },

    {
        path: '/about',
        name: 'About',
        component: About
    },
    
    {
        path: '/api',
        name: 'API',
        component: ApiView

    }

];

const router = createRouter ({
    history: createWebHistory(),
    routes
});

export default router;