<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <CounterComp />
    <ToastComp />
  </div>
</template>

<script>
// @ is an alias to /src
import CounterComp from "@/components/CounterComp.vue";
import ToastComp from "@/components/ToastComp.vue";

export default {
  name: "HomeView",
  components: {
    CounterComp,
    ToastComp,
  },
};
</script>
