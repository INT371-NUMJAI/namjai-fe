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
    <div class="flex overflow-x-auto space-x-4 ">
      <div
        v-for="targetCat in targetList"
        :key="targetCat.targetCategoriesID"
        class="bg-white hover:text-white hover:bg-namjaigreen h-[160px] py-[10px] px-[10px] mx-[5px] rounded-lg mb-[60px] drop-shadow-md hover:shadow-md grid grid-flow-row"
      >
        <div class="">
          <router-link
            :to="`/project/targetCategories/${targetCat.targetCategoriesID}`"
          >
            <div
              class="mx-auto rounded-full overflow-hidden w-[75px] bg-namjaibrown"
            >
              <img src="@/assets/peep-1.png" />
            </div>
            <div class="py-[10px]">
            <h1 class="text-center w-[90px]">
              {{ targetCat.targetCategoriesName }}
            </h1>
          </div>
          </router-link>
        </div>
      </div>
    </div>
    <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
      <project-card :projectCardProps="fdnProjectList" />
    </div>
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
import projectService from "./project-service";
import { ref } from "vue";

export default {
  components: {
    ProjectCard,
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
      },
      {
        targetCategoriesID: "2",
        targetCategoriesName: "การศึกษา",
      },
      {
        targetCategoriesID: "3",
        targetCategoriesName: "เด็กและสตรี",
      },
      {
        targetCategoriesID: "4",
        targetCategoriesName: "บรรเทาสาธารณะภัย",
      },
      {
        targetCategoriesID: "5",
        targetCategoriesName: "ผู้พิการ",
      },
      {
        targetCategoriesID: "6",
        targetCategoriesName: "ผู้สูงอายุ",
      },
      {
        targetCategoriesID: "7",
        targetCategoriesName: "พัฒนาชุมชน",
      },
      {
        targetCategoriesID: "8",
        targetCategoriesName: "ศิลปะและวัฒนธรรม",
      },
      {
        targetCategoriesID: "9",
        targetCategoriesName: "สัตว์",
      },
      {
        targetCategoriesID: "10",
        targetCategoriesName: "สิ่งแวดล้อม",
      },
      {
        targetCategoriesID: "11",
        targetCategoriesName: "สิทธิมนุษยชน",
      },
    ]);

    return { fdnProjectList, targetList };
  },
};
</script>

<style scoped>
  ::-webkit-scrollbar {
	display: none;
}
</style>
