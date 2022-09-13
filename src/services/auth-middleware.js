import { useStore } from "vuex";
import { ref, onMounted, onUpdated } from "vue";
export function useAuth() {
	const store = useStore();
	const store_auth = store.state.auth;
	let auth_userName = ref("");
	// let auth_role_admin = ref(false);
	// let auth_role_user = ref(false);
	// let auth_role_fdn = ref(false);
	let auth_role = ref("");
	const checkLoggedIn = () => {
		if (true === store_auth.status.loggedIn) {
			if (store_auth.user.role.localeCompare("ROLE_ADMIN") === 0) {
				auth_role.value = "ADMIN";
			} else if (store_auth.user.role.localeCompare("ROLE_FDN") === 0) {
				auth_role.value = "FDN";
			} else if (store_auth.user.role.localeCompare("ROLE_USER") === 0) {
				auth_role.value = "USER";
			}
			auth_userName.value = store_auth.user.userName;
		} else if (false === store_auth.status.loggedIn || null === store_auth.status.loggedIn) {
			auth_userName.value = null;
			store_auth.user = null;
		}
	};
	onMounted(() => checkLoggedIn());
	onUpdated(() => checkLoggedIn());
	return { auth_role, auth_userName, store_auth, checkLoggedIn };
}
// auth_role.value = store_auth.user.role.localeCompare("ROLE_ADMIN") === 0 ? true : false;
