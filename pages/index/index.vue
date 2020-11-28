<template>
	<view class="content">

		<u-calendar v-model="show" :mode="mode"></u-calendar>
		<u-button @click="show = true">打开</u-button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				show: false,
				mode: 'date'
			}
		},
		
		onLoad() {
			this.getReq();
		},
		methods: {
			getReq() {
				let opts = {
					url: '/api/add',
					method: 'post'
				}; //请求配置
				let param = {}; //请求参数
				this.$myRequest.httpTokenRequest(opts, param).then(res => {
					console.log(res.data);
					//打印请求返回的数据
				}, error => {
					console.log(error);
				})
			}
		}
	}
</script>

<style scoped lang="scss">

</style>
