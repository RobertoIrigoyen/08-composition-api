<template>
  <div>
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link :to="{ name: 'counter' }">Counter</router-link> |
      <router-link :to="{ name: 'user' }">User</router-link> |
      <router-link :to="{ name: 'pokemon-search' }">Pokemon Search</router-link>
      | <router-link :to="{ name: 'to-do' }">To Do Vuex</router-link> |
      <router-link :to="{ name: 'slots' }">Slots</router-link> |
    </nav>
    <router-view v-slot="{ Component }">
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </router-view>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
