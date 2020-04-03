<template>
  <div class="result-container">{{result.text}}</div>
</template>

<script>
export default {
  name: "ResultItem",
  props: ['result'],
};
</script>