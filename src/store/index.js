import Vue from 'vue'
import Vuex from 'vuex'
//导入插件
// import createPersistedState from 'vuex-persistedstate'
Vue.use(Vuex) //vue的插件机制

//Vuex.Store 构造器选项
const store = new Vuex.Store({
	state: {
		USER_INFO: uni.getStorageSync('USER_INFO') || {},
		BASE_URL: uni.getStorageSync('BASE_URL') || '',
		token: uni.getStorageSync('token') || '',
		refresh_token: uni.getStorageSync('refresh_token') || '',
		openId: uni.getStorageSync('openId') || '',
		$ossToken: uni.getStorageSync('$ossToken') || ''

	},
	mutations: {
		BASE_URL(state, e) {
			state.BASE_URL = e
			uni.setStorageSync('BASE_URL', e)
		},
		USER_INFO(state, e) {
			state.USER_INFO = e
			uni.setStorageSync('USER_INFO', e)
		},
		TOKEN(state, e) {
			state.token = e
			uni.setStorageSync('token', e)
		},
		REFRESH_TOKEN(state, e) {
			state.refresh_token = e
			uni.setStorageSync('refresh_token', e)
		},
		OPENID(state, e) {
			state.openId = e
			uni.setStorageSync('openId', e)
		},
		$OSSTOKEN(state, e) {
			state.$ossToken = e
			uni.setStorageSync('$ossToken', e)
		}
	},
	actions: {
		SET_USER_INFO({
			commit
		}, val) {
			commit('USER_INFO', val)
		},
		DEL_USER_INFO({
			commit
		}) {
			commit('USER_INFO', {})
		},
		SET_TOKEN({
			commit
		}, val) {
			commit('TOKEN', val)
		},
		SET_REFRESH_TOKEN({
			commit
		}, val) {
			commit('REFRESH_TOKEN', val)
		},
		SET_OPENID({
			commit
		}, val) {
			commit('OPENID', val)
		},
		SET_$OSSTOKEN({
			commit
		}, val) {
			commit('$OSSTOKEN', val)
		},
	},
	// plugins: [createPersistedState()]
})
export default store