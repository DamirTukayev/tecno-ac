<template>
  <v-app>
    <v-container>
      <HeaderVue/>
      <NavigationVue/>
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
  
export default {
  name: 'App',
  components: {
    HeaderVue,
    NavigationVue,
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