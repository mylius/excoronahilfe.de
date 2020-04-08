<template>
  <result>
    <div class="content-container">
      <div class="content"><div class="inner">{{result.text}}</div></div>

      <div class="other">
        ~{{result.dist}}km
      </div>
      <div class="other">
        <md-icon>mail</md-icon>
      </div>
    </div> 
  </result>
</template>

<script>
export default {
  name: "ResultItem",
  props: ["result"]
};
</script>