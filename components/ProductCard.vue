<script setup>
    const props = defineProps ({
        items: Array,
    })
</script>

<template>
  <div class="product-grid">
    <Card
        v-for="item in items"
        :key = item.id
        :id = item.id
        :title = item.title
        :imageUrl = item.imageUrl
        :prise = item.prise
        :isAdd = false
    />
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
  }

  .product-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
    padding: 20px;
    max-width: 1200px;
    margin: 0 auto;
  }

</style>