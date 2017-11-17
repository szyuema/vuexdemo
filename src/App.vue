<template>
  <div id="app">
    <router-view/>
    <!-- <demo2></demo2>
    <demo3></demo3>
    <cinput v-model="price"></cinput> -->

  </div>
</template>

<script>
import demo2 from './components/demo/demo2.vue';
import demo3 from './components/demo/demo3.vue';
import cinput from './components/demo/cinput.vue';
export default {
  name: 'app',
  data() {
    return {
      price: 10
    };
  },
  components: {
    demo2,
    demo3,
    cinput
  }
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
