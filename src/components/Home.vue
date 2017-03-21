<template>
  <div>
    <div class="splashscreen">
      <div class="splashscreen-item">
        <img src="https://images.pexels.com/photos/7041/pexels-photo.jpeg?w=2000&auto=compress&cs=tinysrgb" id="fjf" class="splashscreen-img" alt="bus">
        <div class="splashscreen-text">
          <p>Create a game !</p>
          <router-link :to="{name: 'create'}" class="play-button waves-effect waves-light btn">
            <i class="material-icons left">cloud</i>
            Play
          </router-link>
        </div>
      </div>
<!--      <div class="splashscreen-item">
        <img src="https://images.pexels.com/photos/34729/pexels-photo.jpg?w=2000&auto=compress&cs=tinysrgb" id="fjf" class="splashscreen-img" alt="bus">
        <div class="splashscreen-text">
          <p>Join a game !</p>
          <router-link :to="{name: 'create'}" class="play-button waves-effect waves-light btn">
            <i class="material-icons left">cloud</i>
            Join
          </router-link>
        </div>
      </div>
-->
    </div>

    <div class="container rules">
      <h2>The english Quizz !</h2>
      <p>
        You want to challenge your friends about the American and English culture ? Try our Web application quizz !<br>
        fsdf
        sdf
        sdf
        sd
        dsf
        sf
        sdf
      </p>

    </div>
  </div>

</template>

<script>
  export default {
    name: 'Home',
  };
</script>

<style lang="scss" src="./Home.scss">
</style>
