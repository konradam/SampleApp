import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from './components/pages/Home.vue';
import Header from './components/pages/Header.vue';
import Grid from './components/pages/Grid.vue';
import GridNewItem from './components/pages/grid/NewItem.vue';
import GridEditItem from './components/pages/grid/EditItem.vue';

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  base: '/',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/header',
      name: 'header',
      component: Header,
    },
    {
      path: '/grid',
      name: 'grid',
      component: Grid,
    },
    {
      path: '/grid/new',
      name: 'grid_new_item',
      component: GridNewItem,
    },
    {
      path: '/grid/:id/edit',
      name: 'grid_edit_item',
      component: GridEditItem,
    },
  ]
});
