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
                    console.log(initialState.UUID);
                    commit("getUUIDSuccess", UUID);
                    return Promise.resolve(UUID);
                },
                (error) => {
					commit("getUUIDFailure");
					return Promise.reject(error);
				}
            )
        }
    },
    mutations: {
        getUUIDSuccess(state, UUID) {
            state.UUID = UUID
        },
        getUUIDFailure(state) {
            state.UUID = null;
        }
    }
}