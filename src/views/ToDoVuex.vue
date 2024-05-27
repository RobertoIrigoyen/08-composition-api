<template>
  <section>
    <h1>Thanos Do List</h1>
    <h4>Tareas:{{ $store.state.todos.length }}</h4>

    <h4>Pendientes: {{ pending.length }}</h4>
    <h4>Pendientes: {{ all.length }}</h4>
    <h4>Pendientes: {{ completed.length }}</h4>

    <hr />

    <button
      :class="{ active: currentTab === 'all' }"
      @click="currentTab = 'all'"
    >
      Todos
    </button>

    <button
      :class="{ active: currentTab === 'pending' }"
      @click="currentTab = 'pending'"
    >
      Pendientes
    </button>

    <button
      :class="{ active: currentTab === 'completed' }"
      @click="currentTab = 'completed'"
    >
      Completados
    </button>

    <div>
      <ul>
        <li
          v-for="todo in getTodosByTab"
          :key="todo.id"
          :class="{ completed: todo.completed }"
          @dblclick="toggleTodo(todo.id)"
        >
          {{ todo.text }}
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import { useStore } from "vuex";
import { computed, ref } from "vue";

export default {
  setup() {
    const store = useStore();
    const currentTab = ref("all");

    return {
      pending: computed(() => store.getters["pendingTodos"]),
      all: computed(() => store.getters["allTodos"]),
      completed: computed(() => store.getters["completedTodos"]),
      currentTab,
      getTodosByTab: computed(() => store.getters["getTodosByTab"](currentTab.value))
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
