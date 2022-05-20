<template>
  <div>
    <h1>home</h1>
    <h3>{{ msg }}</h3>
  </div>
</template>

<script>
export default {
  name: "home",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
</style>
