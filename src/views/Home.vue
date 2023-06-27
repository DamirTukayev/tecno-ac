<template>
  <div class="home">
    <LeftblockVue/>
    <RightblockVue/>
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
