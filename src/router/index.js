import { createRouter, createWebHistory } from "vue-router";
import AppVue from "../App.vue";

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
			component: () => import("../components/SignupForm.vue"),
		},
		{
			path: "/volunteer",
			name: "volunteer",
			component: () => import("../components/VolunteerActivityBlock.vue"),
		},
	],
});

export default router;
