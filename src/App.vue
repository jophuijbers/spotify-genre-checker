<template>
  <div id="app">
    <Nav />
    <div class="page">
      <router-view/>
    </div>
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
 .page {
   padding-top: 88px;
 }
</style>