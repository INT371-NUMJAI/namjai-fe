<template>
  <div class="container mx-auto">
    <volunteer-activity-card :hiddenProp="true" :volunteerProps="volunteerList" />
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
