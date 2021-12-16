<template>
  <div class="collection__product-item">

    <product
      v-if="product_modal_visible"
      @closeModal="closingProduct"
    >
      <div class="modal__content__header--prod">
        <img class="product__img product__img--modal" :src="require('../../assets/images/'+ product_data.picture)" alt="">
        <div class="product__name">{{product_data.name}}</div>
        <div class="product__price">{{product_data.cost}} руб.</div>
      </div>
      <div class="modal__content__body--prod">
        <p class="mt30">{{product_data.description}}</p>
      </div>
      <div class="modal__content__footer--prod">
        <button class="btn btn--prod btn--prod_like"><img src="media/images/like.png">Понравилось</button>
        <button class="btn btn--prod btn--prod_shop"><img src="media/images/shop.svg" @click="addToBin">В корзину</button>
        <button class="btn btn--prod btn--prod_info"><img src="media/images/info.png">Подробнее</button>
      </div>
    </product>

    <a @click="showProduct">
      <img class="product__img" :src="require('../../assets/images/'+ product_data.picture)" alt="">
      <div class="product__name">{{product_data.name}}</div>
    </a>
    <div class="product__footer">
      <div class="product__price">{{product_data.cost}} руб.</div>
      <div class="product__date">{{product_data.pubdate}}</div>
    </div>
  </div>
</template>

<script>
import product from '../modal/products/Product'

const body = document.body

export default {
  name: "newProduct",
  props: {
    product_data: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data(){
    return{
      product_modal_visible: false,
    }
  },
  components: {
    product
  },
  methods:{
    showProduct() {
      bodyAddScroll()
      this.product_modal_visible = true
    },
    closingProduct() {
      bodyRemoveScroll()
      this.product_modal_visible = false
    },
    addToBin(){
      this.$emit(this.product_data)
    }
  },
}

function bodyAddScroll() {
  return body.classList.add('no-scroll')
}
function bodyRemoveScroll() {
  return body.classList.remove('no-scroll')
}
</script>

<style>
.product__footer{
  display: flex;
  justify-content: space-between;
  align-items:flex-end;
  padding-right: 10px;
}
.product__date{
  text-decoration: underline;
  font-size: 12px;
  opacity: .3;
}
</style>