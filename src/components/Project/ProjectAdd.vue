<template>
  <div class="space-y-2.5 lg:space-y-5">
    <button class="bg-namjaigreen w-full lg:w-[186px] py-3 flex justify-center space-x-3 rounded-lg">
      <w-icon class="mr1" md color="white">fa fa-plus</w-icon>
      <p class="text-[14px] text-white">เพิ่มโครงการบริจาค</p>
    </button>
    <project-card />
  </div>
</template>

<script>
import ProjectCard from "./ProjectCard.vue";
export default {
  components: {
    "project-card": ProjectCard,
  },
};
</script>
