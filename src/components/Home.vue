<template>
  <div  class="splashscreen">
    <div class="splashscreen-item">
      <img src="https://images.pexels.com/photos/7041/pexels-photo.jpeg?w=2000&auto=compress&cs=tinysrgb" id="fjf" class="splash-img" alt="bus">
      <div class="splashscreen-text">
        <p>Create a game !</p>
        <router-link :to="{name: 'create'}" class="play-button waves-effect waves-light btn">
          <i class="material-icons left">cloud</i>
          Create
        </router-link>
      </div>
    </div>
    <div class="splashscreen-item">
      <img src="https://images.pexels.com/photos/34729/pexels-photo.jpg?w=2000&auto=compress&cs=tinysrgb" id="fjf" class="splash-img" alt="bus">
      <div class="splashscreen-text">
        <p>Join a game !</p>
        <router-link :to="{name: 'create'}" class="play-button waves-effect waves-light btn">
          <i class="material-icons left">cloud</i>
          Join
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Home',
  };
</script>

<style lang="scss">
.splashscreen {
  width: auto;
  height: 100vh;
  overflow: hidden;
  &:after{
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    content: '';
    background-color: rgba(#2c3e50, 0.8);
  }

  .splashscreen-item {
    width: 50%;
    position: relative;
    float: left;
  }

  .splashscreen-text {
    position: absolute;
    left: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: white;
    text-align: center;
    z-index: 99;
    bottom: 50%;
    transform: translateY(-100%);
    p {
      display: inline-block;
      width: 100%;
      margin: 0;
      text-align: center;
      font-size: 5em;
      font-weight: 100;
    }
  }
}

.splash-img {
  height: 100%;
  object-fit: cover;
}

.play-button {
  padding: 0 50px;
  font-weight: bold;
  line-height: 60px;
  height:60px;
  background: none;
  border: 3px solid white;

  &:hover {
    background: white;
    color: #2c3e50;
  }
}

</style>
