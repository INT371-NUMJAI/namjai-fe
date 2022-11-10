<template>
  <div>
    <h1 class="my-[30px] text-namjaigreen text-lg">บันทึกกิจกรรม</h1>
    <div v-for="activity in activityList" :key="activity.userFavoriteUUID" class="bg-white rounded-md p-[20px]">
      <div class="cursor-pointer" @click="routeToFav(activity.typeOfFavorite, activity.favoriteReferenceUUID)">
        <h2 class="text-base mb-[20px]">{{ activity.createDate }}</h2>
        <div class="grid grid-flow-col space-x-1 text-sm">
          <div class="my-auto">
            <p class="flex">
              คุณได้ถูกใจ{{ (activity.typeOfFavorite === "PROJECT" ? "โครงการ" : "จิตอาสา") }} &nbsp;
              <h2>"{{ activity.favoriteReferenceTitle }}"</h2>
            </p>
          </div>
        </div>
      </div>
      <w-divider class="my-[30px]"></w-divider>
    </div>
  </div>
</template>

<script>
import { computed } from "@vue/runtime-core";
import { useRoute, useRouter } from "vue-router";
import { useUtil } from "../../services/useUtil";

export default {
  setup() {
    const route = useRoute();
    const { activityList, getActivityList } = useUtil();

    getActivityList(route.params.id);

    const router = useRouter();
    const routeToFav = (type, UUID) => {
      if (type === "PROJECT") {
        router.push(`/project/${UUID}`);
      } else if (type === "VOLUNTEER") {
        router.push(`/volunteer/${UUID}`);
      }
      console.log(type);
    };

    return { activityList, getActivityList, routeToFav };
  },
};
</script>
