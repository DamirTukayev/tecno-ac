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

<style lang="scss">
  :root {
    --main-bg-color: #e10018;
  }
  * {
    font-family: 'Roboto', sans-serif;
  }
  .v-main__wrap {
    display: flex;
    justify-content: space-between;
  }
  .container {
    width: 100%;
    margin-right: auto;
    margin-left: auto;
    // padding: 0 24px;
  }
  @media (max-width: 768px){
    .container {
      padding-top: 0;
      padding-left: 15px;
      padding-right: 15px;
    }
  }
  @media (min-width: 960px) {
    .container {
      max-width: 1499px;
    }
  }

  @media (min-width: 1264px) {
    .container {
      max-width: 1499px;
    }
  }

  @media (min-width: 1920px) {
    .container {
      max-width: 1499px;
          padding: 0 24px;
    }
  }

  
</style>
