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
    <FooterVue/>
  </v-app>
</template>

<script>
  import FooterVue from './components/common/FooterVue.vue';
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
    NavigationVue
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
