<template>
  <v-app>
    <v-main>
        <loading v-if="isLoading"/>
        <router-view v-else/>
    </v-main>
  </v-app>
</template>
<script>
import { auth } from "./configs/firebase";
import { mapState, mapActions, mapMutations} from 'vuex';
import { MeService } from "./services/MeService";
import Loading from './components/common/Loading.vue';
export default {
  name: "Home",
  components: {
    Loading
    
  },
  data() {
    return {
      user: null,
    }
  },
  computed: {
    ...mapState(['isLoading'])
  },
  created() {
    const token = JSON.parse(localStorage.getItem("token"));
    if(token && token !== '') {
      this.$store.dispatch('actionSetToken', token);
    }
    this.changeUser();
    this.actionSetDataCategory();
    this.actionSetDataProduct();
    this.actionInitItems();
    this.actionInitItemsWishlist();
  },
  mounted() {
    setTimeout( () => {
      this.loading = false;
    }, 2000)
  },
  methods: {
    ...mapActions('products', ['actionSetDataProduct']),
    ...mapActions('categories', ['actionSetDataCategory']),
    ...mapActions('users', ['getCurrentUser']),
    ...mapActions('cart', ['actionInitItems']),
    ...mapActions('wishlist', ['actionInitItemsWishlist']),
    ...mapMutations('users', ['updateUser']),
    changeUser() {
      auth.onAuthStateChanged(async (user) => {
        this.updateUser(user);
        if (user) {
          this.getCurrentUser(user.uid);
           const response = await MeService.me(user.uid);
           this.$store.commit('setRole', response.data().role);
        }
      });
    },
  },
};
</script>
<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  overflow: hidden;
}
/* Default Font */
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
.v-application ul, .v-application ol {
    padding-left: 0!important;
}

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 14px;
	/* font: inherit; */
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
/* Defaul Hover */
a, a:hover, a:focus, a:active, button, button:focus, .btn, .btn:focus, input, input:focus, select, textarea {
    -webkit-transition: all 0.5s ease 0s;
    -o-transition: all 0.5s ease 0s;
    transition: all 0.5s ease 0s;
    color: inherit;
    text-decoration: none;
    outline: 0;
    background: none;
}
</style>