<template>
  <div class="wrapper">
    <div class="section page-header header-filter" :style="headerStyle">
      <div class="container">
        <div class="md-layout">
          <div
            class="md-layout-item md-size-33 md-small-size-66 md-xsmall-size-100 md-medium-size-40 mx-auto"
          >
            <form @submit.prevent="submit">
              <login-card header-color="green">
                <h4 slot="title" class="card-title">Registrieren</h4>
                <md-button
                  slot="buttons"
                  href="javascript:void(0)"
                  class="md-just-icon md-simple md-white"
                >
                  <i class="fab fa-facebook-square"></i>
                </md-button>
                <md-button
                  slot="buttons"
                  href="javascript:void(0)"
                  class="md-just-icon md-simple md-white"
                >
                  <i class="fab fa-twitter"></i>
                </md-button>
                <md-button
                  slot="buttons"
                  href="javascript:void(0)"
                  class="md-just-icon md-simple md-white"
                >
                  <i class="fab fa-google-plus-g"></i>
                </md-button>
                <p slot="description" class="description">oder klassisch</p>
                <md-field class="md-form-group" slot="inputs">
                  <md-icon>face</md-icon>
                  <label>Name</label>
                  <md-input v-model="user_data.name"></md-input>
                </md-field>
                <md-field class="md-form-group" slot="inputs">
                  <md-icon>place</md-icon>
                  <label>Postleitzahl</label>
                  <md-input v-model="user_data.zip"></md-input>
                </md-field>
                <md-field class="md-form-group" slot="inputs">
                  <md-icon>email</md-icon>
                  <label>Email...</label>
                  <md-input v-model="user_data.email" type="email"></md-input>
                </md-field>
                <md-field class="md-form-group" slot="inputs">
                  <md-icon>lock_outline</md-icon>
                  <label>Password...</label>
                  <md-input v-model="user_data.password" type="password"></md-input>
                </md-field>
                <md-button slot="footer" type="submit" value="Send Form" class="md-simple md-success md-lg">
                  Fertig
                </md-button>
              </login-card>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { LoginCard } from "@/components";
const API_URL = "http://localhost:4000/users/register";
export default {
  components: {
    LoginCard
  },
  bodyClass: "login-page",
  data() {
    return {
      user_data:{
        name: null,
        zip: null,
        email: null,
        password: null
      },
    };
  },
  props: {
    header: {
      type: String,
      default: require("@/assets/img/bg8.webp")
    }
  },
  computed: {
    headerStyle() {
      return {
        backgroundImage: `url(${this.header})`
      };
    }
  },
  methods: {
    submit: function() {
      fetch(API_URL, {
        method: "POST",
        body: JSON.stringify(this.user_data),
        headers: {
          "content-type": "application/json"
        }
      })
      this.submitted = true;
    },
  },
};
</script>

<style lang="css"></style>
