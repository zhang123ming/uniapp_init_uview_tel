  
import Vue from "vue"
Vue.filter("filterMoney", val => {
	return "￥" + val;
})