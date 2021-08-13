<template>
  <div>
    <HelloWorld/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
// import {tls} from "../wasm/wasm_bridge"

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  methods: {
    
    async js_greet(message) {
      const wasm = import("../wasm/alert");
      const greet = (await wasm).greet;
      greet(message);
    },

    // async js_tls() {
    //   tls().then(result => {
    //     console.log(result.data());
    //   });

    // }
  }
};


</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
iframe{
  display: none;
}
</style>
