import Vue from "vue";
import Router from "vue-router";
import AboutUs from "./views/AboutUs.vue";
import Blooddonation from "./views/Blooddonation.vue";
import Contact from "./views/Contact.vue";
import Index from "./views/Index.vue";
import Impressum from "./views/Impressum.vue";
import Immunization from "./views/Immunization.vue";
import Privacy from "./views/Privacy.vue";
import Project from "./views/Project.vue";
import FAQ from "./views/FAQ.vue";
import MainNavbar from "./layout/MainNavbar.vue";
import MainFooter from "./layout/MainFooter.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "index",
      meta:{
        title:""
      },
      components: { default: Index, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" }
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
      path: "/project",
      name: "project",
      components: { default: Project, header: MainNavbar, footer: MainFooter },
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
      path: "/faq",
      name: "faq",
      components: { default: FAQ, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
      }
    },
    {
      path: "/aboutus",
      name: "aboutus",
      components: { default: AboutUs, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
      }
    },
    {
      path: "/contact",
      name: "contact",
      components: { default: Contact, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
      }
    },
    {
      path: "/immunization",
      name: "immunization",
      components: { default: Immunization, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
      }
    },
    {
      path: "/blooddonation",
      name: "blooddonation",
      components: { default: Blooddonation, header: MainNavbar, footer: MainFooter },
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
