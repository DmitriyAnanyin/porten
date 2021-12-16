<template>
  <div class="overlay" ref="overlay">
    <div class="modal__content">
      <h1 class="title">Корзина</h1>
      <div class="collection__product-list">
        <div class="collection__product-item">
          <img class="product__img" src="media/images/clock.jpg" alt="">
          <div class="product__name">Louis XVI ATHOS</div>
          <div class="product__price">165 000 руб.</div>
        </div>
        <div class="collection__product-item">
          <img class="product__img" src="media/images/clock.jpg" alt="">
          <div class="product__name">Louis XVI ATHOS</div>
          <div class="product__price">165 000 руб.</div>
        </div>
        <div class="collection__product-item">
          <img class="product__img" src="media/images/clock.jpg" alt="">
          <div class="product__name">Louis XVI ATHOS</div>
          <div class="product__price">165 000 руб.</div>
        </div>
        <div class="collection__product-item">
          <img class="product__img" src="media/images/clock.jpg" alt="">
          <div class="product__name">Louis XVI ATHOS</div>
          <div class="product__price">165 000 руб.</div>
        </div>
      </div>
      <h2 class="title">Итог: 444444</h2>
      <button class="btn" type="submit">Оплатить</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'bin',
  props: {},
  data(){
    return{

    }
  },
  methods:{
    closeModal(){
      this.$emit('closeModal')
    }
  },
  mounted(){
    let vm = this
    document.addEventListener('click', function(item){
      if (item.target === vm.$refs['overlay']){
        vm.closeModal()
      }
    })
  }

}
</script>