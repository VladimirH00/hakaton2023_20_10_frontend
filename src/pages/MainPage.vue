<script setup>
import Calendar from "@/components/Calendar.vue"

const date = new Date();

function getWeekDay(date) {
  let days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
  return days[date.getDay()];
}

function getMonthBeauty(date) {
  let days = [
    'Января', 'Февраля', 'Марта', 'Апреля',
    'Мая', 'Июня', 'Июль', 'Августа',
    'Сентября', 'Октября', 'Ноября', 'Декабря'
  ];
  return days[date.getMonth()];
}

const strDate = `${getWeekDay(date)}, ${date.getDate()} ${getMonthBeauty(date)}`;
</script>

<template>
  <div class="main__header">
    <div>Главная</div>
    <div>{{ strDate }}</div>
  </div>
  <Calendar></Calendar>
</template>

<style scoped>
.main__header {
  margin-top: 32px;
  display: flex;
  justify-content: space-between;
}
</style>