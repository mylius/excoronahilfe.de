<template>
  <div class="wrapper">
    <vue-headful title="ExCoronaHilfe | Blutspenden und Prinzip der passiven Immunisierung" />
    <parallax class="section page-header header-filter" :style="headerStyle">
      <div class="container">
        <div class="md-layout">
          <div class="md-layout-item md-size-50 md-small-size-70 md-xsmall-size-100">
            <h1 class="title">Blutspenden und Prinzip der passiven Immunisierung</h1>
          </div>
        </div>
      </div>
    </parallax>
    <div class="main main-raised">
      <div class="section">
        <div class="container">
          <div class="md-layout">
            <div class="md-layout-item md-size-66 md-xsmall-size-100 mx-auto">
              Passiv Immunisierung bedeutet mit den Anti-Körpern aus dem Blutplasma von Gesundeten, Schwerekrankte akut zu impfen und bei der Abwehr des Virus zu helfen. Wir haben eine Datenbank von Krankenhäusern und Forschungseinrichtungen zur Vermittlung von Blut- bzw. Plasma- oder Lymphozytenspende für Schwererkrankte. Wir stehen in Kontakt mit mehreren Krankenhäusern und Blutspendediensten, die bereits selbst nach Immunisierten suchen.
              <br />
              <br />
              <div style="text-align:center">
                <iframe style="height:315px" width="640" height="315px" src="https://www.youtube.com/embed/LGLIsdRng-I" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>
              <h3 class="title">Prinzip der passiven Immunisierung</h3>
              <h4 class="title">Wie funktioniert das Verfahren der passiven Immunisierung?</h4>
              <div style="text-align:center">
                <iframe style="height:315px" width="640" height="315" src="https://www.youtube.com/embed/bt0rE3m_bIg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>
              <br />
              <br />„Der Transfer von Plasma ist eine passive Immunisierung", erklärt Dr. Rainer Blasczyk von der Medizinische Hochschule Hannover, welche das Verfahren bereits vorbereitet. Dieses Vorgehen schütze nicht sehr lange, schätzungsweise maximal drei Monate. Dennoch kann das Verfahren Erkrankten helfen über die kritische Zeit hinwegzukommen, in der sie selbst noch nicht genügend eigene Antikörper gebildet haben. Blascyzk informiert, dass der Einsatz bei schwerkranken Patienten geplant ist, er sich aber auch vorstellen könne, das Plasma leichter erkrankten Personen zu verabreichen, damit sich ihr Krankheitszustand gar nicht erst verschlechtert. Wenn man genug Plasma zur Verfügung hätte, könnte man es laut dem Mediziner auch bestimmten Gruppen, die noch gar nicht erkrankt sind, verabreichen, beispielsweise Menschen, die zu den Risikogruppen zählen oder im Gesundheitsbereich arbeiten.<sup><a href="https://www.pharmazeutische-zeitung.de/wie-plasmaspenden-covid-19-patienten-das-leben-retten-koennten/">1</a></sup>
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
