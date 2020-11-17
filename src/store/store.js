import Vue from 'vue';
import Vuex from 'vuex';
import _ from 'lodash';
import { getField, updateField } from 'vuex-map-fields';

Vue.use(Vuex)

const getters = {
  getField,
};
  
const mutations = {
  setPage(state, page) {
    state.page = page;
  },
  order(state, desc) {
    state.items = _.orderBy(state.items, [item => item.name.toLowerCase()], [ desc ? 'desc' : 'asc']);
  },
  initForm(state, params) {
    _.assign(state.form, params);
  },
  clearForm(state) {
    _.assign(state.form, { id: null, name: '', type: '', ref: null, parentEvents: [] });
  },
  addItem(state, item) {
    state.items.push(item);
    _.assign(state.form, { id: null, name: '', type: '', ref: null, parentEvents: [] });
  },
  removeItem(state, id) {
    const index = _.findIndex(state.items, { id });
    state.items.splice(index, 1);
  },
  updateField,
};

const actions = {
  createItem(context) {
    context.commit('addItem', context.state.form);
  },
  updateItem(context) {
    context.commit('removeItem', context.state.form.id);
    context.commit('addItem', context.state.form);
    context.commit('clearForm');
  },
};
  
export default new Vuex.Store({
  state: {
    items: [{id: 1, ref: 21, name:"test", type: 'Fourth Operation Type', parentEvents: ['Before Last Event', 'Not Last Non Event'] }, 
            {id: 2, ref: 25, name:"stadium management", type:"902"}, 
            {id: 3, ref: 23, name:"ala", type:"668"}, {ref: 25, name:"Media", type:"hi"}, 
            {id: 4, ref: 27, name:"bela", type:"456"}, {ref: 25, name:"New", type:"hello"}, 
            {id: 5, ref: 29, name:"cela", type:"123"}, {ref: 25, name:"test function", type:"123 123"}],
    page: 1,
    form: {
      id: null,
      name: '',
      type: '',
      ref: null,
      parentEvents: []
    },
  },
  getters,
  mutations,
  actions,
});