<template>
  <div class="container mx-auto">
    <h1 class="my-[30px] text-namjaigreen text-lg">บันทึกกิจกรรม</h1>
    <div class="bg-white rounded-md">
        <div class="flex justify-center md:justify-start lg:justify-start space-x-8 md:space-x-12 lg:space-x-12 text-sm lg:text-base md:px-8 lg:px-10">
          <div class="flex-wrap space-y-3 pt-4 lg:pt-6 h-[54px] lg:h-[66px]" @click="(selectedFavourite = true), (selectedJoinedVolunteer = false)">
            <h2 class="cursor-pointer select-all selection:text-namjaigreen" :class="{'text-[#00715D]' : selectedFavourite === true}">รายการที่ถูกใจ</h2>
            <div class="h-1 bg-namjaigreen" v-if="selectedFavourite === true"></div>
          </div>
          <div class="flex-wrap space-y-3 pt-4 lg:pt-6 h-[54px] lg:h-[66px]" @click="(selectedJoinedVolunteer = true), (selectedFavourite = false)">
            <h2 class="cursor-pointer select-all selection:text-namjaigreen" :class="{'text-[#00715D]' : selectedJoinedVolunteer === true}">จิตอาสาที่เข้าร่วม</h2>
            <div class="h-1 bg-namjaigreen" v-if="selectedJoinedVolunteer === true"></div>
          </div>
        </div>
      <div v-if="selectedFavourite === true">
        <div v-for="activity in activityList" :key="activity.userFavoriteUUID" class="pb-[0px] py-[30px]">
          <div class="cursor-pointer" @click="routeToFav(activity.typeOfFavorite, activity.favoriteReferenceUUID)">
            <div class="grid grid-flow-col space-x-1 text-sm md:px-8 lg:px-10">
              <div class="md:flex">
                <span>คุณได้ถูกใจ </span>
                <span class="md:flex">
                  {{ activity.typeOfFavorite === "PROJECT" ? "โครงการ" : "จิตอาสา" }} &nbsp;
                  <h2>"{{ activity.favoriteReferenceTitle }}"</h2>
                </span>
              </div>
              <p class="text-gray-400 text-right text-xs">{{ dateFormat(activity.createDate, "dd mmm yyyy h:MM") }}</p>
            </div>
          </div>
          <w-divider class="pb-[20px] mt-[20px] mx-[40px]"></w-divider>
        </div>
      </div>
      <div v-if="selectedJoinedVolunteer === true">
        <div v-for="volunteer in joinedVolunteer" :key="volunteer.userFavoriteUUID" class="pb-[0px] py-[30px]">
          <div class="cursor-pointer" @click="routeToVolunteer(volunteer.favoriteReferenceUUID)">
            <div class="grid grid-flow-col space-x-1 text-sm md:px-8 lg:px-10">
              <div class="md:flex">
                <span>คุณได้เข้าร่วมจิตอาสา&nbsp;</span>
                <span class="md:flex">
                  <h2>"{{ volunteer.favoriteReferenceTitle }}"</h2>
                </span>
              </div>
              <p class="text-gray-400 text-right text-xs">{{ volunteer.enrolledDate }}</p>
            </div>
          </div>
          <w-divider class="pb-[20px] mt-[20px] mx-[40px]"></w-divider>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useRoute, useRouter } from "vue-router";
import { useUtil } from "../../services/useUtil";
import dateFormat from "dateformat";
import { ref } from "vue";

export default {
  setup() {
    const route = useRoute();
    const { activityList, getActivityList, joinedVolunteer, getEnrolledVolunteerActivity } = useUtil();

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

    getEnrolledVolunteerActivity(route.params.id);

    const selectedFavourite = ref(true);
    const selectedJoinedVolunteer = ref(false);

    const routeToVolunteer = (uuid) => {
      router.push(`/volunteer/${uuid}`);
    }

    return { activityList, getActivityList, routeToFav, dateFormat, joinedVolunteer, selectedFavourite, selectedJoinedVolunteer, routeToVolunteer };
  },
};
</script>
