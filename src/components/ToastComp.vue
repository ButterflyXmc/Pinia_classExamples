<template>
  <!-- add this comp to homeview -->
  <div v-if="isNotification">
    <h1>Notification</h1>
    <button @click="clearNotification">Clear</button>
  </div>
</template>

<script>
import { useCounterStore } from "@/stores/counter";
import { mapState } from "pinia";

export default {
  name: "ToastComp",
  computed: {
    ...mapState(useCounterStore, ["isNotification"]),
    ...mapState(useCounterStore, ["clearNotification"]),
  },
};
</script>

<style scoped>
div {
  position: absolute;
  top: 10px;
  right: 10px;
}
</style>