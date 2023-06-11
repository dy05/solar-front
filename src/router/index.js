import { createRouter, createWebHistory } from 'vue-router';
import LoginView from '../views/LoginView.vue';
import RegisterView from '../views/RegisterView.vue';
import UserView from '../views/UserView.vue';
import { auth, guest, middlewarePipeline } from '@/router/middlewares';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      meta: {
        middleware: [
          guest
        ]
      },
      component: LoginView
    },
    {
      path: '/',
      name: 'dashboard',
      component: UserView
    },
    {
      path: '/register',
      name: 'register',
      meta: {
        middleware: [
          guest
        ]
      },
      component: RegisterView
    },
    {
      path: '/login',
      name: 'login',
      meta: {
        middleware: [
          guest
        ]
      },
      component: LoginView
    },
    {
      path: '/users',
      name: 'users',
      component: UserView
    },
    {
      path: '/forgot',
      name: 'forgot',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/UserView.vue')
    }
  ]
})

router.beforeEach((to, from, next, store) => {
  return next()
  let middleware = to.meta?.middleware;
  if (! middleware) {
    middleware = [auth];
  } else if (middleware === []) {
    return next()
  }

  const context = {
    to,
    from,
    next,
    store
  }

  return middleware[0]({
    ...context,
    next: middlewarePipeline(context, middleware,1)
  })
})

export default router
