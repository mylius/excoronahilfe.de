<template>
  <div class="wrapper">
    <vue-headful
      title="ExCoronaHilfe | Über Uns"
    />
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
              Die täglichen Meldungen über die rapide steigende Zahlen von Infizierten, hat uns wie viele Menschen frustriert. Das Wissen um die langwierige Entwicklung eines Impfstoffes und um die ungewisse Länge der sozialen Distanzierungsmaßnahmen, verstärkten unser
              <b>Gefühl der Hilflosigkeit</b>.
              <br />
              <br />Wir haben uns zusammengefunden, natürlich digital wie in diesen Zeiten üblich, um gemeinsam positiv in die Zukunft zu schauen. Denn, eine zentrale Erkenntnis in der Corona-Krise ist auch, dass der krasse Großteil der Infizierten auf einen milden Verlauf hoffen darf und
              <b>nach derzeitigen Erkenntnissen haben Ex-Patient*innen nach der Abheilung eine mittelfristige Immunität</b> gegen eine Neuinfektion aufgebaut und sind so auch nicht mehr infektiös und gefährdend für andere.
              <br />
              <br />Die Erkenntnis über eine rapide wachsende Zahl von Genesenen und Immunen macht uns Mut. Wir wollen Menschen, nach überstandener Erkrankung, welches nun mit Antikörper Tests nachgewiesen werden kann, einsetzen, um wichtige Aufgaben zu übernehmen, dies können Besuchsdienste für alleinlebende sein oder auch eine Peer-Beratung für Erkrankte von Gesundeten. Darüber hinaus werden durch die Anwendung der Passiven Immunisierung von Schwererkrankten jetzt schon explizit immunisierte Ex-Patient*innen gesucht.
              <br />
              <br />Das hat uns motiviert die Initiative ExCoronaHilfe Deutschland zu gründen und ein Netzwerk auf zu bauen von Covid-19 Gesundeten. Wir leisten Hilfe, Beratung und Vermittlung, damit sie besonders effektiv helfen können.
              <b>Mach mit und lasst uns gemeinsam helfen!</b>
              <div class="regional">
                <img :src="reg_bawue" alt="ExCoronaHilfe Baden Württemberg" />
                <br />Vicky und Matze:
                <a href="mailto:Bawue@ExCoronaHilfe.de">Bawue@ExCoronaHilfe.de</a>
              </div>
              <div class="regional">
                <img :src="reg_bayern" alt="ExCoronaHilfe Bayern" />
                <br />
                <a href="mailto:Bayern@ExCoronaHilfe.de">Bayern@ExCoronaHilfe.de</a>
              </div>
              <div class="regional">
                <img :src="reg_berlin" alt="ExCoronaHilfe Berlin" />
                <br />
                <a href="mailto:Berlin@ExCoronaHilfe.de">Berlin@ExCoronaHilfe.de</a>
              </div>
              <div class="regional">
                <img :src="reg_brandenburg" alt="ExCoronaHilfe Brandenburg" />
                <br />
                <a href="mailto:Brandenburg@ExCoronaHilfe.de">Brandenburg@ExCoronaHilfe.de</a>
              </div>
              <div class="regional">
                <img :src="reg_bremen" alt="ExCoronaHilfe Bremen" />
                <br />
                <a href="mailto:Bremen@ExCoronaHilfe.de">Bremen@ExCoronaHilfe.de</a>
              </div>
              <div class="regional">
                <img :src="reg_hh" alt="ExCoronaHilfe Hamburg" />
                <br />
                <a href="mailto:Hamburg@ExCoronaHilfe.de">Hamburg@ExCoronaHilfe.de</a>
              </div>
              <div class="regional">
                <img :src="reg_hessen" alt="ExCoronaHilfe Hessen" />
                <br />Kai:
                <a href="mailto:HessenqExCoronaHilfe.de">Hessen@ExCoronaHilfe.de</a>
              </div>
              <div class="regional">
                <img :src="reg_mp" alt="ExCoronaHilfe Mecklenburg Vorpommenr" />
                <br />
                <a href="mailto:MV@ExCoronaHilfe.de">MV@ExCoronaHilfe.de</a>
              </div>
              <div class="regional">
                <img :src="reg_niedersachsen" alt="ExCoronaHilfe Niedersachsen" />
                <br />
                <a href="mailto:Niedersachsen@ExCoronaHilfe.de">Nierdersachsen@ExCoronaHilfe.de</a>
              </div>
              <div class="regional">
                <img :src="reg_nrw" alt="ExCoronaHilfe NRW" />
                <br />Alexander und Sebastian:
                <a href="mailto:NRW@ExCoronaHilfe.de">NRW@ExCoronaHilfe.de</a>
              </div>
              <div class="regional">
                <img :src="reg_rp" alt="ExCoronaHilfe Rheinland-Pfalz" />
                <br />Eric:
                <a href="mailto:RP@ExCoronaHilfe.de">RP@ExCoronaHilfe.de</a>
              </div>
              <div class="regional">
                <img :src="reg_saar" alt="ExCoronaHilfe Saarland" />
                <br />
                <a href="mailto:Saarland@ExCoronaHilfe.de">Saarland@ExCoronaHilfe.de</a>
              </div>
              <div class="regional">
                <img :src="reg_sachsen" alt="ExCoronaHilfe Sachsen" />
                <br />Joshi:
                <a href="mailto:Sachsen@ExCoronaHilfe.de">Sachsen@ExCoronaHilfe.de</a>
              </div>
              <div class="regional">
                <img :src="reg_sa" alt="ExCoronaHilfe Sachsen Anhalt" />
                <br />
                <a href="mailto:ST@ExCoronaHilfe.de">ST@ExCoronaHilfe.de</a>
              </div>
              <div class="regional">
                <img :src="reg_sh" alt="ExCoronaHilfe Baden Schleswig-Holstein" />
                <br />Nina:
                <a href="mailto:SH@ExCoronaHilfe.de">SH@ExCoronaHilfe.de</a>
              </div>
              <div class="regional">
                <img :src="reg_thür" alt="ExCoronaHilfe Thüringen" />
                <br />
                <a href="mailto:Thueringen@ExCoronaHilfe.de">Thueringen@ExCoronaHilfe.de</a>
              </div>
              <div class="regional">
                <h3 class="title">Gründer und Organisationsteam</h3>Alexander Tietz-Latza, Sebastian Stölting
                <br />Matthias Eisner
                <br />
                <br />ExCoronaHilfe Deutschland ist eine Initiative der gemeinnützigen Gesellschaft für Gesundes Altern und Prävention e.V.
              </div>
            </div>
          </div>
          <div class="md-layout">
            <div class="md-layout-item md-medium-size-33 md-small-size-100">
              <div class="info" style="text-align:center">
                <img src="@/assets/img/people/Alexander.jpg" style="height:250px" alt="Alexander" />
                <h4 class="info-title">Alexander</h4>
              </div>
            </div>
            <div class="md-layout-item md-medium-size-33 md-small-size-100">
              <div class="info" style="text-align:center">
                <img src="@/assets/img/people/Sebastian.jpg" style="height:250px" alt="Sebastian" />
                <h4 class="info-title">Sebastian</h4>
              </div>
            </div>
            <div class="md-layout-item md-medium-size-33 md-small-size-100">
              <div class="info" style="text-align:center">
                <img src="@/assets/img/people/Matthias.jpg" style="height:250px" alt="Matthias" />
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
      default: require("@/assets/img/bg_bad_distortion_small.jpg")
    },
    ex_corona_de: {
      type: String,
      default: require("@/assets/img/logos/ex_corona_de_nl.svg")
    },
    reg_bawue: {
      type: String,
      default: require("@/assets/img/logos/reg_bawue_nl.svg")
    },
    reg_bayern: {
      type: String,
      default: require("@/assets/img/logos/reg_bayern_nl.svg")
    },
    reg_berlin: {
      type: String,
      default: require("@/assets/img/logos/reg_berlin_nl.svg")
    },
    reg_brandenburg: {
      type: String,
      default: require("@/assets/img/logos/reg_brandenburg_nl.svg")
    },
    reg_bremen: {
      type: String,
      default: require("@/assets/img/logos/reg_bremen_nl.svg")
    },
    reg_hessen: {
      type: String,
      default: require("@/assets/img/logos/reg_hessen_nl.svg")
    },
    reg_hh: {
      type: String,
      default: require("@/assets/img/logos/reg_hh_nl.svg")
    },
    reg_mp: {
      type: String,
      default: require("@/assets/img/logos/reg_mp_nl.svg")
    },
    reg_niedersachsen: {
      type: String,
      default: require("@/assets/img/logos/reg_niedersachsen_nl.svg")
    },
    reg_nrw: {
      type: String,
      default: require("@/assets/img/logos/reg_nrw_nl.svg")
    },
    reg_rp: {
      type: String,
      default: require("@/assets/img/logos/reg_rp_nl.svg")
    },
    reg_saar: {
      type: String,
      default: require("@/assets/img/logos/reg_saar_nl.svg")
    },
    reg_sachsen: {
      type: String,
      default: require("@/assets/img/logos/reg_sachsen_nl.svg")
    },
    reg_sa: {
      type: String,
      default: require("@/assets/img/logos/reg_sa_nl.svg")
    },
    reg_sh: {
      type: String,
      default: require("@/assets/img/logos/reg_sh_nl.svg")
    },
    reg_thür: {
      type: String,
      default: require("@/assets/img/logos/reg_thür_nl.svg")
    }
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
