
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
            <div class="result-navigation" style="display:inline-block; width:100%">
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
import DataService from "../services/dataservice";
const dataservice = new DataService();
import { ResultItem } from "@/components";
import axios from "axios";
export default {
  bodyClass: "profile-page",
  props: {
    header: {
      type: String,
      default: require("@/assets/img/bg8.webp")
    }
  },
  components: {
    ResultItem
  },
  async beforeMount() {
    await this.getOffers();
    this.updateVisibleResults();
  },
  data() {
    return {
      text: null,
      email: null,
      message: null,
      currentPage: 0,
      pageSize: 10,
      results: [],
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
    async getOffers() {
      this.results = await dataservice.getOffers().then(data => {
        return data;
      });
    },
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
