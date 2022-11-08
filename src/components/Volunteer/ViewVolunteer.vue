<template>
  <div class="mx-[30px] md:mx-24 lg:mx-44">
    <div class="container max-w-6xl mx-auto mt-10">
      <h1 class="mt-10 text-2xl lg:text-[48px] lg:mt-[120px] font-semibold">จิตอาสา</h1>
      <div class="w-16 border-4 border-t border-namjaired md:mt-4 lg:mt-4"></div>
    </div>
    <!-- <div class="space-y-5 lg:space-y-10 mb-5 lg:mb-10">
      <h1 class="lg:text-xl text-namjaidarkgray">คุณอาจถูกใจ</h1>
      <div class="w-full flex overflow-x-auto"></div>
    </div> -->
    <div class="my-10">
      <div name="category" class="w-full flex overflow-x-auto space-x-3 cursor-pointer">
        <div v-for="target in targetList" :key="target.targetCategoriesID">
          <div @click="routeToCategories(target.targetCategoriesID)" class="bg-white hover:text-white hover:bg-namjaigreen w-[100px] h-[155px] py-[10px] rounded-lg drop-shadow-md hover:shadow-md">
            <div class="mx-auto rounded-full overflow-hidden w-[80px] bg-namjaibrown"></div>
            <h1 class="text-center pt-[10px]">{{ target.targetCategoriesName }}</h1>
          </div>
        </div>
      </div>
      <Search />
    </div>
    <BaseFilter class="flex justify-end mb-2">
      <template #show><span>default</span></template>
      <template #choice>
        <li class="text-gray-700 block px-4 py-2 text-sm cursor-pointer hover:bg-gray-400" role="option">ทั้งหมด</li>
        <li class="text-gray-700 block px-4 py-2 text-sm cursor-pointer hover:bg-gray-400" role="option">เปิดอยู่</li>
        <li class="text-gray-700 block px-4 py-2 text-sm cursor-pointer hover:bg-gray-400" role="option">ปิดแล้ว</li>
      </template>
    </BaseFilter>
    <!-- <router-link to="/volunteerdetail"> -->
    <div class="lg:grid lg:grid-cols-3 md:grid md:grid-cols-2 grid grid-cols-1 gap-5 md:gap-6">
      <volunteer-activity-card :volunteerProps="volunteerShortList" />
    </div>
    <!-- </router-link> -->

    <div class="flex justify-center py-[60px]">
      <button class="bg-transparent hover:bg-namjaigreen text-namjaigreen font-medium hover:text-white py-2 px-10 border-2 border-namjaigreen hover:border-transparent rounded">เพิ่มเติม</button>
    </div>
  </div>
</template>

<script>
import VolunteerActivityCard from "./VolunteerActivityCard.vue";
import useVolunteer from "./useVolunteer";
import Search from "../Verification/Search.vue";
import BaseFilter from "../_Bases/BaseFilter.vue";

export default {
  components: {
    "volunteer-activity-card": VolunteerActivityCard,
    Search,
    BaseFilter,
  },
  setup() {
    const { volunteerShortList, getVolunteerShortList } = useVolunteer();

    getVolunteerShortList();

    return { volunteerShortList };
  },
};
</script>
