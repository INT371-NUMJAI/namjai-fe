import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { ref } from "vue";
export function useAuth() {
	const store = useStore();
	const router = useRouter();
	const store_auth = store.state.auth;
	let auth_userName = ref("");
	let auth_role = ref(false);

	const checkLoggedIn = () => {
		if (store_auth.status.loggedIn) {
			auth_role.value = store_auth.user.role.localeCompare("ROLE_ADMIN") == 0 ? true : false;
			auth_userName.value = store_auth.user.userName;
		}
	};
	onMounted(() => checkLoggedIn());
	onUpdated(() => {
		checkLoggedIn();
	});
	return { auth_role, auth_userName, store_auth };
}
