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
                <h4 slot="title" class="card-title">Anmelden</h4>
                <md-button
                  slot="buttons"
                  href="https://localhost:4000/auth/facebook"
                  class="md-just-icon md-simple md-white"
                >
                  <i class="fab fa-facebook-square"></i>
                </md-button>
                <md-button
                  slot="buttons"
                  href="https://localhost:4000/auth/twitter"
                  class="md-just-icon md-simple md-white"
                >
                  <i class="fab fa-twitter"></i>
                </md-button>
                <md-button
                  slot="buttons"
                  href="https://localhost:4000/auth/google"
                  class="md-just-icon md-simple md-white"
                >
                  <i class="fab fa-google-plus-g"></i>
                </md-button>
                <p slot="description" class="description">oder klassisch</p>
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
const LOGIN_URL = "https://localhost:4000/auth/local";
import axios from "axios";
import bcrypt from "bcryptjs";
export default {
  components: {
    LoginCard
  },
  bodyClass: "login-page",
  data() {
    return {
      user_data:{
        email: "",
        password: ""
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
      axios({
        url: LOGIN_URL, 
        method: "POST",
        data: JSON.stringify({
          email: this.user_data.email,
          password: this.hashPass(this.user_data.password)
        }),
        headers: {
          "content-type": "application/json"
        }
      }).then((response) => {
        console.log(response)
        console.log($cookies.get("session"))
      })
      console.log(this.user_data)
      this.submitted = true;
    },
    hashPass: function(password) {
      return bcrypt.hashSync(password, bcrypt.genSaltSync(10), null);
    }
  },
};
</script>

<style lang="css"></style>
