<template>
  <view class="empty_data">
    <image class="image" :src="emptyImg" />
    <view class="text">空荡荡的~什么都没有！</view>
  </view>
</template>

<script>
export default {
  name: "emptyData",
  data() {
    return {
		emptyImg:''
	};
  },
  created() {
  	this.emptyImg = this.$uli.getBasePath()+'/shpdjq-micro-static/images/null.png'
  },
  mounted() {},
  methods: {},
};
</script>

<style lang="scss" >
.empty_data {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 80rpx;

  .image {
   width: 324rpx;
   height: 324rpx;
  }

  .text {
    margin-top: 16rpx;
    font-weight: 400;
  }
}
</style>