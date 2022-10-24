import AuthService from "@/services/auth-service.js";

const fdn_uuid = JSON.parse(localStorage.getItem("uuid"));
const initialState = fdn_uuid ?  {fdn_uuid}  :  null ;

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
            
			commit("logout");
		},
    },
    mutations: {
        getUUIDSuccess(state, UUID) {
            state.fdn_uuid = UUID;
            console.log(initialState.UUID);
        },
        getUUIDFailure(state) {
            state.fdn_uuid = null;
        },
        logout(state) {
            localStorage.removeItem("uuid");
			state.fdn_uuid = null;
		},
    }
}