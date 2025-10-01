<script setup>
defineProps({
  label: {
    type: String,
    default: 'Click me',
  },
  color: {
    type: String,
    default: 'accept' | 'cancel',
  },
});
</script>

<template>
  <button type="submit" class="button" :class="color">{{ label }}</button>
</template>

<style scoped>
.button {
  background-color: #191970;
  color: white;
  border: 1px solid #191970;
  border-radius: 10px;
  padding: 5px;
  text-align: center;
  cursor: pointer;
}
.accept {
  background-color: green;
  border: 1px solid green;
  padding: 10px;
  border: 0;
  border-radius: 20px;
  margin: 0 10px;
}

.cancel {
  border: 1px solid firebrick;
  padding: 10px;
  border: 0;
  background-color: firebrick;
  border-radius: 20px;
  color: white;
}
</style>
