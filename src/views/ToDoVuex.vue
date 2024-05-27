<template>
  <h1>Thanos Do List</h1>
  <h4>Tareas:{{ $store.state.todos.length }}</h4>

  <h4>Pendientes: {{ pending.length }}</h4>
</template>

<script>
import { useStore } from "vuex";
import { computed } from "vue";

export default {
  setup() {
    const store = useStore();

    return {
      pending: computed(() => store.getters["pendingTodos"]),
    };
  },
};
</script>

<style scoped>
div {
  display: flex;
  justify-content: center;
  text-align: center;
}

ul {
  width: 300px;
  text-align: left;
}

li {
  cursor: pointer;
}

.active {
  background-color: #2c3e50;
  color: white;
}

.completed {
  text-decoration: line-through;
}
</style>
