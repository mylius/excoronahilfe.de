<template>
  <div class="wrapper">
    <parallax class="section page-header header-filter" :style="headerStyle">
      <div class="container">
        <div class="md-layout">
          <div class="md-layout-item md-size-50 md-small-size-70 md-xsmall-size-100">
            <h1 class="title">Impressum</h1>
          </div>
        </div>
      </div>
    </parallax>  
    <div class="main main-raised">
      <div class="section">
        <div class="container">
          <div class="md-layout"> 
            <div class="md-layout-item md-size-66 md-xsmall-size-100 mx-auto">
              
                <h2 class="title">Danksagung</h2>
                Vielen Dank an alle direkten und indirekten Unterstützer des Projekts, alle Helfer und alle Regionalkoordinatoren! Ohne euch wäre das alles hier nicht möglich!
                Meinen besonderen Dank spreche ich aus für:
                <h2 class="title">Angaben gemäß § 5 TMG</h2>
                <b>Gesellschaft für Gesundes Altern und Prävention e. V.</b>
                <br />
                Krahnenstr. 7-9
                <br />
                51063 Köln
                <br />
                E-Mail: info@heales.de
                <br />
                Vorstandsvorsitz: Alexander Tietz-Latza
                <br />
                eingetragen im Vereinsregister beim Amtsgericht Köln
                <h2  class="title">Weitere Angaben & rechtliche Hinweise</h2>
                <h3  class="title">Allgemeiner Haftungsausschluss</h3>
                <h4  class="title">Haftung für Inhalte</h4>
                Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
                Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
                <h4  class="title">Haftung für Links</h4>
                Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.
                Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
                <h4  class="title">Urheberrecht</h4>
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
                Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
               <h2 class="title">Disclaimer</h2>
               Die Informationen dürfen auf keinen Fall als Ersatz für professionelle Beratung oder Behandlung durch ausgebildete und anerkannte Ärzte angesehen werden. Unser Portal kann und darf nicht verwendet werden, um eigenständig Diagnosen zu stellen oder Behandlungen anzufangen.            
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
      default: require("@/assets/img/bg2019.jpg")
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
