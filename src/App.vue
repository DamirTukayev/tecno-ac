<template>
  <v-app>
    <v-container>
      <HeaderVue></HeaderVue>
      <NavigationVue></NavigationVue>
      <v-main>
        <router-view/>
      </v-main>
    </v-container>
  </v-app>
</template>

<script>
  import HeaderVue from './components/common/HeaderVue.vue';
  import NavigationVue from './components/common/NavigationVue.vue';

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
