<template>
  <v-app>
    <v-container>
      <HeaderVue></HeaderVue>
      <NavigationVue></NavigationVue>
          <LeftblockVue></LeftblockVue>
          <RightblockVue></RightblockVue>
          <SliderVue></SliderVue>
      <FooterVue></FooterVue>
      <v-main>
        <router-view/>
      </v-main>
    </v-container>
  </v-app>
</template>

<script>
  import HeaderVue from './components/common/HeaderVue.vue';
  import NavigationVue from './components/common/NavigationVue.vue';
  import LeftblockVue from './components/common/LeftblockVue.vue';
  import RightblockVue from './components/common/RightblockVue.vue';
  import SliderVue from './components/common/SliderVue.vue';
  import FooterVue from './components/common/FooterVue.vue';
  
export default {
  name: 'App',
  components: {
    HeaderVue,
    NavigationVue,
    LeftblockVue,
    RightblockVue,
    SliderVue,
    FooterVue
  },
  data: () => ({
    //
  }),
};
</script>

<style>
*{
  font-family: 'Roboto', sans-serif;
}
</style>
