<template>
  <div id="Dlogin">
    <div id="D_login_msg">
      <div class="msg_text">
        <input type="text" id="msgPhone" placeholder="请输入你的手机号码">
      </div>
      <div class="msg_text">
        <input type="password" id="msgPass" placeholder="请输入你的密码">
      </div>
    </div>
    <div id="user_log">
      <div id="btn1" @click="logCheck">登 录</div>
    </div>
    <div id="user_sign" @click="toSign">
      <div id="btn2">注 册</div>
    </div>
  </div>
</template>
<script>
export default {
  created() {
    this.$store.commit("editUserTitle", true);
  },
  methods: {
    async logCheck() {
      let msgA = document.getElementById("msgPhone").value.trim();
      let msgB = document.getElementById("msgPass").value.trim();

      if (msgA == "") {
        alert("手机号不能为空");
      } else if (msgB == "") {
        alert("密码不能为空");
      } else {
        //传到后端检测
        await this.getlists(msgA, msgB);
      }
    },
    async getlists(msgA, msgB) {
      //后端地址
      const url = "http://localhost:3000/users";
      var params = new URLSearchParams();
      params.append("_buyerid", msgA); //你要传给后台的参数值 key/value
      params.append("_buyerpasa", msgB);
      this.$axios({
        method: "post",
        url: url,
        data: params
      }).then(res => {
        // console.log(res.data);
        //res.data为返回结果
        //加上逻辑后把return res删掉试试;
        //************************************ */
        //加判断哦，别随便切登录状态
        localStorage.setItem("isLogIn", "true");

        //往仓库设置用户名，电话user_name、user_phone
        //this.$store.commit("edituser_name", user_name);
        //this.$store.commit("edituser_phone", user_phone);
        this.$router.push({ name: "app" });
        return res;
      });
    },
    toSign() {
      this.$router.push({ name: "sign" });
    }
  }
};
</script>
<style scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
#Dlogin {
  width: 100%;
  height: 100%;
  position: absolute;
}
#D_login_msg {
  width: 100%;
  height: 150px;
  margin-top: 100px;
  margin-bottom: 50px;
  padding: 20px 10px;
}
#D_login_msg .msg_text {
  margin: 20px 5px;
  width: 300px;
}
#D_login_msg .msg_text input {
  margin: 5px 10px;
  width: 280px;
  height: 30px;
  border: none;
  background: #f3f0f0;
  border-bottom: 1px solid #686868;
}
#user_log {
  width: 100%;
  height: 80px;
  position: relative;
}
#user_sign {
  width: 100%;
  height: 80px;
  position: relative;
}
#btn1 {
  position: absolute;
  width: 250px;
  height: 40px;
  top: 50%;
  left: 50%;
  margin-left: -125px;
  margin-top: -20px;
  border-radius: 15px;
  text-align: center;
  font-size: 20px;
  color: #ffffff;
  line-height: 38px;
  background: #686868;
}
#btn2 {
  position: absolute;
  width: 250px;
  height: 40px;
  top: 50%;
  left: 50%;
  margin-left: -125px;
  margin-top: -20px;
  border-radius: 15px;
  text-align: center;
  font-size: 20px;
  color: #686868;
  line-height: 38px;
  background: #ffffff;
  border: 2px solid #686868;
}
</style>

