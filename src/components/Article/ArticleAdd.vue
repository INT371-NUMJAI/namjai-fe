<template>
  <div>
    <div class="container mx-auto">
      <router-link to="/article-add">
        <button v-if="use_auth.store_auth.status.loggedIn && use_auth.store_auth.user != null && route.params.id === use_auth.store_auth.user.email && use_auth.store_auth.user.status === `ACTIVE`" class="bg-namjaigreen w-full lg:w-[186px] py-3 flex justify-center space-x-3 rounded-lg">
          <w-icon class="mr-1" md color="white">fa fa-plus</w-icon>
          <p class="text-[14px] text-white">เพิ่มข่าวสาร</p>
        </button>
      </router-link>
      <div class="mt-[30px] space-y-[30px] bg-white rounded-lg p-5 shadow-sm drop-shadow-md hover:shadow-md">
        <span v-if="use_auth.store_auth.status.loggedIn && use_auth.store_auth.user != null && use_auth.store_auth.user.status != `ACTIVE`">
          <p class="text-center mt-[80px]">ผู้ใช้รายนี้ยังไม่มีข่าวสาร</p>
        </span>
        <article-card :hiddenProp="false" :articleProps="articlesEmail"></article-card>
      </div>
    </div>
  </div>
</template>

<script>
import { useRoute } from "vue-router";
import { useAuth } from "../../services/auth-middleware";
import ArticleCard from "./ArticleCard.vue";
import useArticle from "./useArticle";

export default {
  components: {
    ArticleCard,
  },
  setup() {
    const use_auth = useAuth();
    const route = useRoute();

    const { articlesEmail, getArticleByEmail } = useArticle();

    getArticleByEmail(route.params.id);

    return { use_auth, route, articlesEmail };
  },
};
</script>
