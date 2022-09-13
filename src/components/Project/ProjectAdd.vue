<template>
  <div class="space-y-2.5 lg:space-y-5">
    <button :disabled="use_auth.store_auth.user.status === `DISABLE` && use_auth.store_auth.status.loggedIn" @click="routeToProjectForm" class="bg-namjaigreen w-full lg:w-[186px] py-3 flex justify-center space-x-3 rounded-lg">
      <w-icon class="mr1" md color="white">fa fa-plus</w-icon>
      <p class="text-[14px] text-white">เพิ่มโครงการบริจาค</p>
    </button>
    <project-card />
  </div>
</template>

<script>
import ProjectCard from "./ProjectCard.vue";
import { useRouter } from "vue-router";
import { useAuth } from "../../services/auth-middleware";

export default {
  components: {
    "project-card": ProjectCard,
  },
  setup() {
    const router = useRouter();
    const use_auth = useAuth();

    const routeToProjectForm = () => {
      router.push(`/add/foundationproject`);
    }
    return { routeToProjectForm, use_auth }
  }
};
</script>
