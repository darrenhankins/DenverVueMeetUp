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

- After this is set up I like to delete the basic template pieces: Like the assets folder and most of the content in the app.vue file.
