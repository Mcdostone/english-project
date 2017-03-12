<template>
  <div class="container container-quizz">
    <h2>Creating a game</h2>

    <div class="container">

      <div class="row">
        <div class="col s6 offset-s3">
          <div class="input-field">
            <v-icon prefix>account_circle</v-icon>
              <v-text-input name="username" id="username"></v-text-input>
              <label for="username">Username</label>
          </div>
        </div>
      </div>

      <div class="row center-align">
        <v-btn wavesLight="true" >Create</v-btn>
      </div>

    </div>
  </div>
</template>

<script>
  export default {
    name: 'Creating',
  };
</script>

<style lang="scss">
.container-quizz {
  margin-top: 100px;
  h2 {
    text-align: center;
  }
}
</style>
