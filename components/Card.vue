<script setup>
    const emit = defineEmits (["delete", "add"])

    const props = defineProps ({
        id: Number,
        title: String,
        imageUrl: String,
        price: Number,
        isAdd: Boolean
    })

    const CheckAdd = computed(() => {return props.isAdd})

    const clickAddItem = () => {
      emit("add",props.id)
    }

    const clickDeleteItem = (id) => {
      emit("delete", props.id)
    }
</script>

<template>
    <div class="product-card">
      <img :src="imageUrl" alt="Товар 1" class="product-image" />
      <h3 class="product-name">{{ title }}</h3>
      <p class="product-price">{{ price }} ₽</p>
      <button class="action-button" v-if="CheckAdd == false" @click="clickAddItem">Добавить в корзину</button>
      <button class="action-button-delete" v-if="CheckAdd == true" @click="clickDeleteItem(id)">Убрать из корзины</button>
    </div>
</template>

<style>
.product-card {
    border: 1px solid #ddd;
    border-radius: 8px;
    overflow: hidden;
    background-color: white;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;

    &:hover {
      transform: translateY(-5px);
    }

    .product-image {
      width: 100%;
      height: 250px;
      object-fit: cover;
    }

    .product-name {
      font-size: 16px;
      margin: 10px 0 5px;
      text-align: center;
    }

    .product-price {
      font-size: 18px;
      font-weight: bold;
      color: #333;
      text-align: center;
      margin-bottom: 10px;
    }

    .action-button {
      display: block;
      width: 100%;
      padding: 10px;
      background-color: #42b983;
      border: none;
      color: white;
      font-size: 16px;
      font-weight: bold;
      border-radius: 0 0 4px 4px;
      cursor: pointer;
      transition: background-color 0.3s ease;

      &:hover {
        background-color: #38a169;
      }
    }

    .action-button-delete {
      display: block;
      width: 100%;
      padding: 10px;
      background-color: #b82b12;
        border: none;
        color: white;
        font-size: 16px;
        font-weight: bold;
        border-radius: 0 0 4px 4px;
        cursor: pointer;
        transition: background-color 0.3s ease;

        &:hover {
            background-color: #ec3c10;
        }
    }
  }

</style>