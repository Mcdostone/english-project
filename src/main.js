import Materials from 'vue-materials';
import Vue from 'vue';
import App from './App';
import router from './router';

require('./assets/style.css');

Vue.use(Materials);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
});
