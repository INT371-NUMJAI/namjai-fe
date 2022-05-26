import { createRouter, createWebHistory } from "vue-router";
import AppVue from "../App.vue";
import SignupFormFoundation from "../components/SignupFormFoundation.vue";
import SignupFormUser from "../components/SignupFormUser.vue";

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: "/",
			name: "home",
			component: () => import("../views/Home.vue"),
		},
		{
			path: "/login",
			name: "login",
			component: () => import("../components/LoginForm.vue"),
		},
		{
			path: "/signup",
			name: "signup",
			component: () => import("../views/Signup.vue"),
			children: [
				{
				  path: 'user',
				  component: SignupFormUser,
				},
				{
				  path: 'foundation',
				  component: SignupFormFoundation,
				},
			  ],
		},
		{
			path: "/volunteer",
			name: "volunteer",
			component: () => import("../views/Volunteer.vue"),
		},
	],
});

export default router;
