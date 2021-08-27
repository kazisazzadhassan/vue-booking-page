import Vue from 'vue'
import Vuex from 'vuex'
import axios from '@/axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
    FETCH_RESERVATION_SINGLE: async (option, id) => {
      try {
        let { data } = await axios.reqApi("reservation/"+id).get()
        return data
      } catch (e) {
        console.log("Error-store-batch-actions-FETCH_RESERVATION_SINGLE", e.response.data)
        return Promise.reject(e.response.data)
      }
    },
    FETCH_ALL_RESERVATION: async () => {
      try {
        let data  = await axios.reqApi("reservation").get()
        return data
      } catch (e) {
        console.log("Error-store-batch-actions-FETCH_ALL_BATCH", e.response.data)
        return Promise.reject(e.response.data)
      }
    },
    ADD_RESERVATION: async ({commit}, payload) => {
      try {
        let { data } = await axios.reqApi("reservation").post(payload)
        return data
      } catch (e) {
        console.log("Error-store-batch-actions-ADD_BATCH", e.response.data)
        return Promise.reject(e.response.data)
      }
    },
    UPDATE_RESERVATION: async ({commit}, payload) => {
      try {
        let { data } = await axios.reqApi("reservation/update/"+payload.id).put(payload)
        return data
      } catch (e) {
        console.log("Error-store-batch-actions-UPDATE_BATCH", e.response.data)
        return Promise.reject(e.response.data)
      }
    },
    DELETE_RESERVATION: async ({commit}, id) => {
      try {
        let { data } = await axios.reqApi("reservation/delete/"+id).Delete()
        return data
      } catch (e) {
        console.log("Error-store-batch-actions-UPDATE_BATCH", e.response.data)
        return Promise.reject(e.response.data)
      }
    },
  },
  modules: {
  }
})
