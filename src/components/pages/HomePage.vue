<template>
  <div>
      <ProductCollectionSlider
        v-if="product_collection_modal_visible"
        @closeModal="closingNewCollectionProduct"
      >
      </ProductCollectionSlider>
    <div class="first_screen">
      <img class="first_screen__image" src="media/images/bg.png">
      <div class="first_screen__logo">
        <img class="first_screen__logo-img" style="
        background-attachment: fixed;" src="media/images/PORTEN.svg" alt="Логотип">
        <p class="first_screen__logo-text">санкт-петербург</p>
      </div>
      <div class="first_screen__item">
        <p class="first_screen__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus interdum purus, est tortor pulvinar ut in. Fringilla a diam enim sed justo, sed iaculis sagittis. Tortor id eu interdum nec ut iaculis. Penatibus ullamcorper ultricies morbi ipsum sem metus pharetra, mi. Tortor nibh magna feugiat id nunc, dui nisl viverra.</p>
      </div>
    </div>

    <div class="new_collection">
      <div class="new_collection__product">
        <div class="new_collection__title col__title-margin">СЕЗОН 2020/21</div>
        <span class="line"></span><br>
        <div class="new_collection__product-list">
          <newCollectionProductPreview
            
            v-for="products in NEW_COLLECTION_PRODUCTS_PREVIEW"
            :key="products.id"
            :product_data="products"
            @addToBin="addToBin"
          ></newCollectionProductPreview>
        </div>
      </div>
      <div class="new_collection__info" style="background-image: url(media/images/col-bg.jpg);">
        <div class="new_collection__title new_collection__title-info">Новая коллекция</div>
        <span class="line"></span><br>
        <div class="mt30">
          <a class="new_collection__cat" @click="showNewCollectionProduct">Каталог</a>
        </div>
      </div>
    </div>

    <div class="new_collection">
      <div class="new_collection__info collection-h600" style="    background: url(media/images/col-bg1.jpg) no-repeat; background-size: 100% 100%;"></div>
      <div class="new_collection__product collection-h600">
        <div class="new_collection__title col__title-margin">коллекция 2018</div>
        <span class="line"></span><br>
        <p class="collection__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non rutrum ornare ut mattis habitant dui arcu. Sagittis amet nunc ut neque quis nibh arcu. Vivamus vestibulum nisi et venenatis sed scelerisque magna consectetur. Amet convallis quis gravida facilisis vulputate. Faucibus facilisi habitasse ipsum interdum dictum aliquet. Velit quis ullamcorper pulvinar nulla malesuada integer. Aenean praesent viverra nulla nullam natoque volutpat curabitur auctor. Viverra viverra ullamcorper scelerisque risus dignissim egestas. Id aliquam a aliquam egestas leo orci pharetra sed diam. </p>
        <div class="link_mt">
          <a href="#" class="new_collection__cat">посмотреть коллекцию</a>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="new_collection__title mt_title">новые поступления</div>
      <span class="line"></span><br>
      <div class="collection__product-list">
        <newProduct
        v-for="product in ALL_NEW_PRODUCTS"
        :key="product.id"
        :product_data="product"
        ></newProduct>
      </div>
    </div>
  </div>
</template>

<script>
import ProductCollectionSlider from '../modal/products/ProductCollectionSlider'
import newProduct from '../modules/newProduct'
import newCollectionProductPreview from '../modules/newCollectionProductPreview'
import { mapActions, mapGetters } from 'vuex'

const body = document.body

export default {
  name: 'home_page',
  props: {},
  components:{
    newProduct,
    ProductCollectionSlider,
    newCollectionProductPreview
  },
  data(){
    return{
      product_collection_modal_visible: false,
    }
  },
  computed: {
    ...mapGetters([
      'ALL_NEW_PRODUCTS',
      'NEW_COLLECTION_PRODUCTS_PREVIEW',
      
    ])
  },
  methods:{
    ...mapActions([
      'GET_NEW_PRODUCTS',
      'GET_NEW_COLLECTION_PRODUCTS_PREVIEW',
      
    ]),
    showNewCollectionProduct() {
      bodyAddScroll()
      this.product_collection_modal_visible = true
    },
    closingNewCollectionProduct() {
      bodyRemoveScroll()
      this.product_collection_modal_visible = false
    },
    addToBin(data){
      console.log(data)
    }
  },
  mounted(){
    this.GET_NEW_PRODUCTS()
    this.GET_NEW_COLLECTION_PRODUCTS_PREVIEW()
  }
}

function bodyAddScroll() {
  return body.classList.add('no-scroll')
}
function bodyRemoveScroll() {
  return body.classList.remove('no-scroll')
}
</script>
