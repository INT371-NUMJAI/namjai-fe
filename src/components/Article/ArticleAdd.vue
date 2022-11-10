<template>
    <div>
        <div class="container mx-auto">
            <router-link to="/article-add">
                <button v-if="use_auth.store_auth.status.loggedIn && use_auth.store_auth.user != null && route.params.id === use_auth.store_auth.user.email"
                     class="bg-namjaigreen w-full lg:w-[186px] py-3 flex justify-center space-x-3 rounded-lg">
				    <w-icon class="mr-1" md color="white">fa fa-plus</w-icon>
				    <p class="text-[14px] text-white">เพิ่มข่าวสาร</p>
			    </button>
            </router-link>
            <div class="mt-[30px] bg-white rounded-lg p-5 shadow-sm drop-shadow-md hover:shadow-md">
                <article-card></article-card>
            </div>
        </div>
    </div>
</template>

<script>
import { useRoute } from 'vue-router'
import { useAuth } from '../../services/auth-middleware'
import ArticleCard from './ArticleCard.vue'
import useArticle from './useArticle'

export default {
    components: {
        ArticleCard,
    },
    setup() {
        const use_auth = useAuth();
        const route = useRoute();
        const { article, getArticle } = useArticle();

        getArticle();

        return { article, use_auth, route };
    }
}
</script>
