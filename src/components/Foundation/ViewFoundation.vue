<template>
  <div class="mx-[30px] md:mx-24 lg:mx-44">
    <div class="container max-w-6xl mx-auto my-10">
      <div class="my-10">
        <h1 class="text-2xl md:text-4xl lg:text-5xl lg:mt-[120px] font-semibold">มูลนิธิ</h1>
        <div class="w-16 border-4 border-t border-namjaired md:mt-4 lg:mt-[20px] mt-[10px]"></div>
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
        </template>
      </BaseFilter>
      <div class="w-full lg:grid lg:grid-cols-3 lg:gap-[30px] md:gap-[30px] gap-6 md:grid md:grid-cols-2 space-y-[30px] lg:space-y-0 md:space-y-0">
        <foundation-card :foundationCardProps="fdnList"></foundation-card>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import foundationService from "./foundation-service";
import FoundationCard from "./FoundationCard.vue";
import Search from "../Verification/Search.vue";
import BaseFilter from "../_Bases/BaseFilter.vue";

export default {
  components: {
    FoundationCard,
    Search,
    BaseFilter,
  },
  setup() {
    const fdnList = ref([]);
    const fetchFdnList = () => {
      foundationService.getFoundationList().then((response) => {
        fdnList.value = response.data;
      });
    };
    fetchFdnList();

    return { fdnList };
  },
};
</script>
