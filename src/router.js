import Vue from 'vue';
import Router from 'vue-router';
import Welcome from './views/Welcome.vue';
import ChatView from '@/views/ChatView.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Welcome',
      component: Welcome,
    },
    {
      path: '/chat',
      name: 'Chat',
      component: ChatView,
      props: true,
      beforeEnter: (to, from, next) => {
        if (to.params.name) {
          next();
        } else {
          next(from);
        }
      },
    },
  ],
});
