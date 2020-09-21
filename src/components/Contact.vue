<template>
  <div id="contact">
    <h4>Manzil: Toshkent sh. Mirzo Ulug'bek t. Alisher Navoiy k. 112-uy</h4>
    <h4>Navigation: <a href="">Google Map</a></h4>
    <h4>Tel: +998(90)-123-45-67</h4>
    <h4>Email: onlineshopping@gmail.com</h4>
    <div id="social">
      <a href="https://www.instagram.com/" class="a"><img src="../assets/Instagram-Icon.png" alt="Icon not found!"></a>
      <a href="https://www.facebook.com/" class="a"><img src="../assets/facebook-icon.png" alt="Icon not found!"></a>
      <a href="https://www.telegram.org/" class="a"><img src="../assets/Telegram-icon.png" alt="Icon not found!"></a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Contact"
}
</script>

<style scoped lang="scss">
  #contact {
    width: 40%;
    border: 1px solid #c1c1c1;
    padding: 3rem;
    margin: 120px auto 0 auto;
    #social {
      display: flex;
      width: 60%;
      justify-content: space-between;
      .a {
        padding: 1rem;
        position: relative;
        border-radius: 50%;
        background-color: transparent;
        img {
          position: absolute;
          width: 100%;
          padding: 1px;
        }
      }
    }
  }
</style>
