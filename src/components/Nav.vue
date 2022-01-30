<template>
<div class="nav fixed-top align-items-center">
  <p @click="home" class="home-button h1 font-weight-bold">Spotify genre checker</p>

  <div v-if="isAuthenticated" @click="logout" class="logout-button d-flex align-items-center text-nowrap ml-auto">
    <p class="h3 font-weight-bold mr-3">Logout</p>
    <img src="../assets/sign-out-alt-solid.svg" alt="" class="icon">
  </div>
  <div v-else @click="login" class="login-button d-flex align-items-center text-nowrap ml-auto">
    <p class="h3 font-weight-bold mr-3">Login</p>
    <img src="../assets/sign-in-alt-solid.svg" alt="" class="icon">
  </div>
</div>
</template>

<script>
import {mapGetters} from "vuex";
import {LOGOUT} from "../store/actions.type";

export default {
  name: "Nav",
  methods: {
    home() {
      this.$router.push('/').catch(()=>{});
    },
    login() {
      window.open(this.authUrl, '_self')
    },
    async logout() {
      await this.$store.dispatch(LOGOUT)
      await this.$router.push('/').catch(() => {})
    }
  },
  computed: {
    ...mapGetters(['isAuthenticated', 'authUrl'])
  }
}
</script>

<style scoped lang="scss">
@use '../styles/base/variables' as *;
.nav {
  padding: 20px;
  background-color: $default-secondary;
  box-shadow: 5px 5px 10px 0 rgba(0,0,0,0.35);

  .home-button, .logout-button, .login-button {
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