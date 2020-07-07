import Vue from 'vue'
import Router from 'vue-router'
import line from '@/echarts/line.vue'

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/line',
			name: 'line',
			component: line
		}
	],
	mode: 'history'
})
