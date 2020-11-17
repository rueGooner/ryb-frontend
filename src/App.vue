<template>
  <div id="app" class="flex-container">
    <div v-if="$route.name !== 'Login'" id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>
