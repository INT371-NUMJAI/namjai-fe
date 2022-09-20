import { createRouter, createWebHistory } from "vue-router";
import SignupFormFoundation from "../components/Account/SignupFormFoundation.vue";
import SignupFormUser from "../components/Account/SignupFormUser.vue";
import { useAuth } from "../services/auth-middleware";
import { Role } from "@/_helpers/Role";

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: "/",
			name: "home",
			component: () => import("../components/Page/Landing.vue"),
			// component: () => import("../components/Report/ViewReportList.vue"),
		},
		{
			path: "/main",
			name: "main",
			component: () => import("../components/Page/Main.vue"),
		},
		{
			path: "/profile",
			name: "profile",
			component: () => import("../components/Profile/ViewProfile.vue"),
			children: [
				{
					path: "post",
					component: () => import("../components/Post/PostBlockDetail.vue"),
				},
				{
					path: "project",
					component: () => import("../components/Project/ProjectAdd.vue"),
				},
				{
					path: "volunteer",
					component: () => import("../components/Volunteer/VolunteerAdd.vue"),
				},
				{
					path: "about",
					component: () => import("../components/Foundation/FoundationProfile.vue"),
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
			component: () => import("../components/Project/ViewProjects.vue"),
		},
		{
			path: "/project/:id",
			name: "fdn-project-detail",
			component: () => import("../components/Project/ViewProject.vue"),
		},
		{
			path: "/add/foundationproject",
			name: "fdn-project-form",
			component: () => import("../components/Project/ProjectForm.vue"),
		},
		{
			path: "/admin-management",
			name: "admin-management",
			component: () => import("../components/Verification/AdminApprove.vue"),
		},
		{
			path: "/verify/fdn/:id",
			name: "fdn-detail-verify",
			component: () => import("../components/Verification/AdminVerifyAccountDetail.vue"),
		},
		{
			path: "/report",
			name: "report",
			component: () => import("../components/Report/ReportForm.vue"),
		},
	],
});
export default router;

// router.beforeEach(async (to) => {
// 	// redirect to login page if not logged in and trying to access a restricted page
// 	const publicPages = ["/login"];
// 	const authRequired = !publicPages.includes(to.path);
// 	const auth = useAuth();

// 	// if (authRequired && !auth.user) {
// 	if (authRequired && !auth.store_auth.status) {
// 		auth.returnUrl = to.fullPath;
// 		return "/login";
// 	}
// });
// router.beforeEach((to, from, next) => {
// 	// redirect to login page if not logged in and trying to access a restricted page
// 	const { authorize } = to.meta;
// 	// const currentUser = authenticationService.currentUserValue;
// 	const currentUser = useAuth().store_auth.user;

// 	if (authorize) {
// 		if (!currentUser) {
// 			// not logged in so redirect to login page with the return url
// 			return next({ path: "/login", query: { returnUrl: to.path } });
// 		}

// 		// check if route is restricted by role
// 		if (authorize.length && !authorize.includes(currentUser.role)) {
// 			// role not authorised so redirect to home page
// 			return next({ path: "/" });
// 		}
// 	}

// 	next();
// });
