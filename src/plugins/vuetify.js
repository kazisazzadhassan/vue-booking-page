import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        text: '#3A3335',
        button: '#BA3834',
        footer: '#FAF9F5'
      },
    },
  },
});
