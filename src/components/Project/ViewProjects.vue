<template>
  <div class="mx-[30px] md:mx-24 lg:mx-44 mt-[120px] lg:mt-0">
  <div class="container max-w-6xl mx-auto">
    <div class="my-10 cursor-pointer" @click="routeToProjects">
      <h1 class="mt-10 text-2xl md:text-4xl lg:text-5xl lg:mt-[120px] font-semibold">โครงการ</h1>
      <div class="w-16 border-4 border-t border-namjaired md:mt-4 lg:mt-4"></div>
    </div>
    <div class="w-full flex overflow-x-auto space-x-3 cursor-pointer">
      <div @click="routeToCategories('total')">
        <div :class="{ 'bg-[#00715D] text-white': route.fullPath.includes('total') }" class="bg-white hover:bg-namjaigreen hover:text-white w-[100px] h-[155px] py-[10px] rounded-lg mb-[60px] drop-shadow-md hover:shadow-md">
          <div class="mx-auto rounded-full overflow-hidden w-[80px] bg-namjaibrown">
            <!-- <img :src="`src/assets/${target.icon}`" /> -->
            <img src="@/assets/all.svg" />
          </div>
          <h1 class="text-center pt-[10px]">ทั้งหมด</h1>
        </div>
      </div>
      <div @click="routeToCategories('medical')">
        <div :class="{ 'bg-[#00715D] text-white': route.fullPath.includes('medical') }" class="bg-white hover:bg-namjaigreen hover:text-white w-[100px] h-[155px] py-[10px] rounded-lg mb-[60px] drop-shadow-md hover:shadow-md">
          <div class="mx-auto rounded-full overflow-hidden w-[80px] bg-namjaibrown">
            <!-- <img :src="`src/assets/${target.icon}`" /> -->
            <img src="@/assets/medical.svg" />
          </div>
          <h1 class="text-center pt-[10px]">การแพทย์</h1>
        </div>
      </div>
      <div @click="routeToCategories('education')">
        <div :class="{ 'bg-[#00715D] text-white': route.fullPath.includes('education') }" class="bg-white hover:bg-namjaigreen hover:text-white w-[100px] h-[155px] py-[10px] rounded-lg mb-[60px] drop-shadow-md hover:shadow-md">
          <div class="mx-auto rounded-full overflow-hidden w-[80px] bg-namjaibrown">
            <!-- <img :src="`src/assets/${target.icon}`" /> -->
            <img src="@/assets/education.svg" />
          </div>
          <h1 class="text-center pt-[10px]">การศึกษา</h1>
        </div>
      </div>
      <div @click="routeToCategories('children')">
        <div :class="{ 'bg-[#00715D] text-white': route.fullPath.includes('children') }" class="bg-white hover:text-white hover:bg-namjaigreen w-[100px] h-[155px] py-[10px] rounded-lg mb-[60px] drop-shadow-md hover:shadow-md">
          <div class="mx-auto rounded-full overflow-hidden w-[80px] bg-namjaibrown">
            <!-- <img :src="`src/assets/${target.icon}`" /> -->
            <img src="@/assets/children.svg" />
          </div>
          <h1 class="text-center pt-[10px]">เด็กและสตรี</h1>
        </div>
      </div>
      <div @click="routeToCategories('disaster')">
        <div :class="{ 'bg-[#00715D] text-white': route.fullPath.includes('disaster') }" class="bg-white hover:text-white hover:bg-namjaigreen w-[100px] h-[155px] py-[10px] rounded-lg mb-[60px] drop-shadow-md hover:shadow-md">
          <div class="mx-auto rounded-full overflow-hidden w-[80px] bg-namjaibrown">
            <!-- <img :src="`src/assets/${target.icon}`" /> -->
            <img src="@/assets/disaster.svg" />
          </div>
          <h1 class="text-center pt-[10px]">บรรเทาสาธารณะภัย</h1>
        </div>
      </div>
      <div @click="routeToCategories('handicapped')">
        <div :class="{ 'bg-[#00715D] text-white': route.fullPath.includes('handicapped') }" class="bg-white hover:text-white hover:bg-namjaigreen w-[100px] h-[155px] py-[10px] rounded-lg mb-[60px] drop-shadow-md hover:shadow-md">
          <div class="mx-auto rounded-full overflow-hidden w-[80px] bg-namjaibrown">
            <!-- <img :src="`src/assets/${target.icon}`" /> -->
            <img src="@/assets/handicapped.svg" />
          </div>
          <h1 class="text-center pt-[10px]">ผู้พิการ</h1>
        </div>
      </div>
      <div @click="routeToCategories('elder')">
        <div :class="{ 'bg-[#00715D] text-white': route.fullPath.includes('elder') }" class="bg-white hover:text-white hover:bg-namjaigreen w-[100px] h-[155px] py-[10px] rounded-lg mb-[60px] drop-shadow-md hover:shadow-md">
          <div class="mx-auto rounded-full overflow-hidden w-[80px] bg-namjaibrown">
            <!-- <img :src="`src/assets/${target.icon}`" /> -->
            <img src="@/assets/elder.svg" />
          </div>
          <h1 class="text-center pt-[10px]">ผู้สูงอายุ</h1>
        </div>
      </div>
      <div @click="routeToCategories('valley')">
        <div :class="{ 'bg-[#00715D] text-white': route.fullPath === 'valley' }" class="bg-white hover:text-white hover:bg-namjaigreen w-[100px] h-[155px] py-[10px] rounded-lg mb-[60px] drop-shadow-md hover:shadow-md">
          <div class="mx-auto rounded-full overflow-hidden w-[80px] bg-namjaibrown">
            <!-- <img :src="`src/assets/${target.icon}`" /> -->
            <img src="@/assets/valley.svg" />
          </div>
          <h1 class="text-center pt-[10px]">พัฒนาชุมชน</h1>
        </div>
      </div>
      <div @click="routeToCategories('art')">
        <div :class="{ 'bg-[#00715D] text-white': route.fullPath.includes('art') }" class="bg-white hover:text-white hover:bg-namjaigreen w-[100px] h-[155px] py-[10px] rounded-lg mb-[60px] drop-shadow-md hover:shadow-md">
          <div class="mx-auto rounded-full overflow-hidden w-[80px] bg-namjaibrown">
            <!-- <img :src="`src/assets/${target.icon}`" /> -->
            <img src="@/assets/art.svg" />
          </div>
          <h1 class="text-center pt-[10px]">ศิลปะและวัฒนธรรม</h1>
        </div>
      </div>
      <div @click="routeToCategories('animal')">
        <div :class="{ 'bg-[#00715D] text-white': route.fullPath.includes('animal') }" class="bg-white hover:text-white hover:bg-namjaigreen w-[100px] h-[155px] py-[10px] rounded-lg mb-[60px] drop-shadow-md hover:shadow-md">
          <div class="mx-auto rounded-full overflow-hidden w-[80px] bg-namjaibrown">
            <!-- <img :src="`src/assets/${target.icon}`" /> -->
            <img src="@/assets/animal.svg" />
          </div>
          <h1 class="text-center pt-[10px]">สัตว์</h1>
        </div>
      </div>
      <div @click="routeToCategories('environment')">
        <div :class="{ 'bg-[#00715D] text-white': route.fullPath.includes('environment') }" class="bg-white hover:text-white hover:bg-namjaigreen w-[100px] h-[155px] py-[10px] rounded-lg mb-[60px] drop-shadow-md hover:shadow-md">
          <div class="mx-auto rounded-full overflow-hidden w-[80px] bg-namjaibrown">
            <!-- <img :src="`src/assets/${target.icon}`" /> -->
            <img src="@/assets/environment.svg" />
          </div>
          <h1 class="text-center pt-[10px]">สิ่งแวดล้อม</h1>
        </div>
      </div>
      <div @click="routeToCategories('human')">
        <div :class="{ 'bg-[#00715D] text-white': route.fullPath.includes('human') }" class="bg-white hover:text-white hover:bg-namjaigreen w-[100px] h-[155px] py-[10px] rounded-lg mb-[60px] drop-shadow-md hover:shadow-md">
          <div class="mx-auto rounded-full overflow-hidden w-[80px] bg-namjaibrown">
            <!-- <img :src="`src/assets/${target.icon}`" /> -->
            <img src="@/assets/human.svg" />
          </div>
          <h1 class="text-center pt-[10px]">สิทธิมนุษยชน</h1>
        </div>
      </div>
    </div>
    <router-view :key="route.fullPath" />
  </div>
</div>
<foo-ter></foo-ter>
</template>

<script>
import ProjectCard from "./ProjectCard.vue";
import projectService from "./project-service";
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import Search from "../Verification/Search.vue";
import BaseFilter from "../_Bases/BaseFilter.vue";

export default {
  components: {
    ProjectCard,
    Search,
    BaseFilter,

  },
  setup() {
    document.title = "Namjai - projects";
    const route = useRoute();

    const fdnProjectList = ref([]);
    const fetchFdnProjectList = () => {
      projectService.getProjectListInShort().then((response) => {
        fdnProjectList.value = response.data;
      });
    };
    fetchFdnProjectList();

    const router = useRouter();
    const routeToCategories = (id) => {
      router.push(`/projects/catergories/${id}`);
    };

    const routeToProjects = () => {
      router.push(`/projects`);
    };

    return { fdnProjectList, route, routeToCategories, routeToProjects };
  },
};
</script>
<style scoped>
/* .namjai-active-link {
	color: white;
} */

::-webkit-scrollbar {
  display: none;
}
</style>
