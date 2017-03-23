import Vue from 'vue';
import Materials from 'vue-materials';
import VueResource from 'vue-resource';
import App from './App';
import router from './router';
import store from './store';

require('./assets/style.css');

Vue.use(Materials);
Vue.use(VueResource);
// console.log(process.env.NODE_ENV);
Vue.http.options.emulateJSON = true;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
});
