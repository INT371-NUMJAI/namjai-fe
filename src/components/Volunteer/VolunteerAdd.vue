<template>
  <div class="container mx-auto space-y-2.5 lg:space-y-5">
    <router-link to="/volunteer-add">
      <button
        v-if="use_auth.store_auth.status.loggedIn && use_auth.store_auth.user != null && route.params.id === use_auth.store_auth.user.email && use_auth.store_auth.user.role === `ROLE_FDN`"
        :disabled="checkAuthorized()"
        class="bg-namjaired w-full lg:w-[186px] py-3 flex justify-center space-x-3 rounded-lg"
      >
        <w-icon class="mr1" md color="white">fa fa-plus</w-icon>
        <p class="text-[14px] text-white">เพิ่มโครงการจิตอาสา</p>
      </button>
    </router-link>
    <span v-if="use_auth.store_auth.status.loggedIn && use_auth.store_auth.user != null && use_auth.store_auth.user.status != `ACTIVE`">
        <p class="text-center mt-[80px]">กรุณาติดต่อเราเพื่อทำการยืนยันมูลนิธิของท่าน</p>
      </span>
    <div>
    <volunteer-activity-card :hiddenProp="false" :volunteerProps="volunteerShortList" />
  </div>
  </div>
</template>

<script>
import { useAuth } from "../../services/auth-middleware";
import VolunteerActivityCard from "./VolunteerActivityCard.vue";
import useVolunteer from "./useVolunteer";
import { useRoute } from 'vue-router';

export default {
  components: {
    "volunteer-activity-card": VolunteerActivityCard,
  },
  setup() {
    const use_auth = useAuth();
    const route = useRoute();
    const { volunteerShortList, getVolunteerShortListByFDNEmail, volunteerShortListByFDNEmailandStatusOpen, getVolunteerShortListByFDNEmailandStatusOpen } = useVolunteer();

    const checkAuthorized = () => {
      // let check = ""
      if (use_auth.store_auth.status.loggedIn) {
        if (
          use_auth.store_auth.user.role === `ROLE_FDN` &&
          use_auth.store_auth.user.status === `DISABLE`
        ) {
         return true;
        } 
        else if (
          use_auth.store_auth.user.role === `ROLE_FDN` &&
          use_auth.store_auth.user.status === `ACTIVE` &&
          route.params.id === use_auth.store_auth.user.email
        ) {
          getVolunteerShortListByFDNEmail(route.params.id);
          return false;
        }
        else if (use_auth.store_auth.user.role === `ROLE_USER` || use_auth.store_auth.user.role === `ROLE_FDN` && route.params.id != use_auth.store_auth.user.email) {
          getVolunteerShortListByFDNEmailandStatusOpen(route.params.id);
          return true;
        }
      } else {
        getVolunteerShortListByFDNEmailandStatusOpen(route.params.id);
        return true;
      }
      //check fdn unverify
      // console.log(check);
    };
    checkAuthorized();
    // getVolunteerShortListByFDNEmail(route.params.id);
    

    return { use_auth, checkAuthorized, volunteerShortList, route, volunteerShortListByFDNEmailandStatusOpen };
  },
};
</script>
