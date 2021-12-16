<template>
  <div class="overlay" ref="overlay">
    <div class="modal__content">
        <slick 
          :options="slickOptions"
        >
          <newCollectionSlider
            v-for="products in NEW_COLLECTION_PRODUCTS_PREVIEW"
            :key="products.id"
            :product_data="products"
          ></newCollectionSlider>
        </slick>
      </div>
    </div>
</template>

<script>
import newCollectionSlider from './Slider/NewCollectionSlider'
import Slick from 'vue-slick'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {mapActions, mapGetters} from 'vuex'

export default {
  name: 'product_collection',
  props:{},
  components:{
    Slick,
    newCollectionSlider,
  },
  data(){
    return{
      slickOptions: {
        infinite: true,
        dots: true,
        speed: 200,
        dotsClass: 'slick-dots',
        prevArrow: '<i class="material-icons material-icons--slick material-icons--slick-left" >arrow_back_ios</i>',
        nextArrow: '<i class="material-icons material-icons--slick material-icons--slick-right" >arrow_forward_ios</i>'
      },
    }
  },
  computed: {
    ...mapGetters([
      'NEW_COLLECTION_PRODUCTS_PREVIEW',
    ])
  },
  methods: {
    ...mapActions([
      'GET_NEW_COLLECTION_PRODUCTS_PREVIEW_FROM_API',
    ]),
    closeModal(){
      this.$emit('closeModal')
    },
  },
  mounted(){
    this.GET_NEW_COLLECTION_PRODUCTS_PREVIEW_FROM_API();
    let vm = this
    document.addEventListener('click', function(item){
      if (item.target === vm.$refs['overlay']){
        vm.closeModal()
      }
    })
  }
}
</script>

<style>
.collection__slider--list{
  position: relative;
  padding-top: 30px;
}
.material-icons--slick{
  font-size: 64;
  opacity: .5;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  transition: none;
}
.material-icons--slick-left{
  left: -50px;
}
.material-icons--slick-right{
  right: -50px;
}
.material-icons--slick:hover{
  opacity: 1;
  transform: translateY(-50%);
}
.btn--prod_col{
  min-width: 200px;
  font-size: 18px;
  position: absolute;
  top: 0;
  right: 5%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.btn--prod_col_like{
  top: 10%;
}
.btn--prod_col_shop{
  top: 20%;
}
.btn--prod_col_info{
  top: 30%;
}
</style>
