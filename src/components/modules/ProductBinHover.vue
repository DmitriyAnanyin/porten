<template>
  <ul class="product-bin__list">
    <productBin></productBin>
  </ul>
</template>

<script>
import productBin from '../modal/products/ProductBin'

export default {
  name: 'product_bin',
  props: {},
  components: {
    productBin
  }
}
</script>
