<template>
   <ul class="catalog__list">
     <ProductItem
     v-for="(product, index) in products" v-bind:key="index" v-bind:product="product"/>
   </ul>
</template>

<script>
import ProductItem from './ProductItem.vue';

export default {
  props: ['products'],
  components: { ProductItem },
};
</script>
