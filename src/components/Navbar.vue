<template>
  <v-nav>
    <a href="#!" class="brand-logo center">Logo</a>
    <ul class="left">
      <li v-for="n in 3">
        <a href="#!">Item</a>
      </li>
    </ul>
  </v-nav>
</template>

<script>
  export default {
    name: 'navbar',
  };
</script>

<style>
nav {
  z-index: 100;
  background: #2c3e50;
  position: fixed;
  width: 80%;
  left: 10%;
}
</style>
