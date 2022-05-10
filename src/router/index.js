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
			path: "/about",
			name: "about",
			// route level code-splitting
			// this generates a separate chunk (About.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
			component: () => import("../views/AboutView.vue"),
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
	],
});

export default router;
