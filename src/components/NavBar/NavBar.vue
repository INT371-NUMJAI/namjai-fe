<template>
	<nav class="bg-namjaigreen flex items-center justify-between px-7 py-6 lg:py-4 lg:px-11 drop-shadow-md lg:fixed lg:w-screen">
		<div class="flex items-center text-white space-x-5">
			<router-link to="/main">
				<svg width="112" viewBox="0 0 329 59" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M50.75 7V56H41.44L17.01 26.25V56H5.81V7H15.19L39.55 36.75V7H50.75ZM103.713 45.5H80.9632L76.6232 56H65.0032L86.8432 7H98.0432L119.953 56H108.053L103.713 45.5ZM100.143 36.89L92.3732 18.13L84.6032 36.89H100.143Z" fill="white" />
					<path d="M212.84 56.84C209.527 56.84 206.47 56.2333 203.67 55.02C200.917 53.76 198.653 51.9867 196.88 49.7L203.18 42.14C205.84 45.7333 208.873 47.53 212.28 47.53C216.9 47.53 219.21 44.8233 219.21 39.41V16.1H201.99V7H230.48V38.78C230.48 44.8 228.987 49.3267 226 52.36C223.013 55.3467 218.627 56.84 212.84 56.84ZM281.326 45.5H258.576L254.236 56H242.616L264.456 7H275.656L297.566 56H285.666L281.326 45.5ZM277.756 36.89L269.986 18.13L262.216 36.89H277.756ZM311.049 7H322.389V56H311.049V7Z" fill="white" />
					<path d="M147.083 56.4828C140.083 46.3161 127.583 23.9828 133.583 15.9828C135.082 12.4828 139.882 6.88281 147.083 12.4828C154.283 18.0828 158.083 26.4828 159.083 29.9828C161.249 23.8161 166.283 10.7828 169.083 7.98281C172.583 4.48281 177.583 0.482811 183.583 9.48281C189.583 18.4828 183.083 45.4828 169.083 56.4828" stroke="#D45343" stroke-width="6" />
				</svg>
			</router-link>
			<h1 class="mt-2" v-if="auth_role && store_auth.status.loggedIn">Admin</h1>
		</div>
		<div class="lg:hidden">
			<!-- <w-icon color="white">fa fa-bars</w-icon> -->
			<drawer />
		</div>
		<div class="hidden lg:flex lg:space-x-11 items-center text-white lg:text-base">
			<router-link to="/admin-management"> <w-button bg-color="transparent" class="font-medium" v-if="auth_role && store_auth.status.loggedIn">จัดการ</w-button></router-link>
			<w-button bg-color="transparent" class="font-medium">มูลนิธิ</w-button>
			<w-button bg-color="transparent" class="font-medium">โครงการ</w-button>
			<router-link to="/volunteer">
				<w-button bg-color="transparent" class="font-medium">จิตอาสา</w-button>
			</router-link>
			<w-button bg-color="transparent" class="font-medium">ข่าวสาร</w-button>
			<div>
				<span v-if="store_auth.user === null">
					<router-link to="/login">
						<w-button bg-color="transparent" round outline class="py-4 font-medium">เข้าสู่ระบบ</w-button>
					</router-link>
				</span>
				<span v-if="store_auth.user !== null">
					<w-button bg-color="transparent" round outline class="py-4 font-medium" @click="showDropDown = !showDropDown">
						<!-- <p class="text-white">{{ auth_userName }}</p> -->
						<p class="text-white">test</p>
						<div class="ml-2 -mt-[2px]">
							<w-icon md color="white" v-if="showDropDown == false">fa fa-caret-down</w-icon>
							<w-icon md color="white" v-if="showDropDown">fa fa-caret-up</w-icon>
						</div>
					</w-button>
					<div>
						<div class="absolute mt-2 -ml-[21px] z-10 bg-white" v-if="showDropDown">
							<div class="text-white font-medium">
								<w-button color="black" bg-color="transparent" class="block text-sm ml-5 my-2">ข้อมูลส่วนตัว</w-button>
								<w-button color="red" bg-color="transparent" class="block text-sm ml-[35px] my-2" @click="clicktoLogout">ลงชื่อออก</w-button>
							</div>
						</div>
					</div>
				</span>
			</div>
		</div>
	</nav>
</template>
<script>
import { onMounted, onUpdated, ref, reactive } from "vue";
import { useStore } from "vuex";
import Drawer from "./Drawer.vue";
import { useRouter } from "vue-router";
import { auth } from "../Account/auth-module";
export default {
	components: {
		Drawer,
	},
	setup() {
		// const use_auth = useAuth();
		const store = useStore();
		const router = useRouter();
		const store_auth = reactive(store.state.auth);
		let auth_userName = ref("");
		let auth_role = ref(false);

		const checkLoggedIn = () => {
			if (store_auth.status.loggedIn) {
				auth_role.value = store_auth.user.role.localeCompare("ROLE_ADMIN") == 0 ? true : false;
				auth_userName.value = store_auth.user.userName;
			} else if (store_auth.status.loggedIn === false) {
				auth.userName = null;
				store_auth.user = null;
			}
		};
		checkLoggedIn(); // created
		onMounted(() => {
			checkLoggedIn();
			console.log(store_auth);
		}); // mounted ==> call function 'checkLoggedIn';
		onUpdated(() => checkLoggedIn()); // update ==>  call function 'checkLoggedIn'

		const showDropDown = ref(false);

		const clicktoLogout = () => {
			store.dispatch("auth/logout");
			router.push("/main");
		};
		return { auth_role, auth_userName, store_auth, showDropDown, clicktoLogout };
	},
};
</script>
<style>
.namjaired {
	color: #d45343;
}
</style>
