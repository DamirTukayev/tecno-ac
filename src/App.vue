<template>
  <v-app>
    <v-container>
      <HeaderVue/>
      <NavigationVue/>
      <v-main>
        <LeftBlockVue/>
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
  import LeftBlockVue from './components/main/LeftblockVue.vue';
  
export default {
  name: 'App',
  components: {
    HeaderVue,
    NavigationVue,
    FooterVue,
    LeftBlockVue
  },
  data: () => ({
    //
  }),
};
</script>

<style>
  * {
    font-family: 'Roboto', sans-serif;
  }
  .v-main__wrap {
    display: flex;
    justify-content: space-between;
  }
  .container {
    width: 100%;
    padding: 12px;
    margin-right: auto;
    margin-left: auto;
  }

  @media (min-width: 960px) {
    .container {
      max-width: 900px;
    }
  }

  @media (min-width: 1264px) {
    .container {
      max-width: 1185px;
    }
  }

  @media (min-width: 1904px) {
    .container {
      max-width: 1785px;
    }
  }
</style>
