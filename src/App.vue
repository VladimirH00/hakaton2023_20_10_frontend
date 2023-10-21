<script setup>
import LeftSideBar from "@/views/layouts/LeftSideBar.vue"
import RightSideBar from "@/views/layouts/RightSideBar.vue"
import MiddleContent from "@/views/layouts/MiddleContent.vue";
import {useStore} from "vuex";
import {getToken} from "./functions/auth";
import {getUser} from "./functions/fetches";
import {toRef} from "vue";

const store = useStore()
const token = getToken('token');
const user = toRef(getUser());

store.commit('setToken', token);

</script>

<template>
  <div class="main-container">
    <LeftSideBar></LeftSideBar>
    <MiddleContent></MiddleContent>
    <RightSideBar></RightSideBar>
  </div>
</template>

<style scoped>
.main-container {
  display: flex;
  height: 100%;
  width: 100%;
}
</style>
