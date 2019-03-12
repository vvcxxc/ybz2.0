<template>
  <div id="D_list">
    <div id="D_list_1">
      <div class="list_title">品牌 :</div>
      <div class="list_content">
        <span class="list-content-type" @click="toList('产商,玉巴扎自营')">玉巴扎自营</span>
        <span class="list-content-type" @click="toList('产商,华玉盛世')">华玉盛世</span>
        <span class="list-content-type" @click="toList('产商,拓颖珠宝')">拓颖珠宝</span>
        <span class="list-content-type" @click="toList('产商,每一颗')">每一颗</span>
        <span class="list-content-type" @click="toList('产商,钰时尚')">钰时尚</span>
        <span class="list-content-type" @click="toList('产商,梵润珠宝')">梵润珠宝</span>
      </div>
    </div>
    <div id="D_list_2">
      <div class="list_title">颜色 :</div>
      <div class="list_content">
        <span class="list-content-type" @click="toList('颜色,白玉')">白玉</span>
        <span class="list-content-type" @click="toList('颜色,青玉')">青玉</span>
        <span class="list-content-type" @click="toList('颜色,青白玉')">青白玉</span>
        <span class="list-content-type" @click="toList('颜色,黄玉')">黄玉</span>
        <span class="list-content-type" @click="toList('颜色,碧玉')">碧玉</span>
        <span class="list-content-type" @click="toList('颜色,墨玉')">墨玉</span>
        <span class="list-content-type" @click="toList('颜色,糖玉')">糖玉</span>
      </div>
    </div>
    <div id="D_list_3">
      <div class="list_title">产地 :</div>
      <div class="list_content">
        <span class="list-content-type" @click="toList('产地,新疆料')">新疆料</span>
        <span class="list-content-type" @click="toList('产地,青岛料')">青岛料</span>
        <span class="list-content-type" @click="toList('产地,俄罗斯料')">俄罗斯料</span>
        <span class="list-content-type" @click="toList('产地,韩国料')">韩国料</span>
      </div>
    </div>
    <div id="D_list_4">
      <div class="list_title">款式 :</div>
      <div class="list_content">
        <span class="list-content-type" @click="toList('款式,原石')">原石</span>
        <span class="list-content-type" @click="toList('款式,项链')">项链</span>
        <span class="list-content-type" @click="toList('款式,摆件')">摆件</span>
        <span class="list-content-type" @click="toList('款式,戒指')">戒指</span>
        <span class="list-content-type" @click="toList('款式,把件')">把件</span>
        <span class="list-content-type" @click="toList('款式,耳饰')">耳饰</span>
        <span class="list-content-type" @click="toList('款式,串珠|手链')">串珠|手链</span>
        <span class="list-content-type" @click="toList('款式,手镯')">手镯</span>
        <span class="list-content-type" @click="toList('款式,更多')">更多</span>
      </div>
    </div>
    <Dfooter/>
  </div>
</template>
<script>
import Dfooter from "../components/D_footer.vue";
export default {
  created() {
    this.$store.commit("editF_cur", 1);
  },
  methods: {
    toList(type) {
      // this.changeF();
      this.$router.push({ path: "/tab/"+type});
    }
  },
  components: {
    Dfooter
  }
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#D_list {
  width: 100%;
  height: 100%;
  position: absolute;
  background: #f4f4f4;
  padding-bottom: 60px;
  display: flex;
  flex-direction: column;
}
#D_list_1 {
  padding: 10px;
  border-bottom: 1px #686868 dashed;
  flex: 25%;
  width: 100%;
  overflow: scroll;
}
#D_list_2 {
  padding: 10px;
  border-bottom: 1px #686868 dashed;
  flex: 25%;
  width: 100%;
  overflow: scroll;
}
#D_list_3 {
  padding: 10px;
  border-bottom: 1px #686868 dashed;
  flex: 25%;
  width: 100%;
  overflow: scroll;
}
#D_list_4 {
  padding: 10px;
  border-bottom: 1px #686868 dashed;
  flex: 25%;
  width: 100%;
  overflow: scroll;
}
#D_list_1::-webkit-scrollbar {
  display: none;
}
#D_list_2::-webkit-scrollbar {
  display: none;
}
#D_list_3::-webkit-scrollbar {
  display: none;
}
#D_list_4::-webkit-scrollbar {
  display: none;
}
.list_title {
  width: 100%;
  text-align: left;
  font-weight: bolder;
  font-size: 16px;
  color: #686868;
}
.list_content {
  width: 100%;
  padding: 10px;
}
.list_content .list-content-type {
  display: inline-block;
  float: left;
  margin: 5px 10px;
  border: 1px solid #686868;
  border-radius: 5px;
  width: 80px;
  font-size: 15px;
  height: 25px;
  line-height: 22px;
  text-align: center;
}
</style>

