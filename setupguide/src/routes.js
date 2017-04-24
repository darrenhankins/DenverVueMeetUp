import home from './components/home.vue';
import users from './components/users.vue';
import movies from './components/movies.vue';

export const routes = [
  { path: '/', component: home, name: 'home'},
  { path: '/users', component: users, name: 'users'},
  { path: '/movies', component: movies, name: 'movies'},
  { path: '*', redirect: '/'}
];
