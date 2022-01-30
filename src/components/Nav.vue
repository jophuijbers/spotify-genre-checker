<template>
<div class="nav fixed-top align-items-center">
  <p class="home-button h1 font-weight-bold">Genre checker</p>
  <div class="logout-button d-flex align-items-center text-nowrap ml-auto">
    <p class="h3 font-weight-bold mr-3">Logout</p>
    <img src="../assets/sign-out-alt-solid.svg" alt="" class="icon">
  </div>
</div>
</template>

<script>
export default {
  name: "Nav"
}
</script>

<style scoped lang="scss">
@use '../styles/base/variables' as *;
.nav {
  padding: 20px;
  background-color: $default-secondary;
  box-shadow: 5px 5px 10px 0 rgba(0,0,0,0.35);

  .home-button, .logout-button {
    .icon {
      width: 40px;
      height: 40px;
    }
    &:hover {
      cursor: pointer;
    }
  }
}
</style>