<template>
  <div id="app">
    <Nav />
    <router-view class="route-page"/>
  </div>
</template>

<style>

</style>
<script>
import Nav from "./components/Nav";
export default {
  components: {Nav}
}
</script>

<style>
 .route-page {
   padding-top: 88px;
 }
</style>