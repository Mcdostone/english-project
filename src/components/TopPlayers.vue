<template>
<div>
  <div v-if="players.length !== 0">
    <table>
     <thead>
         <tr>
           <th data-field="question">Rank</th>
           <th data-field="expected">Username</th>
           <th data-field="yours">Points</th>
         </tr>
       </thead>
       <tbody>
         <tr v-for="(v, index) in players ">
           <td>{{index + 1}}</td>
           <td>{{v.username}}</td>
           <td>{{v.points}}</td>
         </tr>
      </tbody>
    </table>
  </div>
  <div v-else>
      <h2>Be the first challenger !</h2>
  </div>
</div>
</template>

<script>

export default {
  name: 'TopPlayers',
  data() {
    return {
      players: [],
    };
  },
  created() {
    this.$http.get('http://localhost:3141/api/top').then((response) => {
      if (response.body && response.body.length !== 0) {
        this.players.push(response.body);
      }
    });
  },
};

</script>

<style lang="scss">

.points p {
  line-height: 50px;
  font-size: 50px;
  font-weight: 100;
  margin: 0;
  padding: 0;
}
</style>
