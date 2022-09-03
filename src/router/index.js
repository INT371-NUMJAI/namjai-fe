import { createRouter, createWebHistory } from "vue-router";
import SignupFormFoundation from "../components/Account/SignupFormFoundation.vue";
import SignupFormUser from "../components/Account/SignupFormUser.vue";

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: "/",
			name: "home",
			component: () => import("../components/Page/Landing.vue"),
		},
		{
			path: "/main",
			name: "main",
			component: () => import("../components/Page/Main.vue"),
		},
		{
			path: "/profile",
			name: "profile",
			component: () => import("../components/Post/ViewProfile.vue"),
			children: [
				{
					path: 'post',
					component: () => import("../components/Post/PostDetailBlock.vue"),
				},
				// {
				// 	path: 'project',
				// 	component: ,
				// },
				{
					path: 'volunteer',
					component:() => import("../components/Volunteer/VolunteerActivityBlock.vue"),
				},
				{
					path: 'about',
					component:() => import("../components/Foundation/FoundationProfile.vue"),
				},
			],
		},
		{
			path: "/login",
			name: "login",
			component: () => import("../components/Account/LoginForm.vue"),
		},
		{
			path: "/signup",
			name: "signup",
			component: () => import("../components/Account/ViewSignup.vue"),
			children: [
				{
					path: "user",
					component: SignupFormUser,
				},
				{
					path: "foundation",
					component: SignupFormFoundation,
				},
			],
		},
		{
			path: "/volunteer",
			name: "volunteer",
			component: () => import("../components/Volunteer/ViewVolunteer.vue"),
		},
		{
			path: "/project",
			name: "project",
			component: () => import("../components/Project/ViewProject.vue"),
		},
		{
			path: "/admin-management",
			name: "admin-management",
			component: () => import("../components/Verification/AdminApprove.vue"),
		},
		{
			path: "/fdn",
			name: "fdn-detail-verify",
			component: () => import("../components/Verification/AdminVerifyAccountDetail.vue"),
		},
	],
});

export default router;
