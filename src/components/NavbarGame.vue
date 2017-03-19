<template>
  <nav id="nav-game">
    <ul id="nav-mobile" class="right hide-on-med-and-down">
      <li>{{username}}</li>
    </ul>

  </nav>
</template>

<script>

export default {
  name: 'NavbarGame',
  props: ['username'],
};
</script>

<style lang="scss">
#nav-game {
  position: initial;
  width: 100%;
  box-shadow: none;
  float: left;
  background: none;
  color: black;
  //border-bottom: 2px solid gray;
  margin-bottom: 20px;
  padding: 0 10px;
}

</style>
