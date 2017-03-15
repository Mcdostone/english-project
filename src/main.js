import Materials from 'vue-materials';
import Vue from 'vue';
import VueResource from 'vue-resource';
import App from './App';
import router from './router';

require('./assets/style.css');

Vue.use(Materials);
Vue.use(VueResource);
Vue.http.options.emulateJSON = true;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
});
