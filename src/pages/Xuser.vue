<template>
  <div id="Duser">
    <div id="head">
      <a id="header_back" @click="userBack">
        <img src="../assets/back_icon.png">
      </a>
      <div id="header_title">{{this.$store.state.userTitleBull?"登录":"注册"}}</div>
    </div>
    <div id="userContent">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
export default {
  name: "user",
  data() {
    return {
      userTitle:this.$store.state.userTitle
    };
  },methods: {
    userBack(){
      window.history.back();
    }
    
  },
  components: {}
};
</script>
<style scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
#Duser {
  width: 100%;
  height: 100%;
  position: absolute;
  background: #f3f0f0;
}
#head {
  height: 50px;
  width: 100%;
  background: #ffffff;
  position:fixed;
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
#header_title {
  height: 24px;
  width: 50px;
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
#userContent {
  width: 100%;
  height: 100%;
}
</style>

