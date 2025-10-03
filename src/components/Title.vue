<script setup>
defineProps({
  label: {
    type: String,
    default: '',
  },
});
</script>

<template>
  <h2 class="title">{{ label }}</h2>
</template>

<style scoped>
.title {
  color: #191970;
}
</style>
