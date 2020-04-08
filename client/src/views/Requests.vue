
<template>
  <div class="wrapper">
    <parallax class="section page-header header-filter" :style="headerStyle">
      <div class="container">
        <div class="md-layout">
          <div class="md-layout-item md-size-50 md-small-size-70 md-xsmall-size-100">
            <h1 class="title">Gesuche</h1>
          </div>
        </div>
      </div>
    </parallax>
    <div class="main main-raised">
      <div class="section">
        <div class="container">
          <div class="md-layout">
            <div class="result-containter">
              <ResultItem
                v-for="result in visibleResults"
                :key="result.id"
                v-bind:visibleResults="visibleResults "
                v-bind:currentPage="currentPage"
                v-bind:result="result"
              ></ResultItem>
              </div>
              <div class = "result-navigation" style="display:inline-block; width:100%">
                <pagination type="success" style="float:left" v-model="currentPage" :page-count="2"></pagination>
                <div style="float:right">
                <div class="result-new" style="float:right">
                  <router-link :to="{name: 'createentry'}">
                    <md-button id="new_entry" class="md-success">Neuer Eintrag</md-button>
                  </router-link>
                </div>

              </div>
            </div>
            <br />
            <br />

          </div>

          
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {ResultItem} from '@/components';
export default {
  bodyClass: "profile-page",
  props: {
    header: {
      type: String,
      default: require("@/assets/img/bg8.webp")
    },
  },
  components: {
    ResultItem,
  },
  beforeMount: function() {
    this.updateVisibleResults();
  },
  data() {
    return {
      text: null,
      email: null,
      message: null,
      currentPage: 0,
      pageSize: 10,
      results: [
        { id: 1, text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.", dist: 5 },
        { id: 2, text: "Bar", dist: 7 },
        { id: 3, text: "Foo1", dist: 5 },
        { id: 4, text: "Bar1", dist: 7 },
        { id: 5, text: "Foo2", dist: 5 },
        { id: 6, text: "Bar2", dist: 7 },
        { id: 7, text: "Foo3", dist: 5 },
        { id: 8, text: "Bar3", dist: 7 },
        { id: 9, text: "Foo4", dist: 5 },
        { id: 10, text: "Bar4", dist: 7 },
        { id: 11, text: "Foo5", dist: 5 },
        { id: 12, text: "Bar5", dist: 7 }
      ],
      visibleResults: []
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
    updatePage(pageNumber) {
      this.currentPage = pageNumber;
      this.updateVisibleResults();
    },
    updateVisibleResults() {
      this.visibleResults = this.results.slice(
        this.currentPage * this.pageSize,
        this.currentPage * this.pageSize + this.pageSize
      );

      // if we have 0 visible results, go back a page
      if (this.visibleResults.length == 0 && this.currentPage > 0) {
        this.updatePage(this.currentPage - 1);
      }
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
