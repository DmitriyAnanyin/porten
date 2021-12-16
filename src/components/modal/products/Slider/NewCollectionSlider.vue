<template>
  <div class="collection__slider--list">
      <div class="collection__slider--item">
            <img class="product__img product__img--modal" :src="require('../../../../assets/images/'+ product_data.picture)" alt="">
            <div class="product__name">{{product_data.name}}</div>
            <div class="product__price">{{product_data.cost}} руб.</div>
            <p class="mt30">{{product_data.description}}</p>
          </div>
      <button class="btn btn--prod_col btn--prod_col_like"><img src="media/images/like.png">Понравилось</button>
      <button class="btn btn--prod_col btn--prod_col_shop"><img src="media/images/shop.svg">В корзину</button>
      <button class="btn btn--prod_col btn--prod_col_info"><img src="media/images/info.png">Подробнее</button>
  </div>
</template>

<script>
export default {
  name: "new_collection_slider",
  props: {
    product_data: {
      type: Object,
      default() {
        return {}
      }
    }    
  }
}
</script>
