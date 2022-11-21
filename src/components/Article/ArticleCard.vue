<template>
  <search class="mb-[60px]" v-if="hiddenProp" @update:modelValue="submitInputSearch"></search>
  <div v-for="articleProp in searchArticleList" :key="articleProp.articleUUID">
    <div class="container mx-auto">
      <div @click="routeToArticleDetail(articleProp.articleUUID)" class="flex gap-4 md:gap-[30px] lg:gap-14 rounded-xl cursor-pointer">
        <img v-if="articleProp.articlePicture != null" class="w-2/5 lg:w-[25.5%] aspect-square md:aspect-[4/3] object-cover rounded-xl" :src="getImage(articleProp.articlePicture)" />
        <img v-else-if="articleProp.articlePicture === null" class="w-2/5 lg:w-[25.5%] aspect-square md:aspect-[4/3] object-cover rounded-xl" src="@/assets/blankimg.png" />
        <div class="space-y-5 pt-1">
          <div class="lg:flex lg:gap-3 space-y-2 lg:space-y-0 lg:space-x-20">
            <!-- <div class="w-[6px] md:w-3 h-[70px] md:h-20 bg-namjaiyellow"></div> -->
            <h2 class="w-[150px] overflow-hidden text-ellipsis h-[55px] md:w-[300px] lg:w-[400px] pl-3 border-l-4 border-namjaiyellow text-[12px] md:text-[18px] lg:text-xl">{{ articleProp.articleHeader }}</h2>
            <p class="lg:text-sm md:text-sm text-[9px] text-gray-500 justify-end">{{ articleProp.createDate }}</p>
          </div>
          <div class="flex gap-3">
            <p class="md:text-base text-[9px] text-gray-600 uppercase">{{ articleProp.author }}</p>
          </div>
          <p class="hidden md:block h-24 md:w-11/12 lg:w-8/12 overflow-hidden">{{ articleProp.articleBody }}</p>
        </div>
      </div>
    </div>
  </div>
  <div class="py-[60px] flex justify-center">
    <button @click="loadMore()" v-if="currentPage * maxPerPage < articleProps.length && searchText === ``" class="bg-transparent hover:bg-namjaigreen text-namjaigreen font-medium hover:text-white py-2 px-10 border-2 border-namjaigreen hover:border-transparent rounded">เพิ่มเติม</button>
  </div>
</template>

<script>
import { ref, computed } from "@vue/runtime-core";
import { useRouter } from "vue-router";
import Search from "../Verification/Search.vue";

export default {
  components: { Search },
  props: {
    articleProps: {
      type: Array,
    },
    hiddenProp: {
      type: Boolean,
    }
  },
  setup(props) {
    const router = useRouter();
    const routeToArticleDetail = (uuid) => {
      router.push(`/article/${uuid}`);
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
    const searchArticleList = computed(() => {
      isFound.value = false;
      if (searchText.value === "") {
        return props.articleProps.slice(0, currentPage.value * maxPerPage.value);
      } else {
        let foundArticleList = props.articleProps.filter((f) => f.articleHeader.toLowerCase().includes(searchText.value.toLowerCase()));
        if (foundArticleList === "") {
          isFound.value = true;
          return;
        }
        return foundArticleList;
      }
    });

    return { routeToArticleDetail, getImage, currentPage, maxPerPage, loadMore, submitInputSearch, searchText, searchArticleList };
  },
};
</script>
