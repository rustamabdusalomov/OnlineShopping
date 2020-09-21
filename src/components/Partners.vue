<template>
  <div id="partners">
    <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      Accusantium at blanditiis commodi deleniti
      facere in incidunt ipsa, maiores, nisi nostrum
      obcaecati soluta temporibus voluptate!
      Accusamus excepturi fuga mollitia recusandae unde.</h3>
    <img src="../images/about/2.jpg" alt="Image not found!">
  </div>
</template>

<script>
export default {
  name: "Partners"
}
</script>

<style scoped lang="scss">
#partners{
  background-color: #e9b83b;
  box-sizing: border-box;
  width: 100%;
  display: flex;
  justify-content: space-between;
  h3 {
    width: 45%;
    display: inline;
    margin-top: 190px;
    margin-left: 60px;
  }
  img {
    width: 45%;
  }
}
</style>
