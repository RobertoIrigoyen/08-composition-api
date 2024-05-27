import { useStore } from "vuex";
import { computed, ref } from "vue";
const useTodos = () => {
  const store = useStore();
  const currentTab = ref("all");

  return {
    pending: computed(() => store.getters["pendingTodos"]),
    all: computed(() => store.getters["allTodos"]),
    completed: computed(() => store.getters["completedTodos"]),
    currentTab,
    getTodosByTab: computed(() =>
      store.getters["getTodosByTab"](currentTab.value)
    ),
    toggleTodo: (id) => store.commit("toggleTodo", id),
  };
};
export default useTodos;
