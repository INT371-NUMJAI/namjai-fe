<template>
	<div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
		<project-card :projectCardProps="fdnProjectList" />
	</div>
</template>

<script>
import ProjectCard from "./ProjectCard.vue";
import projectService from "./project-service";
import { ref } from "vue";
import { useRoute } from "vue-router";

export default {
	components: {
		ProjectCard,
	},
	setup() {
		const router = useRoute();
		console.log(router.params.id);
		const fdnProjectList = ref([]);
		const fetchFdnProjectList = () => {
			projectService.getFoundationProjectsByTargetCatID(router.params.id).then((response) => {
				fdnProjectList.value = response.data;
			});
		};
		fetchFdnProjectList();

		return { fdnProjectList };
	},
};
</script>

<style scoped></style>
