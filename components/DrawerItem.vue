<script setup>
    const props = defineProps ({
        id: Number,
        title: String,
        imageUrl: String,
        price: Number,
        isAdd: Boolean
    })
</script>

<template>
    <div class="product-card">
      <img :src="imageUrl" alt="Товар 1" class="product-image" />
        <h3 class="product-name">{{ title }}</h3>
        <p class="product-price">{{ price }} ₽</p>
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
    margin-bottom: 5px;

    &:hover {
         transform: translateY(-5px);
    }

    .product-image {
        width: 150px;
        height: 150px;
        display: block;
        margin-left: auto;
        margin-right: auto;
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