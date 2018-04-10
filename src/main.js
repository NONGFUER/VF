// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import { AjaxPlugin } from 'vux';
import Vue from 'vue';
import FastClick from 'fastclick';
import VueRouter from 'vue-router';
import App from './App';
import Home from './components/HelloFromVux';
import FHead from './components/f-header/head';
import Index1 from './gis/Index1';
import Jipan from './gis/jipan';


Vue.use(VueRouter);
Vue.use(AjaxPlugin);

const routes = [{
  path: '/index',
  component: Home,
}, {
  path: '/head',
  component: FHead,
}, {
  path: '/',
  component: Index1,
}, {
  path: '/jipan',
  component: Jipan,
}, {
  path: '/jpDetail',
  component: Home,
}];

const router = new VueRouter({
  routes,
});

FastClick.attach(document.body);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App),
}).$mount('#app-box');
