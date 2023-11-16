<template>
  <div class="home">
    <RightblockVue class="home-rightblock"/> 
  </div>
</template>

<script>
import RightblockVue from '@/components/home/RightblockVue.vue'

export default {
  name: 'Home',
  components: {
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
