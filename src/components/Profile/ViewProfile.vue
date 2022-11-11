<template>
  <div class="mx-[30px] lg:mx-[177px] mt-[120px] mb-[60px] space-y-2.5 lg:space-y-5">
    <profile-name :profileNameProps="route.params.id" />
    <div class="whitespace-nowrap overflow-x-auto container mx-auto pt-3 lg:pt-4 justify-center lg:justify-start space-x-[30px] md:space-x-[50px] lg:space-x-[60px] bg-namjaiwhite rounded-lg text-center text-[14px] lg:text-[16px] font-black text-[#5A5A5A] duration-200 easy-in-out">
      <div class="flex lg:flex md:flex space-x-[30px] px-[30px]">
        <div @click="routeToProfileSubNav(route.params.id, `post`)" class="space-y-3">
          <!-- <router-link to="/profile/post"><p>โพสต์</p></router-link> -->
          <p class="cursor-pointer select-all selection:text-namjaigreen">ข่าวสาร</p>
          <div class="h-1 bg-namjaigreen"></div>
          <!-- <p>ข่าวสาร</p> -->
        </div>

        <button @click="routeToProfileSubNav(route.params.id, `project`)" class="space-y-3" v-if="use_auth.store_auth.status.loggedIn && use_auth.store_auth.user.role === `ROLE_USER` && route.params.id != use_auth.store_auth.user.email">
          <!-- <router-link to="/profile/project"><p>โครงการ</p></router-link> -->
          <p class="cursor-pointer select-all selection:text-namjaigreen">โครงการ</p>
          <div class="h-1 bg-namjaigreen"></div>
          <!-- <p>โครงการ</p> -->
        </button>

        <button @click="routeToProfileSubNav(route.params.id, `volunteer`)" class="space-y-3">
          <!-- <router-link to="/profile/volunteer"><p>จิตอาสา</p></router-link> -->
          <p class="cursor-pointer select-all selection:text-namjaigreen">จิตอาสา</p>
          <div class="h-1 bg-namjaigreen"></div>
          <!-- <p>จิตอาสา</p> -->
        </button>
        <button @click="routeToProfileSubNav(route.params.id, `activity`)" class="space-y-3" v-if="use_auth.store_auth.status.loggedIn && use_auth.auth_role.value === `USER` && use_auth.store_auth.user.email === route.params.id">
          <!-- <router-link to="/profile/activity"><p>บันทึกกิจกรรม</p></router-link> -->
          <p class="cursor-pointer select-all selection:text-namjaigreen">บันทึกกิจกรรม</p>
          <div class="h-1 bg-namjaigreen"></div>
          <!-- <p>บันทึกกิจกรรม</p> -->
        </button>
        <button @click="routeToProfileSubNav(route.params.id, `transaction`)" v-if="use_auth.store_auth.status.loggedIn && use_auth.auth_role.value === `FDN` && route.params.id === use_auth.store_auth.user.email" class="space-y-3">
          <!-- <router-link to="/profile/transaction"><p>การเงิน</p></router-link> -->
          <p class="cursor-pointer select-all selection:text-namjaigreen">การเงิน</p>
          <div class="h-1 bg-namjaigreen"></div>
          <!-- <p>การเงิน</p> -->
        </button>
        <button @click="routeToProfileSubNav(route.params.id, `about`)" class="space-y-3 pr-5">
          <!-- <router-link to="/profile/about"><p>เกี่ยวกับ</p></router-link> -->
          <p class="cursor-pointer select-all selection:text-namjaigreen">เกี่ยวกับ</p>
          <div class="h-1 bg-namjaigreen"></div>
          <!-- <p>เกี่ยวกับ</p> -->
        </button>
      </div>
    </div>
    <router-view />
  </div>
</template>

<script>
import ProfileName from "@/components/Profile/ProfileName.vue";
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import foundationService from "../Foundation/foundation-service";
import { useStore } from "vuex";
import { useAuth } from "../../services/auth-middleware";

export default {
  components: {
    "profile-name": ProfileName,
  },
  setup() {
    const route = useRoute();
    const router = useRouter();

    const store = useStore();
    const use_auth = useAuth();

    const routeToProfileSubNav = (email, type) => {
      router.push(`/profile/${email}/${type}`);
    };

    const active = ref(false);

    return { use_auth, routeToProfileSubNav, route, active };
  },
};
</script>

<style scoped>
::-webkit-scrollbar {
  display: none;
}
</style>
