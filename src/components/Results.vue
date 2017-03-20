<template>
<div class="container container-quizz">
    It's finished :)
</div>
</template>

<script>
// import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'results',
  data() {
    return {};
  },
};

</script>

<style lang="scss">
.container-quizz {
  display: inline-block;
  height: auto;
  margin-top: 100px;
  margin-bottom: 50px;
  padding: 0;
  width: 80%;
  margin-left: 10%;
  //background: red;
  box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 1px 5px 0 rgba(0,0,0,0.12), 0 3px 1px -2px rgba(0,0,0,0.2);
  h2 {
    text-align: center;
  }
}
</style>
