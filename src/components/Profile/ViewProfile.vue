<template>
	<div class="mx-[30px] lg:mx-[177px] mt-[120px] mb-[60px] space-y-2.5 lg:space-y-5">
		<foundation-name :foundationNameProps="foundationName" />
		<div class="whitespace-nowrap overflow-x-auto container mx-auto py-3 lg:py-4 justify-center lg:justify-start space-x-[30px] md:space-x-[50px] lg:space-x-[60px] bg-namjaiwhite rounded-lg text-center text-[14px] lg:text-[16px] font-black text-[#5A5A5A] duration-200 easy-in-out">
			<div class="inline-block lg:flex md:flex space-x-[30px] px-[30px]">
			<button @click="routeToProfileSubNav(route.params.id, `post`)" class="active:border-b-4 active:border-namjaigreen">
				<!-- <router-link to="/profile/post"><p>โพสต์</p></router-link> -->
				<p>โพสต์</p>
			</button>

			<button @click="routeToProfileSubNav(route.params.id, `project`)" class="active:border-b-4 active:border-namjaigreen" v-if="use_auth.store_auth.status.loggedIn && use_auth.auth_role.value === `FDN`">
				<!-- <router-link to="/profile/project"><p>โครงการ</p></router-link> -->
				<p>โครงการ</p>
			</button>

			<button @click="routeToProfileSubNav(route.params.id, `volunteer`)" class="active:border-b-4 active:border-namjaigreen">
				<!-- <router-link to="/profile/volunteer"><p>จิตอาสา</p></router-link> -->
				<p>จิตอาสา</p>
			</button>
			<button @click="routeToProfileSubNav(route.params.id, `activity`)" class="active:border-b-4 active:border-namjaigreen" v-if="use_auth.store_auth.status.loggedIn && use_auth.auth_role.value === `USER`">
				<!-- <router-link to="/profile/activity"><p>บันทึกกิจกรรม</p></router-link> -->
				<p>บันทึกกิจกรรม</p>
			</button>
			<button @click="routeToProfileSubNav(route.params.id, `transaction`)" v-if="use_auth.store_auth.status.loggedIn && use_auth.auth_role.value === `FDN` && route.params.id === use_auth.store_auth.user.email" class="active:border-b-4 active:border-namjaigreen">
				<!-- <router-link to="/profile/transaction"><p>การเงิน</p></router-link> -->
				<p>การเงิน</p>
			</button>
			<button @click="routeToProfileSubNav(route.params.id, `about`)" class="active:border-b-4 active:border-namjaigreen">
				<!-- <router-link to="/profile/about"><p>เกี่ยวกับ</p></router-link> -->
				<p>เกี่ยวกับ</p>
			</button>
		</div>
		</div>
		<router-view />
	</div>
</template>

<script>
import FoundationName from "@/components/Foundation/FoundationName.vue";
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import foundationService from "../Foundation/foundation-service";
import { useStore } from "vuex";
import { useAuth } from "../../services/auth-middleware";

export default {
	components: {
		"foundation-name": FoundationName,
	},
	setup() {
		const route = useRoute();
		const router = useRouter();

		const store = useStore();
		const foundationName = "---";
		const use_auth = useAuth();
		// const fetchFoundationProfile = (id) => {
		//   foundationService.getFoundationById(id).then((response) => {
		//     foundationName.value = response.data.fdnName;
		//     console.log(foundationName.value);
		//   })
		// }
		// fetchFoundationProfile(route.params.id);

		const routeToProfileSubNav = (email, type) => {
			router.push(`/profile/${email}/${type}`)
		}

		return { foundationName, use_auth, routeToProfileSubNav, route };
	},
};
</script>

<style scoped>
::-webkit-scrollbar {
	display: none;
}
</style>
