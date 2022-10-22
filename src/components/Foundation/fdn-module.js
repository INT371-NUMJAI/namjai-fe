import AuthService from "@/services/auth-service.js";

const fdn_uuid = JSON.parse(localStorage.getItem("uuid"));
const initialState = fdn_uuid ?  {fdn_uuid}  :  null ;

export const fdn = {
    namespaced: true,
	state: initialState,
    actions: {
        getUUID({commit}, email) {
            return AuthService.getUUID(email).then(
                (fdn_uuid) => {
                    // console.log(initialState.UUID);
                    commit("getUUIDSuccess", fdn_uuid);
                    return Promise.resolve(fdn_uuid);
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
        getUUIDSuccess(state, fdn_uuid) {
            state.fdn_uuid = fdn_uuid;
            console.log(initialState.fdn_uuid);
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