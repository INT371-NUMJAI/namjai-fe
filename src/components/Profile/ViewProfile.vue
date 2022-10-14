<template>
  <div class="mx-[30px] lg:mx-[177px] mt-[120px] mb-[60px] space-y-2.5 lg:space-y-5">
    <foundation-name :foundationNameProps="foundationName" />
    <!-- <div class="container mx-auto px-[30px] py-3 lg:py-4 flex justify-center lg:justify-start space-x-[30px] md:space-x-[50px] lg:space-x-[60px] bg-namjaiwhite rounded-lg text-center text-[14px] lg:text-[16px] font-black text-[#5A5A5A] duration-200 easy-in-out">
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
			</div> -->

    <div class="container mx-auto bg-namjaiwhite rounded-lg duration-200 easy-in-out">
      <div class="flex justify-center item-center px-[30px] lg:justify-start space-x-[30px] md:space-x-[50px] lg:space-x-[60px] text-center text-[14px] lg:text-[16px] font-black text-[#5A5A5A]">
        <button class="flex-wrap" @click="(selectedPost = !selectedPost), (selectedProject = false), (selectedVolunteer = false), (selectedWithdraw = false), (selectedAbout = false)">
          <router-link to="/profile/post">
            <h2 class="py-3 select-all selection:text-namjaigreen">โพสต์</h2>
            <div class="h-1.5 bg-emerald-600" v-if="selectedPost == false"></div>
          </router-link>
        </button>

        <button class="flex-wrap" v-if="use_auth.auth_role.value === `FDN` && use_auth.store_auth.status.loggedIn" @click="(selectedProject = !selectedProject), (selectedPost = false), (selectedVolunteer = false), (selectedWithdraw = false), (selectedAbout = false)">
          <router-link to="/profile/post">
            <h2 class="py-3 select-all selection:text-namjaigreen">โพสต์</h2>
            <div class="h-1.5 bg-emerald-600" v-if="selectedPost == false"></div>
          </router-link>
        </button>

        <button class="flex-wrap" @click="(selectedVolunteer = !selectedVolunteer), (selectedPost = false), (selectedProject = false), (selectedWithdraw = false), (selectedAbout = false)">
          <router-link to="/profile/post">
            <h2 class="py-3 select-all selection:text-namjaigreen">จิตอาสา</h2>
            <div class="h-1.5 bottom-0 bg-emerald-600" v-if="selectedVolunteer == false"></div>
          </router-link>
        </button>

        <button class="flex-wrap" @click="(selectedWithdraw = !selectedWithdraw), (selectedPost = false), (selectedProject = false), (selectedVolunteer = false), (selectedAbout = false)">
          <router-link to="/profile/post">
            <h2 class="py-3 select-all selection:text-namjaigreen">ถอนเงิน</h2>
            <div class="h-1.5 bottom-0 bg-emerald-600" v-if="selectedWithdraw == false"></div>
          </router-link>
        </button>

        <button class="flex-wrap" @click="(selectedAbout = !selectedAbout), (selectedPost = false), (selectedProject = false), (selectedVolunteer = false), (selectedWithdraw = false)">
          <router-link to="/profile/post">
            <h2 class="py-3 select-all selection:text-namjaigreen">เกี่ยวกับ</h2>
            <div class="h-1.5 bottom-0 bg-emerald-600" v-if="selectedAbout == false"></div>
          </router-link>
        </button>
      </div>
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

    const clicked = ref([false, false]);
    const selectedPost = ref(false);
    const selectedProject = ref(false);
    const selectedVolunteer = ref(false);
    const selectedAbout = ref(false);
    const selectedWithdraw = ref(false);
    const swapMenu = () => {
      if (true === selectedPost) {
        selectedProject.value = false;
        selectedVolunteer.value = false;
        selectedWithdraw.value = false;
        selectedAbout.value = false;
      }
      if (true === selectedProject) {
        selectedPost.value = false;
        selectedVolunteer.value = false;
        selectedWithdraw.value = false;
        selectedAbout.value = false;
      }
      if (true === selectedVolunteer) {
        selectedPost.value = false;
        selectedProject.value = false;
        selectedWithdraw.value = false;
        selectedAbout.value = false;
      }
      if (true === selectedWithdraw) {
        selectedPost.value = false;
        selectedProject.value = false;
        selectedVolunteer.value = false;
        selectedAbout.value = false;
      }
      if (true === selectedAbout) {
        selectedPost.value = false;
        selectedProject.value = false;
        selectedVolunteer.value = false;
        selectedWithdraw.value = false;
      }
    };

    // const fetchFoundationProfile = (id) => {
    //   foundationService.getFoundationById(id).then((response) => {
    //     foundationName.value = response.data.fdnName;
    //     console.log(foundationName.value);
    //   })
    // }
    // fetchFoundationProfile(route.params.id);

    return { foundationName, use_auth, clicked, selectedPost, selectedProject, selectedVolunteer, selectedWithdraw, selectedAbout };
  },
};
</script>
