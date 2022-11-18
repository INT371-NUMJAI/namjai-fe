<template>
  <div class="mx-[30px] md:mx-10 lg:mx-44">
    <div class=" max-w-6xl mx-auto">
      <div class="my-10">
        <h1 class="mt-10 text-2xl lg:text-[48px] lg:mt-[120px] font-semibold">จิตอาสา</h1>
        <div class="w-16 border-4 border-t border-namjaired md:mt-4 lg:mt-4"></div>
      </div>
      <!-- <router-link to="/volunteerdetail"> -->
      <div>
        <volunteer-activity-card :volunteerProps="volunteerShortList" />
      </div>
      <!-- </router-link> -->
    </div>
  </div>
</template>

<script>
import VolunteerActivityCard from "./VolunteerActivityCard.vue";
import useVolunteer from "./useVolunteer";

export default {
  components: {
    "volunteer-activity-card": VolunteerActivityCard,
  },
  setup() {
    const { volunteerShortList, getVolunteerShortList } = useVolunteer();

    getVolunteerShortList();

    return { volunteerShortList };
  },
};
</script>
