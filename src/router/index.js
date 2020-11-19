import Vue from 'vue';
import VueRouter from 'vue-router';
import VueCookie from 'vue-cookie';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    meta: { requiresAuth: true },
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue'),
  },
  {
    path: '/login',
    name: 'Login',
    component: () =>
      import(/* webpackChunkName: "login" */ '../views/Login.vue'),
  },
  {
    path: '/about',
    name: 'About',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  const isAuthenticated = VueCookie.get('rmb');
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (isAuthenticated && to.name !== 'Login') {
      next();
      return;
    }
    next('/login')
  } else {
    next();
  }
});

export default router;
