<template>
  <div class="container mx-auto space-y-2.5 lg:space-y-5">
    <router-link to="/volunteer-add">
      <button
        :disabled="checkAuthorized()"
        class="bg-namjaired w-full lg:w-[186px] py-3 flex justify-center space-x-3 rounded-lg"
      >
        <w-icon class="mr1" md color="white">fa fa-plus</w-icon>
        <p class="text-[14px] text-white">เพิ่มโครงการจิตอาสา</p>
      </button>
    </router-link>
    <div class="lg:grid lg:grid-cols-3 lg:gap-[30px] lg:space-y-0 space-y-[30px]">
    <volunteer-activity-card :volunteerProps="volunteerShortList" />
  </div>
  </div>
</template>

<script>
import { useAuth } from "../../services/auth-middleware";
import VolunteerActivityCard from "./VolunteerActivityCard.vue";
import useVolunteer from "./useVolunteer";

export default {
  components: {
    "volunteer-activity-card": VolunteerActivityCard,
  },
  setup() {
    const use_auth = useAuth();
    const { volunteerShortList, getVolunteerShortListByFDNEmail } = useVolunteer();

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
          use_auth.store_auth.user.status === `ACTIVE`
        ) {
          getVolunteerShortListByFDNEmail(use_auth.store_auth.user.email);
          return false;
        }
        else if (use_auth.store_auth.user.role === `ROLE_USER`) {
          return true;
        }
      } else {
        return true;
      }
      //check fdn unverify
      // console.log(check);
    };

    

    return { use_auth, checkAuthorized, volunteerShortList };
  },
};
</script>
