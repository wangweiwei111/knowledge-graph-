<template>
  <div id="app">
  <div class='lead'>download</div>
  <div id='main'>
  <div id='left'>
  <div class='lead'></div>
  <div class='line'></div>
  </div>
  <router-view></router-view>
  <div id='right'>
  <div class='lead'></div>
  <div class='line'></div>
  </div>
  </div>
  <div id='nav'>
  <div>主页</div>
  <div>
  <div>菜单栏</div>
  <div>
  <div><router-link to='about'>模式层</router-link></div>
  <div>置信度分析</div>
  <div><router-link to='home'>数据层</router-link></div>
  <div>实体统计</div>
  <div>图层统计</div>
  <div class='lead'></div>
  </div>
  </div>
  </div> 
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      msg: "hello world!"
    };
    }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  display:grid;
  grid-column-gap: 1rem ;
}
</style>
