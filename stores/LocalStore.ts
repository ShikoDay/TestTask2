import { defineStore } from 'pinia';
import { ref } from 'vue';

export const LocalStore = defineStore('LocalStore', () => {
  const isSidebarOpen = ref(false);
  const totalItem = ref(0);
  const totalPrise = ref(0);

  const toggleSidebar = () => {
    isSidebarOpen.value = !isSidebarOpen.value;
  };

  const saveCard = (obj) => {
    localStorage.setItem('productProps', JSON.stringify(obj));
  };

  // Реактивное состояние для хранения восстановленных данных
  const productState = reactive({
    id: null,
    title: '',
    imageUrl: '',
    price: null,
    isAdd: false
  });

  // Функция для загрузки данных из localStorage
  function loadFromLocalStorage() {
    const storedData = localStorage.getItem('productProps');
    if (storedData) {
      var test = Object.assign(productState, JSON.parse(storedData)); // Восстанавливаем данные
      console.log(Object.assign(productState, JSON.parse(storedData)))
      return test
    }
    console.log('Нет ничего в хранилище')
    // return 0
  }

  const saveTotalItem = (obj) => {
    const test = JSON.stringify('TotalItem', obj)
  };

  return { isSidebarOpen, toggleSidebar, totalItem, totalPrise, saveCard, saveTotalItem, loadFromLocalStorage };
});