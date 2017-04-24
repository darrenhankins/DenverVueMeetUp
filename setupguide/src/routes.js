import home from './components/home.vue';
import users from './components/users.vue';

export const routes = [
  { path: '/', component: home, name: 'home'},
  { path: '/users', component: users, name: 'users'},
  { path: '*', redirect: '/'}
];
