import Vue from 'vue';
import App from './App.vue';
import store from './store/store';
import router from './router';
import { sync } from 'vuex-router-sync';

Vue.config.productionTip = false

Vue.router = router;

sync(store, router);

new Vue({
  render: h => h(App),
  store,
  router,
}).$mount('#app')
