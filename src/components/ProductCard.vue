<template>
  <div id="productCard">
    <img :src="img_src" alt="Image not found!!!">
    <h4>Name: {{name}}</h4>
    <h4>Brand: {{brand}}</h4>
    <h4>Price: {{price}}$</h4>
    <slot name="buy"/>
    <slot name="add"/>
  </div>
</template>

<script>
export default {
  name: "ProductCard",
  props: ['name', 'brand', 'price', 'img_src', 'numberofProducts'],
  methods: {

  }
}
</script>

<style scoped lang="scss">
#productCard {
  width: 30%;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 5px 5px 1px rgba(0, 0, 0, 0.3);
  margin-bottom: 40px;
  img{
    width: 100%;
  }
  h4{
    margin: 10px 0 10px 50px;
    color: #000000;
  }
}
</style>
