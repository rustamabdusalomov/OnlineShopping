<template>
  <div id="about-us">
    <created-date/>
    <partners/>
    <clients/>
  </div>
</template>

<script>
import CreatedDate from "../components/CreatedDate"
import Partners from "../components/Partners"
import Clients from "../components/Clients"
export default {
  name: "AboutUsPage",
  components: {
    'created-date': CreatedDate,
    'partners': Partners,
    'clients': Clients
  }
}
</script>

<style scoped lang="scss">
  #about-us {
    img {
      width: 100%;
    }
  }
</style>
