<script setup>
import Login from "@/pages/Login.vue";
import {ref, toRef} from "vue";
import {checkAccess, logout} from "../../functions/auth";
import store from "../../store";
import {getUser} from "../../functions/fetches";

const isVisibleBtn = ref(false);
const can = checkAccess();
const profile = toRef(getUser());

const changeVisible = () => {
  isVisibleBtn.value = !isVisibleBtn.value;
}

const setVisible = (value) => {
  isVisibleBtn.value = value;
}


</script>

<template>
  <div class="inner-container-right_side_bar">
    <div v-if="can">
      <div class="right-side-bar__header">
        <div class="right-side-bar__content">Профиль</div>
        <div title="Явки и пароли">
          <img src="../../assets/logo/bell.svg" alt="">
        </div>
      </div>

      <div class="profile__right-side-bar">
        <div class="avatar__right-side-bar">
          <img :src="profile?.avatar">
        </div>
        <div class="fio__right-side-bar">
          <p>{{ profile?.fio }}</p>
        </div>
      </div>
      <div class="recommend__right-side-bar">
        <div class="recommend-inner__right-side-bar">
          <div class="header">Рекомендуем</div>
          <div class="recommend-container__right-side-bar">
            <div class="item">
              <div class="recommend-left-part">
                <img src="../../assets/logo/bed.svg">
                <p>Сомнология</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <template v-if="can">
      <div class="exit__right-side-bar" @click="logout">
        <p>Выйти</p> <img src="../../assets/logo/log_out.svg">
      </div>
    </template>
    <template v-else>
      <div class="exit__right-side-bar" @click="changeVisible">
        <p>Залогиниться</p>
      </div>
    </template>
  </div>
  <transition name="fade">
    <teleport to="#modal-window-login">
      <Login :isVisible="isVisibleBtn" @visible="setVisible"></Login>
    </teleport>
  </transition>
</template>

<style scoped>
.profile__right-side-bar {
  margin: 50px 0;
  text-align: center;
}

.recommend-inner__right-side-bar .header {
  margin: 20px 30px;
}

.recommend-left-part {
  background-color: #AF89CD;
  border-radius: 15px;
}

.recommend-left-part p {
  margin-left: 20px;
}

.recommend-container__right-side-bar {
  max-height: 400px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  overflow: auto;
}

.recommend-container__right-side-bar .item {
  width: 80%;
  cursor: pointer;
}

.exit__right-side-bar {
  cursor: pointer;
  margin: 0 auto 100px auto;
  display: flex;
}

.exit__right-side-bar p {
  margin-right: 5px;
}

.recommend-left-part {
  display: flex;
}

.recommend-inner__right-side-bar .header {
  font-family: Montserrat-Regular;
  font-weight: bold;
}

.container__right-side-bar {
  display: flex;
}

.right-side-bar__content {
  font-family: Montserrat-Medium;
}

.inner-container-right_side_bar {
  width: 340px;
  background-color: #E2E6F4;
  height: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
}

.right-side-bar__header {
  display: flex;
  justify-content: space-between;
  margin: 60px 20px;
}
</style>