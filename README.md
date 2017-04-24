# How to get VueJs started from Cli
### Some notes:

- google vuejs/vue-cli  
- In the first search result (the github page) it gives you 5 different scaffoldings:

 1. webpack
 2. webpack-simple
 3. browserify
 4. broserify-simple
 5. simple

## Get started!
- Install nodeJS if you dont have it already
- Then, in terminal type:

```
sudo npm install -g vue-cli
```
- That was a global install so we can start future projects with the init command.
- Now initialize a project with one of the above scaffoldings:

```
vue init webpack-simple
```

- Answer the questions in the cli then we can go into the newly created directory, then install dependencies in the package.json

```
cd into_directory
npm install
```

- Now view the initial set up with

```
npm run dev
```

- After this is set up I like to delete the template things. like the contents of the assets folder and most of the content in the app.vue file. (We can keep the assets folder for our own media)
---
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
