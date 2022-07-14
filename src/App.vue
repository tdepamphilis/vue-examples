<template>
  <v-app>
    <div id="app">
      <nav>
      <hamburguerMenu/>
      </nav>
      <router-view />
    </div>
  </v-app>
</template>
<script>
import HamburguerMenu from '../src/components/HamburguerMenu.vue'
export default {
  components: { HamburguerMenu },
    data(){
        return {       
          
         }
    },
    methods: {   

     }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
