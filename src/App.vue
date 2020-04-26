<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
  @import './assets/less/reset.less';
  @import "./assets/less/globle.less";
  #app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    height: 100%;
    width: 100%;
    word-break: break-all;
    background: white;
  }
</style>
