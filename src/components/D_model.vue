<template>
  <div id="Dmodel">
    <ul id="Dm_ul">
      <li>
        <img src="../assets/oss_29_goods342019010209230283253.jpg">
        <h4>和田碧玉手镯对对对对对对</h4>
        <h5>
          <span class="Dm_li_￥">￥</span>
          <span class="Dm_li_price">108000.00</span>
        </h5>
      </li>
      <li>
        <img :src="src">
        <h4>和田碧玉手镯对对对对对对</h4>
        <h5>
          <span class="Dm_li_￥">￥</span>
          <span class="Dm_li_price">108000.00</span>
        </h5>
      </li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
      <li>6</li>
    </ul>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      src:"../assets/oss_29_goods342019010209230283253.jpg"
    }
  },
};
</script>
<style scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
#Dmodel {
  height: 150px;
  overflow-x: scroll;
}
#Dmodel::-webkit-scrollbar {
  display: none;
}
#Dm_ul {
  width: 720px;
  height: 150px;
  box-sizing: border-box;
  background: #ffffff;
  border-bottom: 2px solid #c0b5b5;
}
#Dm_ul li {
  /* border: red 2px dashed; */
  height: 148px;
  width: 120px;
  float: left;
  position: relative;
}
#Dm_ul li img {
  height: 80px;
  width: 80px;
  border-radius: 10px;
  position: absolute;
  left: 50%;
  margin-left: -40px;
  top: 5px;
}
#Dm_ul li h4 {
  height: 20px;
  width: 110px;
  position: absolute;
  left: 12px;
  bottom: 0;
  margin-bottom: 35px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
#Dm_ul li h5 {
  height: 20px;
  width: 102px;
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


