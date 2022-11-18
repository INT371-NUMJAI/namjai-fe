import { createRouter, createWebHistory } from "vue-router";
import { useAuth } from "../services/auth-middleware";
import { Role } from "@/_helpers/Role";

// const use_auth = useAuth();
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
			path: "/profile/:id",
			name: "profile",
			component: () => import("../components/Profile/ViewProfile.vue"),
			children: [
				{
					path: '',
					// name: "profile",
					redirect: {name: "profile.post"},
				},
				{
					path: "post",
					name: "profile.post",
					component: () => import("../components/Article/ArticleAdd.vue"),
				},
				{
					path: "project",
					name: "profile.project",
					component: () => import("../components/Project/ProjectAdd.vue"),
				},
				{
					path: "volunteer",
					name: "profile.volunteer",
					component: () => import("../components/Volunteer/VolunteerAdd.vue"),
				},
				{
					path: "activity",
					name: "profile.activity",
					component: () => import("../components/Activity/ActivityList.vue"),
				},
				{
					path: "transaction",
					name: "profile.transaction",
					component: () => import("../components/Transaction/ViewTransactionRequestList.vue"),
				},
				{
					path: "about",
					name: "profile.about",
					component: () => import("../components/Profile/ProfileAbout.vue"),
				},
				
			],
		},
		{
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
			path: "/volunteers",
			name: "volunteers",
			component: () => import("../components/Volunteer/ViewVolunteers.vue"),
			children: [
				{
					path: "catergories/:id",
					component: () => import("../components/Volunteer/ViewVolunteerByTargetCat.vue"),
					// props: (route) => ({id:route.params.id || 'total'})
				},
			],
		},
		{
			path: "/volunteer/:id",
			name: "volunteer",
			component: () => import("../components/Volunteer/ViewVolunteerDetail.vue"),
		},
		{
			path: "/volunteer-add",
			name: "volunteer-add",
			component: () => import("../components/Volunteer/FoundationForm.vue"),
			meta: {requiresAuth: true},
		},
		{
			path: "/volunteer-unregistered-user",
			name: "volunteer-unregistered-user",
			component: () => import("../components/Volunteer/VolunteerProjectForm.vue"),
		},
		{
			path: "/volunteer/:id/volunteerlistdetail",
			name: "volunteerlistdetail",
			component: () => import("../components/Volunteer/VolunteerListDetail.vue"),
			meta: {requiresAuth: true},
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
			path: "/progressupdateform/:id",
			name: "progress-form",
			component: () => import("../components/Project/ProgressUpdateForm.vue"),
			meta: {requiresAuth: true},
		},
		{
			path: "/add/foundationproject",
			name: "fdn-project-form",
			component: () => import("../components/Project/ProjectForm.vue"),
			meta: {requiresAuth: true},
		},
		{
			path: "/foundations",
			name: "foundations",
			component: () => import("../components/Foundation/ViewFoundations.vue"),
		},
		{
			path: "/admin-management",
			name: "admin-management",
			component: () => import("../components/Verification/AdminApprove.vue"),
			meta: {requiresAuth: true},
		},
		{
			path: "/verify/fdn/:id",
			name: "fdn-detail-verify",
			component: () => import("../components/Verification/AdminVerifyAccountDetail.vue"),
			meta: {requiresAuth: true},
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
			path: "/reportlist",
			name: "report-list",
			component: () => import("../components/Report/ViewReportList.vue"),
			meta: {requiresAuth: true},
		},
		{
			path: "/withdraw",
			name: "withdraw",
			component: () => import("../components/Transaction/ViewTransactionRequestAdmin.vue"),
			meta: {requiresAuth: true},
		},
		{
			path: "/:pathMatch(.*)*",
			name: "not-found",
			component: () => import("../components/PageError/Notfound.vue"),
		},
		{
			path: "/articles",
			name: "articles",
			component: () => import("../components/Article/ViewArticles.vue"),
		},
		{
			path: "/article-add",
			name: "article-add",
			component: () => import("../components/Article/ArticleForm.vue"),
		},
		{
			path: "/article/:id",
			name: "article",
			component: () => import("../components/Article/ArticleDetail.vue"),
		},
		{
			path: "/protectedadmin",
			name: "protected-admin",
			component: () => import("../components/PageError/ProtectedForAdmin.vue"),
		},
		{
			path: "/protectedfdn",
			name: "protected-fdn",
			component: () => import("../components/PageError/ProtectedForFoundation.vue"),
		},

	],
});
// const use_auth = useAuth();
const user = JSON.parse(window.localStorage.getItem("user"));
router.beforeEach((to, from) => {
	if (to.meta.requiresAuth && (user === null || (user != null && (user.role != "ROLE_ADMIN" && user.role != "ROLE_FDN")))) {
		return {name: 'protected-admin'}
	} else if (to.meta.requiresAuth && (user === null || ((user != null && user.role === "ROLE_FDN") && user.status != "ACTIVE"))) { //fdn disable
		if (to.meta.requiresAuth && (user === null || ((user != null && user.role === "ROLE_USER")))) { //user
		return {name: 'protected-fdn'}
		}
		return {name: 'protected-fdn'}
	}
})
export default router;