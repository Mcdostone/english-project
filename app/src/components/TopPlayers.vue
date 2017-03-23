<template>
<div>
  <h2>Top players</h2>
  <div v-if="players.length !== 0">
    <table>
     <thead>
         <tr>
           <th v-for="col in columns" class="header-results" v-if="col !== 'createdAt'"@click="sortBy(col)">{{col}}</th>
           <th @click="sortBy('createdAt')" class="header-results">Played the</th>
         </tr>
       </thead>
       <tbody>
         <tr v-for="p in filteredData">
           <td>{{p.rank}}</td>
           <td>{{p.username}}</td>
           <td>{{p.points}}</td>
           <td>{{p.seconds}}</td>
           <td>{{p.createdAt}}</td>
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
    const sortOrders = {};
    const columns = ['rank', 'username', 'points', 'seconds', 'createdAt'];
    columns.forEach((key) => {
      sortOrders[key] = 1;
    });
    return {
      sortKey: 'rank',
      sortOrders,
      columns,
    };
  },
  props: ['players'],
  computed: {
    filteredData() {
      const sortKey = this.sortKey;
      let data = this.players;
      const order = this.sortOrders[sortKey] || 1;
      if (sortKey) {
        data = data.slice().sort((a, b) => {
          /* eslint-disable no-param-reassign  */
          a = a[sortKey];
          /* eslint-disable no-param-reassign  */
          b = b[sortKey];
          /* eslint-disable no-nested-ternary */
          return (a === b ? 0 : a > b ? 1 : -1) * order;
        });
      }
      return data;
    },
  },
  methods: {
    sortBy(key) {
      this.sortKey = key;
      this.sortOrders[key] = this.sortOrders[key] * -1;
    },
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

.header-results {
    //color: #26a69a;
    cursor: pointer;
}

th {
  text-transform: uppercase;
}
</style>
