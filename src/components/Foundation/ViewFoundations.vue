<template>
  <div class="mx-[30px] md:mx-24 lg:mx-44 mt-[120px] lg:mt-0">
    <div class="container max-w-6xl mx-auto my-10">
        <h1 class="text-2xl md:text-4xl lg:text-5xl lg:mt-[120px] font-semibold">มูลนิธิ</h1>
        <div class="w-16 border-4 border-t border-namjaired md:mt-4 lg:mt-[20px] mt-[10px] mb-[30px]"></div>
        <foundation-card :foundationCardProps="fdnList"></foundation-card>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import foundationService from "./foundation-service";
import FoundationCard from "./FoundationCard.vue";
import BaseFilter from "../_Bases/BaseFilter.vue";
import { useRouter } from 'vue-router';

export default {
  components: {
    FoundationCard,
    BaseFilter,
  },
  setup() {
    document.title = "Namjai - Foundations";
    const router = useRouter();

    const fdnList = ref([]);
    const fetchFdnList = () => {
      foundationService.getFoundationList().then((response) => {
        fdnList.value = response.data;
      })
    };
    fetchFdnList();

    return {  fdnList };
  },
};
</script>
