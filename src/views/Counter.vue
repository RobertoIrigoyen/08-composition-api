<template>
  <div>
    <h1>Counter view</h1>
    <h3>{{ counter }}</h3>
    <button @click="increase">+1</button>
    <button @click="decrease">-1</button>
  </div>
</template>

<script>
import useCounter from "@/composables/userCounter";
export default {
  setup() {
    const { counter, decrease, increase } = useCounter(25);

    return {
      counter,
      decrease,
      increase,
    };
  },
};
</script>

<style></style>
