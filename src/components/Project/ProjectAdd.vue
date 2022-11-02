<template>
	<div class="container mx-auto">
		<span class="space-y-2.5 lg:space-y-5" v-if="use_auth.store_auth.status.loggedIn">
			<button :disabled="use_auth.store_auth.user.status != `ACTIVE`" @click="routeToProjectForm" class="bg-namjaigreen w-full lg:w-[186px] py-3 flex justify-center space-x-3 rounded-lg">
				<w-icon class="mr-1" md color="white">fa fa-plus</w-icon>
				<p class="text-[14px] text-white">เพิ่มโครงการบริจาค</p>
			</button>
			<div class="lg:gird lg:grid-cols-3 md:grid md:grid-cols-2 lg:gap-x-8 md:gap-x-40">
				<project-card :projectCardProps="projects" :statusProps="projects.status" />
			</div>
			<span v-if="use_auth.store_auth.user.status != `ACTIVE`">กรุณาติดต่อเราเพื่อทำการยืนยันมูลนิธิของท่าน</span>
		</span>
	</div>
</template>

<script>
import ProjectCard from "./ProjectCard.vue";
import { useRouter } from "vue-router";
import { useAuth } from "../../services/auth-middleware";
import useProjects from "./useProject";

export default {
	components: {
		"project-card": ProjectCard,
	},
	setup() {
		const router = useRouter();
		const use_auth = useAuth();
		const { projects, getProjectByFDNEmail } = useProjects();

		getProjectByFDNEmail(use_auth.store_auth.user.email);

		const routeToProjectForm = () => {
			router.push(`/add/foundationproject`);
		};
		return { routeToProjectForm, use_auth, projects };
	},
};
</script>
