<template>
  <div class="question">
    <p>What is your favorite color?</p>
    <ul class="container">
      <li class="answer btn waves-effect waves-light">Red</li>
      <li class="answer btn waves-effect waves-light">Yellow</li>
      <li class="answer btn waves-effect waves-light">Blue</li>
      <li class="answer btn waves-effect waves-light">Orange</li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'Question',
  };
</script>

<style lang="scss">
.question {
  display: inline-block;
  width: 100%;
}
.question p {
  padding: 10px 0;
  font-size: 1.5em;
  border-bottom: 2px solid rgba(gray, 0.1);
}

.question .container {
  padding: 0;
  margin: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  flex-wrap: wrap;
  .answer {
    width: 48%;
    height: 50px;
    line-height: 50px;
    margin: 1%;
    box-sizing: border-box;
  }
}
</style>
