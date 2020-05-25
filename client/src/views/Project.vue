<template>
  <div class="wrapper">
    <vue-headful
      title="ExCoronaHilfe | Die Initiative"
    />
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
              Mit Hilfe der gemeinnützigen Gesellschaft für gesundes Altern und Prävention haben wir die Initiative ExCoronaHilfe Deutschland gegründet und bauen
              <b>ein Netzwerk von Covid-19 Gesundeten</b> auf, die jetzt immun sind. Wir leisten Hilfe, Beratung und Vermittlung, damit wir besonders effektiv helfen können. Macht mit und lasst uns gemeinsam helfen!
              <br />
              <br />Das Covid-19-Virus hat sich weltweit schnell ausgebreitet und lähmt das soziale und wirtschaftliche Leben. Wir wollen aber nicht im Stillstand verharren und dem Pessimismus verfallen. Wir schauen in die Zukunft und wollen Kraft spenden. Es gibt zu diesem Zeitpunkt bereits sehr viele Menschen die eine Covid-19 Infektion überstanden haben - Tendenz steigend! Tatsächlich sind weltweit fast ein Viertel aller ehemals an Covid-19 Erkrankten schon wieder genesen.
              <br />
              <b>In Deutschland gibt es bereits {{casenumber}} Genesene, natürlich auch hier Tendenz rapide steigend.</b>
              <sup>
                <a href="https://coronavirus.jhu.edu/map.html" style="color:white;">1</a>
              </sup> Die Zahl der wieder genesenen und bestätigt immunisierten Menschen steigt sehr stark an. Wir nehmen dies als Motivation um optimistisch in die nahe Zukunft zu schauen. Wir wollen gestärkt aus der Erfahrung die Krankheit überwunden zu haben hervorgehen und Hoffnung als auch Zuversicht spenden, dass wir als die Krise gemeinsam meistern.
              <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const API_CASE_NUMBER_URL = "https://corona.lmao.ninja/v2/countries/Germany";
import axios from "axios";
export default {
  bodyClass: "profile-page",
  props: {
    header: {
      type: String,
      default: require("@/assets/img/bg_test.jpg")
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
