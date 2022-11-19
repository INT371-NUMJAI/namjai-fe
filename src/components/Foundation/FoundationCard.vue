<template>
  <div>
    <Search @update:modelValue="submitInputSearch" />
    <div class="mt-[60px] w-full lg:grid lg:grid-cols-3 lg:gap-[30px] md:gap-[30px] md:grid md:grid-cols-2 space-y-[30px] lg:space-y-0 md:space-y-0">
      <div v-for="foundationCardProp in searchFoundationList" :key="foundationCardProp.fdnUUID" class="container bg-white rounded-md md:rounded-2xl lg:rounded-2xl max-w-lg md:max-w-md flex md:flex-col lg:flex-col drop-shadow-md hover:shadow-lg">
        <div class="w-1/2 h-[180px] md:h-[200px] lg:h-[220px] md:w-full">
          <img v-if="foundationCardProp.profilePath != null" class="w-full h-full rounded-l-md md:rounded-bl-none md:rounded-t-2xl lg:rounded-bl-none lg:rounded-t-2xl transition-all duration-500 ease-in-out transform bg-center object-cover" :src="getImage(foundationCardProp.profilePath)" />
          <img v-else-if="foundationCardProp.profilePath === null || foundationCardProp.profilePath === undefined" class="w-full h-full rounded-l-md md:rounded-bl-none md:rounded-t-2xl lg:rounded-bl-none lg:rounded-t-2xl transition-all duration-500 ease-in-out transform bg-center object-cover" src="@/assets/image-unavailable.jpeg" />
        </div>
        <div class="w-1/2 md:w-full flex flex-col justify-between p-4 space-y-2 lg:space-y-5 leading-normal">
          <h2 class="text-namjaidarkgray break-words">{{ foundationCardProp.fdnName }}</h2>
          <div class="">
            <button @click="routeToFoundationProfile(foundationCardProp.fdnEmail)" class="md:w-full px-2 py-2 bg-namjaigreen rounded-lg text-[12px] lg:text-sm text-white">ดูรายละเอียด</button>
          </div>
        </div>
      </div>
    </div>
    <div class="py-[60px] flex justify-center">
      <button @click="loadMore()" v-if="currentPage * maxPerPage < foundationCardProps.length && searchText === ``" class="bg-transparent hover:bg-namjaigreen text-namjaigreen font-medium hover:text-white py-2 px-10 border-2 border-namjaigreen hover:border-transparent rounded">เพิ่มเติม</button>
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
        router.push({ name: "not-found" });
      });
    };

    const getImage = (imagePath) => {
      return `${import.meta.env.VITE_APP_BACKEND_URL}/util/img?path=${imagePath}`;
    };

    const searchText = ref("");

    const submitInputSearch = (value) => {
      searchText.value = value;
    };

    const currentPage = ref(1);
    const maxPerPage = ref(6);

    const loadMore = () => {
      currentPage.value += 1;
    };

    const isFound = ref(false);
    const searchFoundationList = computed(() => {
      isFound.value = false;
      if (searchText.value === "") {
        return props.foundationCardProps.slice(0, currentPage.value * maxPerPage.value);
      } else {
        let foundFoundationList = props.foundationCardProps.filter((f) => f.fdnName.toLowerCase().includes(searchText.value.toLowerCase()));
        if (foundFoundationList === "") {
          isFound.value = true;
          return;
        }
        return foundFoundationList;
      }
    });

    return { favHeart, routeToFoundationProfile, getImage, submitInputSearch, searchFoundationList, currentPage, maxPerPage, searchText, loadMore };
  },
};
</script>
