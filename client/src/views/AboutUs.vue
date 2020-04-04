<template>
  <div class="wrapper">
    <parallax class="section page-header header-filter" :style="headerStyle">
      <div class="container">
        <div class="md-layout">
          <div class="md-layout-item md-size-50 md-small-size-70 md-xsmall-size-100">
            <h1 class="title">Über uns</h1>
          </div>
        </div>
      </div>
    </parallax>  
    <div class="main main-raised">
      <div class="section">
        <div class="container">
          <div class="md-layout">
            <div class="md-layout-item md-size-66 md-xsmall-size-100 mx-auto">
              
                Die täglichen Meldungen über die rapide steigende Zahlen von Infizierten, hat uns wie viele Menschen frustriert. Das Wissen um die langwierige Entwicklung eines Impfstoffes und um die ungewisse Länge der sozialen Distanzierungsmaßnahmen, verstärkten unser <b>Gefühl der Hilflosigkeit</b>.
                <br/>
                <br/>
                Wir haben uns zusammengefunden, natürlich digital wie in diesen Zeiten üblich, um gemeinsam positiv in die Zukunft zu schauen. Denn, eine zentrale Erkenntnis in der Corona-Krise ist auch, dass der krasse Großteil der Infizierten auf einen milden Verlauf hoffen darf und <b>nach derzeitigen Erkenntnissen haben Ex-Patient*innen nach der Abheilung eine mittelfristige Immunität</b> gegen eine Neuinfektion aufgebaut und sind so auch nicht mehr infektiös und gefährdend für andere.
                <br/>
                <br/>
                Die Erkenntnis über eine rapide wachsende Zahl von Genesenen und Immunen macht uns Mut. Wir wollen Menschen, nach überstandener Erkrankung, welches nun mit Antikörper Tests nachgewiesen werden kann, einsetzen, um wichtige Aufgaben zu übernehmen, dies können Besuchsdienste für alleinlebende sein oder auch eine Peer-Beratung für Erkrankte von Gesundeten. Darüber hinaus werden durch die Anwendung der Passiven Immunisierung von Schwererkrankten jetzt schon explizit immunisierte Ex-Patient*innen gesucht. 
                <br/>
                <br/>
                Das hat uns motiviert die Initiative ExCoronaHilfe Deutschland zu gründen und ein Netzwerk auf zu bauen von Covid-19 Gesundeten. Wir leisten Hilfe, Beratung und Vermittlung, damit sie besonders effektiv helfen können. <b>Mach mit und lasst uns gemeinsam helfen!</b>
                <br/>
                <br/>
                <br />
                Gründer und Organisationsteam 
                <br />
                <br />
                Alexander Tietz-Latza, Sebastian Stölting
                <br />
                Matthias Eisner
                <br/>
                <br/>
                ExCoronaHilfe Deutschland ist eine Initiative der gemeinnützigen Gesellschaft für Gesundes Altern und Prävention e.V. 
            </div>
          </div>
          <div class="md-layout">
            <div class="md-layout-item md-medium-size-33 md-small-size-100">
              <div class="info">
                <img src="@/assets/img/people/Alexander.webp" alt="Alexander">
                <h4 class="info-title">Alexander</h4>
              </div>
            </div>
            <div class="md-layout-item md-medium-size-33 md-small-size-100">
              <div class="info">
                <img src="@/assets/img/people/Sebastian.webp" alt="Sebastian">
                <h4 class="info-title">Sebastian</h4>
              </div>
            </div>
            <div class="md-layout-item md-medium-size-33 md-small-size-100">
              <div class="info">
                <img src="@/assets/img/people/Matthias.webp" alt="Matthias">
                <h4 class="info-title">Matthias</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  bodyClass: "profile-page",
  props: {
    header: {
      type: String,
      default: require("@/assets/img/bg2019.webp")
    },
  },
  data() {
    return {
      name: null,
      email: null,
      message: null
    };
  },
  computed: {
    headerStyle() {
      return {
        backgroundImage: `url(${this.header})`
      };
    }
  }
};
</script>

<style lang="scss" scoped>
.md-card-actions.text-center {
  display: flex;
  justify-content: center !important;
}
.md-has-textarea + .md-layout {
  margin-top: 15px;
}
</style>
