<template>
  <div class="home">
    <LeftblockVue/>
    <RightblockVue class="home-rightblock"/> 
  </div>
</template>

<script>
import LeftblockVue from '../components/main/LeftblockVue.vue'
import RightblockVue from '../components/main/RightblockVue.vue'

export default {
  name: 'Home',
  components: {
    LeftblockVue,
    RightblockVue
  }
}
</script>

<style lang="scss">
.home{
  display: flex;
  &-rightblock{
    padding: 24px 0 0 20px;
  }
}
</style>
