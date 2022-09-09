<template>
  <div class="mx-[30px] md:mx-24 lg:mx-44">
    <div class="my-10">
      <h1 class="mt-10 text-2xl lg:text-[48px] lg:mt-[120px] font-semibold">
        โครงการ
      </h1>
      <div
        class="w-16 border-4 border-t border-namjaired md:mt-4 lg:mt-4"
      ></div>
    </div>
    <project-card />
    <div class="flex justify-center py-[60px]">
      <button
        class="bg-transparent hover:bg-namjaigreen text-namjaigreen font-medium hover:text-white py-2 px-10 border-2 border-namjaigreen hover:border-transparent rounded"
      >
        เพิ่มเติม
      </button>
    </div>
  </div>
</template>

<script>
import ProjectCard from "./ProjectCard.vue";

export default {
  components: {
    ProjectCard,
  },
};
</script>
