import Vue from 'vue'
import App from './App'
Vue.config.productionTip = false
// ===========vuex===========
import store from "./store/index.js"

// ========ajax请求=========
Vue.prototype.$myRequest = myRequest
import myRequest from "./api/api.js"
// ==========uview===========
import uView from "uview-ui";
Vue.use(uView);
//============ filter========
import * as filters from "./filters/index.js"
Object.keys(filters).forEach(key => {
	Vue.filter(key, filters[key])
})


App.mpType = 'app'
const app = new Vue({
	store,
	...App
})
app.$mount()
