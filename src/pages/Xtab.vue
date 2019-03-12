<template>
  <div id="Dtab">
    <div id="search_up"></div>
    <Dsearch/>
    <div id="tab_top">
      <img src="../assets/ptag.jpg">
    </div>
    <div id="D_ss_list">
      <div class="D_shop" v-for="(item,idx) in items" :key="idx" @click="toInformation(item.sid)">
        <img :src="item.uimg0">
        <h4>{{item.utitle}}</h4>
        <h5>
          <span class="Dm_li_￥">￥</span>
          <span class="Dm_li_price">{{item.uprice}}</span>
        </h5>
      </div>
      <!-- <//////////////////////////////////////////////////////////////////> -->
    </div>
    <div id="footer_up"></div>
    <Dfooter/>
  </div>
</template>
<script>
import Dsearch from "../components/D_search.vue";
import Dfooter from "../components/D_footer.vue";
export default {
  name: "tab",
  data() {
    return { items: [] };
  },
  created() {
    //  接收到传入类型，拿去后端查,放进mounted()，四种情况调用getShopLists（参数）
    // var type0 = this.$route.params.type.split(",");
    // if (type0[0] == "产商") {
    //   console.log("111" + type0[1]);
    // } else if (type0[0] == "颜色") {
    //   console.log("222" + type0[1]);
    // } else if (type0[0] == "产地") {
    //   console.log("333" + type0[1]);
    // } else if (type0[0] == "款式") {
    //   console.log("444" + type0[1]);
    // }
  },
  mounted() {
    this.getShopLists();
  },
  methods: {
    toInformation(sid) {
      this.$router.push({ path: "/information/" + sid });
    },
    async getShopLists() {
      //要不要搞懒加载？
      let data0 = await this.$axios.get("http://localhost:3000/shoplist");
      this.items = data0.data;
    }
  },
  components: {
    Dsearch,
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
#search_up {
  width: 100%;
  height: 50px;
}
#Dtab {
  width: 100%;
  height: 100%;
  position: absolute;

  background: #ddd5d5;
}
#tab_top {
  width: 100%;
  height: 30px;
  border-bottom: solid #686868 2px;
}
#tab_top img {
  width: 100%;
}
#D_ss_list {
  background: #ddd5d5;
  width: 100%;

  padding-left: 5px;
  padding-right: 5px;
}
.D_shop {
  flex: 50%;
  height: 220px;
  padding: 0;
  margin-top: 5px;
  border-right: 2px #ddd5d5 solid;
  border-left: 2px #ddd5d5 solid;
  box-sizing: border-box;
  background: #ffffff;
  position: relative;
  border-radius: 20px;
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
  width: 150px;
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

