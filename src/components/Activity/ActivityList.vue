<template>
  <div class="container mx-auto">
    <h1 class="my-[30px] text-namjaigreen text-lg">บันทึกกิจกรรม</h1>
    <div class="bg-white rounded-md py-[30px]">
    <div v-for="activity in activityList" :key="activity.userFavoriteUUID" class="px-[20px] pb-[0px]">
      <div class="cursor-pointer" @click="routeToFav(activity.typeOfFavorite, activity.favoriteReferenceUUID)">
        <div class="grid grid-flow-col space-x-1 text-sm">
            <span class="flex mx-4">
              คุณได้ถูกใจ{{ (activity.typeOfFavorite === "PROJECT" ? "โครงการ" : "จิตอาสา") }} &nbsp;
              <h2>"{{ activity.favoriteReferenceTitle }}"</h2>
            </span>
            <p class="text-gray-400 text-right">{{ dateFormat(activity.createDate, "dd mmm yyyy h:MM") }}</p>
          </div>
      </div>
      <w-divider class="my-[20px]"></w-divider>
    </div>
  </div>
  </div>
</template>

<script>
import { useRoute, useRouter } from "vue-router";
import { useUtil } from "../../services/useUtil";
import dateFormat from "dateformat";

export default {
  setup() {
    const route = useRoute();
    const { activityList, getActivityList } = useUtil();

    getActivityList(route.params.id);
    console.log(dateFormat("2022-11-10T17:29:47.985+00:00", "dd mmmm yyyy h:MM"));

    const router = useRouter();
    const routeToFav = (type, UUID) => {
      if (type === "PROJECT") {
        router.push(`/project/${UUID}`);
      } else if (type === "VOLUNTEER") {
        router.push(`/volunteer/${UUID}`);
      }
      console.log(type);
    };

    return { activityList, getActivityList, routeToFav, dateFormat };
  },
};
</script>
