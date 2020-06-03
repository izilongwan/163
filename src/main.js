import FastClick from 'fastclick';
import 'js/common';
import 'styles/common.styl';
import 'styles/iconfont.css';
import 'styles/resets.css';
import Vue from 'vue'
import VueLazyload from 'vue-lazyload'
import axios from 'axios'
import {
  Button,
  Cell,
  CellGroup,
  Dialog,
  Field,
  Form,
  Icon,
  IndexAnchor,
  IndexBar,
  List,
  Loading,
  NavBar,
  Notify,
  Popup,
  Search,
  Sticky,
  Swipe,
  SwipeItem,
  Toast
} from 'vant';
import 'vant/lib/index.css';
import App from './App.vue';
import router from './router';
import store from './store';

FastClick.attach(document.body);
Vue.use(Popup);
Vue.use(Form);
Vue.use(Button);
Vue.use(Field);
Vue.use(NavBar);
Vue.use(Icon);
Vue.use(Cell);
Vue.use(CellGroup);
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Sticky);
Vue.use(IndexBar);
Vue.use(IndexAnchor);
Vue.use(Search);
Vue.use(Loading);
Vue.use(Notify);
Vue.use(List);
Vue.use(VueLazyload, {
  loading: require('images/lazy.png')
});
Vue.prototype.$Notify = Notify;
Vue.prototype.$dialog = Dialog;
Vue.prototype.$toast = Toast;
Vue.prototype.$axios = axios;
Vue.prototype.$bus = new Vue();
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
