<template>
  <div class="mx-[30px] md:mx-10 lg:mx-44 mt-[120px] lg:mt-0">
    <div class="comntainer w-full mx-auto">
      <div class="my-10 container mx-auto">
        <h1 class="mt-10 text-2xl md:text-4xl lg:text-5xl lg:mt-[120px]">กระดานข่าว</h1>
        <div class="w-16 border-4 border-t border-namjaired md:mt-4 lg:mt-4"></div>
      </div>
      <div class="hidden lg:block lg:max-w-7xl mx-auto">
        <!-- <img class="lg:w-full" src="@/assets/banner.png" /> -->
      </div>
      <div class="container mx-auto my-5">
        <div class="mt-5 lg:mt-10 space-y-[40px]">
          <article-card :articleProps="articles" :hiddenProp="true" />
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
    document.title = "น้ำใจ - กระดานข่าว";
    const { articles, getArticle } = useArticle();

    getArticle();

    return { articles };
  },
};
</script>
