<template>
  <div id="D_mine">
    <div>
      <div id="M_personal">
        <img id="M_personal_img" src="../assets/user_default_img.png">
        <div id="user_name">{{userName}}</div>
        <div id="user_phone">{{userPhone}}</div>
      </div>
      <div id="M_nav">
        <div id="M_nav_me">
          <div id="M_nav_list">我的订单</div>
          <div id="M_nav_all">查看全部 ></div>
        </div>
        <div id="M_nav_banner">
          <div class="M_nav_list">
            <img src="../assets/delivergoods1.png">
            <p>代付款</p>
          </div>
          <div class="M_nav_list">
            <img src="../assets/delivergoods2.png">
            <p>代发货</p>
          </div>
          <div class="M_nav_list">
            <img src="../assets/delivergoods3.png">
            <p>代收货</p>
          </div>
          <div class="M_nav_list">
            <img src="../assets/delivergoods4.png">
            <p>售后管理</p>
          </div>
        </div>
      </div>
      <div id="M_spread">
        <div class="nav_spread_list">
          <div class="M_spread_num">0.00</div>
          <div class="M_spread_font">推广红利</div>
        </div>
        <div class="nav_spread_list">
          <div class="M_spread_num">0.00</div>
          <div class="M_spread_font">现金红包</div>
        </div>
        <div class="nav_spread_list">
          <div class="M_spread_num">3张可用</div>
          <div class="M_spread_font">优惠券</div>
        </div>
      </div>
      <div id="Amb">
        <div id="Amb_1">马上去推广</div>
        <div id="Amb_2"><span><img src="../assets/income_icon.png" /></span><span>我是推广大使</span></div>
      </div>
      <div id="setAddress">
        <div id="setAddress_1">地址管理</div>
        <div id="setAddress_2">设置</div>
      </div>
    </div>
    <Dfooter />
  </div>
</template>
<script>
import Dfooter from "../components/D_footer.vue";
export default {
   name: "mine",
  data() {
    return {
      userName: this.$store.state.user_name,
      userPhone: this.$store.state.user_phone
    };
  },
  components: {
    Dfooter
  },
  created() {
    this.$store.commit("editF_cur", 3);
  }
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#D_mine {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  background: #f4f4f4;
}
#M_personal {
  height: 100px;
  position: relative;
  background: #ffffff;
  margin-bottom: 10px;
}
#M_personal_img {
  height: 50px;
  width: 50px;
  border-radius: 50%;
  position: absolute;
  left: 20px;
  top: 50%;
  margin-top: -25px;
}
#user_name {
  height: 20px;
  width: 120px;
  position: absolute;
  left: 80px;
  top: 30%;
}
#user_phone {
  height: 20px;
  width: 120px;
  color: #686868;
  position: absolute;
  left: 80px;
  top: 55%;
}
#M_nav {
  width: 100%;
  height: 130px;
  background: #ffffff;
  margin-bottom: 5px;
}
#M_nav #M_nav_me {
  width: 100%;
  height: 40px;
  border-bottom: 1px #ccc solid;
  position: relative;
}
#M_nav #M_nav_me #M_nav_list {
  width: 100px;
  height: 20px;
  font-size: 16px;
  line-height: 20px;
  position: absolute;
  left: 20px;
  top: 50%;
  margin-top: -10px;
}
#M_nav #M_nav_me #M_nav_all {
  width: 80px;
  height: 20px;
  font-size: 14px;
  line-height: 20px;
  position: absolute;
  right: 10px;
  color: #686868;
  top: 50%;
  margin-top: -10px;
}
#M_nav #M_nav_banner {
  width: 100%;
  height: 90px;
  display: flex;
  flex-direction: row;
}
#M_nav #M_nav_banner .M_nav_list {
  height: 100%;
  flex: 25%;
  position: relative;
}
#M_nav #M_nav_banner .M_nav_list img {
  width: 30px;
  height: 30px;
  position: absolute;
  left: 50%;
  margin-left: -15px;
  top: 15%;
}
#M_nav #M_nav_banner .M_nav_list p {
  display: block;
  width: 80px;
  text-align: center;
  height: 20px;
  color: #323232;
  font-weight: bolder;
  position: absolute;
  left: 50%;
  margin-left: -40px;
  bottom: 15%;
}
#M_spread {
  width: 100%;
  height: 80px;
  background: #ffffff;
  display: flex;
  flex-direction: row;
  margin-bottom: 10px;
}
#M_spread .nav_spread_list {
  flex: 33.3%;
  height: 100%;
  border: 1px dashed #ccc;
  position: relative;
}
#M_spread .nav_spread_list .M_spread_num {
  width: 100px;
  height: 20px;
  position: absolute;
  left: 50%;
  top: 20%;
  margin-left: -50px;
  text-align: center;
  color: #f77c7c;
  font-weight: bolder;
}
#M_spread .nav_spread_list .M_spread_font {
  width: 100px;
  height: 20px;
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -50px;
  text-align: center;
  color: #686868;
  font-weight: bolder;
}
#Amb{
  width: 100%;
  height: 80px;
  background: #ffffff;
  margin-bottom: 10px;
}
#Amb_1{
  width: 100%;
  height: 40px;
  border-bottom: 1px dashed #ccc;
  color: #686868;
  padding-left: 5px;
  line-height: 40px;
}
#Amb_2{
  width: 100%;
  height: 40px;
  color: #686868;
  position: relative;
}
#Amb_2 span:nth-child(1){
  display: inline-block;
  height: 40px;
  line-height: 40px;
  position: absolute;
  top: 0;
  left: 5px;
}
#Amb_2 span:nth-child(2){
  display: inline-block;
  height: 40px;
  line-height: 40px;
  position: absolute;
  top: 0;
  left: 45px;
}
#Amb_2 img{
  width: 40px;
  height: 40px;
}
#setAddress{
  width: 100%;
  height: 80px;
  background: #ffffff;
}
#setAddress #setAddress_1{
  width: 100%;
  height: 40px;
  line-height: 40px;
  padding-left: 5px;
  color: #686868;
  border-bottom: 1px #ccc dashed;
}
#setAddress #setAddress_2{
  width: 100%;
  height: 40px;
  line-height: 40px;
  padding-left: 5px;
  color: #686868;
}
</style>

