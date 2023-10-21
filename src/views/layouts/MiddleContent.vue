<script setup>

</script>

<template>
  <div class="main-page">
    <div class="main-container">
      <router-view v-slot="{ Component, route }">
        <transition name="fade">
          <component :is="Component" :key="route.path"/>
        </transition>
      </router-view>
    </div>
  </div>
</template>

<style scoped>
.main-page {
  flex-grow: 1;
  padding: 30px;
}

.fade-enter-active,
.fade-leave-active {
  transition-property: opacity;
  transition-duration: .5s;
}

.fade-enter-active {
  transition-delay: .5s;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>