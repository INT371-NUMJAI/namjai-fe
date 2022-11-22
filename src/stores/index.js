import { createStore } from "vuex";
import { auth } from "../components/Account/auth-module.js";
import { fdn } from "../components/Foundation/fdn-module.js";

export default createStore({
	state: {
		profileRole: "",
	},
	actions: {
		setProfileRole({commit}, payload) {
			commit("setProfileRole", payload)
		}
	},
	mutations: {
		setProfileRole(state, payload) {
			state.profileRole = payload
		}
	},
	getters: {
		getProfileRole: (state) => {
			return state.profileRole;
		}
	},
	modules: {
		auth,
		fdn
	},
});
