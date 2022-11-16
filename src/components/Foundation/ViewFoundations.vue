<template>
  <div class="mx-[30px] md:mx-24 lg:mx-44">
    <div class="max-w-6xl mx-auto my-10">
      <h1 class="mt-10 text-2xl md:text-4xl lg:text-5xl lg:mt-[120px] font-semibold">มูลนิธิ</h1>
      <div class="w-16 border-4 border-t border-namjaired md:mt-4 lg:mt-[20px] mt-[10px]"></div>
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
