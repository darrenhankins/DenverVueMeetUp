#tutorial guide: guided by mindspace on youtube
script src = https://unpkg.com/vue

# How to get VueJs started from Cli
### some notes:

- google vuejs/vue-cli  
 - in the first search result (the github page) it gives you 5 different scaffoldings:

 1. webpack
 2. webpack-simple
 3. browserify
 4. broserify-simple
 5. simple

## Get started!
- install nodeJS if you dont have it already
- then, in terminal type:

```
sudo npm install -g vue-cli
```
- that was a global install so we can start using it willy-nilly...
- now initialize a project with one of the above scaffoldings:

```
vue init webpack-simple
```

- answer the questions in the cli then we can go into the newly created directory, then install dependencies in the package.json

```
cd into_directory
npm install
```

- now view the initial set up with

```
npm run dev
```
