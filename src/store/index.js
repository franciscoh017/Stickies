import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersistence from 'vuex-persist';

Vue.use(Vuex);
const debug = process.env.NODE_ENV !== 'production';

const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
});

export default new Vuex.Store({
  state: {
    stickies: [
      {
        id: 1,
        title: 'I <3 Vue.js',
        body: 'Stickies by franciscoh017',
        completed: true,
        pinned: true
      }
    ],
  },
  mutations: {
    SET_PINNED(state, id) {
      state.stickies.forEach((stickie) => {
        if (stickie.id == id) {
          stickie.pinned = !stickie.pinned;
        }
      });
    },
    SET_COMPLETE(state, id) {
      state.stickies.forEach((stickie) => {
        if (stickie.id == id) {
          stickie.completed = !stickie.completed;
        }
      });
    },
    DELETE_STICKIE(state, id) {
      state.stickies = state.stickies.filter(filterStickies);

      function filterStickies(stickie) {
        return stickie.id != id;
      }
    },
    GET_STICKIES(state) {
      return state.stickies;
    },
    CREATE_STICKY(state, sticky) {
      state.stickies.push(sticky);
    },
    UPDATE_STICKY(state, data) {
      state.stickies.forEach((stickie) => {
        if (stickie.id == data.id) {
          stickie.title = data.title;
          stickie.body = data.body;
          stickie.pinned = data.pinned;
          stickie.completed = data.completed;
        }
      });
    }
  },
  actions: {
    togglePinned({ commit }, id) {
      commit('SET_PINNED', id);
    },
    toggleComplete({ commit }, id) {
      commit('SET_COMPLETE', id);
    },
    deleteSticky({ commit }, id) {
      commit('DELETE_STICKIE', id);
    },
    getStickiy({ commit, state }) {
      commit('GET_STICKIES', state);
    },
    createSticky({ commit }, sticky) {
      commit('CREATE_STICKY', sticky);
    },
    updateSticky({ commit }, data) {
      commit('UPDATE_STICKY', data);
    },
  },
  getters: {
    pinnedStickies(state) {
      return state.stickies.filter(stickie => {
        return stickie.pinned;
      });
    },
    otherStickies(state) {
      return state.stickies.filter(stickie => {
        return !stickie.pinned;
      });
    },
  },
  modules: {
  },
  plugins: [vuexLocal.plugin],
  strict: debug
})
