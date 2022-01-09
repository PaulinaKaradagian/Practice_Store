<template>
  
  <main-header />
  <router-view />
  
</template>


<script>
import MainHeader from "@/components/includes/MainHeader.vue"
export default{
  name: "App",
  components: {
    MainHeader,
  }
}

</script>


<style scoped>
*{
  margin: 0px;
  padding: 0px;
}
</style>
