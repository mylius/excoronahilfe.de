<template>
  <div class="wrapper">
    <parallax class="section page-header header-filter" :style="headerStyle">
      <div class="container">
        <div class="md-layout">
          <div class="md-layout-item md-size-50 md-small-size-70 md-xsmall-size-100">
            <h1 class="title">Die Initiative</h1>
          </div>
        </div>
      </div>
    </parallax>
    <div class="main main-raised">
      <div class="section">
        <div class="container">
          <div class="md-layout">
            <div class="md-layout-item md-size-66 md-xsmall-size-100 mx-auto">
              Wir haben die Initiative ExCoronaHilfe Deutschland gegründet und bauen
              <b>ein Netzwerk von Covid-19 Gesundeten</b> auf, die jetzt immun sind. Wir leisten Hilfe, Beratung und Vermittlung, damit wir besonders effektiv helfen können. Macht mit und lasst uns gemeinsam helfen!
              <br />
              <br />Das Covid-19-Virus hat sich weltweit schnell ausgebreitet und lähmt das soziale und wirtschaftliche Leben. Wir wollen aber nicht im Stillstand verharren und dem Pessimismus verfallen. Wir schauen in die Zukunft und wollen Kraft spenden. Es gibt zu diesem Zeitpunkt bereits sehr viele Menschen die eine Covid-19 Infektion überstanden haben - Tendenz steigend! Tatsächlich sind weltweit fast ein Viertel aller ehemals an Covid-19 Erkrankten schon wieder genesen.
              <br />
              <b>In Deutschland gibt es bereits {{casenumber}} Genesene, natürlich auch hier Tendenz rapide steigend.</b>
              <sup>
                <a href="https://coronavirus.jhu.edu/map.html" style="color:white;">1</a>
              </sup> In Zukunft werden die Zahlen der wieder gesundeten und bestätigt immunisierten Menschen sehr stark ansteigen. Wir nehmen dies als Motivation um optimistisch in die nahe Zukunft zu schauen. Wir wollen gestärkt aus der Erfahrung die Krankheit überwunden zu haben hervorgehen und Hoffnung und Zuversicht spenden, dass wir auch die Krise als Ganzes meistern.
              <br />
              <br />
              <b>Wir suchen von einer Corona-Infektion gesundete und immunisierte Menschen, die ihre Kräfte einsetzen möchten, Menschen aus Risikogruppen und in Isolation lebend zu helfen, sowie für eine Plasmaspende zur passiven Immunisierung von Schwererkrankten zur Verfügung zu stehen.</b> Nach derzeitigen Erkenntnissen haben Ex-Patient*innen nach der Abheilung eine mittelfristige Immunität gegen eine Neuinfektion aufgebaut und sind so auch nicht mehr infektiös und gefährdend für andere. Unser Aufruf richte sich an alle Menschen die vom Coronavirus (COVID-19) genesen sowie immunisiert sind und helfen möchten.
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const API_CASE_NUMBER_URL = "https://corona.lmao.ninja/countries/Germany";
import axios from "axios";
export default {
  bodyClass: "profile-page",
  props: {
    header: {
      type: String,
      default: require("@/assets/img/bg8.jpg")
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
        text: "",
        interests: [],
        privacy_accepted: false,
        zip: ""
      },
      casenumber: 15000,
      submitted: false,
      error: false
    };
  },
  methods: {
        retrieve_data: function() {
      this.loading = true;
      return axios.get(API_CASE_NUMBER_URL).then(response => {
        this.casenumber = response.data.recovered;
      });
    },
  },
  computed: {
    headerStyle() {
      return {
        backgroundImage: `url(${this.header})`
      };
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
