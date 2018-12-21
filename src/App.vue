<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div class="container-fluid">
      <div class="row">
        <div class="col-8 m-3">
           <ProductDisplay></ProductDisplay>
        </div>
        <div class="col m-3">
          <ProductEditor></ProductEditor>
        </div>
      </div>
    </div>
   
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld'
import ProductDisplay from './components/ProductDisplay'
import ProductEditor from './components/ProductEditor'
import Vue from "vue";
export default {
  name: 'App',
  components: {
    ProductDisplay,
    ProductEditor
  },
  provide:function(){
    return {
      eventBus:new Vue()
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
