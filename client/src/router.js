import Vue from "vue";
import Router from "vue-router";
import Index from "./views/Index.vue";
import AboutUs from "./views/AboutUs.vue";
import CreateEntry from "./views/CreateEntry.vue";
import FAQ from "./views/FAQ.vue";
import Impressum from "./views/Impressum.vue";
import Login from "./views/Login.vue";
import Offers from "./views/Offers.vue";
import Profile from "./views/Profile.vue";
import Privacy from "./views/Privacy.vue";
import Requests from "./views/Requests.vue";
import Register from "./views/Register.vue";
import MainNavbar from "./layout/MainNavbar.vue";
import MainFooter from "./layout/MainFooter.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "index",
      components: { default: Index, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" }
      }
    },
    {
      path: "/about",
      name: "about",
      components: { default: AboutUs, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
      }
    },
    {
      path: "/createentry",
      name: "createentry",
      components: { default: CreateEntry, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
      }
    },
    {
      path: "/faq",
      name: "faq",
      components: { default: FAQ, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
      }
    },
    {
      path: "/impressum",
      name: "impressum",
      components: { default: Impressum, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
      }
    },
    {
      path: "/login",
      name: "login",
      components: { default: Login, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 }
      }
    },
    {
      path: "/offers",
      name: "offers",
      components: { default: Offers, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 }
      }
    },
    {
      path: "/profile",
      name: "profile",
      components: { default: Profile, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" }
      }
    },

    {
      path: "/privacy",
      name: "privacy",
      components: { default: Privacy, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
      }
    },
    {
      path: "/requests",
      name: "Requests",
      components: { default: Requests, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
      }
    },
    {
      path: "/register",
      name: "Register",
      components: { default: Register, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
      }
    },
  ],
  scrollBehavior: to => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  }
});
