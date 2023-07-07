<template>
  <div class="production-image" :style="{'background-image': `url(${item.image})`}">
    {{item}}
  </div>
</template>

<script>
  export default {
    props: ['item']
  }
</script>

<style lang="scss">
.production-image{
  min-height: 290px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>

