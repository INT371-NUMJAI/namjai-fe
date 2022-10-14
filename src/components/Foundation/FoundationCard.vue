<template>
    <div v-for="(foundationCardProp, index) in foundationCardProps" :key="index" class="container bg-white rounded-md md:rounded-2xl lg:rounded-2xl flex md:flex-col lg:flex-col drop-shadow-md hover:shadow-lg">
      <div class="w-1/2 h-[180px] md:w-full lg:w-full">
        <img class="w-full h-full rounded-l-md md:rounded-bl-none md:rounded-t-2xl lg:rounded-bl-none lg:rounded-t-2xl transition-all duration-500 ease-in-out transform bg-center object-cover" :src="foundationCardProp.profilePath" />
      </div>
      {{ $route.params.id }}
      <div class="w-1/2 md:w-full lg:w-full py-3 px-5 lg:px-4 grid grid-rows-4 md:grid-rows-none lg:grid-rows-none md:space-y-2 lg:space-y-1">
        <h2 class="row-span-4 pt-2 text-sm lg:text-base md:h-10 lg:h-14 lg:overflow-hidden">{{ foundationCardProp.fdnName }}</h2>
        <div class="flex justify-end lg:flex-none">
          <button @click="routeToFoundationProfile(foundationCardProp.fdnUUID)" class="lg:w-full px-2 py-2 bg-namjaigreen rounded-lg text-[12px]  lg:text-sm text-white">ดูรายละเอียด</button>
        </div>
      </div>
    </div>
    </template>

<script>
import { ref } from "vue";
import { useRouter } from 'vue-router';

export default {
  props: {
    foundationCardProps: {
      type: Array,
    },
  },
  setup() {
    const favHeart = ref(false);

    const router = useRouter();
    const routeToFoundationProfile = (id) => {
      router.push(`/profile/${id}`)
    }

    return { favHeart, routeToFoundationProfile };
  },
};
</script>
