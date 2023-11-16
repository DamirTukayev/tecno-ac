import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    options: {
      customProperties: true,
    },
    themes: {
      light: {
        primary: '#cd0016',
        secondary: '#424242',
        accent: '#82B1FF',
        error: '#FF5252',
        info: '#1d2029',
        success: '#4CAF50',
        warning: '#FFC107',
      },
    },
  },
});