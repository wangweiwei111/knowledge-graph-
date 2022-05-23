<template>
  <div id="app">
    <div class="download">download</div>
    <div class="group">
      <div class="oval"></div>
      <div class="oval"></div>
      <div class="oval"></div>
      <div class="oval"></div>
      <div class="oval"></div>
      <div class="oval"></div>
      <div class="oval"></div>
      <div class="oval"></div>
      <div class="oval"></div>
    </div>
    <div id="main">
      <div id="left">
        <div class="lead"></div>
        <div class="line"></div>
      </div>
      <router-view></router-view>
      <div id="right">
        <div class="lead"></div>
        <div class="line"></div>
      </div>
    </div>
    <div class="group">
      <div class="oval"></div>
      <div class="oval"></div>
      <div class="oval"></div>
      <div class="oval"></div>
      <div class="oval"></div>
      <div class="oval"></div>
      <div class="oval"></div>
      <div class="oval"></div>
      <div class="oval"></div>
    </div>
    <div id="nav">
      <div>主页</div>
      <div>
        <div>菜单栏</div>
        <div>
          <div><router-link to="about">模式层</router-link></div>
          <div>置信度分析</div>
          <div><router-link to="home">数据层</router-link></div>
          <div>实体统计</div>
          <div>图层统计</div>
          <div class="lead"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "App",
  data() {
    return {
      msg: "hello world!",
    };
  },
};
</script>

<style scope="this api replaced by slot-scope in 2.5.0+">
@import "assets/css/app.css";
</style>
