import { createRouter, createWebHistory } from "vue-router";
import SignupFormFoundation from "../components/Account/SignupFormFoundation.vue";
import SignupFormUser from "../components/Account/SignupFormUser.vue";

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		// {
		// 	path: "/",
		// 	name: "home",
		// 	component: () => import("../components/Account/LoginForm.vue"),
		// },
		// ****  Testing main page  ****
		{
			path: "/",
			name: "home",
			component: () => import("../components/Page/Home.vue"),
		},

		// {
		// 	path: "/login",
		// 	name: "login",
		// 	component: () => import("../components/LoginForm.vue"),
		// },
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
