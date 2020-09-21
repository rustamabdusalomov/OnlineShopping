<template>
  <div id="basket">
    <product-card
      v-for="(product,index) in addedProducts"
      :name="product.name"
      :brand="product.brand.toUpperCase()"
      :price="product.price"
      :img_src="product.img_src">
      <button id="delete" slot="add" @click="deleteProduct(index)">Delete</button>
    </product-card>
  </div>
</template>

<script>
import ProductCard from "../components/ProductCard"

export default {
  name: "BasketPage",
  components: {
    'product-card': ProductCard
  },
  props: ['addedProducts'],
  methods: {
    deleteProduct: function (index) {
      // this.addedProducts.splice(product)
      this.$delete(this.addedProducts,index)
      alert('Product deleted!!!')
    }
  }
}
</script>

<style scoped>
#basket {
  display: flex;
  margin: 50px auto;
  justify-content: space-between;
  width: 1000px;
  flex-wrap: wrap;
}
#delete {
  border: none;
  background: indianred;
  padding: 8px 16px;
  border-radius: 5px;
  margin-bottom: 0;
  margin-left: 8px;
  color: #ffffff;
  display: inline;
  box-shadow: 0 4px 4px 1px rgba(0, 0, 0, 0.2);
}
</style>
