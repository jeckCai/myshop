import Vue from 'vue';
import VueRouter from 'vue-router';

import demoRouters from './modules/roters';

Vue.use(VueRouter);

const routes = [...demoRouters];
console.log(routes)

const router = new VueRouter({
  mode: 'hash',
  base: import.meta.env.BASE_URL,
  routes,
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
});

export default router;
