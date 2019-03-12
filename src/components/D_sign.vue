<template>
  <div id="Dsign">
    <div id="sign_img1">
      <img src="../assets/banner.jpg">
    </div>
    <div id="sign_img2">
      <img src="../assets/ptag.jpg">
    </div>
    <div id="sign_content">
      <div class="msg_text">
        <input type="text" id="msgPhone" placeholder="请输入你的手机号码">
      </div>
      <div class="msg_text">
        <input type="password" id="msgPass0" placeholder="请输入6~16位密码">
      </div>
      <div class="msg_text">
        <input type="password" id="msgPass1" placeholder="请再次输入密码">
      </div>
      <div class="msg_text">
        <input type="text" id="msgCheck" placeholder="请输入验证码">
      </div>
      <div class="msg_text">验证码：
        <div id="msg_proving" @click="proving"></div>
      </div>
    </div>
    <div id="sign_now">
      <div id="sign_now_c" @click="logCheck">立即注册</div>
    </div>
  </div>
</template>
<script>
export default {
  created() {
    this.$store.commit("editUserTitle", false);
  },
  mounted() {
    this.proving();
  },
  methods: {
    async logCheck() {
      let msgA = document.getElementById("msgPhone").value.trim();
      let msgB = document.getElementById("msgPass0").value.trim();
      let msgC = document.getElementById("msgPass1").value.trim();
      let msgD = document.getElementById("msgCheck").value.trim();
      let msgE = document.getElementById("msg_proving").innerText;
      var patt0 = /^1[34578]\d{9}$/;
      var patt1 = /^[a-zA-Z0-9]{6,10}$/gi;

      if (msgA == "" || msgB == "" || msgC == "" || msgD == "") {
        alert("还有信息未输入");
      } else if (!msgA.match(patt0)) {
        alert("手机格式不正确");
      } else if (!msgB.match(patt1)) {
        alert("密码必须6~10位");
      } else if (msgC != msgB) {
        alert("两次密码不同");
      } else if (msgD != msgE) {
        alert("验证码输入错误");
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
        //没错的话
        alert("注册成功，点击跳转登录页面");
        this.toLogin();
        //加上逻辑后把return res删掉试试;
        return res;
      });
    },
    toLogin() {
      this.$router.push({ name: "login" });
    },
    proving() {
      var pa = parseInt(Math.random() * 999);
      var pb = parseInt(Math.random() * 999);
      var pc = parseInt(Math.random() * 999);
      document.getElementById("msg_proving").style.color =
        "rgb(" + pa + "," + pb + "," + pc + ")";
      var num1 = "";
      //随机数，吧毒瘤大写I跟小写l去掉了
      var str =
        "1234567890qwertyuiopasdfghjkzxcvbnmQWERTYUOPASDFGHJKLZXCVBNM";
      for (var i = 0; i < 4; i++) {
        num1 += str.charAt(parseInt(Math.random() * str.length));
      }
      document.getElementById("msg_proving").innerText = num1;
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
#Dsign {
  width: 100%;
  height: 100%;
  padding-top: 60px;
  position: absolute;
}
#sign_img1 {
  width: 100%;
  height: 150px;
}
#sign_img1 img {
  width: 100%;
  height: 100%;
}
#sign_img2 {
  width: 100%;
  height: 40px;
}
#sign_img2 img {
  width: 100%;
  height: 100%;
}
#sign_content {
  width: 100%;
  height: 300px;
}
#sign_content .msg_text {
  width: 100%;
  height: 60px;
  padding: 15px 40px;
  position: relative;
}
#sign_content .msg_text input {
  width: 280px;
  height: 40px;
  border: none;
  background: #f3f0f0;
  border-bottom: 1px solid #686868;
}
#msg_proving {
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: -50px;
  margin-top: -20px;
  width: 100px;
  height: 40px;
  border-radius: 15px;
  background: rgb(180, 180, 125);
  font-style: italic;
  text-align: center;
  font-size: 25px;
  line-height: 40px;
}
#sign_now {
  width: 100%;
  height: 40px;
}
#sign_now_c {
  width: 220px;
  height: 40px;
  line-height: 40px;
  font-size: 20px;
  text-align: center;
  background: #686868;
  border-radius: 10px;
  color: white;
  margin: 0 auto;
}
</style>

