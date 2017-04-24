## Vue-Router
- Now lets get set up with some practical dependencies, like vue-Router and Axios / (or vuex).

- (vue-router allows us to parse the url and load different components as pages.)

```
npm install vue-router -S
```

- Then in the main.js add

```
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
```
- Vue.use allows us to use the dependencies
- Before creating our routes we can create our components for each route we want. We do this by creating .vue files in the component folder we can then make a small template for each component to be viewed later on. For example for a home.vue page we could simply put:

```
<template lang="html">
  <h1>I'm Home!</h1>
</template>
```

- We need to add a routes.js file in the src folder where we can now define our components and make it look something like this:

```
import home from './components/home.vue';
import users from './components/users.vue';

export const routes = [
  { path: '/', component: home, name: 'home'},
  { path: '/users', component: users, name: 'users'},
  { path: '*', redirect: '/'}
];
```
- In order to use these routes we should go back to our main.js file and import our routes at the top like so:

```
import { routes } from './routes';
```

- Next we should register these routes in our main.js file. Ill add history mode to clean up our url and alter the new Vue instance to accept our router const.

```
const router = new VueRouter({
  routes,
  mode: 'history'
  });

  new Vue({
    el: '#app',
    router,
    render: h => h(App)
  })
  ```
- Lastly we need to define a place where vuejs should render the routes we're navigating to. That is done by adding a <router-view></router-view>. It will take this place and put the component which gets loaded conditionally

- Lets add links for these routes

```
<router-link to="users"><p>click to go to users</p></router-link>
```
