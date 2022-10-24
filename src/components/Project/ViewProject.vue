<template>
	<div>
		<project-detail :fdnProjectProps="project"></project-detail>
	</div>
</template>

<script>
import ProjectDetail from "./ProjectDetail.vue";
import { ref } from "@vue/reactivity";
import { useRoute } from "vue-router";
import projectService from "./project-service";
import { onMounted } from "vue";
import useProjects from "./useProject";

export default {
	components: {
		ProjectDetail,
	},
	setup() {
		const route = useRoute();
		const { project, getProjectByID } = useProjects();
		getProjectByID(route.params.id);
		console.log(project.value);
		// const fdnProject = ref({});
		// async function fetchFdnProjectById(id) {
		// 	let response = projectService.getProjectById(id);
		// 	return response.data;
		// 	// .then(response => {
		// 	//   fdnProject.value = response.data;
		// 	//   console.log(fdnProject.value);
		// 	// })
		// }
		// fetchFdnProjectById(route.params.id);
		// onMounted(() => {
		// 	fetchFdnProjectById().then((fdnProject) => {
		// 		console.log(fdnProject.value);
		// 	});
		// });


		return { route, project };
	},
};
</script>
