<template>
  <div id="Dlbt">
    <van-swipe :autoplay="3000" indicator-color="white">
      <van-swipe-item>
        <img src="../assets/5bbf2f11408df.jpg">
      </van-swipe-item>
      <van-swipe-item>
        <img src="../assets/5bbf2feb17c62.jpg">
      </van-swipe-item>
      <van-swipe-item>
        <img src="../assets/5c176a1446907.jpg">
      </van-swipe-item>
    </van-swipe>
    <div id="L-banner">
        <img src="../assets/ptag.jpg">
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { Swipe, SwipeItem } from "vant";
Vue.use(Swipe).use(SwipeItem);

export default {
  components: {
  }
};
</script>
<style scoped>
*{padding: 0;margin: 0;}
#Dlbt{
    padding-top: 10px;
    width: 100%;
    height: 160px;
}
img{width: 100%;
height: 120px;
}
#L-banner{
    height: 40px;
    background: #ccc;
}
#L-banner img{
    height: 38px;
}
</style>


