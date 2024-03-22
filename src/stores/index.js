import Vuex from 'vuex'
import { supabase } from '../supabase'
import Cookies from 'js-cookie'
const store = new Vuex.Store({
  state: {
    gender: 'male'
  },
  mutations: {
    setGender(state, payload) {
      state.gender = payload.value
    }
  },
  getters: {
    getGender(state) {
      return state.gender
    }
  },
  actions: {
    async signup(context, payload) {
      try {
        let { data, error } = await supabase.from('user').insert([
          {
            name: payload.name,
            email: payload.email,
            password: payload.password,
            gender: payload.gender
          }
        ])
        if (error) {
          return { result: '', error: error }
        }
        return { result: data, error: error }
      } catch (err) {
        return { result: '', error: err }
      }
    },
    async login(context, payload) {
      try {
        let { data, error } = await supabase
          .from('user')
          .select('*')
          .eq('email', payload.email)
          .eq('password', payload.password)

        if (error || data.length === 0) {
          return { result: '', error: error }
        }
        Cookies.set('username', JSON.stringify(data[0].name))
        Cookies.set('auth', JSON.stringify(true))
        let currentDate = new Date()
        let date_val = new Date(currentDate.getTime() + 10 * 24 * 60 * 60 * 1000)
        let date_final = Math.floor(date_val.getTime() / 1000)
        Cookies.set('expire', JSON.stringify(date_final))
        return { result: data, error: '' }
      } catch (err) {
        return { result: '', error: err }
      }
    },
    async carouselData() {},
    async language(context, payload) {
      try {
        let { data, error } = await supabase.from('Language').select('*').eq('title', payload.value)
        if (error) {
          return { result: '', error: error }
        }
        return { result: data[0], error: error }
      } catch (err) {
        return { result: '', error: err }
      }
    },
    async features(context, payload) {
      try {
        let { data, error } = await supabase
          .from('Features')
          .select('title,syntax')
          .eq('language', payload.value)
        if (error || data.length == 0) {
          return { result: '', error: error }
        }
        return { result: data, error: '' }
      } catch (err) {
        return { result: '', error: err }
      }
    },
    async DataStructures() {
      try {
        let { data, error } = await supabase.from('DataStructure').select('title')
        if (error) {
          return { result: '', error: error }
        }
        return { result: data, error: '' }
      } catch (err) {
        return { result: '', error: err }
      }
    },
    async Algorithm() {
      try {
        let { data, error } = await supabase.from('Algorithms').select('title')
        if (error) {
          return { result: '', error: error }
        }
        return { result: data, error: '' }
      } catch (err) {
        return { result: '', error: err }
      }
    },
    async dsCode(context, payload) {
      try {
        let { data, error } = await supabase
          .from('DataStructure')
          .select(`javascript,typescript,python,golang,dart`)
          .eq('title', payload.value)
        if (error || data.length === 0) {
          return { result: '', error: error }
        }
        return { result: data[0], error: '' }
      } catch (err) {
        return { result: '', error: err }
      }
    },
    async algoCode(context, payload) {
      try {
        let { data, error } = await supabase
          .from('Algorithms')
          .select(`description,javascript,typescript,python,golang,dart`)
          .eq('title', payload.value)
        if (error || data.length === 0) {
          return { result: '', error: error }
        }
        return { result: data[0], error: '' }
      } catch (err) {
        return { result: '', error: err }
      }
    }
  }
})

export default store
