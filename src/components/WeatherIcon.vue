<template>
  <img
    :src="require(`../assets/images/${id.slice(0, -1)}.png`)"
    :alt="weather"
  />
</template>

<script>
export default {
  props: { id: String, weather: String },
};
</script>
