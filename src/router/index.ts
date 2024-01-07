import type { App } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import layout from '../layout/index'
const routerHistory = createWebHistory()
// createWebHashHistory hash 路由
// createWebHistory history 路由
// createMemoryHistory 带缓存 history 路由


const router = createRouter({
	history: routerHistory,
	routes: [
		{
			path: '/',
			redirect: '/home',
			component: layout,
			children: [
				{
					path: '/home',
					name: 'home',
					component: () => import('views/Index.vue'),
				}, {
					path: '/share',
					name: 'share',
					component: () => import('views/Share.vue'),
				}, {
					path: '/product',
					name: 'product',
					component: () => import('views/Product.vue'),
				}, {
					path: '/technology',
					name: 'technology',
					component: () => import('views/Technology.vue'),
				}, {
					path: '/download',
					name: 'download',
					component: () => import('views/Download.vue'),
				},
			]
		},
		{
			path: '/about',
			component: () => import('views/About.vue'),
		}
	]
})

// 删除/重置路由
export function resetRoute(): void {
	router.getRoutes().forEach((route) => {
		const { name } = route
		if (name) {
			router.hasRoute(name) && router.removeRoute(name)
		}
	})
}

export function setupRouter(app: App<Element>): void {
	app.use(router)
}
export default router
