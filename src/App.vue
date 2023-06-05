<script>
	import wechat from '@/utils/wechat.js'
	export default {
		onLaunch: function() {
			wechat.checkIsLogin()
			wechat.getOpenIdRes()
			wechat.login()
			wechat.getOssToken()
		},
	};
</script>

<style lang="scss">
	@import "uview-ui/index.scss";
	@import '@/static/style/theme.scss'
</style>