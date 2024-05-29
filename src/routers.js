import { createRouter, createWebHashHistory } from 'vue-router'
import HomePage from './components/HomePage.vue'  // Adjust the path if necessary
import SignUp from './components/SignUp.vue'  // Adjust the path if necessary

const routes = [
    {
        path: '/',
        name: 'HomePage',
        component: HomePage,
    },
    {
        path: '/signup',
        name: 'SignUp',
        component: SignUp,
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router
