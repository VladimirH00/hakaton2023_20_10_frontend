<script setup>

</script>

<template>
  <div class="btn">
    <router-link to="">
      <slot></slot>
    </router-link>
  </div>
</template>

<style scoped>
.btn {
  background-color: #ECB300;
  padding: 20px 50px;
  border-radius: 20px;
}
</style>