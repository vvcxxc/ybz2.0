<template>
  <div id="information">
    <div id="head">
      <a id="header_back" @click="userBack">
        <img src="../assets/back_icon.png">
      </a>
      <div id="header_title">商品详情</div>
    </div>

    <div id="Dlbt">
      <van-swipe :autoplay="3000" indicator-color="white">
        <van-swipe-item  v-for="(item,idx) in Cimgs" :key="idx">
          <img :src="item" />
        </van-swipe-item>
        <!-- <van-swipe-item>
          <img src="../assets/5bbf2feb17c62.jpg">
        </van-swipe-item>
        <van-swipe-item>
          <img src="../assets/5c176a1446907.jpg">
        </van-swipe-item> -->
      </van-swipe>
    </div>

    <div class="product_info">
      <p class="main_title">{{Cnews.utitle}}</p>
      <div class="new_price">
        <span>￥</span>
        <span class="money">{{Cnews.uprice}}</span>
      </div>
      <div class="price_cunt">
        库存
        <span class="price_cunt_mun">{{Cnews.urest}}</span>件
      </div>
    </div>

    <div id="img_info">
      <div class="img_content"  v-for="(item,idx) in Cimgs" :key="idx">
        <img :src="item" />
      </div>
      <!-- <div class="img_content">
        <img src="../assets/oss_29_goods342019010209230283253.jpg">
      </div>
      <div class="img_content">
        <img src="../assets/oss_29_goods342019010209230283253.jpg">
      </div> -->
    </div>

    <div id="imgContent">
      <img src="../assets/20180831172820028005.jpg">
      <img src="../assets/20180831172822339006.jpg">
    </div>
    <div class="page_content">
      <div class="notice_item_tit">关于产品</div>
      <div
        class="notice_item_con"
      >玉巴扎商城每一款产品来自于玉巴扎合作供应商和玉巴扎自营，均是玉企源头直供。每一款产品从原料到成品经过十几道工序，请您放心购买。产品支持复检，复检时请到具有专业检测资质和设备的国家级检测机构检测。</div>
      <div class="notice_item_tit">购买流程</div>
      <div class="notice_item_con">注册登录→选择商品→提交订单→支付货款→收货验货。</div>
      <div class="notice_item_tit">关于包装</div>
      <div class="notice_item_con">包含商品、包装盒、固定膜、购物清单。</div>
      <div class="notice_item_tit">关于发货时间和配送</div>
      <div class="notice_item_con">下单成功后，48小时内发货。</div>
      <div class="notice_item_tit">关于退换货</div>
      <div
        class="notice_item_con"
      >客户在收货后如对商品不满意或存在疑问，在保证商品全新，配件（包括但不限于鉴定证书、购物清单单据）齐全，不影响二次销售情况下，可在7日内（以订单状态变更为“已收货”日期为准）申请退换货，客服受理后请您在3日内寄出并将快递单号提供给客服，我们将在收到商品后3个工作日内为您处理。除商品本身存在质量问题，退换货往返运费客户自行承担。因商品本身较为贵重，我们只接收顺丰或EMS寄回，不接受到付及其他快递。</div>
      <div class="notice_item_tit">保养小贴士</div>
      <div
        class="notice_item_con"
      >1、避免与硬物碰撞和田玉硬度虽高，但是受碰撞后，有时虽然肉眼看不出裂纹，其实玉内部的分子结构已受破坏，有暗裂纹，将大大损害其完美程度和经济价值。
        <br>2、忌油烟、香水、化学剂，避免灰尘玉器表面若有灰尘，宜用软毛刷清洁；若有污垢或油渍等附于玉器表面，应以温的淡肥皂水洗刷，再用清水冲净。切忌使用化学除油剂。游泳洗澡以及运动建议摘除。
        <br>3、避免阳光长期直射、火烤。
        <br>4、定期检查挂绳是否牢固，一两年要更换系绳，防止丢失。
      </div>
    </div>
    <div id="addShopCart">
      <div id="addShopCart_left">
        <img src="../assets/contact_icon.png">
        <div class="Shop_k">客服</div>
      </div>
      <div id="addShopCart_middle" @click="toCart">
        <img src="../assets/car_icon.png">
        <div class="Shop_k">购物车</div>
      </div>
      <div id="addShopCart_right">
        <div id="addShopCart_right_box">
          <div id="add_cart">加入购物车</div>
          <div id="buy_now">立即购买</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import { Swipe, SwipeItem } from "vant";
Vue.use(Swipe).use(SwipeItem);
export default {
  data() {
    return {
      Cnews: [],
      Cimgs: []
    };
  },
  created() {
     //接收到传入类型，拿去后端查
    // console.log(this.$route.params.sid);
  },
  async mounted() {
    await this.getShopLists();
  },
  methods: {
    async getShopLists() {
      let data0 = await this.$axios.get("http://localhost:3000/shoplist0");
      let imgs = data0.data.uimg.split("??");
      this.Cnews = data0.data;
      this.Cimgs = imgs;
    },
    userBack() {
      window.history.back();
    },
    toCart() {
      this.$router.push({ name: "cart" });
    }
  }
};
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#information {
  width: 100%;
  position: absolute;
  padding-top: 50px;
}
#head {
  height: 50px;
  width: 100%;
  background: #ffffff;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  border-bottom: 2px #686868 solid;
}
#header_back {
  height: 30px;
  width: 30px;
  position: absolute;
  left: 10px;
  top: 50%;
  margin-top: -15px;
}
#header_back img {
  width: 100%;
  height: 100%;
}
#header_title {
  height: 24px;
  width: 100px;
  position: absolute;
  left: 50%;
  top: 50%;
  margin-top: -12px;
  margin-left: -25px;
  text-align: center;
  font-weight: bolder;
  font-size: 20px;
  line-height: 24px;
}
#Dlbt {
  padding-top: 5px;
  width: 100%;
  height: 160px;
}
#Dlbt img {
  width: 100%;
  height: 300px;
}
.product_info {
  width: 100%;
  height: 100px;
  background: #ffffff;
  margin-top: 150px;
  position: relative;
  color: black;
}
.product_info .main_title {
  position: absolute;
  width: 90%;
  height: 40px;
  line-height: 20px;
  font-size: 18px;
  top: 10%;
  left: 10px;
  overflow: hidden;
  /*text-overflow: ellipsis;
  white-space: nowrap; */
}
.product_info .new_price {
  position: absolute;
  width: 200px;
  height: 20px;
  color: rgba(126, 22, 22, 0.726);
  font-size: 16px;
  top: 60%;
  left: 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.product_info .price_cunt {
  position: absolute;
  width: 100px;
  height: 20px;
  text-align: right;

  bottom: 10%;
  right: 10px;
}
.product_info .price_cunt .price_cunt_mun {
  display: inline-block;
  color: rgba(126, 22, 22, 0.726);
  text-align: center;
}
#imgContent {
  width: 100%;
}
#imgContent img {
  width: 100%;
}
.page_content {
  padding: 20px;
  padding-bottom: 100px;
}
.page_content .notice_item_tit {
  font-weight: bolder;
  margin: 5px -5px;
}
#img_info {
  width: 100%;
  padding: 10px;
}
#img_info .img_content {
  width: 100%;
}
#img_info .img_content img {
  width: 100%;
}
#addShopCart {
  width: 100%;
  height: 80px;
  position: fixed;
  bottom: 0;
  display: flex;
  flex-direction: row;
  background: #ffffff;
}
#addShopCart #addShopCart_left {
  flex: 1;
  position: relative;
}
#addShopCart #addShopCart_left img {
  width: 30px;
  height: 30px;
  position: absolute;
  left: 50%;
  margin-left: -15px;
  margin-top: 12px;
}
#addShopCart #addShopCart_left .Shop_k {
  width: 40px;
  height: 40px;
  position: absolute;
  left: 50%;
  color: #333333;
  margin-left: -20px;
  margin-top: 50px;
}
#addShopCart #addShopCart_middle {
  flex: 1;
  position: relative;
}
#addShopCart #addShopCart_middle img {
  width: 30px;
  height: 30px;
  position: absolute;
  left: 50%;
  margin-left: -15px;
  margin-top: 12px;
}
#addShopCart #addShopCart_middle .Shop_k {
  width: 50px;
  height: 40px;
  position: absolute;
  left: 50%;
  color: #333333;
  margin-left: -25px;
  margin-top: 50px;
}
#addShopCart #addShopCart_right {
  flex: 3;
}
#addShopCart #addShopCart_right #addShopCart_right_box {
  width: 200px;
  height: 40px;
  position: absolute;
  right: 2%;
  top: 50%;
  margin-top: -20px;
  display: flex;
  flex-direction: row;
}
#add_cart {
  flex: 1;
  height: 40px;
  color: #ffffff;
  font-size: 18px;
  line-height: 40px;
  text-align: center;
  font-weight: bolder;
  background: #cb9855;
  border-top-left-radius: 12px;
  border-bottom-left-radius: 12px;
}
#buy_now {
  flex: 1;
  height: 40px;
  color: #ffffff;
  font-size: 18px;
  line-height: 40px;
  text-align: center;
  font-weight: bolder;
  background: #ed2424;
  border-top-right-radius: 12px;
  border-bottom-right-radius: 12px;
}
</style>
