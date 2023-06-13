import { auth, guest, middlewarePipeline } from '@/router/middlewares';
import { createRouter, createWebHistory } from 'vue-router';
import AccountEditView from '../views/AccountEditView.vue';
import AccountView from '../views/AccountView.vue';
import DashboardView from '../views/DashboardView.vue';
import HomeView from '../views/HomeView.vue';
import LoginView from '../views/LoginView.vue';
import NotFoundView from '../views/NotFoundView.vue';
import ProfileView from '../views/ProfileView.vue';
import RegisterView from '../views/RegisterView.vue';
import UserView from '../views/UserView.vue';
import BaseLayout from '../layouts/BaseLayout.vue';
import store from '../store';
import ProjectView from "@/views/ProjectView.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
      {
        path: '/',
        name: 'home',
        component: HomeView,
        meta: {
          middleware: []
        },
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
        component: BaseLayout,
        path: '/',
        children: [
          {
            path: '/dashboard',
            name: 'dashboard',
            component: DashboardView,
          },
          {
            path: '/profile/:id',
            name: 'profile',
            component: ProfileView,
            // beforeEnter: (to, from, next) => {
            // if (store. !== null && store.state.users.currentUser.is_admin) {
            //   next();
            // } else next({name: 'dashboard'});
            // if ()
            // }
          },
          {
            path: '/users',
            children: [
              {
                path: '',
                component: UserView,
                name: 'users',
              },
              {
                path: ':id',
                component: ProfileView,
                name: 'users.show',
              },
              {
                path: ':id/edit',
                component: UserView,
                name: 'users.edit',
              },
            ],
          },
          {
            path: '/account',
            children: [
              {
                path: '',
                component: AccountView,
                name: 'account.show',
              },
              {
                path: '/edit',
                component: UserView,
                name: 'account.edit',
              },
            ],
          },
          {
            path: '/projects',
            children: [
              {
                path: '',
                component: AccountView,
                name: 'index',
              },
              {
                path: '',
                component: AccountView,
                name: 'projects.show',
              },
              {
                path: '/edit',
                component: UserView,
                name: 'projects.edit',
              },
            ],
          },
        ],
      },
    ],
  },
  { path: '/:pathMatch(.*)*', name: 'not-found', component: NotFoundView, alias: '/404' },
])

router.beforeEach((to, from, next) => {
  let middleware = to.meta?.middleware;

  if (middleware?.length === 0) {
    return next();
  }

  if (! middleware) {
    middleware = [auth];
  }

  const context = {
    to,
    from,
    next
  }

  return middleware[0]({
    ...context,
    next: middlewarePipeline(context, middleware, 1)
  })
})

export default router
