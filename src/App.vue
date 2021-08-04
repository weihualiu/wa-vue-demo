<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <button @click="js_greet('陈雷，你妈妈喊你回家吃饭')">Greet me</button>
  <button @click="js_tls()">TLS</button>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import {tls} from "../wasm/wasm_bridge"

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

    js_tls() {
      tls()
    }
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
</style>
