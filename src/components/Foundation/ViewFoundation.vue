<template>
  <div class="mx-[30px] md:mx-24 lg:mx-44">
    <div class="my-10">
      <div class="my-10">
        <h1 class="text-2xl md:text-4xl lg:text-5xl lg:mt-[120px] font-semibold">มูลนิธิ</h1>
        <div class="w-16 border-4 border-t border-namjaired md:mt-4 lg:mt-[20px] mt-[10px]"></div>
      </div>
      <div class="space-y-5 lg:space-y-10 mb-5 lg:mb-10">
        <h1 class="lg:text-xl text-namjaidarkgray">คุณอาจถูกใจ</h1>
        <div class="w-full flex overflow-x-auto"></div>
      </div>

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

        <div name="search" class="flex justify-center text-gray-600 items-center">
          <input class="w-full md:w-1/2 lg:w-1/3 h-10 px-5 rounded-lg text-sm drop-shadow-md placeholder:italic placeholder:text-slate-400 bg-white ring-1 ring-slate-300 hover:ring-2 hover:ring-emerald-500 focus:outline-none focus:border-namjaigreen focus:ring-namjaigreen focus:ring-2" type="search" name="search" placeholder="ใส่ชื่อโครงการเพื่อค้นหา" />
          <div class="absolute inset-y-0 left-3 my-3">
            <svg class="w-3.5 h-3.5 fill-current text-namjaidarkgray" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M7.16287 6.44937L9.85287 9.13937C9.94742 9.23399 10.0005 9.36229 10.0005 9.49605C10.0004 9.62981 9.94724 9.75807 9.85262 9.85262C9.75801 9.94717 9.62971 10.0003 9.49594 10.0002C9.36218 10.0002 9.23392 9.94699 9.13937 9.85237L6.44937 7.16237C5.64523 7.78521 4.63401 8.07831 3.62144 7.98205C2.60886 7.88578 1.67099 7.40739 0.998613 6.64418C0.326238 5.88097 -0.0301325 4.89028 0.00199816 3.87364C0.0341289 2.85701 0.452348 1.8908 1.17157 1.17157C1.8908 0.452347 2.85701 0.0341289 3.87365 0.00199816C4.89028 -0.0301325 5.88097 0.326238 6.64418 0.998613C7.40739 1.67099 7.88578 2.60886 7.98205 3.62144C8.07831 4.63401 7.78521 5.64523 7.16237 6.44937H7.16287ZM4.00037 6.99987C4.79602 6.99987 5.55908 6.6838 6.12169 6.12119C6.6843 5.55858 7.00037 4.79552 7.00037 3.99987C7.00037 3.20422 6.6843 2.44116 6.12169 1.87855C5.55908 1.31594 4.79602 0.999872 4.00037 0.999872C3.20472 0.999872 2.44166 1.31594 1.87905 1.87855C1.31644 2.44116 1.00037 3.20422 1.00037 3.99987C1.00037 4.79552 1.31644 5.55858 1.87905 6.12119C2.44166 6.6838 3.20472 6.99987 4.00037 6.99987V6.99987Z"
              />
            </svg>
          </div>
        </div>
      </div>

      <div class="w-full mt-[40px] lg:mt-[60px] lg:grid lg:grid-cols-3 lg:gap-[30px] md:gap-[30px] gap-6 md:grid md:grid-cols-2 space-y-[30px] lg:space-y-0 md:space-y-0">
        <foundation-card :foundationCardProps="fdnList"></foundation-card>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import foundationService from "./foundation-service";
import FoundationCard from "./FoundationCard.vue";

export default {
  components: {
    FoundationCard,
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
