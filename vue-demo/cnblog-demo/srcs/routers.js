export default function(router){
	router.map({
		'/': {
			name: 'home',
			component: function(resolve){
				require(['./views/index.vue'], resolve);
			}
		},
		'/list': {
			name: 'list',
			component: function(resolve){
				require(['./views/list.vue'], resolve);
			}
		},
		'/topic/:user/p/:id': {
			name: 'topic',
			component: function(resolve){
				require(['./views/topic.vue'], resolve);
			}
		}		
	})
}