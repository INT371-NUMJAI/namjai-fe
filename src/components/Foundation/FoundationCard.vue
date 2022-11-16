<template>
  <Search @update:modelValue="submitInputSearch" />
  <div class="mt-[60px] w-full lg:grid lg:grid-cols-3 lg:gap-[30px] md:gap-[30px] gap-6 md:grid md:grid-cols-2 space-y-[30px] lg:space-y-0 md:space-y-0">
    <div v-for="foundationCardProp in searchFoundationList" :key="foundationCardProp.fdnUUID" class="container bg-white rounded-md md:rounded-2xl lg:rounded-2xl flex md:flex-col lg:flex-col drop-shadow-md hover:shadow-lg mx-[30px]">
      <div class="w-1/2 h-[180px] md:w-full lg:w-full">
        <img v-if="foundationCardProp.profilePath != null" class="w-full h-full rounded-l-md md:rounded-bl-none md:rounded-t-2xl lg:rounded-bl-none lg:rounded-t-2xl transition-all duration-500 ease-in-out transform bg-center object-cover" :src="getImage(foundationCardProp.profilePath)" />
        <img v-else-if="foundationCardProp.profilePath === null || foundationCardProp.profilePath === undefined" class="w-full h-full rounded-l-md md:rounded-bl-none md:rounded-t-2xl lg:rounded-bl-none lg:rounded-t-2xl transition-all duration-500 ease-in-out transform bg-center object-cover" src="@/assets/image-unavailable.jpeg" />
      </div>
      <div class="w-1/2 md:w-full lg:w-full py-3 px-5 lg:px-4 grid grid-rows-4 md:grid-rows-none lg:grid-rows-none md:space-y-2 lg:space-y-1">
        <h2 class="row-span-4 pt-2 text-sm lg:text-base md:h-10 lg:h-14 lg:overflow-hidden">{{ foundationCardProp.fdnName }}</h2>
        <div class="flex justify-end lg:flex-none">
          <button @click="routeToFoundationProfile(foundationCardProp.fdnEmail)" class="lg:w-full px-2 py-2 bg-namjaigreen rounded-lg text-[12px] lg:text-sm text-white">ดูรายละเอียด</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, ref } from "vue";
import { useRouter } from "vue-router";
import Search from "../Verification/Search.vue";

export default {
  components: {
    Search,
  },
  props: {
    foundationCardProps: {
      type: Array,
    },
  },
  setup(props) {
    const favHeart = ref(false);

    const router = useRouter();
    const routeToFoundationProfile = (id) => {
      router.push(`/profile/${id}`).catch(() => {
        router.push({name: 'not-found'})
      })
    };

    const getImage = (imagePath) => {
      return `${import.meta.env.VITE_APP_BACKEND_URL}/util/img?path=${imagePath}`;
    };

    const searchText = ref("");

    const submitInputSearch = (value) => {
      searchText.value = value;
    };

    const isFound = ref(false);
    const searchFoundationList = computed(() => {
      isFound.value = false;
      if (searchText.value === "") {
        return props.foundationCardProps;
      } else {
        let foundFoundationList = props.foundationCardProps.filter((f) => f.fdnName.toLowerCase().includes(searchText.value.toLowerCase()));
        if (foundFoundationList === "") {
          isFound.value = true;
          return;
        }
        return foundFoundationList;
      }
    });

    return { favHeart, routeToFoundationProfile, getImage, submitInputSearch, searchFoundationList, searchText };
  },
};
</script>
