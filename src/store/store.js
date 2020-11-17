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
  initForm(state, params) {
    _.assign(state.form, params);
  },
  clearForm(state) {
    _.assign(state.form, { id: null, name: '', type: '', ref: null, parentEvents: [] });
  },
  addItem(state, item) {
    const prevItems = state.items;
    const newItem = _.cloneDeep(item);
    state.items = _.concat(prevItems, [newItem]);
  },
  deleteItem(state, id) {
    const index = _.findIndex(state.items, { id });
    state.items.splice(index, 1);
  },
  updateField,
};

const actions = {
  createItem(context) {
    context.commit('addItem', context.state.form);
  },
  updateItem(context, id) {
    context.commit('deleteItem', id);
    context.commit('addItem', context.state.form);
  },
  deleteItem(context, id) {
    context.commit('deleteItem', id);
  },
};
  
export default new Vuex.Store({
  state: {
    items: [{id: 1, ref: 21, name:"test", type: 'Fourth Operation Type', parentEvents: ['Before Last Event', 'Not Last Non Event'] }, 
            {id: 2, ref: 25, name:"stadium management", type:"902"}, 
            {id: 3, ref: 23, name:"ala", type:"668"}, {id: 6, ref: 25, name:"Media", type:"hi"}, 
            {id: 4, ref: 27, name:"bela", type:"456"}, {id: 7, ref: 25, name:"New", type:"hello"}, 
            {id: 5, ref: 29, name:"cela", type:"123"}, {id: 8, ref: 25, name:"test function", type:"123 123"}],
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