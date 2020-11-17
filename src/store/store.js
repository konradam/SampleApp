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
    items: [
      {id: 1, ref: 12, name: 'Digital Device', type: 'Fourth Operation Type', parentEvents: ['Before Last Event', 'Not Last Non Event'] },
      {id: 2, ref: 5, name: 'Energy Saver', type: 'First Operation Type'},
      {id: 3, ref: 23, name: 'Green Energy Storage', type: 'Second Operation Type', parentEvents: ['Not Last Non Event'] },
      {id: 4, ref: 37, name: 'Media Screen', type: 'Third Non-operation Type', parentEvents: ['Original Parent Event', 'Not Parent Event']},
      {id: 5, ref: 82, name: 'Electrical Circuit', type: 'First Operation Type'},
      {id: 6, ref: 125, name: 'Delivery Services', type: 'Fifth Non-operation Type', parentEvents: ['Before Last Event', 'Not Last Non Event']},
      {id: 7, ref: 423, name: 'Master Equipment', type: 'Third Non-operation Type', parentEvents: ['Last Event']},
      {id: 8, ref: 325, name: 'Agile System', type: 'Fourth Operation Type' },
      {id: 9, ref: 327, name: 'Scrum Mastering', type: 'Fifth Non-operation Type' },
      {id: 10, ref: 37, name: 'Secure Devices', type: 'First Operation Type' },
      ],
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