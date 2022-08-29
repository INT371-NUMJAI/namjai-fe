import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { ref } from "vue";
export function useAuth() {
	const store = useStore();
	const router = useRouter();
	const store_auth = store.state.auth;
	let auth_userName = ref("");
	let auth_role = ref(false);
	// onMounted(() => {
	if (store_auth.status.loggedIn) {
		auth_role.value = store_auth.user.role.localeCompare("ROLE_ADMIN") == 0 ? true : false;
		// auth_role = "ROLE_ADMIN".localeCompare("ROLE_ADMIN");
		auth_userName = store_auth.user.userName;
		// console.log(auth_role);
	}
	// });
	// onUpdated(() => {
	// 	if (store_auth.status.loggedIn) {
	// 		auth_role.value = store_auth.user.role.localeCompare("ROLE_ADMIN") == 0 ? true : false;
	// 		// console.log(auth_role);
	// 	}
	// });
	return { auth_role, auth_userName, store_auth };
}
