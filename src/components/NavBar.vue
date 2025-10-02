<script setup></script>

<template>
  <nav class="navbar">
    <router-link to="/" class="nav-link" exact-active-class="active"
      >Home</router-link
    >
    <router-link to="/about" class="nav-link" exact-active-class="active"
      >About Me</router-link
    >
  </nav>
</template>

<style scoped>
.navbar {
  display: flex;
  gap: 20px;
  padding: 15px 20px;
  background-color: #191970;
}

.nav-link {
  color: white;
  text-decoration: none;
  font-weight: bold;
}

.nav-link.active {
  border-bottom: 2px solid #fff;
}

.nav-link:hover {
  color: #add8e6;
}
</style>
