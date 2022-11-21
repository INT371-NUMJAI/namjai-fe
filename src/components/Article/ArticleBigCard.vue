<template>
  <div class="">
    <!-- {{ article }} -->
    <div class="container mx-auto md:overflow-x-scroll md:flex md:overflow-hidden lg:grid-cols-3 md:gap-5 lg:gap-[30px]">
      <!-- <div name="card1" class="max-w-4xl rounded overflow-hidden lg:col-span-2 cursor-pointer">
        <img v-if="article.articlePicture != null" class="w-full h-[205px] md:h-[230px] lg:h-[442px] object-cover rounded-xl" :src="getImage(article[0].articlePicture)" />
        <img v-else-if="article[0].articlePicture === null" class="w-full h-[205px] md:h-[230px] lg:h-[442px] object-cover rounded-xl" src="@/assets/blankimg.png" />
        <div class="py-5 lg:pt-8 space-y-3">
          <div class="flex items-center space-x-3 text-[12px] text-zinc-500">
            <span>{{ article[0].author }}</span>
            <hr class="w-2 h-0.5 bg-zinc-500" />
            <span>{{ article[0].createDate }}</span>
          </div>
          <h2 class="h-[70px] md:h-[85px] overflow-hidden md:text-lg lg:text-2xl lg:leading-normal">{{ article[0].articleHeader }}</h2>
        </div>
      </div> -->
      <div v-for="a in article" :key="a.articleUUID">
        <!-- <div class="md:overflow-x-scroll md:flex"> -->
        <div @click="routeToArticleDetail(a.articleUUID)" name="card2" class="max-w-xl rounded overflow-hidden cursor-pointer">
          <img v-if="a.articlePicture != null" class="w-full h-[205px] md:h-[230px] lg:h-[200px] object-cover rounded-xl" :src="getImage(a.articlePicture)" />
        <img v-else-if="a.articlePicture === null" class="w-full h-[205px] md:h-[230px] lg:h-[200px] object-cover rounded-xl" src="@/assets/blankimg.png" />
          <div class="py-5 space-y-3 lg:space-y-1">
            <div class="flex items-center space-x-3 text-xs text-zinc-500">
              <span>{{  a.author }}</span>
              <hr class="w-2 h-0.5 bg-zinc-500" />
              <span>{{ a.createDate }}</span>
            </div>
            <h2 class="h-[70px] md:h-[85px] lg:h-[55px] md:text-lg overflow-hidden">{{ a.articleHeader }}</h2>
          </div>
        <!-- </div> -->
        </div>
        <!-- <div name="card3" class="hidden lg:block max-w-xl rounded overflow-hidden cursor-pointer">
          <img v-if="article[2].articlePicture != null" class="w-full h-[205px] md:h-[230px] lg:h-[200px] object-cover rounded-xl" :src="getImage(article[2].articlePicture)" />
        <img v-else-if="article[2].articlePicture === null" class="w-full h-[205px] md:h-[230px] lg:h-[200px] object-cover rounded-xl" src="@/assets/blankimg.png" />
          <div class="py-5 space-y-3 lg:space-y-1">
            <div class="flex items-center space-x-3 text-xs text-zinc-500">
              <span>{{  article[2].author }}</span>
              <hr class="w-2 h-0.5 bg-zinc-500" />
              <span>{{ article[2].createDate }}</span>
            </div>
            <h2 class="h-[70px] md:h-[85px] lg:h-[55px] md:text-lg overflow-hidden">{{ article[2].articleHeader}} </h2>
          </div>
        </div> -->
      </div>
    </div>
  </div>
</template>
<script>
import { useRouter } from 'vue-router'

export default {
  props: {
    article: {
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

    return { getImage, routeToArticleDetail };
  },
}
</script>