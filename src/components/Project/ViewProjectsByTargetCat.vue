<template>
	<div>
		<project-card :hiddenProp="true" :projectCardProps="fdnProjectList" />
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
