<template>
  <div class="wrapper">
    <parallax class="section page-header header-filter" :style="headerStyle">
      <div class="container">
        <div class="md-layout">
          <div class="md-layout-item md-size-50 md-small-size-70 md-xsmall-size-100">
            <h1 class="title">Eintrag anlegen</h1>
          </div>
        </div>
      </div>
    </parallax>  
    <div class="main main-raised">
      <div class="section section-contacts">
        <div class="container">
          <div class="md-layout">
            <div class="md-layout-item md-size-66 md-xsmall-size-100 mx-auto">
              <h4
                class="text-center description"
              >Was möchtest du?</h4>
              <form class="contact-form" @submit.prevent="submit">
                <div class="md-layout">
                  <md-radio v-model="entry.receive" :value = false>
                    Hilfe anbieten
                  </md-radio>
                  <md-radio  v-model="entry.receive" :value = true>
                    Hilfe erhalten
                  </md-radio>

                  <br />
                  <md-field>
                    <label>Postleitzahl</label>
                    <md-input
                    type="text"
                    pattern="\d*"
                    name="zip"
                    id="zip"
                    maxlength="5"
                    v-model="entry.zip"
                  ></md-input>
                  </md-field>
                  <md-field>
                    <label>Beschreibe kurz, was du möchtest</label>
                    <md-textarea v-model="entry.description" required></md-textarea>
                  </md-field>
                  <md-checkbox v-model="entry.interests" value="Besuchsdienste">
                    Besuchsdienste
                  </md-checkbox>
                  <md-checkbox v-model="entry.interests" value="Hilfseinsätze">
                    Hilfseinsätze
                  </md-checkbox>
                  <md-checkbox v-model="entry.interests" value="Peer-Beratung">
                    Peer-Beratung
                  </md-checkbox>
                  <md-checkbox v-model="entry.interests" value="Blutspenden">
                    Blutspenden
                  </md-checkbox>
                </div>
               
  

                <div class="md-layout">
                  <div class="md-layout-item md-size-33 mx-auto text-center">
                    <md-button class="md-success" type="submit" value="Send Form">Eintrag anlegen</md-button>
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

                  Der Eintrag wurde erfolgreich angelegt.
                </div>
              </div>
              <div class="alert alert-danger" v-if="error">
                <div class="container">
                  <button type="button" aria-hidden="true" class="close" @click="event => removeNotify(event,'alert-danger')">
                    <md-icon>clear</md-icon>
                  </button>
                  <div class="alert-icon">
                    <md-icon>check</md-icon>
                  </div>

                  Es ist an unserem Ende etwas schiefgegangen, informiere uns bitte <a href="mailto:info@excoronahilfe.de">info@excoronahilfe.de</a>
                </div>
              </div>
               <div class="alert alert-danger" v-if="wrongzip">
                <div class="container">
                  <button type="button" aria-hidden="true" class="close" @click="event => removeNotify(event,'alert-danger')">
                    <md-icon>clear</md-icon>
                  </button>
                  <div class="alert-icon">
                    <md-icon>check</md-icon>
                  </div>

                  Dies ist keine gültige Postleitzahl.
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
import DataService from "../services/dataservice";
const dataservice = new DataService();
import axios from "axios";
export default {
  bodyClass: "landing-page",
  props: {
    header: {
      type: String,
      default: require("@/assets/img/bg8.webp")
    },
  },
  data() {
    return {
      entry: {
        title: "",
        description: "",
        interests: [],
        zip: "69126",
        coordinates: "",
        receive: false,
      },
      casenumber: 15000,
      submitted: false, 
      error: false,
      wrongzip: false,
      zoom: 5,
      center: L.latLng(52.01010101, 10.24178344),
        url: "http://{s}.tile.osm.org/{z}/{x}/{y}.png",
      attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
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
    async submit() {
      this.entry.coordinates = await this.zipToCoord(this.entry.zip)
      if (this.entry.receive){
        dataservice.createNeed(this.entry).then(response => { 
          this.submitted = true;
          this.wrongzip = false;
        }).catch(error => {
          this.error = true;
        });
      }
      else{
        dataservice.createOffer(this.entry).then(response => { 
          this.submitted = true;
          this.wrongzip = false; 
        }).catch(error => {
          this.error = true;
        });
      }

    },
    async zipToCoord(zip) {
      console.log("test")
      await axios.get("https://public.opendatasoft.com/api/records/1.0/search/?dataset=postleitzahlen-deutschland&q="+zip).then(response => {
      return response.data.records[0].geometry.coordinates;
      }).catch(error => {
        this.wrongzip = true;
        return error;
      });
    },
    removeNotify(e, notifyClass) {
      var target = e.target;
      while (target.className.indexOf(notifyClass) === -1) {
        target = target.parentNode;
      }
      return target.parentNode.removeChild(target);
    }
    },
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
