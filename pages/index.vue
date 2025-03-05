<script setup>
import Product_card from '~/components/ProductCard.vue';
import Card from '~/components/Card.vue'
import { ref, provide } from 'vue';
import { LocalStore } from '~/stores/LocalStore';
const localStore = LocalStore();

const card = ref([])

const item = ref([
  {
    id: 1,
    title: "2K Sport Performance",
    imageUrl: "https://2k-shop.ru/images/122710/yellow_black_black.jpg",
    prise: 3500,
    isAdd: false
  },
  {
    id: 2,
    title: "Nicenonice Classic 'Miyagi face'",
    imageUrl: "https://nicenonice.ru/wa-data/public/shop/products/46/29/12946/images/15433/15433.970.jpg",
    prise: 3500,
    isAdd: false
  },  
  {
    id: 3,
    title: "Армия России х/б бежевый",
    imageUrl: "https://okrug.ru/image/cache/data/futbolki/futbolka_Armia_Rossii_bezh_00-750x1163.jpg",
    prise: 5000,
    isAdd: false
  },
  {
    id: 4,
    title: "Black + img",
    imageUrl: "https://merch.kaspersky.ru/assets/thumbnails/a5/a58cee5ee54e372a8f5cf3630721be12.jpg",
    prise: 4000,
    isAdd: false
  },
  {
    id: 5,
    title: "Футболка унисекс BASIC",
    imageUrl: "https://modano.ru/wa-data/public/shop/products/08/15/1508/images/203949/203949.635x953@2x.jpg",
    prise: 2000,
    isAdd: false
  },
  {
    id: 6,
    title: "Футболка детская Trisar 155",
    imageUrl: "https://4kraski.ru/assets/images/products/17523/118.36.1.jpg",
    prise: 2700,
    isAdd: false
  },
  {
    id: 7,
    title: "Черная футболка Петербург",
    imageUrl: "https://static.insales-cdn.com/images/products/1/2624/874965568/%D1%81%D0%BF%D0%B1.jpg",
    prise: 2000,
    isAdd: false
  },
  {
    id: 8,
    title: "Набор из двух футболок Cotton 2",
    imageUrl: "https://code7.ru/pub/media/catalog/product/cache/c687aa7517cf01e65c009f6943c2b1e9/p/9/p9104.jpg",
    prise: 5000,
    isAdd: false
  },
])

onMounted(() => {
  const test = localStore.loadFromLocalStorage();
  console.log(test)
  console.log(item)

  // Object.entries(test).forEach(([key, test]) => {
  //   const id = parseInt(key); // Преобразуем ключ в число
  //   const index = item.value.findIndex(oldItem => oldItem.id === id);

  //   if (index !== -1) {
  //     // Обновляем только соответствующий элемент
  //     item.value[index] = { ...item.value[index], ...test };
  //   } else {
  //     // Если элемента нет, добавляем новый
  //     item.value.push(test);
  //   }
  // });

  

  // Object.entries(test).forEach(([id, test]) => {
  //   const index = item.value.findIndex(oldItem => oldItem.id === parseInt(id));
  //   if (index !== -1) {
  //     item.value[index] = { ...item.value[index], ...test };
  //   }
  // });

  // item.value = item.value.map(oldItem => {
  //   const test = test[oldItem.id]; // Проверяем, есть ли новый элемент для данного id
  //   return test ? { ...oldItem, ...test } : oldItem;
  // });
});

const addItem = async(id) => {
  const index = item.value.findIndex((el) => el.id === id);
  if (index !== -1) {
    localStore.totalItem++
    localStore.totalPrise += item.value[index].prise
    item.value[index].isAdd = true
    card.value.push(item.value[index])
    localStore.saveCard(card.value)
    localStore.saveTotalItem(localStore.totalPrise)
  }
}

const deteleItem = async(id) => {
  const index = card.value.findIndex((el) => el.id === id);
  if (index !== -1) {
    localStore.totalItem--
    localStore.totalPrise -= card.value[index].prise
    item.value[index].isAdd = false
    card.value = card.value.filter((el) => el.id !== id);
    localStore.saveCard(card.value)
    localStore.saveTotalItem(localStore.totalPrise)
  }
}

provide('actionsItem', {addItem , deteleItem});
</script>

<template>
  <Navbar />
  <ProductCard :items = item />
  <Drawer :items = card />
</template>