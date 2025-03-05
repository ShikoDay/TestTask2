<script setup>
  import { LocalStore } from '~/stores/LocalStore';
  const localStore = LocalStore(); 
  // import { onMounted } from 'vue';

  // onMounted(() => {
  //   console.log('Компонент был успешно смонтирован!');
  // });
</script>

<template>
  <nav class="navbar">
    <div class="container">
      <div class="logo">
        <NuxtLink to="/" class="logo-link">Test task</NuxtLink>
      </div>
      <ul class="nav-links">
        <li><NuxtLink to="/">Услуги</NuxtLink></li>
        <li><NuxtLink to="/">Контакты</NuxtLink></li>
        <li><button @click="localStore.toggleSidebar">Корзина {{ localStore.totalItem != 0 ? localStore.totalItem : '' }}</button> </li>
      </ul>
    </div>
  </nav>
</template>

<style>

.navbar {
  background-color: #333;
  color: white;
  padding: 10px 0;

  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
  }

  .logo {
    font-size: 24px;
    font-weight: bold;

    .logo-link {
      text-decoration: none;
      color: white;
    }
  }

  .nav-links {
    list-style: none;
    display: flex;
    gap: 20px;

    li {
      a {
        text-decoration: none;
        color: white;
        transition: color 0.3s ease;

        &:hover {
          color: #42b983;
        }
      }
    }

    &.active {
      display: flex;
      flex-direction: column;
      position: absolute;
      top: 60px;
      left: 0;
      width: 100%;
      background-color: #333;
      padding: 20px;
      z-index: 100;
    }
  }
}
</style>