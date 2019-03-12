<template>
  <div id="Dsb">
    <div id="Dsearch">
      <div class="row" @click="toList">
        <img src="../assets/cat_icon.png">
        <div>分类</div>
      </div>
      <div class="search_box">
        <input type="text" placeholder="请输入搜索关键字">
      </div>
      <div class="search_btn">
        <div>搜索</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    toList() {
      // this.changeF();
      this.$router.push({ name: "list" });
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
#Dsb {
  background: #ffffff;
  border-bottom: 1px #ccc solid;
  padding-top: 3px;
  padding-bottom: 4px;
  padding-left: 2px;
  position: fixed;
  top: 0;
  height: 50px;
  width: 100%;
  z-index: 1;
}
#Dsearch {
  height: 40px;
  width: 100%;
  display: flex;
  flex-direction: row;
}
.row {
  flex: 2;
  padding: 3px;
}
.row img {
  width: 45%;
}
.row div {
  height: 14px;
  line-height: 14px;
  font-size: 14px;
}
.search_box {
  flex: 8;
  padding: 5px;
}
.search_box input {
  height: 100%;
  width: 100%;
  border-radius: 8px;
  background: rgba(190, 171, 171, 0.356);
}
.search_btn {
  flex: 4;
  padding: 5px;
}
.search_btn div {
  height: 100%;
  line-height: 170%;
  width: 60px;
  text-align: center;
  border-right: 1px #ccc solid;
  border-bottom: 1px #ccc solid;
  border-radius: 8px;
}
</style>


