<template>
  <div class="mx-[30px] md:mx-24 lg:mx-44">
    <div class="container max-w-6xl mx-auto ">
    <div class="my-10 cursor-pointer" @click="routeToProjects">
      <h1 class="mt-10 text-2xl lg:text-[48px] lg:mt-[120px] font-semibold">โครงการ</h1>
      <div class="w-16 border-4 border-t border-namjaired md:mt-4 lg:mt-4"></div>
    </div>
    <Search />
    <div class="my-[60px] space-y-10">
      <div name="category" class="w-full flex overflow-x-auto space-x-3 cursor-pointer">
        <div v-for="target in targetList" :key="target.targetCategoriesID">
          <div @click="routeToCategories(target.targetCategoriesID)" class="bg-white hover:text-white hover:bg-namjaigreen w-[100px] h-[155px] py-[10px] rounded-lg drop-shadow-md hover:shadow-md">
            <div class="mx-auto rounded-full overflow-hidden w-[80px] bg-namjaibrown">
              <!-- <img :src="`src/assets/${target.icon}`" /> -->
              <!-- <img src="@/assets/medical.svg" /> -->
            </div>
            <h1 class="text-center pt-[10px]">{{ target.targetCategoriesName }}</h1>
          </div>
        </div>
      </div>
    </div>
    <BaseFilter class="flex justify-end mb-2">
      <template #show><span>default</span></template>
      <template #choice>
        <li class="text-gray-700 block px-4 py-2 text-sm cursor-pointer hover:bg-gray-400" role="option">ทั้งหมด</li>
        <li class="text-gray-700 block px-4 py-2 text-sm cursor-pointer hover:bg-gray-400" role="option">เปิดอยู่</li>
        <li class="text-gray-700 block px-4 py-2 text-sm cursor-pointer hover:bg-gray-400" role="option">ปิดแล้ว</li>
      </template>
    </BaseFilter>
    <router-view :key="$route.path" />
    <!-- <router-view :key="$route.fullPath"></router-view> -->
  </div>
</div>
</template>

<script>
import ProjectCard from "./ProjectCard.vue";
import projectService from "./project-service";
import { ref } from "vue";
import { useRouter } from "vue-router";
import Search from "../Verification/Search.vue";
import BaseFilter from "../_Bases/BaseFilter.vue";

export default {
  components: {
    ProjectCard,
    Search,
    BaseFilter,
  },
  setup() {
    const fdnProjectList = ref([]);
    const fetchFdnProjectList = () => {
      projectService.getProjectListInShort().then((response) => {
        fdnProjectList.value = response.data;
      });
    };
    fetchFdnProjectList();

    const targetList = ref([
      {
        targetCategoriesID: "1",
        targetCategoriesName: "การแพทย์",
        icon: "medical.svg",
      },
      {
        targetCategoriesID: "2",
        targetCategoriesName: "การศึกษา",
        icon: "education.svg",
      },
      {
        targetCategoriesID: "3",
        targetCategoriesName: "เด็กและสตรี",
        icon: "children.svg",
      },
      {
        targetCategoriesID: "4",
        targetCategoriesName: "บรรเทาสาธารณะภัย",
        icon: "disaster.svg",
      },
      {
        targetCategoriesID: "5",
        targetCategoriesName: "ผู้พิการ",
        icon: "handicapped.svg",
      },
      {
        targetCategoriesID: "6",
        targetCategoriesName: "ผู้สูงอายุ",
        icon: "elder.svg",
      },
      {
        targetCategoriesID: "7",
        targetCategoriesName: "พัฒนาชุมชน",
        icon: "valley.svg",
      },
      {
        targetCategoriesID: "8",
        targetCategoriesName: "ศิลปะและวัฒนธรรม",
        icon: "art.svg",
      },
      {
        targetCategoriesID: "9",
        targetCategoriesName: "สัตว์",
        icon: "animal.svg",
      },
      {
        targetCategoriesID: "10",
        targetCategoriesName: "สิ่งแวดล้อม",
        icon: "environment.svg",
      },
      {
        targetCategoriesID: "11",
        targetCategoriesName: "สิทธิมนุษยชน",
        icon: "human.svg",
      },
    ]);

    const router = useRouter();
    const routeToCategories = (id) => {
      router.push(`/projects/catergories/${id}`);
    };

    const routeToProjects = () => {
      router.push(`/projects`);
    };

    return { fdnProjectList, targetList, routeToCategories, routeToProjects };
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
