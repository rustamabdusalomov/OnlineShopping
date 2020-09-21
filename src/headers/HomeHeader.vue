<template>
  <div id="home-header">
    <div id="user-img">
      <router-link to="/account"><img src="..\images\user\user1.jpg" alt="Image not found!!!"></router-link>
    </div>
    <ul>
      <li><router-link to="/home">Home</router-link></li>
      <li><router-link to="/contactUs">Contact us</router-link></li>
      <li><router-link to="/aboutUs">About us</router-link></li>
      <li><router-link to="/productList">Products</router-link></li>
    </ul>
  </div>
</template>

<script>

export default {
name: "HomeHeader",
  data() {
    return {
      user: {
        img_src: '../images/user/user1.jpg'
      }
    }
  }
}
</script>

<style scoped lang="scss">
  #home-header {
    background: #a03131;
    padding: 0.3rem;
    margin: 0;
    position: relative;
    #user-img {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      overflow: hidden;
      position: absolute;
      right: 30px;
      top: 8px;
      img {
        width: 100%;
      }
    }
    ul {
      display: flex;
      width: 70%;
      margin-left: 90px;
      list-style-type: none;
      justify-content: space-between;
      li {
        padding: 2px;
        a {
          text-decoration: none;
          color: white;
          padding: 10px;
          border-radius: 8px;
        }
        .router-link-active {
          box-shadow: 0 5px 5px rgba(0, 0, 0, 0.2);
        }
      }
    }
  }
</style>
