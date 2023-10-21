<template>
  <div class="container">
    <div>
      <div>
        <div class="logo">
          <img src="../../assets/logo/oggetto-logo.svg" alt="">
        </div>
      </div>
      <div class="under-logo">
        <div class="under-logo-line"></div>
      </div>
      <router-link :to="{name: 'home'}" class="item">
        <div>
          <img src="../../assets/logo/icon_calendar_schedule_.svg" alt="">
        </div>
        <div class="item-content">Главная</div>
      </router-link>
      <router-link :to="{name: 'home'}" class="item">
        <div>
          <img src="../../assets/logo/icon_team_group_.svg" alt="">
        </div>
        <div class="item-content">Специалисты</div>
      </router-link>
    </div>
    <div class="button-space">
      <img src="../../assets/logo/Stuck_at_Home_Imagination.svg"><p>Опросы</p>
    </div>
  </div>
</template>

<script setup>
import Button from '@/components/Button.vue'
</script>

<style scoped>
.item {
  display: flex;
  padding: 20px 0 20px 20px
}

.item .item-content {
  font-family: Montserrat-Medium;
  vertical-align: middle;
  margin-left: 20px;
  font-size: 16px;
  padding-top: 3px;
}

.logo {
  padding: 30px 0 20px 0;
  text-align: center;
}

.under-logo {
  text-align: center;
  display: flex;
  justify-content: center;
  width: 100%;
  margin-bottom: 20px;
}

.under-logo-line {
  background-color: rgba(92, 99, 110, 0.25);
  width: 160px;
  height: 1px;
  text-align: center;
}

.container {
  width: 200px;
  background-color: #E2E6F4;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.button-space {
  background-color: #ECB300;
  padding: 5px 20px 5px 5px;
  border-radius: 10px;
  display: flex;
  margin-bottom: 40px;
  align-self: center;
}

.button-space img {
  width: 49px;
  height: 38px;
}
</style>