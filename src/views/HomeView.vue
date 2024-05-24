<template>
  <div class="home">
    <h1>reactive vs ref</h1>
    <div>
      <p>{{ ironman }}</p>
      <p>{{ hulk }}</p>
    </div>
    <div>
      <button @click="changeIronman">Cambiar Ironman</button>
      <button @click="changeHulk">Cambiar Hulk</button>
    </div>
    <div>
      <h3>Ironman: {{ ironmanIsAlive }}</h3>
      <h3>Hulk: {{ hulkIsAlive }}</h3>
      <button @click="changeStatus">Cambiar status</button>
    </div>
  </div>
</template>

<script>
import { ref, reactive } from "vue";

// @ is an alias to /src

export default {
  name: "HomeView",
  setup() {
    const ironman = ref({ name: "Tony", age: 50 });
    const hulk = reactive({ name: "Bruce", age: 50 });

    const ironmanIsAlive = reactive(false);
    const hulkIsAlive = ref(true);

    const changeStatus = () => {
      hulkIsAlive.value = !hulkIsAlive.value;
    };

    return {
      ironman,
      hulk,
      ironmanIsAlive,
      hulkIsAlive,
      changeStatus,
      changeIronman: () => {
        ironman.value.name = "Tony Stark";
        ironman.value.age = 55;
      },
      changeHulk: () => {
        hulk.name = "Bruce Banner";
        hulk.age = 45;
      },
    };
  },
};
</script>
