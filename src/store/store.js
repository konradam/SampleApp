import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    items: [{ref: 21, name:"test", type:"090"}, {ref: 25, name:"asdafasdas23", type:"astyeos21"}, 
            {ref: 23, name:"ala", type:"668"}, {ref: 25, name:"asdafasdas23", type:"astyeos21"}, 
            {ref: 27, name:"bela", type:"456"}, {ref: 25, name:"asdafasdas23", type:"astyeos21"}, 
            {ref: 29, name:"cela", type:"123"}, {ref: 25, name:"asdafasdas23", type:"astyeos21"}],
    page: 1,
  },
  mutations: {
    setPage(state, page) {
      state.page = page;
    },
  },
})
