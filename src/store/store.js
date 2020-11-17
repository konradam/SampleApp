import Vue from 'vue'
import Vuex from 'vuex'
import _ from 'lodash'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    items: [{ref: 21, name:"test", type:"090"}, {ref: 25, name:"stadium management", type:"902"}, 
            {ref: 23, name:"ala", type:"668"}, {ref: 25, name:"Media", type:"hi"}, 
            {ref: 27, name:"bela", type:"456"}, {ref: 25, name:"New", type:"hello"}, 
            {ref: 29, name:"cela", type:"123"}, {ref: 25, name:"test function", type:"123 123"}],
    page: 1,
  },
  mutations: {
    setPage(state, page) {
      state.page = page;
    },
    order(state, desc) {
      state.items = _.orderBy(state.items, [item => item.name.toLowerCase()], [ desc ? 'desc' : 'asc']);
    },
  },
})
