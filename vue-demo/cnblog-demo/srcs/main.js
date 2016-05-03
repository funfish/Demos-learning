var Vue = require('vue');
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import routerMap from './routers'
import FastClick from 'fastclick'

Vue.use(VueResource);
Vue.use(VueRouter);

//实例化VueRouter
let router = new VueRouter({
    hashbang: true,
    history: false,
    saveScrollPosition: true,
    transitionOnLoad: true
});


let app = Vue.extend({});

routerMap(router);

router.start(app, "#app");
