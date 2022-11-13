<template>
  <div v-for="articleProp in articleProps" :key="articleProp.articleUUID">
    <div class="container mx-auto">
      <div @click="routeToArticleDetail(articleProp.articleUUID)" class="flex gap-4 md:gap-[30px] lg:gap-14 cursor-pointer">
        <img v-if="articleProp.articlePicture != null" class="w-1/3 lg:w-[25.5%] aspect-square md:aspect-[4/3] object-cover rounded-xl" :src="getImage(articleProp.articlePicture)" />
        <img v-else-if="articleProp.articlePicture === null" class="w-1/3 lg:w-[25.5%] aspect-square md:aspect-[4/3] object-cover rounded-xl" src="@/assets/blankimg.png" />
        <div class="space-y-5">
          <div class="flex gap-3">
            <div class="w-[6px] md:w-3 h-[70px] md:h-20 bg-namjaiyellow"></div>
            <h2 class="w-[100px] md:w-[300px] lg:w-[400px] border-namjaiyellow text-[12px] md:text-[18px] lg:text-xl">{{ articleProp.articleHeader }}</h2>
            <p class="lg:text-sm md:text-sm text-[9px]  text-gray-500 justify-end">{{ articleProp.createDate }}</p>
          </div>
          <p class="hidden md:block h-24 md:w-11/12 lg:w-8/12 overflow-hidden">{{ articleProp.articleBody }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useRouter } from 'vue-router'

export default {
  props: {
    articleProps: {
      type: Array,
    }
  },
  setup() {
    const router = useRouter();
    const routeToArticleDetail = (uuid) => {
      router.push(`/article/${uuid}`);
    };

    const getImage = (imagePath) => {
      		return `${import.meta.env.VITE_APP_BACKEND_URL}/util/img?path=${imagePath}`
    }

    return { routeToArticleDetail, getImage }
  },
}
</script>

