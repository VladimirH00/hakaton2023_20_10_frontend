<script setup>

import {toRefs} from "vue";

const props = defineProps(['title', 'myPlaceholder', 'showFirst', 'condition', 'error']);
const { title, myPlaceholder, showFirst, condition, error } = toRefs(props);
const emits = defineEmits(['switchForm', 'inputdata']);

const switchForm = () => {
  emits('switchForm')
}

const showError = () => {
  return error.value === undefined || error.value === '';
}

const handleInput = (event) => {
  emits('inputdata', event.target.value);
}
</script>

<template>
  <div class="form-login">
    <div class="content-login">
      <p>{{ title }}</p>
      <input :placeholder="myPlaceholder" :title="error" @input="handleInput">
      <div class="error" v-if="showError">{{ error }}</div>
      <div class="btn-login" @click="switchForm">Войти</div>
      <div class="first-time" v-if="showFirst">Впервые тут?</div>
    </div>
  </div>
</template>

<style scoped>
.error {
  font-size: 12px;
  color: red;
}

.first-time {
  cursor: pointer;
  margin-top: 20px;
  margin-bottom: 40px;
  text-align: center;
  color: var(--orange-color);
}

.content-login input {
  margin-top: 50px;
}

.btn-login {
  cursor: pointer;
  margin-top: 100px;
  background-color: var(--backgroud-color);
  color: white;
  text-align: center;
  padding: 10px;
}

.content-login {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.content-login p {
  margin-top: 40px;
  text-align: center;
}

.content-login input:focus,
.content-login input:focus-visible,
.content-login input {
  border: solid 0;
  border-bottom: 1px solid var(--borders);
  color: var(--font);
  outline: 0;
}

.form-login {
  padding: 40px 100px;
  border: 1px solid var(--borders);
  border-radius: 10px;
}
</style>