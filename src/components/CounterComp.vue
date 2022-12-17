<template>
  <div>
    <!-- 4. -->
    <button @click="increment">Add 1</button>

    <button @click="clearNotification">Clear Numbers</button>

    <!--3. this button will only add 1 to the counter cause its in the WRITEABLE STATE -->
    <h1>Count : {{ counter }}</h1>
    <h1>Double : {{ double }}</h1>
    <h1>Circle Area : {{ circleArea }}</h1>

    <!-- is in the READABLE state -->
    <button @click="notify">Send Notification</button>
    {{ isNotification }}
    {{ name }}
  </div>
</template>

<script>
import { useCounterStore } from "@/stores/counter";
import { mapState, mapWritableState } from "pinia";

export default {
  name: "CounterCompt",
  computed: {
    // READ ONLY import
    //1. ---------------------- [the names of all the variables you want to import]
    ...mapState(useCounterStore, ["name", "isNotification"]),
    //2. WRITEABLE import
    ...mapWritableState(useCounterStore, ["counter"]),

    // Getters exmample
    ...mapState(useCounterStore, ["double", "circleArea"]),

    // Action
    ...mapState(useCounterStore, ["notify", "clearNotification"]),
  },
  methods: {
    //5. this function will add one to the counter
    increment() {
      this.counter++;
    },
  },
};
</script>

<style scoped>
</style>
