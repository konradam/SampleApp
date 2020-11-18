import Vue from 'vue';
import App from './App.vue';
import store from './store/store';
import router from './router';
import { sync } from 'vuex-router-sync';
import vuetify from '@/plugins/vuetify';

Vue.config.productionTip = false

Vue.router = router;

sync(store, router);

new Vue({
  render: h => h(App),
  store,
  router,
  vuetify,
}).$mount('#app')
