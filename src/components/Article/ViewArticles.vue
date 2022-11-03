<template>
  <div class="mx-[30px] md:mx-10 lg:mx-44">
    <div class="comntainer w-full mx-auto">
      <div class="my-10 container mx-auto">
        <h1 class="mt-10 text-2xl lg:text-[48px] lg:mt-[120px]">กระดานข่าว</h1>
        <div class="w-16 border-4 border-t border-namjaired md:mt-4 lg:mt-4"></div>
      </div>
      <div class="hidden lg:block lg:max-w-7xl mx-auto">
        <img class="lg:w-full" src="@/assets/banner.png" />
      </div>
      <article-big-card class="lg:my-10" />
      <div class="container mx-auto my-5">
        <h1 class="text-lg lg:text-[30px]">ข่าวอื่นๆ</h1>
        <div class="mt-5 lg:mt-10">
          <article-card />
        </div>
      </div>
      <div class="flex justify-center py-[60px]">
        <button class="bg-transparent hover:bg-namjaigreen text-namjaigreen font-medium hover:text-white py-2 px-10 border-2 border-namjaigreen hover:border-transparent rounded">เพิ่มเติม</button>
      </div>
    </div>
  </div>
</template>

<script>
import ArticleBigCard from "./ArticleBigCard.vue";
import ArticleCard from "./ArticleCard.vue";

export default {
  components: {
    "article-big-card": ArticleBigCard,
    "article-card": ArticleCard,
  },
};
</script>
