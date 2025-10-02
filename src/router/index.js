import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import About from '@/views/About.vue';
import Detail from '@/views/Detail.vue';

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/about', name: 'About', component: About },
  { path: '/detail', name: 'Detail', component: Detail },
];

const router = createRouter({
  history: createWebHistory('/poke-app/'),
  routes,
});

export default router;
