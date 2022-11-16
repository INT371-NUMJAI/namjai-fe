<template>
  <div>
    <volunteer-activity-card :hiddenProp="true" :volunteerProps="volunteerList" />
  </div>
  <div class="flex justify-center py-[60px]">
    <button class="bg-transparent hover:bg-namjaigreen text-namjaigreen font-medium hover:text-white py-2 px-10 border-2 border-namjaigreen hover:border-transparent rounded">เพิ่มเติม</button>
  </div>
</template>

<script>
import VolunteerActivityCard from "./VolunteerActivityCard.vue";
import { useRoute } from 'vue-router';
import volunteerService from './volunteer-service';
import { ref } from 'vue';

export default {
  components: {
    "volunteer-activity-card": VolunteerActivityCard,
  },
  setup() {
    const route = useRoute();

    const volunteerList = ref([]);
    const fetchvolunteerList = () => {
      volunteerService.getVolunteerByTargetCat(route.params.id).then((response) => {
        volunteerList.value = response.data;
      });
    };
    fetchvolunteerList();


    return { volunteerList };
  },
};
</script>
