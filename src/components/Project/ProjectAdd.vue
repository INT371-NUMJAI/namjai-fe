<template>
	<div>
		<span class="space-y-2.5 lg:space-y-5">
			<button v-if="use_auth.store_auth.status.loggedIn && use_auth.store_auth.user != null && route.params.id === use_auth.store_auth.user.email" :disabled="use_auth.store_auth.user.status != `ACTIVE`" @click="routeToProjectForm" class="bg-namjaigreen w-full lg:w-[186px] py-3 flex justify-center space-x-3 rounded-lg">
				<w-icon class="mr-1" md color="white">fa fa-plus</w-icon>
				<p class="text-[14px] text-white">เพิ่มโครงการบริจาค</p>
			</button>
			<div>
				<project-card :hiddenProp="false" :projectCardProps="projects" />
			</div>
			<span v-if="use_auth.store_auth.status.loggedIn && use_auth.store_auth.user != null && use_auth.store_auth.user.status != `ACTIVE`">กรุณาติดต่อเราเพื่อทำการยืนยันมูลนิธิของท่าน</span>
		</span>
	</div>
</template>

<script>
import ProjectCard from "./ProjectCard.vue";
import { useRoute, useRouter } from "vue-router";
import { useAuth } from "../../services/auth-middleware";
import useProjects from "./useProject";


export default {
	components: {
		"project-card": ProjectCard,
	},
	setup() {
		const router = useRouter();
		const route = useRoute();
		const use_auth = useAuth();
		const { projects, getProjectByFDNEmail, getProjectByFDNEmailAndStatusOpen } = useProjects();

		const checkAuthorized = () => {
      // let check = ""
      if (use_auth.store_auth.status.loggedIn) {
        if (
          use_auth.store_auth.user.role === `ROLE_FDN` &&
          use_auth.store_auth.user.status === `DISABLE`
        ) {
         return true;
        } 
        else if (
          use_auth.store_auth.user.role === `ROLE_FDN` &&
          use_auth.store_auth.user.status === `ACTIVE` &&
          route.params.id === use_auth.store_auth.user.email
        ) {
          getProjectByFDNEmail(route.params.id);
          console.log("getProjectByFDNEmail");
          return false;
        }
        else if (use_auth.store_auth.user.role === `ROLE_USER` || use_auth.store_auth.user.role === `ROLE_FDN` && route.params.id != use_auth.store_auth.user.email) {
          getProjectByFDNEmailAndStatusOpen(route.params.id);
          console.log("getProjectByFDNEmailAndStatusOpen");
          return true;
        }
      } else {
        getProjectByFDNEmailAndStatusOpen(route.params.id);
        console.log("getProjectByFDNEmailAndStatusOpenNotLoggedIn");
        return true;
      }
      //check fdn unverify
      // console.log(check);
    };
    checkAuthorized();

		// getProjectByFDNEmail(route.params.id);

		const routeToProjectForm = () => {
			router.push(`/add/foundationproject`);
		};
		return { routeToProjectForm, use_auth, projects, route, checkAuthorized, };
	},
};
</script>
