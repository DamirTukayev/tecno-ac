<template>
  <div class="production" :title="item.title">
    <div class="production__image" :style="{'background-image': `url(${item.image})`}"></div>
    <div 
      class="production__bottom" 
      :style="{
        right: item.size === 'big' ? '20px' : 'auto',
        left: item.size === 'big' ? 'auto' : '20px',
        alignItems: item.size === 'big' ? 'flex-end' : 'flex-start'
      }"
    >
      <div>
        <div class="production__title">
          {{ item.title }}
        </div>
      </div>
      
      <p class="production__subtitle">
        {{ item.subtitle }}
      </p>
    </div>

  </div>
  
  
</template>

<script>
  export default {
    props: ['item']
  }
</script>

<style lang="scss">
.production{
  position: relative;
  min-height: 290px;
  overflow: hidden;
  cursor: pointer;
  padding: 20px;
  &:hover .production__subtitle{
    display: block;
  }
  &:hover .production__image{
    transform: scale(1.2);
    filter: brightness(0.7);
  }
  &__image{
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0; 
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    transition: transform 0.3s, filter 0.3s;
  }

  &__bottom {
    bottom: 20px;
    left: 20px;
    position: absolute;
    display: flex;
    flex-direction: column;
  }
  &__title{
    background: var(--main-bg-color);
    color: #FFF;
    padding: 2px 9px;
    font-weight: 500;
    font-size: 18px;
    display: inline-block;
  }
  &__subtitle {
    color: #fff;
    font-size: 13px;
    bottom: 25px;
    left: 20px;
    line-height: 18px;
    display: none;
    transition: all 0.3s;
    margin-top: 10px;
  }
 
}
</style>

