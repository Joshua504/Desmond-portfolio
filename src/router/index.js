import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: "/",
			name: "Home",
			component: () => import("../views/Home.vue"),
		},
		{
			path: "/about",
			name: "About",
			component: () => import("../views/About.vue"),
		},
		{
			path: "/projects",
			name: "project",
			component: () => import("../views/Projects.vue"),
		},
		{
			path: "/articles",
			name: "Article",
			component: () => import("../views/Article.vue"),
		},
		{
			path: "/speaks",
			name: "Speaks",
			component: () => import("../views/Speaks.vue"),
		},
	],
});

export default router;
