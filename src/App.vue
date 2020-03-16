<template>
  <div id="app">
    <Layout />
  </div>
</template>

<script>
import Layout from "./components/Layout/Layout.vue";
export default {
  name: "App",
  components: {
    Layout
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Quicksand&display=swap");
html,
body {
  font-family: "Quicksand", sans-serif;
}
</style>
