<template>
  <div class="card">
      <div class="item">
          <img :src="image">
          <p>{{ name }}</p>
      </div>
      
  </div>
</template>

<script>
export default {
  name: 'ItemCard',
  props: ['name', 'image']
}
</script>

<style scoped lang="scss">

@use '../styles/base/variables.scss' as *;

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

    .card {
      width: 200px;
      max-width: 200px;
      min-height: 150px;
      max-height: 250px;
      background-color: $default-cardColor;
      border-radius: 15px;
      box-shadow: 5px 5px 10px 0px rgba(0,0,0,0.35);
      padding: 20px 20px;
      p{
          color: white;
      }
        .item{
           text-align: center;
            img {
                width: 100%;
                 border-radius: 3px;
                box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.35);
                margin-bottom: 12px;
            }
        }
    }

    
</style>
