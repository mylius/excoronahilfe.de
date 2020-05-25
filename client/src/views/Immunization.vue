<template>
  <div class="wrapper">
    <vue-headful title="ExCoronaHilfe | Antikörpertests und Immunität" />
    <parallax class="section page-header header-filter" :style="headerStyle">
      <div class="container">
        <div class="md-layout">
          <div class="md-layout-item md-size-50 md-small-size-70 md-xsmall-size-100">
            <h1 class="title">Antikörpertests und Immunität</h1>
          </div>
        </div>
      </div>
    </parallax>
    <div class="main main-raised">
      <div class="section">
        <div class="container">
          <div class="md-layout">
            <div class="md-layout-item md-size-66 md-xsmall-size-100 mx-auto">
              <h3
                class="title"
              >Erkenntnisse zur Immunisierung nach einer überstandenen Covid-19 Infektion:</h3>Für uns ist es zentral, dass wir mit Menschen zusammenarbeiten die durch einen Antikörpertest ihre Immunität bestätigen können.
              <br />
              <br />Um wirklich sicherzugehen, dass ein Patient das Virus nicht mehr in sich trägt, muss er zweimal negativ auf das Coronavirus Sars-CoV-2 getestet werden, so Professor Ortwin Adams, der die virologische Diagnostik am Uniklinikum Düsseldorf leitet.<sup><a href="https://www.br.de/nachrichten/wissen/bin-ich-nach-einer-infektion-immun-gegen-das-coronavirus,Ru43YZY">1</a></sup> Diese Sichtweise vertreten auch noch die meisten Gesundheitsämter. Hierbei handelt es sich um einen zweifach negativen PCR Test.
              <br />
              <br />Alternativ sind jetzt die Antikörpertests verfügbar, um eine überstandene Infektion ca. 2 bis 4 Wochen nach Ausheilung zu bestätigen. Diese sind besonders relevant für Erkrankte, die keinen PCR Test gemacht haben und somit auch kein positives Ergebnis hatten. Mögliche Asymptotische Verläufe können auch über einen positiven Antikörpertest nachgewiesen werden.
              <br />
              <br />Auch bei Genesenen kann wieder ein positives Testergebnis auftauchen: Der Corona-Test mittels PCR findet nicht das Virus selbst, sondern nur sein Genom. Reste des Genoms können aber, nach Aussage von Florian Krammer, Mikrobiologe am Mount Sinai Hospital in New York, noch lange nach einer akuten Infektion festgestellt werden: „Virale RNA kann oft lange, nachdem das infektiöse Virus verschwunden ist, noch nachgewiesen werden. Aber sobald PCR-Tests für einige Tage negativ sind und der Patient sich erholt hat, gibt es nach heutigem Wissen vermutlich kein Ansteckungsrisiko mehr. - Solange also noch Reste des Virus vorhanden sind, bleibt der Test positiv, obwohl das Virus vielleicht schon nicht mehr infektiös ist.“
              <br />
              <br />Wir stehen im Kontakt mit Medizinern, Virologen und gerade auch Universitätskrankenhäusern - die auch bereits zur Plasma- bzw. einer Antikörperspende aufgerufen haben.
              <br />
              <br />Alle führenden Virologen, eingeschlossen Dr. Drosten, gehen von einer verlässlichen Immunisierung, nach überstandenen Covid-19 Erkrankung aus, welche auch mit sich bringt, dass man nicht mehr infektiös ist, also andere nicht mehr gefährdet. Die Antikörpertests die als ELISA-Tests von deutschen Laboren durchgeführt werden, bieten bereits eine eindeutige Ermittlung der überstandenen Krankheit.
              <h3 class="title">Wie lange bleibe ich gegen Covid-19 immun?</h3>
              Prof. Dr. Isabella Eckerle, Universitätsklinikum Genf, Schweiz: „Wir wissen noch nicht, wie lange die Immunität anhält. Wenn man eine Analogie zu den anderen Coronaviren annimmt, könnte man von einem Zeitraum von ein paar Jahren ausgehen:
              <br />
              Bei SARS beispielsweise sind Antikörper drei bis fünf Jahre nachweisbar. Die Zeiträume sind also eher Jahre; es ist nicht so, dass man sich nach ein paar Tagen oder nach ein paar Wochen mit genau dem gleichen Virus wieder infizieren kann.“<sup><a href="https://www.br.de/nachrichten/wissen/bin-ich-nach-einer-infektion-immun-gegen-das-coronavirus,Ru43YZY">2</a></sup>
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
      default: require("@/assets/img/bg_test.jpg")
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
