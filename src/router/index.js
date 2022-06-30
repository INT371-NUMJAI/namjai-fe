import { createRouter, createWebHistory } from "vue-router";
import AppVue from "../App.vue";
import SignupFormFoundation from "../components/Forms/SignupFormFoundation.vue";
import SignupFormUser from "../components/Forms/SignupFormUser.vue";

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: "/",
			name: "home",
			component: () => import("../components/Forms/LoginForm.vue"),
		},
		// {
		// 	path: "/login",
		// 	name: "login",
		// 	component: () => import("../components/LoginForm.vue"),
		// },
		{
			path: "/signup",
			name: "signup",
			component: () => import("../views/Signup.vue"),
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
			component: () => import("../views/Volunteer.vue"),
		},
		{
			path: "/admin-management",
			name: "admin-management",
			component: () => import("../views/AdminApprove.vue"),
		},
		{
			path: "/fdn",
			name: "fdn-detail-verify",
			component: () => import("../views/AdminVerifyAccountDetail.vue"),
		},
	],
});

export default router;
