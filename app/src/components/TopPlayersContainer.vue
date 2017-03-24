  <template>
<div class="container-quizz results">
  <top-players :players="top"></top-players>
</div>
</template>

<script>
import TopPlayers from '@/components/TopPlayers';

export default {
  name: 'TopPlayersContainer',
  data() {
    return {
      top: [],
    };
  },
  components: {
    TopPlayers,
  },
  created() {
    this.$http.get('http://localhost:8080/api/top').then((response) => {
      if (response.body && response.body.length !== 0) {
        response.body.forEach((e, index) => {
          /* eslint-disable no-param-reassign  */
          e.rank = index + 1;
          const date = new Date(e.createdAt);
          e.createdAt = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()} - ${date.getHours()}:${date.getMinutes()}`;
          this.top.push(e);
        });
      }
    });
  },
};
</script>

<style lang="scss">
.results {
  display: flex;
  flex-direction: column;
  padding-left: 20%;
  padding-right: 20%;
  justify-content: flex-start;
}
.points p {
  line-height: 50px;
  font-size: 50px;
  font-weight: 100;
  margin: 0;
  padding: 0;
}
i {
  font-weight: 100;
  margin: 0px;
  //font-style: normal;
  font-size: 1.2em;
}
</style>
