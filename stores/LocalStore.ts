import { defineStore } from 'pinia';
import { ref } from 'vue';

export const LocalStore = defineStore('LocalStore', () => {
  const isSidebarOpen = ref(false);
  const toggleSidebar = () => {
    isSidebarOpen.value = !isSidebarOpen.value;
  };

  const saveCard = (obj: Object) => {
    localStorage.setItem('productProps', JSON.stringify(obj));
  };

  function loadFromLocalStorage() {
    const storedData = localStorage.getItem('productProps');
    if (storedData) {
      var DirtyArray = JSON.parse(storedData);
      const ClearArray = Object.values(DirtyArray).filter(item => 
        typeof item === 'object' && item !== null && 'id' in item
      );
      return ClearArray
    }
  }

  const saveTotalItem = (obj: Object) => {
    const test = JSON.stringify('TotalItem', obj)
  };

  return { isSidebarOpen, toggleSidebar, saveCard, saveTotalItem, loadFromLocalStorage};
});