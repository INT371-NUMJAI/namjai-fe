<template>
  <div class="bg-white bg-opacity-90 pt-10 lg:pt-1">
    <div class="mx-[30px] md:mx-10 lg:mx-44">
      <div class="container w-full mx-auto">
        <div class="mb-10 container mx-auto">
          <h1 class=" text-2xl lg:text-[48px] lg:mt-[120px]">กระดานข่าว</h1>
          <div class="w-16 border-4 border-t border-namjaired md:mt-4 lg:mt-4"></div>
        </div>
        <div class="hidden lg:block lg:max-w-7xl mx-auto">
          <img class="lg:w-full" src="@/assets/banner.png" />
        </div>
        <article-big-card class="lg:mt-10" />
      </div>
    </div>
    <hr class="my-2 lg:my-10" />
    <div class="w-full">
      <div class="mx-[30px] md:mx-10 lg:mx-44 py-5 ">
        <div class="container mx-auto">
          <h1 class="text-lg lg:text-[30px]">ข่าวอื่นๆ</h1>
          <div class="my-5 lg:mt-10 space-y-[40px] lg:space-y-[60px]">
            <article-card :articleProps="articles" />
          </div>
        </div>
        <div class="flex justify-center py-[60px]">
          <button class="bg-transparent hover:bg-namjaigreen text-namjaigreen font-medium hover:text-white py-2 px-10 border-2 border-namjaigreen hover:border-transparent rounded">เพิ่มเติม</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ArticleBigCard from "./ArticleBigCard.vue";
import ArticleCard from "./ArticleCard.vue";
import useArticle from "./useArticle";

export default {
  components: {
    "article-big-card": ArticleBigCard,
    "article-card": ArticleCard,
  },

  setup() {
    const { articles, getArticle } = useArticle();

    getArticle();

    return { articles };
  },
};
</script>
