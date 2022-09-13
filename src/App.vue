<template>
   <navBar></navBar>
  <router-view/>
 <copyRight></copyRight>
</template>

<script>

import navBar from './components/navBar.vue'
import copyRight from './components/copyRight.vue' 

export default {
  name:'App',
  components:{
    navBar,
    copyRight

}
 
}
</script>

<style>
hr {
  border:none;
  color:rgb(180, 179, 179);
  background-color:rgb(179, 179, 179);
  height:1px;
}
</style>