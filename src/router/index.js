import { createRouter, createWebHistory } from "vue-router";
import { useAuth } from "../services/auth-middleware";
import { Role } from "@/_helpers/Role";

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
		// {
		// 	path: "/trdl",
		// 	name: "trdl",
		// 	component: () => import("../components/Transaction/TransactionRequestDialog.vue"),
		// },
		// {
		// 	path: "/withdrawreq",
		// 	name: "withdrawreq",
		// 	component: () => import("../components/Transaction/ViewTransactionRequest.vue"),
		// },
		{
			path: "/profile",
			name: "profile",
			component: () => import("../components/Profile/ViewProfile.vue"),
			children: [
				{
					path: "post",
					component: () => import("../components/Post/ViewPostBlockDetail.vue"),
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
					path: "activity",
					component: () => import("../components/Activity/ActivityList.vue"),
				},
				{
					path: "transaction",
					component: () => import("../components/Transaction/ViewTransactionRequestList.vue"),
				},
				{
					path: "about",
					component: () => import("../components/Foundation/FoundationProfile.vue"),
				},
			],
		},
		{
			path: "/profile/:id",
			name: "profile",
			component: () => import("../components/Profile/ViewProfile.vue"),
			children: [
				{
					path: "post",
					component: () => import("../components/Post/ViewPostBlockDetail.vue"),
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
			path: "/editprofile",
			name: "editprofile",
			component: () => import("../components/Profile/EditProfile.vue"),
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
					// import SignupFormUser from "../components/Account/SignupFormUser.vue";
					path: "user",
					component: () => import("../components/Account/SignupFormUser.vue"),
				},
				{
					path: "foundation",
					component: () => import("../components/Account/SignupFormFoundation.vue"),
				},
			],
		},
		{
			path: "/volunteer",
			name: "volunteer",
			component: () => import("../components/Volunteer/ViewVolunteer.vue"),
		},
		{
			path: "/volunteer-detail/:id",
			name: "volunteer-detail",
			component: () => import("../components/Volunteer/ViewVolunteerDetail.vue"),
		},
		{
			path: "/volunteer-add",
			name: "volunteer-add",
			component: () => import("../components/Volunteer/FoundationForm.vue"),
		},
		{
			path: "/volunteer-unregistered-user",
			name: "volunteer-unregistered-user",
			component: () => import("../components/Volunteer/VolunteerProjectForm.vue"),
		},
		{
			path: "/volunteer-detail/:id/volunteerlistdetail",
			name: "volunteerlistdetail",
			component: () => import("../components/Volunteer/VolunteerListDetail.vue"),
		},
		{

			path: "/projects",
			name: "project",
			component: () => import("../components/Project/ViewProjects.vue"),
			children: [
				{
					path: "catergories/:id",
					component: () => import("../components/Project/ViewProjectsByTargetCat.vue"),
				},
			],
		},
		// {
		// 	path: "/project/catergories/:id",
		// 	name: "fdn-catergories-projects",
		// 	component: () => import("../components/Project/ViewProjectsByTargetCat.vue"),
		// },
		{
			path: "/project/:id",
			name: "fdn-project-detail",
			component: () => import("../components/Project/ProjectDetail.vue"),
		},
		{
			path: "/project/targetCategories/:id",
			name: "fdn-project-targetCat",
			component: () => import("../components/Project/ViewProjectsByTargetCat.vue"),
		},
		{
			path: "/add/foundationproject",
			name: "fdn-project-form",
			component: () => import("../components/Project/ProjectForm.vue"),
		},
		{
			path: "/foundation",
			name: "foundation",
			component: () => import("../components/Foundation/ViewFoundation.vue"),
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
			path: "/suggestion",
			name: "fdn-select-suggestion",
			component: () => import("../components/FoundationSuggestion/Suggestion.vue"),
		},
		{
			path: "/report",
			name: "report",
			component: () => import("../components/Report/ReportForm.vue"),
		},
		{
			path: "/withdraw",
			name: "withdraw",
			component: () => import("../components/Transaction/ViewTransactionRequestAdmin.vue"),
		},
		{
			path: "/:pathMatch(.*)*",
			name: "not-found",
			component: () => import("../components/PageError/Notfound.vue"),
		},
		{
			path: "/volunteerlist",
			name: "volunteerlist",
			component: () => import("../components/Volunteer/VolunteerListDetail.vue"),
		},
	],
	// linkActiveClass: "namjai-active-link",
	// linkExactActiveClass: "namjai-active-link",
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
