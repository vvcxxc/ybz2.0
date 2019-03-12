<template>
  <div id="app">
    <div id="search_up"></div>
    <Dsearch/>
    <div id="lbtBox">
      <Dlbt/>
    </div>
    <div id="D_bannerBox">
      <div class="D_banner" @click="toList('款式,原石')">
        <img class="B_img" src="./assets/classification1.png">
        <div class="B_font">原石</div>
      </div>
      <div class="D_banner" @click="toList('款式,手镯')">
        <img class="B_img" src="./assets/classification2.png">
        <div class="B_font">手镯</div>
      </div>
      <div class="D_banner" @click="toList('款式,串珠|手链')">
        <img class="B_img" src="./assets/classification3.png">
        <div class="B_font">串珠/手链</div>
      </div>
      <div class="D_banner" @click="toList('款式,耳饰')">
        <img class="B_img" src="./assets/classification4.png">
        <div class="B_font">耳饰</div>
      </div>
      <div class="D_banner" @click="toList('款式,戒指')">
        <img class="B_img" src="./assets/classification5.png">
        <div class="B_font">戒指</div>
      </div>
      <div class="D_banner" @click="toList('款式,项链')">
        <img class="B_img" src="./assets/classification6.png">
        <div class="B_font">项链</div>
      </div>
      <div class="D_banner" @click="toList('款式,摆件')">
        <img class="B_img" src="./assets/classification7.png">
        <div class="B_font">摆件</div>
      </div>
      <div class="D_banner" @click="toList('款式,更多')">
        <img class="B_img" src="./assets/classification8.png">
        <div class="B_font">更多</div>
      </div>
    </div>
    <div class="nav_img">
      <img src="./assets/specialField1.png">
      <Dmodel/>
    </div>
    <div class="nav_img">
      <img src="./assets/specialField2.png">
      <Dmodel/>
    </div>
    <div class="nav_img">
      <img src="./assets/specialField3.png">
      <Dmodel/>
    </div>
    <div id="D_ss">
      <img id="D_ss_img" src="./assets/recommend.jpg">
      <div id="D_ss_list">
        <!-- <//////////////////////////////////////////////////////////////////> -->
        <div class="D_shop" v-for="(item,idx) in items" :key="idx" @click="toInformation(item.sid)">
          <img :src="item.uimg0">
          <h4>{{item.utitle}}</h4>
          <h5>
            <span class="Dm_li_￥">￥</span>
            <span class="Dm_li_price">{{item.uprice}}</span>
          </h5>
        </div>

        <!-- <div class="D_shop">
          <img src="./assets/oss_29_goods342019010209230283253.jpg">
          <h4>和田碧玉手镯对对对对对对</h4>
          <h5>
            <span class="Dm_li_￥">￥</span>
            <span class="Dm_li_price">108000.00</span>
          </h5>
        </div>
        <div class="D_shop">
          <img src="./assets/oss_29_goods342019010209230283253.jpg">
          <h4>和田碧玉手镯对对对对对对</h4>
          <h5>
            <span class="Dm_li_￥">￥</span>
            <span class="Dm_li_price">108000.00</span>
          </h5>
        </div> -->
        <!-- <//////////////////////////////////////////////////////////////////> -->
      </div>
    </div>
    <div id="footer_up"></div>
    <Dfooter/>
  </div>
</template>

<script>
import Dfooter from "./components/D_footer.vue";
import Dlbt from "./components/D_lbt.vue";
import Dsearch from "./components/D_search.vue";
import Dmodel from "./components/D_model.vue";
export default {
  data(){
    return{
      items: []
    }
  },
  name: "app",
  components: {
    Dsearch,
    Dlbt,
    Dmodel,
    Dfooter
  },
  created() {
    this.$store.commit("editF_cur", 0);
  },
  async mounted() {
    await this.getShopLists();
  },
  methods: {
    toList(type) {
      this.$router.push({ path: "/tab/"+type});
    },
    toInformation(sid) {
      this.$router.push({ path: "/information/"+sid});
    },
    async getShopLists() {
      //要不要搞懒加载？
      let data0 = await this.$axios.get("http://localhost:3000/shoplist");
      this.items = data0.data;
    },
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  /* overflow-x: hidden; */
}
#app {
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
#search_up {
  width: 100%;
  height: 50px;
}
#lbtBox {
  width: 100%;
  height: 180px;
}
#D_bannerBox {
  height: 200px;
  display: flex;
  flex-wrap: wrap;
}
.D_banner {
  flex: 25%;
  /* border: 1px dashed #ccc; */
  position: relative;
}
.B_img {
  width: 40px;
  height: 40px;
  display: block;
  position: absolute;
  left: 50%;
  margin-top: 20px;
  margin-left: -20px;
}
.B_font {
  width: 80px;
  height: 20px;
  font-size: 16px;
  color: #686868;
  text-align: center;
  display: block;
  position: absolute;
  left: 50%;
  bottom: 0;
  margin-bottom: 10px;
  margin-left: -40px;
}
.nav_img {
  width: 100%;
  height: 260px;
  padding-top: 5px;
  background: #ededf0;
}
.nav_img img {
  width: 100%;
  height: 90px;
  margin-bottom: 2px;
}
#D_ss {
  padding-top: 5px;
}
#D_ss_img {
  width: 100%;
  height: 35px;
}
#D_ss_list {
  width: 100%;
  /* background: yellow; */
  display: flex;
  flex-wrap: wrap;
}
#D_ss_list::after {
  flex: 50%;
  content: "";
}
.D_shop {
  flex: 50%;
  height: 220px;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  /* border: red dashed 2px; */
  position: relative;
}
#footer_up {
  height: 78px;
  width: 100%;
}

.D_shop img {
  height: 150px;
  width: 150px;
  border-radius: 10px;
  position: absolute;
  left: 50%;
  margin-left: -75px;
  top: 5px;
}
.D_shop h4 {
  height: 20px;
  width: 170px;
  position: absolute;
  left: 12px;
  bottom: 0;
  margin-bottom: 35px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.D_shop h5 {
  height: 20px;
  width: 140px;
  color: #f36a6a;
  position: absolute;
  left: 8px;
  bottom: 0;
  margin-bottom: 15px;
}
.Dm_li_￥ {
  height: 20px;
  width: 14px;
  font-size: 14px;
  display: inline-block;
  float: left;
}
.Dm_li_price {
  display: inline-block;
  float: left;
  height: 20px;
  width: 85px;
  font-size: 16px;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
