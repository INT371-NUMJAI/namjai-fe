<template>
  <div class="mx-[30px] md:mx-10 lg:mx-44 mt-[120px] lg:mt-0 h-screen">
    <div class="my-10 md:my-[60px] lg:mt-[120px] container max-w-6xl mx-auto bg-white rounded-xl p-6">
      <div class="space-y-2 mb-5 md:mb-10">
        <h1 class="text-xl md:text-[25px] lg:text-[30px] leading-relaxed">{{ article.articleHeader }}</h1>
        <div class="flex items-center space-x-3 text-sm text-zinc-500 tracking-wide">
          <h3 @click="routeToProfile(article.email)" class="cursor-pointer">{{ article.author }}</h3>
          <hr class="w-2 h-0.5 bg-zinc-500" />
          <h3>{{ article.createDate }}</h3>
        </div>
      </div>
      <div v-if="article.articlePicture != null">
      <img class="w-full aspect-[5/3] object-cover rounded-xl" :src="getImage(article.articlePicture)" />
    </div>
      <div>
        <div class="mt-[30px] md:mt-10 mb-10 md:mb-[60px] lg:grid lg:grid-cols-12 lg:gap-[30px]">
          <div name="firstColumn"></div>
          <p class="lg:col-span-10 md:text-[18px] leading-loose">{{ article.articleBody }}</p>
          <div name="share" class="space-y-3">
            <h2 class="mt-10 lg:hidden">แชร์ต่อ</h2>
            <div name="shareIcon" class="flex lg:block space-x-4 lg:space-x-0 lg:space-y-4 ">
              <div>
              <a :href="linkShare">
              <svg class=" w-8 h-8 lg:w-[38px] lg:h-[38px] fill-current hover:text-[#0165E1] active:text-[#0165E1] cursor-pointer" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M19 38C29.4934 38 38 29.4934 38 19C38 8.50659 29.4934 0 19 0C8.50659 0 0 8.50659 0 19C0 29.4934 8.50659 38 19 38ZM20.1971 19.1689V26H17.359V19.1639H15V16.4893H17.3539V14.5265C17.3539 12.2437 18.7918 11.0001 20.886 11.0001C21.5922 10.9975 22.2979 11.0328 23 11.106V13.4905H21.557C20.4182 13.4905 20.1971 14.0189 20.1971 14.7907V16.4943H22.9186L22.5664 19.1689H20.1971Z" />
              </svg>
              </a>
            </div>
            <div>
              <a :href="linkShareTwitter">
              <svg class="w-8 h-8 lg:w-[38px] lg:h-[38px] fill-current hover:text-[#17A9FD] active:text-[#17A9FD] cursor-pointer" width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M19 38C29.4934 38 38 29.4934 38 19C38 8.50659 29.4934 0 19 0C8.50659 0 0 8.50659 0 19C0 29.4934 8.50659 38 19 38ZM25.9972 14.2166C26.7033 14.1309 27.3748 13.9413 28 13.6607L27.9985 13.6629C27.5305 14.372 26.9416 14.991 26.2593 15.4908C26.266 15.6425 26.2698 15.7957 26.2698 15.9474C26.2698 20.6165 22.7621 26 16.3457 26C14.4503 26.0021 12.5943 25.451 11 24.4125C11.2763 24.4455 11.5543 24.4619 11.8326 24.4618C13.4032 24.4642 14.9291 23.9312 16.1645 22.9487C15.4367 22.9352 14.7313 22.6915 14.1471 22.2516C13.5628 21.8118 13.1289 21.1979 12.9062 20.4959C13.429 20.5968 13.9677 20.5761 14.4815 20.4352C13.692 20.2736 12.9821 19.8403 12.4721 19.2088C11.9621 18.5773 11.6835 17.7865 11.6836 16.9706V16.9251C12.1679 17.1978 12.7095 17.3494 13.2633 17.3672C12.7858 17.0442 12.3943 16.6067 12.1237 16.0936C11.8531 15.5805 11.7117 15.0077 11.712 14.4259C11.712 13.7797 11.8842 13.173 12.1837 12.6496C13.0596 13.7412 14.1522 14.634 15.3907 15.27C16.6292 15.9061 17.9859 16.2713 19.3727 16.3418C19.1972 15.5839 19.2735 14.7885 19.59 14.0791C19.9064 13.3697 20.4451 12.7859 21.1226 12.4185C21.8001 12.0511 22.5784 11.9205 23.3366 12.047C24.0948 12.1736 24.7906 12.5502 25.3159 13.1184C26.0971 12.963 26.8461 12.6731 27.5306 12.2613C27.2707 13.08 26.7257 13.775 25.9972 14.2166Z"
                />
              </svg>
            </a>
          </div>
              <svg class="w-8 h-8 lg:w-[38px] lg:h-[38px] fill-current hover:text-[#10A88D] active:text-[#10A88D] cursor-pointer" width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M19 38C29.4934 38 38 29.4934 38 19C38 8.50659 29.4934 0 19 0C8.50659 0 0 8.50659 0 19C0 29.4934 8.50659 38 19 38ZM15.5858 11.5858C15.9609 11.2107 16.4696 11 17 11H23C23.5304 11 24.0391 11.2107 24.4142 11.5858C24.7893 11.9609 25 12.4696 25 13V23C25 23.5304 24.7893 24.0391 24.4142 24.4142C24.0391 24.7893 23.5304 25 23 25H17C16.4696 25 15.9609 24.7893 15.5858 24.4142C15.2107 24.0391 15 23.5304 15 23V13C15 12.4696 15.2107 11.9609 15.5858 11.5858ZM16.2929 12.2929C16.1054 12.4804 16 12.7348 16 13V23C16 23.2652 16.1054 23.5196 16.2929 23.7071C16.4804 23.8946 16.7348 24 17 24H23C23.2652 24 23.5196 23.8946 23.7071 23.7071C23.8946 23.5196 24 23.2652 24 23V13C24 12.7348 23.8946 12.4804 23.7071 12.2929C23.5196 12.1054 23.2652 12 23 12H17C16.7348 12 16.4804 12.1054 16.2929 12.2929ZM13.268 14C13.0924 14.3041 13 14.6489 13 15V23.5C13 24.4283 13.3687 25.3185 14.0251 25.9749C14.6815 26.6313 15.5717 27 16.5 27H21C21.3511 27 21.6959 26.9076 22 26.732C22.304 26.5565 22.5565 26.304 22.732 26H16.5C15.837 26 15.2011 25.7366 14.7322 25.2678C14.2634 24.7989 14 24.163 14 23.5V13.268C13.696 13.4435 13.4435 13.696 13.268 14Z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from '@vue/runtime-core';
import { useRoute, useRouter } from 'vue-router';
import router from '../../router';
import useArticle from './useArticle'

export default {
  setup() {
    const route = useRoute();
    const router = useRouter();

    const { article, getArticleById } = useArticle();
    getArticleById(route.params.id).catch((error) => {
      router.push({name: 'not-found'});
    })

    const getImage = (imagePath) => {
      		return `${import.meta.env.VITE_APP_BACKEND_URL}/util/img?path=${imagePath}`
    	}

      const linkShare = computed(() => {
    return `https://www.facebook.com/sharer.php?u=https://namjai.site/article/${route.params.id}`
  })

  const linkShareTwitter = computed(() => {
    return `https://twitter.com/share?url=https://namjai.site/article/${route.params.id}`
  })

  const copyToClipboard = () => {
    navigator.clipboard.writeText(`https://namjai.site/article/${route.params.id}`);
  }  

  const routeToProfile = (email) => {
    router.push(`/profile/${email}`)
  }

    return { article, getImage, linkShare, linkShareTwitter, copyToClipboard, routeToProfile };
  },
}
</script>

