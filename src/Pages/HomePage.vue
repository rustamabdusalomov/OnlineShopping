<template>
  <div id="homePage">
    <h1>SHOP THE BRANDS YOU LOVE</h1>
    <img src="../images/home/2.jpg" alt="Image not found!!!">
  </div>
</template>

<script>
export default {
  name: "HomePage"
}
</script>

<style scoped lang="scss">
  #homePage{
    width: 100%;
    text-align: center;
    margin: 0 auto;
    position: relative;
    background-color: #757575;
    img {
      width: 100%;
    }
    h1 {
      top: 130px;
      left: 420px;
      color: #000000;
      position: absolute;
    }
  }
</style>
