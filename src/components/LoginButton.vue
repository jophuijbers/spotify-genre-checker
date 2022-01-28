<template>
  <div>
      <p>Login</p>
  </div>
</template>

<script>
export default {
  name: 'loginBtn',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@use '../styles/base/variables.scss' as *;

    div {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 200px;
      height: 75px;
      background: $default-gradient;
      border-radius: 15px;
      box-shadow: 5px 5px 10px 0px rgba(0,0,0,0.35);
        p {
          font-size: 2rem;
          font-weight: bold;
          color: white;
        }
    }
</style>
