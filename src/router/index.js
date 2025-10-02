import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import About from '@/views/About.vue';
import Detail from '@/views/Detail.vue';
import All from '@/views/All.vue';

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/about', name: 'About', component: About },
  {
    path: '/pokemon/:id',
    name: 'pokemon-detail',
    component: Detail,
    props: true,
  },
  {
    path: '/all',
    name: 'all',
    component: All,
  },
];

const router = createRouter({
  history: createWebHistory('/poke-app/'),
  routes,
});

export default router;
