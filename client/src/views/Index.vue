<template>
  <div class="wrapper">
    <parallax class="section page-header header-filter" :style="headerStyle">
      <div class="container">
        <div class="md-layout">
          <div class="md-layout-item md-size-50 md-small-size-70 md-xsmall-size-100">
           <br/>
           <br/>
           <br/>
            <h4>
              Das Covid-19-Virus hat sich weltweit schnell ausgebreitet und lähmt das soziale und wirtschaftliche Leben. Wir wollen aber nicht im Stillstand verharren und dem Pessimismus verfallen. Wir schauen in die Zukunft und wollen Kraft spenden. Es gibt zu diesem Zeitpunkt bereits sehr viele Menschen die eine Covid-19 Infektion überstanden haben - Tendenz steigend! Tatsächlich sind weltweit fast ein Viertel aller ehemals an Covid-19 Erkrankten schon wieder genesen. In Deutschland gibt es bereits {{casenumber}} Genesene, natürlich auch hier Tendenz zügig steigend.<sup><a href="https://coronavirus.jhu.edu/map.html" style="color:white;">1</a></sup> In Zukunft werden die Zahlen der wieder gesundeten und bestätigt immunisierten Menschen sehr stark ansteigen. Wir nehmen dies als Motivation um optimistisch in die nahe Zukunft zu schauen.
              <br />Wir suchen von einer Corona-Infektion gesundete und immunisierte Menschen, die ihre Kräfte einsetzen möchten, um Menschen aus Risikogruppen und in Quarantäne lebend zu helfen. Wir wollen uns mit euch organisieren und planen:
              Unser Aufruf richte sich an alle Menschen die vom Coronavirus (COVID-19) genesen sowie immunisiert sind und helfen möchten.
            </h4>
            <br />
          </div>
        </div>
      </div>
    </parallax>
    <div class="main main-raised">
      <div class="section">
        <div class="container">
          <div class="features text-center">
            <h2 class="title text-center">Was wir tun</h2>
            <div class="md-layout">
              <div class="md-layout-item md-medium-size-33 md-small-size-100">
                <div class="info">
                  <div class="icon icon-success">
                    <md-icon>emoji_people</md-icon>
                  </div>
                  <h4 class="info-title">Hilfe</h4>
                  <p>Wir vermitteln Besuchsdienste für isolierte Menschen, die unter Quarantäne stehen.</p>
                </div>
              </div>
              <div class="md-layout-item md-medium-size-33 md-small-size-100">
                <div class="info">
                  <div class="icon icon-default">
                    <md-icon>school</md-icon>
                  </div>
                  <h4 class="info-title">Weiterqualifiziergung</h4>
                  <p>Wir organisieren Einsatz / Weiterqualifizierung für Schlüsselpositionen.</p>
                </div>
              </div>
              <div class="md-layout-item md-medium-size-33 md-small-size-100">
                <div class="info">
                  <div class="icon icon-info">
                    <md-icon>chat</md-icon>
                  </div>
                  <h4 class="info-title">Peer-Beratung</h4>
                  <p>Wir organisieren unkomplizierte und auf Wunsch anonyme Peer-Beratung.</p>
                </div>
              </div>
              <div class="md-layout-item md-medium-size-33 md-small-size-100">
                <div class="info">
                  <div class="icon icon-warning">
                    <md-icon>healing</md-icon>
                  </div>
                  <h4 class="info-title">Blutspende</h4>
                  <p>Wir vermitteln zur Blut bzw. Plasma oder Lymphozyten Spende für Schwererkrankte</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="section section-contacts">
        <div class="container">
          <div class="md-layout">
            <div class="md-layout-item md-size-66 md-xsmall-size-100 mx-auto">
              <h2 class="text-center title">Schreibe uns</h2>
              <h4
                class="text-center description"
              >Falls du Fragen oder Anregungen, melde dich bei uns:</h4>
              <form class="contact-form" @submit.prevent="submit">
                <div class="md-layout">
                  <div class="md-layout-item md-size-50">
                    <md-field>
                      <label>Dein Name</label>
                      <md-input type="text" name="name" id="name" required v-model="message.name"></md-input>
                    </md-field>
                  </div>
                  <div class="md-layout-item md-size-50">
                    <md-field>
                      <label>Deine Email</label>
                      <md-input
                        type="email"
                        name="email"
                        id="email"
                        required
                        :class="{email , error: !message.email.valid }"
                        v-model="message.email"
                      ></md-input>
                    </md-field>
                  </div>
                </div>
                <md-field>
                      <label>Betreff</label>
                      <md-input type="text" name="subject" id="subject" required v-model="message.subject"></md-input>
                    </md-field>
                <md-field maxlength="5">
                  <label>Deine Nachricht</label>
                  <md-textarea v-model="message.text"></md-textarea>
                </md-field>
                <div class="md-layout">
                  <div class="md-layout-item md-size-33 mx-auto text-center">
                    <md-button class="md-success" type="submit" value="Send Form">Abschicken</md-button>
                  </div>
                </div>
              <div class="alert alert-success" v-if="submitted">
                <div class="container">
                  <button type="button" aria-hidden="true" class="close" @click="event => removeNotify(event,'alert-success')">
                    <md-icon>clear</md-icon>
                  </button>
                  <div class="alert-icon">
                    <md-icon>check</md-icon>
                  </div>

                  Die Nachricht wurde erfolgreich gesendet.
                </div>
              </div>
              </form>
             
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const API_URL = "http://localhost:4000/email";
const API_CASE_NUMBER_URL = "https://corona.lmao.ninja/countries/Germany";
import axios from "axios";
var emailRegExp = /[a-z0-9!#$%&'*+/=?^_‘{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_‘{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
export default {
  bodyClass: "landing-page",
  props: {
    header: {
      type: String,
      default: require("@/assets/img/bg8.webp")
    },
    teamImg1: {
      type: String,
      default: require("@/assets/img/faces/avatar.jpg")
    },
    teamImg2: {
      type: String,
      default: require("@/assets/img/faces/christian.jpg")
    },
    teamImg3: {
      type: String,
      default: require("@/assets/img/faces/kendall.jpg")
    }
  },
  async beforeMount() {
    await this.retrieve_data();
    this.$forceUpdate();
  },
  data() {
    return {
      message: {
        name: "",
        email: "",
        subject: "",
        text: "",
        loaded: false,
        casenumber: 15000,
      },
      submitted: false, 
    };
  },
  computed: {
    headerStyle() {
      return {
        backgroundImage: `url(${this.header})`
      };
    }
  },
  methods: {
    // submit form handler
    submit: function() {
      axios({
        url: API_URL,
        method: "POST",
        data: (this.message),
        headers: {
          "content-type": "application/json"
        }
      })
      this.submitted = true;

    },
    retrieve_data: function() {
      this.loading = true;
      return axios.get(API_CASE_NUMBER_URL).then(response => {
      this.casenumber = response.data.recovered;
      this.loaded = true;
      });
    },
    // validate by type and value
    validate: function(type, value) {
      if (type === "email") {
        this.message.email.valid = this.isEmail(value) ? true : false;
      }
    },
    // check for valid email adress
    isEmail: function(value) {
      return emailRegExp.test(value);
    },
    // check or uncheck all
    checkAll: function(event) {
      this.selection.features = event.target.checked ? this.features : [];
    }
    },
    watch: {
      // watching nested property
      "message.email.value": function(value) {
        this.validate("message.email", value);
      }
    }
};
</script>

<style lang="scss" scoped>
.md-card-actions.text-center {
  display: flex;
  justify-content: center !important;
}
.contact-form {
  margin-top: 30px;
}

.md-has-textarea + .md-layout {
  margin-top: 15px;

  .map {
    height: 700px;
  }
}
</style>
