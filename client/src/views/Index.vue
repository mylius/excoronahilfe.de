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
              Wir haben die Initiative ExCoronaHilfe Deutschland gegründet und bauen <b>ein Netzwerk von Covid-19 Gesundeten</b> auf, die jetzt immun sind. Wir leisten Hilfe, Beratung und Vermittlung, damit wir besonders effektiv helfen können. Macht mit und lasst uns gemeinsam helfen!
              <br />
              <br />
              Das Covid-19-Virus hat sich weltweit schnell ausgebreitet und lähmt das soziale und wirtschaftliche Leben. Wir wollen aber nicht im Stillstand verharren und dem Pessimismus verfallen. Wir schauen in die Zukunft und wollen Kraft spenden. Es gibt zu diesem Zeitpunkt bereits sehr viele Menschen die eine Covid-19 Infektion überstanden haben - Tendenz steigend! Tatsächlich sind weltweit fast ein Viertel aller ehemals an Covid-19 Erkrankten schon wieder genesen. <b>In Deutschland gibt es bereits {{casenumber}} Genesene, natürlich auch hier Tendenz rapide steigend.</b><sup><a href="https://coronavirus.jhu.edu/map.html" style="color:white;">1</a></sup> In Zukunft werden die Zahlen der wieder gesundeten und bestätigt immunisierten Menschen sehr stark ansteigen. Wir nehmen dies als Motivation um optimistisch in die nahe Zukunft zu schauen. Wir wollen gestärkt aus der Erfahrung die Krankheit überwunden zu haben hervorgehen und Hoffnung und Zuversicht spenden, dass wir auch die Krise als Ganzes meistern.
              <br />
              <br />
              <b>Wir suchen von einer Corona-Infektion gesundete und immunisierte Menschen, die ihre Kräfte einsetzen möchten, Menschen aus Risikogruppen und in Isolation lebend zu helfen, sowie für eine Plasmaspende zur passiven Immunisierung von Schwererkrankten zur Verfügung zu stehen.</b> Nach derzeitigen Erkenntnissen haben Ex-Patient*innen nach der Abheilung eine mittelfristige Immunität gegen eine Neuinfektion aufgebaut und sind so auch nicht mehr infektiös und gefährdend für andere. Unser Aufruf richte sich an alle Menschen die vom Coronavirus (COVID-19) genesen sowie immunisiert sind und helfen möchten.
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
              >Melde dich bei uns!</h4>
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
                  <label>Deine Postleitzahl</label>
                  <md-input type="text" pattern="\d*" name="zip" id="zip" maxlength=5 v-model="message.zip"></md-input>
                </md-field>
                <md-checkbox v-model="message.interests" value="Besuchsdienste">
                  Besuchsdienste
                </md-checkbox>
                <md-checkbox v-model="message.interests" value="Hilfseinsätze">
                  Hilfseinsätze
                </md-checkbox>
                <md-checkbox v-model="message.interests" value="Peer-Beratung">
                  Peer-Beratung
                </md-checkbox>
                <md-checkbox v-model="message.interests" value="Blutspende">
                  Blutspende
                </md-checkbox>
                <md-checkbox v-model="message.interests" value="Mitmachen im Organisationsteam">
                  Mitmachen im Organisationsteam
                </md-checkbox>
                <br />
                <md-checkbox id="priv" v-model="message.privacy_accepted" required></md-checkbox>
                <label for="priv" style=" font-weight: 400;  font-size: .875rem; color: #aaa; margin-left:-5px">Hier mit erkläre ich mich mit den  </label><a href="#/privacy"  style=" font-weight: 400;  font-size: .875rem;" target="_blank">Datenschutz</a><label for="priv"  style=" font-weight: 400;  font-size: .875rem; color: #aaa;"> bestimmungen einverstanden.</label>
                <md-field>
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
               <div class="alert alert-danger" v-if="error">
                <div class="container">
                  <button type="button" aria-hidden="true" class="close" @click="event => removeNotify(event,'alert-success')">
                    <md-icon>clear</md-icon>
                  </button>
                  <div class="alert-icon">
                    <md-icon>check</md-icon>
                  </div>

                  Es ist an unserem Ende etwas schiefgegangen, nutze bitte <a href="mailto:info@excoronahilfe.de">info@excoronahilfe.de</a>
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
const API_URL = "https://excoronahilfe.de:4000/email";
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
        text: "",
        interests: [],
        privacy_accepted: false,
        zip: "",
      },
      casenumber: 15000,
      submitted: false, 
      error: false,
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
      }
      ).then(response => { 
        this.submitted = true;
      }).catch(error => {
        this.error = true;
      });
      

    },
    retrieve_data: function() {
      this.loading = true;
      return axios.get(API_CASE_NUMBER_URL).then(response => {
      this.casenumber = response.data.recovered;
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
