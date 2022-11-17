<template>
  <div class="mx-[30px] lg:mx-[177px] mt-[120px] mb-[60px] space-y-2.5 lg:space-y-5">
    <profile-name :profileNameProps="route.params.id" />
    <div class="whitespace-nowrap overflow-x-auto container mx-auto pt-3 lg:pt-4 justify-center lg:justify-start space-x-[30px] md:space-x-[50px] lg:space-x-[60px] bg-namjaiwhite rounded-lg text-center text-[14px] lg:text-[16px] font-black text-[#5A5A5A] duration-200 easy-in-out">
      <div class="flex lg:flex md:flex space-x-[30px] px-[30px]">
        <button @click="routeToProfileSubNav(route.params.id, `post`)" class="space-y-3">
          <p :class="{'cursor-pointer text-namjaigreen': route.fullPath.includes('post')}">ข่าวสาร</p>
          <div :class="{'h-1 bg-namjaigreen': route.fullPath.includes('post')}"></div>          
        </button>

        <button @click="routeToProfileSubNav(route.params.id, `project`)" class="space-y-3" v-if="!(use_auth.store_auth.status.loggedIn && use_auth.store_auth.user.role === `ROLE_USER` && route.params.id === use_auth.store_auth.user.email)">
          <p :class="{'cursor-pointer text-namjaigreen': route.fullPath.includes('project')}">โครงการ</p>
          <div :class="{'h-1 bg-namjaigreen': route.fullPath.includes('project')}"></div>          
          <!-- v-if="use_auth.store_auth.status.loggedIn && use_auth.store_auth.user.role === `ROLE_USER` && route.params.id != use_auth.store_auth.user.email" -->
        </button>
        <button @click="routeToProfileSubNav(route.params.id, `volunteer`)" class="space-y-3">
          <p :class="{'cursor-pointer text-namjaigreen': route.fullPath.includes('volunteer')}">จิตอาสา</p>
          <div :class="{'h-1 bg-namjaigreen': route.fullPath.includes('volunteer')}"></div>
                </button>
        <button @click="routeToProfileSubNav(route.params.id, `activity`)" class="space-y-3" v-if="use_auth.store_auth.status.loggedIn && use_auth.auth_role.value === `USER` && use_auth.store_auth.user.email === route.params.id">
          <p :class="{'cursor-pointer text-namjaigreen': route.fullPath.includes('activity')}">บันทึกกิจกรรม</p>
          <div :class="{'h-1 bg-namjaigreen': route.fullPath.includes('activity')}"></div>          
        </button>
        <button @click="routeToProfileSubNav(route.params.id, `transaction`)" v-if="use_auth.store_auth.status.loggedIn && use_auth.auth_role.value === `FDN` && route.params.id === use_auth.store_auth.user.email" class="space-y-3">
          <p :class="{'cursor-pointer text-namjaigreen': route.fullPath.includes('transaction')}">การเงิน</p>
          <div :class="{'h-1 bg-namjaigreen': route.fullPath.includes('transaction')}"></div>
        </button>
        <button @click="routeToProfileSubNav(route.params.id, `about`)" class="space-y-3 pr-5">
          <p :class="{'cursor-pointer text-namjaigreen': route.fullPath.includes('about')}">เกี่ยวกับ</p>
          <div :class="{'h-1 bg-namjaigreen': route.fullPath.includes('about')}"></div>
        </button>
      </div>
    </div>
    <router-view />
  </div>
</template>

<script>
import ProfileName from "@/components/Profile/ProfileName.vue";
import { computed, onUpdated, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import foundationService from "../Foundation/foundation-service";
import { useStore } from "vuex";
import { useAuth } from "../../services/auth-middleware";

export default {
  components: {
    "profile-name": ProfileName,
  },
  setup() {
    document.title = "Namjai - profile";
    const route = useRoute();
    const router = useRouter();

    const use_auth = useAuth();

    const routeToProfileSubNav = (email, type) => {
      router.push(`/profile/${email}/${type}`).catch((error) => {
        router.push({name: 'not-found'})
      })
    };

    return { use_auth, routeToProfileSubNav, route };
  },
};
</script>

<style scoped>
::-webkit-scrollbar {
  display: none;
}
</style>
