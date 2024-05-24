<template>
  <div>
    <h1>Counter view</h1>
    <h3>{{ counter }}</h3>
    <button @click="increase">+1</button>
    <button @click="decrease">-1</button>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const counter = ref(5);

    // const increase = () => {
    //     counter.value++
    // } 
    // const decrease = () => {
    //     counter.value--
    // } 

    return {
      counter,
      increase: () => counter.value++,
      decrease: () => counter.value--
    };
  },
};
</script>

<style></style>
