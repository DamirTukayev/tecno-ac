<template>
  <v-app>
    <v-container>
      <HeaderVue></HeaderVue>
      <NavigationVue></NavigationVue>
      <LeftblockVue></LeftblockVue>
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
  import FooterVue from './components/common/FooterVue.vue';

export default {
  name: 'App',
  components: {
    HeaderVue,
    NavigationVue,
    LeftblockVue,
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
