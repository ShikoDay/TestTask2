<script setup>
import Card from '~/components/Card.vue'
import { ref, provide } from 'vue';
import { LocalStore } from '~/stores/LocalStore';
const localStore = LocalStore();

// const items1 = reactive([])
const items = ref([
  {
    id: 1,
    title: "2K Sport Performance",
    imageUrl: "https://2k-shop.ru/images/122710/yellow_black_black.jpg",
    price: 3500,
    isAdd: false
  },
  {
    id: 2,
    title: "Nicenonice Classic 'Miyagi face'",
    imageUrl: "https://nicenonice.ru/wa-data/public/shop/products/46/29/12946/images/15433/15433.970.jpg",
    price: 3500,
    isAdd: false
  },  
  {
    id: 3,
    title: "Армия России х/б бежевый",
    imageUrl: "https://okrug.ru/image/cache/data/futbolki/futbolka_Armia_Rossii_bezh_00-750x1163.jpg",
    price: 5000,
    isAdd: false
  },
  {
    id: 4,
    title: "Black + img",
    imageUrl: "https://merch.kaspersky.ru/assets/thumbnails/a5/a58cee5ee54e372a8f5cf3630721be12.jpg",
    price: 4000,
    isAdd: false
  },
  {
    id: 5,
    title: "Футболка унисекс BASIC",
    imageUrl: "https://modano.ru/wa-data/public/shop/products/08/15/1508/images/203949/203949.635x953@2x.jpg",
    price: 2000,
    isAdd: false
  },
  {
    id: 6,
    title: "Футболка детская Trisar 155",
    imageUrl: "https://4kraski.ru/assets/images/products/17523/118.36.1.jpg",
    price: 2700,
    isAdd: false
  },
  {
    id: 7,
    title: "Черная футболка Петербург",
    imageUrl: "https://static.insales-cdn.com/images/products/1/2624/874965568/%D1%81%D0%BF%D0%B1.jpg",
    price: 2000,
    isAdd: false
  },
  {
    id: 8,
    title: "Набор из двух футболок Cotton 2",
    imageUrl: "https://code7.ru/pub/media/catalog/product/cache/c687aa7517cf01e65c009f6943c2b1e9/p/9/p9104.jpg",
    price: 5000,
    isAdd: false
  }
])

const card = ref([])

onMounted(() => {
  const ClearArray = localStore.loadFromLocalStorage();
  if (ClearArray) {
    ClearArray.forEach(update => {
        const index = items.value.findIndex(i => i.id === update.id);
        if (index !== -1) {
          items.value[index] = {
            ...items.value[index],
            ...update
          };
        }
    });
  }
  card.value = ClearArray
});

const addItem = async(id) => {
  const index = items.value.find((el) => el.id === id); //find?
  index.isAdd = true
  card.value.push(index)
  localStore.saveCard(card.value)
}

const deteleItem = async(id) => {
  const index = items.value.find((el) => el.id === id);
  index.isAdd = false
  card.value = card.value.filter((el) => el.id !== id);
  localStore.saveCard(card.value)
}

provide('actionsItem', {addItem});
</script>

<template>
  <Navbar />
  <div class="product-grid">
    <Card
      v-for="item in items"
      :key = item.id
      :id = item.id
      :title = item.title
      :imageUrl = item.imageUrl
      :price = item.price
      :isAdd = item.isAdd
      @delete="deteleItem($event)"
      @add="addItem($event)"
    />
  </div>
  <Drawer :items = "card" />
</template>

<style>
.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
}
</style>