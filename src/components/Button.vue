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
  padding: 8px;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;
}
.button:hover {
  background-color: white;
  color: #191970;
}
.accept {
  background-color: green;
  border: 1px solid green;
  padding: 10px;
  border: 0;
  border-radius: 20px;
  margin: 0 10px;
}
.accept:hover {
  background-color: rgb(208, 234, 208);
  color: green;
}

.cancel {
  border: 1px solid firebrick;
  padding: 10px;
  border: 0;
  background-color: firebrick;
  border-radius: 20px;
  color: white;
}
.cancel:hover {
  background-color: rgb(236, 167, 148);
  color: firebrick;
}
</style>
