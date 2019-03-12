<template>
  <div id="D_cart">
    <div id="header">
      <div id="head">
        <a id="header_back" @click="returnPage">
          <img src="../assets/back_icon.png">
        </a>
      </div>
      <div id="header_title">购物车</div>
    </div>

    <div id="C_content">
      <!-- 000000000000000购物列表000000000000000000000 -->
      <div class="C_shopList" v-for="(item,idx) in items" :key="idx">
        <input type="checkbox" class="checkBox" @click="allprice">
        <img :src="item.uimg0">
        <p>{{item.utitle}}</p>
        <i>
          ￥
          <span class="shop_price">{{item.uprice}}</span>
        </i>
        <div class="shop_delete">
          <img class="shop_delete_img" src="../assets/icon_delete.png">
        </div>
        <div class="shop_num_change">
          <button class="cut_num" @click="cutthisnum(idx)">-</button>
          <input type="text" class="shop_num" :value="item.urest">
          <button class="add_num" @click="addthisnum(idx)">+</button>
        </div>
      </div>
      <!-- 000000000000000000000000000000000000 -->
    </div>
    <div id="accounts">
      <div id="accounts_check">
        <input id="all_check" type="checkbox" @click="allcheck">
        <div id="all_check_font">全选</div>
      </div>
      <div id="accounts_price">
        <div id="accounts_price_count">￥100.00</div>
        <div id="accounts_price_explain">（ 已包含运费 ）</div>
      </div>

      <div id="accounts_pay">结算</div>
    </div>
    <!-- 控制图标是否显示 -->
    <div id="C_show" v-show="Cshow">
      <img src="../assets/noState.png">
      <h5>购物车暂无商品~</h5>
    </div>

    <Dfooter/>
  </div>
</template>
<script>
import Dfooter from "../components/D_footer.vue";
export default {
  data() {
    return {
      Cshow: true,
      Cimg0: "../assets/icon_delete.png",

      items: [
        // {
        //   title: "和田碧玉手镯对对对对哒哒哒哒哒哒多对对",
        //   src:
        //     "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1552285221019&di=d8edd32d73ee2df90bbda8f12d2af599&imgtype=0&src=http%3A%2F%2Fimg2.epetbar.com%2F2016-09%2F28%2F08%2F478959a7f1cb6a459261f330bf169a38.jpg",
        //   price: 1000,
        //   value: 1
        // },
        // {
        //   title: "和田碧玉手镯对22222222222222222",
        //   src:
        //     "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1552285221019&di=d8edd32d73ee2df90bbda8f12d2af599&imgtype=0&src=http%3A%2F%2Fimg2.epetbar.com%2F2016-09%2F28%2F08%2F478959a7f1cb6a459261f330bf169a38.jpg",
        //   price: 1230,
        //   value: 2
        // }
      ]
    };
  },
  created() {
    this.$store.commit("editF_cur", 2);
  },
  async mounted() {
    await this.getShopLists();
    // console.log(data);

    await this.allprice();
  },
  updated() {},
  methods: {
    async getShopLists() {
      //购物车接口  未完成：传输user




      let data0 = await this.$axios.get("http://localhost:3000/shoplist");
      let data = data0.data;
      if(data.length==0){
        this.Cshow=true;
      }else{
        this.Cshow=false;
        this.items = data;
      }
    },
    returnPage() {
      this.$store.commit("editF_cur", this.$store.state.F_cur_0);
      window.history.go(-1);
    },
    allcheck() {
      var bull = document.getElementById("all_check").checked;
      var checks = document.getElementsByClassName("checkBox");
      for (let i = 0; i < checks.length; i++) {
        checks[i].checked = bull;
      }
      this.allprice();
    },
    allprice() {
      var all_checkBox = document.getElementsByClassName("checkBox");
      var all_price = document.getElementsByClassName("shop_price");
      var all_num = document.getElementsByClassName("shop_num");
      var _checked_length = 0;
      var _price = 0;
      for (let i = 0; i < all_checkBox.length; i++) {
        if (all_checkBox[i].checked) {
          _checked_length = Number(_checked_length) + Number(1);
          _price =
            Number(_price) +
            Number(all_price[i].innerText) * Number(all_num[i].value);
        }
        if (_checked_length == all_checkBox.length) {
          document.getElementById("all_check").checked = true;
        } else if (_checked_length != all_checkBox.length) {
          document.getElementById("all_check").checked = false;
        }
      }

      document.getElementById("accounts_price_count").innerText = "￥" + _price;
    },
    cutthisnum(idx) {
      var _data = document.getElementsByClassName("shop_num")[idx].value;
      if (_data > 1) {
        document.getElementsByClassName("shop_num")[idx].value =
          Number(_data) - Number(1);
      }
      this.allprice();
    },
    addthisnum(idx) {
      var _data = document.getElementsByClassName("shop_num")[idx].value;
      if (_data < 99) {
        document.getElementsByClassName("shop_num")[idx].value =
          Number(_data) + Number(1);
      }
      this.allprice();
    }
  },
  components: {
    Dfooter
  }
};
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
#D_cart {
  width: 100%;
  height: 100%;
  background: #fff;
  position: absolute;
}

#header {
  height: 50px;
  width: 100%;
  background: #ffffff;
  border-bottom: 2px solid #686868;
  position: fixed;
  top: 0;
  z-index: 1;
}
#header #head {
  height: 24px;
  width: 24px;
  position: absolute;
  left: 15px;
  top: 50%;
  margin-top: -12px;
}
#header #head #header_back {
  height: 100%;
  width: 100%;
}
#header #head #header_back img {
  height: 100%;
  width: 100%;
}
#header #header_title {
  width: 100px;
  font-size: 20px;
  line-height: 40px;
  text-align: center;
  position: absolute;
  left: 50%;
  top: 50%;
  margin-top: -20px;
  margin-left: -50px;
}
#C_content {
  width: 100%;
  height: 100%;
  background: #ccc;
  margin-bottom: 60px;
  overflow: scroll;
}
#C_content::-webkit-scrollbar {
  display: none;
}
#C_show {
  width: 200px;
  height: 200px;
  position: fixed;
  left: 50%;
  top: 50%;
  margin-left: -100px;
  margin-top: -100px;
}
#C_show img {
  width: 100px;
  height: 100px;
  position: absolute;
  left: 50%;
  margin-left: -50px;
  margin-top: 30px;
}
#C_show h5 {
  width: 150px;
  height: 20px;
  font-size: 18px;
  color: #686868;
  position: absolute;
  left: 50%;
  margin-left: -75px;
  margin-top: 150px;
}
#C_content {
  width: 100%;
  padding-top: 50px;
  padding-bottom: 80px;
}
.C_shopList {
  width: 100%;
  height: 150px;
  margin-top: 5px;
  position: relative;
  background: #fff;
}
.C_shopList .shop_delete {
  width: 34px;
  height: 34px;
  position: absolute;
  right: 10px;
  top: 10px;
  padding: 0;
}
.C_shopList .shop_delete .shop_delete_img {
  width: 34px;
  height: 34px;
  margin: 0;
  position: absolute;
  left: 0;
  top: 0;
}
.C_shopList .checkBox {
  width: 20px;
  height: 20px;
  position: absolute;
  top: 50%;
  left: 12px;
}
.C_shopList img {
  width: 100px;
  height: 100px;
  border-radius: 12px;
  position: absolute;
  top: 50%;
  margin-top: -50px;
  left: 40px;
}
.C_shopList p {
  height: 40px;
  width: 150px;
  position: absolute;
  top: 20px;
  left: 150px;
}
.C_shopList i {
  font-weight: bolder;
  color: #ef3d49;
  height: 20px;
  width: 120px;
  position: absolute;
  top: 100px;
  left: 150px;
}
.C_shopList .shop_num_change {
  height: 25px;
  width: 70px;
  position: absolute;
  right: 15px;
  top: 100px;
}
.C_shopList .shop_num_change .cut_num {
  float: left;
  height: 25px;
  width: 20px;
  text-align: center;
  line-height: 25px;
}
.C_shopList .shop_num_change .shop_num {
  float: left;
  height: 25px;
  width: 30px;
  text-align: center;
  line-height: 25px;
}
.C_shopList .shop_num_change .add_num {
  float: left;
  height: 25px;
  width: 20px;
  text-align: center;
  line-height: 25px;
}
#D_cart #accounts {
  width: 100%;
  height: 60px;
  background: #ffffff;
  position: fixed;
  bottom: 75px;
  z-index: 1;
  display: flex;
  flex-direction: row;
}
#accounts_check {
  flex: 1;
  height: 60px;
  position: relative;
}
#accounts_check #all_check {
  width: 20px;
  height: 20px;
  position: absolute;
  left: 5px;
  top: 50%;
  margin-top: -10px;
}
#accounts_check #all_check_font {
  width: 60px;
  height: 25px;
  font-size: 20px;
  line-height: 25px;
  position: absolute;
  left: 35px;
  top: 50%;
  margin-top: -13px;
}
#accounts_price {
  flex: 1;
  height: 60px;
  position: relative;
}
#accounts_price #accounts_price_count {
  position: absolute;
  right: 10%;
  top: 20%;
  color: #ec1927;
  font-size: 20px;
}
#accounts_price #accounts_price_explain {
  position: absolute;
  right: 10%;
  top: 60%;
  color: #a7a3a2;
  font-size: 14px;
}
#accounts_pay {
  flex: 1;
  height: 60px;
  font-size: 18px;
  color: #ffffff;
  font-weight: bolder;
  text-align: center;
  line-height: 60px;
  background: #cb9855;
  position: relative;
}
</style>

