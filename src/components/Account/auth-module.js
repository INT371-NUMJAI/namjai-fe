import AuthService from "@/services/auth-service.js";

const user = JSON.parse(window.localStorage.getItem("user"));
const initialState = user ? { status: { loggedIn: true }, user } : { status: { loggedIn: false }, user: null };

export const auth = {
	namespaced: true,
	state: initialState,
	actions: {
		login({ commit }, user) {
			return AuthService.login(user).then(
				(user) => {
					// console.log(initialState.user);
					commit("loginSuccess", user);
					return Promise.resolve(user);
				},
				(error) => {
					commit("loginFailure");
					return Promise.reject(error);
				}
			);
		},
		logout({ commit }) {
			AuthService.logout();
			commit("logout");
		},
	},
	mutations: {
		loginSuccess(state, user) {
			state.status.loggedIn = true;
			state.user = user;
			// console.log(initialState.user);
		},
		loginFailure(state) {
			state.status.loggedIn = false;
			state.user = null;
		},
		logout(state) {
			localStorage.removeItem("user");
			state.status.loggedIn = false;
			state.user = null;
		},
		registerSuccess(state) {
			state.status.loggedIn = false;
		},
		registerFailure(state) {
			state.status.loggedIn = false;
		},
	},
};
