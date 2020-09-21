<template>
  <div id="createdDate">
    <img src="../images/about/1.png" alt="Image not found!">
    <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      Accusantium at blanditiis commodi deleniti
      facere in incidunt ipsa, maiores, nisi nostrum
      obcaecati soluta temporibus voluptate!
      Accusamus excepturi fuga mollitia recusandae unde.</h3>
  </div>
</template>

<script>
export default {
name: "CreatedData"
}
</script>

<style scoped lang="scss">
  #createdDate {
    background-color: cornflowerblue;
    box-sizing: border-box;
    width: 100%;
    display: flex;
    justify-content: space-between;
    h3 {
      width: 45%;
      display: inline;
      margin-top: 100px;
      margin-right: 40px;
    }
    img {
      width: 45%;

    }
  }
</style>
