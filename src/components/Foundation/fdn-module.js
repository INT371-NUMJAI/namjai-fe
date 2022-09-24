import AuthService from "@/services/auth-service.js";

const UUID = JSON.parse(localStorage.getItem("uuid"));
const initialState = UUID ? UUID : null ;

export const fdn = {
    namespaced: true,
	state: initialState,
    actions: {
        getUUID({commit}, email) {
            return AuthService.getUUID(email).then(
                (UUID) => {
                    // console.log(initialState.UUID);
                    commit("getUUIDSuccess", UUID);
                    return Promise.resolve(UUID);
                },
                (error) => {
					commit("getUUIDFailure");
					return Promise.reject(error);
				}
            )
        },
        logout({ commit }) {
            localStorage.removeItem("uuid");
			commit("logout");
		},
    },
    mutations: {
        getUUIDSuccess(state, UUID) {
            state.UUID = UUID
            console.log(initialState.UUID);
        },
        getUUIDFailure(state) {
            state.UUID = null;
        },
        logout(state) {
			state.UUID = null;
		},
    }
}