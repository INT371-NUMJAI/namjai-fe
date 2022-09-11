<template>
  <div>
    <project-detail :fdnProjectProps="fdnProject" :picturePathProps="fdnProject.picturePath"></project-detail>
  </div>
</template>

<script>
import ProjectDetail from './ProjectDetail.vue';
import { ref } from '@vue/reactivity';
import { useRoute } from 'vue-router';
import projectService from './project-service';


export default {
    components: {
        ProjectDetail
    },
    setup() {
    const route = useRoute();
    const fdnProject = ref({});
    const fetchFdnProjectById = (id) => {
      projectService.getProjectById(id).then((response) => {
        fdnProject.value = response.data;
        console.log(fdnProject.value);
      })
    };
    fetchFdnProjectById(route.params.id);

    return { route, fdnProject };
  }
};
</script>
