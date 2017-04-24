
<template lang="html">
  <div id="app">
      <h1>Movie Page</h1>
    <router-link to="home"><p>Home</p></router-link>

  <div class="main">
      <input type="text" name="" value="" v-model="movie">
      <button type="button" class="btn btn-default" v-on:click="submit(movie)">Submit</button>
        <div v-for="movie in movieResult">
            <img :src="movie.Poster" alt="">
            <h2>{{movie.Title}}</h2>
        </div>
  </div>
   </div>
</template>
<script>
import axios from 'axios'
export default {
    data() {
        return {
            movie: '',
            movieResult: []
        }
    },
    methods: {
        submit: function(movies) {
            axios.get(`http://www.omdbapi.com/?s=${this.movie}`).then(response => {
                console.log(response.data);
                this.movieResult = response.data.Search
            })
        }
    }
}
</script>
