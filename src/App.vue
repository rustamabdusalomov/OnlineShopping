<template>
  <div id="app">
      <home-header></home-header>
      <router-view></router-view>
  </div>
</template>

<script>
import ProductList from "./Pages/ProductList";
import HomeHeader from "./headers/HomeHeader";

export default {
  name: 'app',
  components: {
    'product-list': ProductList,
    'home-header': HomeHeader
  },
  data () {
    return {

    }
  }
}
</script>

<style lang="scss">
 body {
   margin: 0;
   font-family: sans-serif;
   background-color: antiquewhite;
 }
</style>
