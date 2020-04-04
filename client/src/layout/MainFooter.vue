<template>
  <footer
    class="footer"
    :class="{ [`footer-${type}`]: type }"
    :data-background-color="backgroundColor"
  >
    <div class="container">
      <nav> 
        <div class="legal">
          <ul>
            <li>
              <a href="#/impressum">
                Impressum
              </a>
            </li>
            <li>
              <a href="#/privacy">
                Datenschutzerklärung
              </a>
            </li>
          </ul>
        </div>
        <div class="social">
          <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top" style="padding:15px">
            <input type="hidden" name="cmd" value="_s-xclick" />
            <input type="hidden" name="hosted_button_id" value="3V8J25WN874DL" />
            <input type="image" src="https://www.paypalobjects.com/de_DE/DE/i/btn/btn_donate_SM.gif" border="0" name="submit" title="PayPal" alt="Spenden mit dem PayPal-Button" />
          </form>
        </div>
      </nav>
      <!--<div class="copyright">
        &copy; {{ year }}, made with <md-icon>favorite</md-icon> by
        <a href="https://www.creative-tim.com/" target="_blank">Creative Tim</a>
        for a better web.
      </div>
      -->
    </div>
    
  </footer>
</template>
<script>
export default {
  props: {
    backgroundColor: String,
    type: String
  },
  data() {
    return {
      year: new Date().getFullYear()
    };
  }
};
</script>
<style></style>
