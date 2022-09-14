<template>
    <div class="space-y-2.5 lg:space-y-5">
      <button :disabled="use_auth.store_auth.user.status === `DISABLE` && use_auth.store_auth.status.loggedIn" class="bg-namjaired w-full lg:w-[186px] py-3 flex justify-center space-x-3 rounded-lg">
        <w-icon class="mr1" md color="white">fa fa-plus</w-icon>
        <p class="text-[14px] text-white">เพิ่มโครงการจิตอาสา</p>
      </button>
      <volunteer-activity-card />
    </div>
  </template>
  
  <script>
import { useAuth } from '../../services/auth-middleware';
  import VolunteerActivityCard from './VolunteerActivityCard.vue';
  export default {
    components: {
      "volunteer-activity-card": VolunteerActivityCard,
    },
    setup() {
      const use_auth = useAuth();
      
      return { use_auth };
    }
  };
  </script>
  