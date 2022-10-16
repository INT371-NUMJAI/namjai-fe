<template>
	<div class="mx-[30px] lg:mx-[177px] mt-[120px] mb-[60px] space-y-2.5 lg:space-y-5">
		<foundation-name :foundationNameProps="foundationName" />
		<div class="container mx-auto px-[30px] py-3 lg:py-4 flex justify-center lg:justify-start space-x-[30px] md:space-x-[50px] lg:space-x-[60px] bg-namjaiwhite rounded-lg text-center text-[14px] lg:text-[16px] font-black text-[#5A5A5A] duration-200 easy-in-out">
			<button class="active:border-b-4 active:border-namjaigreen">
				<router-link to="/profile/post"><p>โพสต์</p></router-link>
			</button>

			<button class="active:border-b-4 active:border-namjaigreen" v-if="use_auth.auth_role.value === `FDN` && use_auth.store_auth.status.loggedIn">
				<router-link to="/profile/project"><p>โครงการ</p></router-link>
			</button>

			<button class="active:border-b-4 active:border-namjaigreen">
				<router-link to="/profile/volunteer"><p>จิตอาสา</p></router-link>
			</button>

			<button class="active:border-b-4 active:border-namjaigreen">
				<router-link to="/profile/about"><p>เกี่ยวกับ</p></router-link>
			</button>
      <button class="active:border-b-4 active:border-namjaigreen">
				<router-link to="/profile/transaction"><p>การเงิน</p></router-link>
			</button>
		</div>
		<router-view />
	</div>
</template>

<script>
import FoundationName from "@/components/Foundation/FoundationName.vue";
import { ref } from "vue";
import { useRoute } from "vue-router";
import foundationService from "../Foundation/foundation-service";
import { useStore } from "vuex";
import { useAuth } from "../../services/auth-middleware";
export default {
	components: {
		"foundation-name": FoundationName,
	},
	setup() {
		const route = useRoute();

		const store = useStore();
		const foundationName = store.state.auth.user.userName;
		const use_auth = useAuth();
		// const fetchFoundationProfile = (id) => {
		//   foundationService.getFoundationById(id).then((response) => {
		//     foundationName.value = response.data.fdnName;
		//     console.log(foundationName.value);
		//   })
		// }
		// fetchFoundationProfile(route.params.id);

		return { foundationName, use_auth };
	},
};
</script>
