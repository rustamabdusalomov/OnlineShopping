<template>
  <div id="clients">
    <img src="../images/about/3.jpg" alt="Image not found!">
    <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      Accusantium at blanditiis commodi deleniti
      facere in incidunt ipsa, maiores, nisi nostrum
      obcaecati soluta temporibus voluptate!
      Accusamus excepturi fuga mollitia recusandae unde.</h3>
  </div>
</template>

<script>
export default {
  name: "Clients"
}
</script>

<style scoped lang="scss">
#clients{
  background-color: #27ab29;
  box-sizing: border-box;
  width: 100%;
  display: flex;
  justify-content: space-between;
  h3 {
  width: 45%;
  display: inline;
  margin-top: 190px;
  margin-right: 60px;
  }
  img {
  width: 45%;
  }
}
</style>
