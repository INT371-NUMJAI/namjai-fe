<template>
  <div class="mx-[30px] md:mx-24 lg:mx-44">
    <div class="my-10">
      <h1 class="mt-10 text-2xl lg:text-[48px] lg:mt-[120px] font-semibold">
        มูลนิธิ
      </h1>
      <div
        class="w-16 border-4 border-t border-namjaired md:mt-4 lg:mt-[20px] mt-[10px]"
      ></div>
      <div>

      </div>
      <div class="mt-[40px] lg:mt-[60px] lg:grid lg:grid-cols-3 lg:gap-[30px] md:grid md:grid-cols-2 space-y-[30px]">
      <foundation-card></foundation-card>
      <foundation-card></foundation-card>
      <foundation-card></foundation-card>
    </div>
    </div>
  </div>
</template>

<script>
import FoundationCard from "./FoundationCard.vue";


export default {
  components: {
    FoundationCard,
  },
};
</script>
