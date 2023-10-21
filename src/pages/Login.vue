<script setup>
import {computed, ref, toRefs} from "vue";
import LoginForm from "@/components/forms/LoginForm.vue";
import {useStore} from "vuex";
import {getAuth} from "@/functions/auth.js";

const props = defineProps(['isVisible']);
const {isVisible} = toRefs(props);
const emit = defineEmits(['catalog']);
const modal = ref(0);
const showLogin = ref(true);
const email = ref('');
const code = ref('');
const condition = ref('login');
const store = useStore();
const error = ref('')

const getClass = computed(() => {
  return isVisible.value ? 'modal-login' : 'modal-login hidden';
})

const closeModal = () => {
  modal.value.classList.add('fade-leave')
  setTimeout(() => {
    emit('visible', false);
  }, 800);
}

const switchForm = async () => {
  error.value = '';
  let data
  switch (condition.value) {
    case 'login':
      data = await getAuth(store.getters.getUrl, email.value);
      if (data.error?.email === undefined) {
        error.value = '';
        condition.value = 'dualAuth'
        showLogin.value = false;
      } else {
        error.value = data.error?.email[0];
      }
      break;
    case 'dualAuth':
      data = await getAuth(store.getters.getUrl, email.value, code.value);
      error.value = data?.error?.msg;
      if (error.value === undefined) {
        error.value = '';
        email.value = '';
        code.value = '';
        condition.value = 'login'
        showLogin.value = true;
        store.commit('setToken', data.token);
        document.cookie = `token=${data.token}`;
        emit('visible', false);
      }
      break;
  }
};

const setLogin = (value) => {
  email.value = value
}

const setCode = (value) => {
  code.value = value;
}
</script>

<template>
  <div ref="modal" :class="getClass">
    <div class="left-side__modal-login">
      <div>
        <img src="../assets/logo/oggetto-logo_tonal-inverse-ver-rus.svg">
        <p class="h40">Гармония тела и разума</p>
        <p class="h24">С заботой о наших сотрудниках</p>
      </div>
    </div>
    <div class="right-side__modal-login">
      <div class="close" @click="closeModal">
        <img src="../assets/logo/cross.svg">
      </div>
      <template v-if="showLogin">
        <LoginForm
            :title="'Вход'"
            :myPlaceholder="'Email'"
            :condition="condition"
            @inputdata="setLogin"
            @switchForm="switchForm"
            :error="error"
            :showFirst="true"
        ></LoginForm>
      </template>
      <template v-else>
        <LoginForm
            :title="'Двухфакторная аутентификация'"
            :condition="condition"
            @inputdata="setCode"
            @switchForm="switchForm"
            :error="error"
            :myPlaceholder="'Код'"
        ></LoginForm>
      </template>
    </div>
  </div>
</template>

<style scoped>
.right-side__modal-login {
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.right-side__modal-login .close {
  cursor: pointer;
  position: absolute;
  right: 10px;
  top: 10px;
}

p.h40 {
  font-family: Montserrat-Medium;
  font-size: 40px;
  margin-bottom: 0;
  color: white;
}

p.h24 {
  font-family: Montserrat-Medium;
  font-weight: normal;
  font-size: 24px;
  color: white;
  margin-top: 0;
}

.modal-login {
  transition: 1s;
  display: flex;
  position: absolute;
  background-color: white;
  height: 100%;
  width: 100%;
}

.hidden {
  display: none;
}

.left-side__modal-login {
  background-color: var(--backgroud-color);
  width: 50%;
  height: 100%;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
}

.fade-leave {
  opacity: 0;
}
</style>