<template>
  <div class="container">
    <Comment
    v-bind:articleId="product.id"
    v-if="comment_modal_visible"
    @closeModal="closingComment"
    />
    <div class="article">
      <div class="article__image">
        <img :src="'media/images/' + product.picture" alt="Картнка отсутствует" class="article__image__picture">
      </div>

      <div class="article__info">
        <div class="rating">
          <div class="rating__stars">
            <i class="material-icons material-icons__rating">star star star star star_border</i>
          </div>
          <div class="votes">28 отзывов</div>
        </div>
        <div class="article__title">{{product.name}}</div>
        <div class="article__product-article">Артикул: 309.71.00.000.01.01.2</div>
        <div class="cost">
          <div class="cost__new">{{product.cost}} &#8381;</div>
          <div class="cost__old">7 990 &#8381;</div>
        </div>
        <button class="btn btn--prod btn--prod_buy"><img src="media/images/buy.png"><p>купить</p></button>
        <div class="article__navigation">
          <label>
            <input type="checkbox">
            <span class="btn--prod-nav">Доставка</span>
            <div class="info__delivery">
              <div class="info__delivery--sity">Ваш город: <strong>Омск</strong></div>
              <div class="info__delivery--courier">
                <i class="material-icons material-icons__delivery">airport_shuttle</i>
                <p class="delivery__title">Курьерская доставка</p>
              </div>
              
              <div class="info__delivery--pickup">
                <i class="material-icons material-icons__delivery">directions_walk</i>
                <p class="delivery__title">Самовывоз</p>
              </div>
              <a class="info__delivery--link">подробнее о доставке</a>
            </div>
          </label>
          <label>
            <input type="checkbox">
            <span class="btn--prod-nav">Оплата</span>
            <div class="info__payment">
              <div class="payment__text">В зависимости от выбранного способа доставки доступны следующие варианты оплаты заказа:</div>
              <ul class="payment__list">
                <li class="payment__item">Картой онлайн</li>
                <li class="payment__item">Бонусами СПАСИБО от Сбербанка</li>
                <li class="payment__item">Наличными или картой при получении</li>
              </ul>
            </div>
          </label>
        </div>
        <!-- <div class="info__delivery">
          <div class="info__delivery--sity">Ваш город: <strong>Омск</strong></div>
          <div class="info__delivery--courier">
            <i class="material-icons material-icons__delivery">airport_shuttle</i>
            <p class="delivery__title">Курьерская доставка</p>
          </div>
          
          <div class="info__delivery--pickup">
            <i class="material-icons material-icons__delivery">directions_walk</i>
            <p class="delivery__title">Самовывоз</p>
          </div>
          <a class="info__delivery--link">подробнее о доставке</a>
        </div> -->
        <!-- <div class="info__payment">
          <div class="payment__text">В зависимости от выбранного способа доставки доступны следующие варианты оплаты заказа:</div>
          <ul class="payment__list">
            <li class="payment__item">Картой онлайн</li>
            <li class="payment__item">Бонусами СПАСИБО от Сбербанка</li>
            <li class="payment__item">Наличными или картой при получении</li>
          </ul>
        </div> -->
        <div class="article__subtitle">КОРОТКО ОБ ИЗДЕЛИИ</div>
        <ul class="info__product--list">
          <li class="info__product--item">Корпус<span class="dash">Сталь</span></li>
          <li class="info__product--item">Механизм<span class="dash">Япония</span></li>
        </ul>
        <a href="#">все характеристики</a>
      </div>
    </div>
    <div class="descriptions_characteristics">
      <div class="descriptions_characteristics__title">описание и характеристика</div>
      <div class="descriptions_characteristics__content">
        <div class="descriptions">
          <div class="descriptions__header">
            <div class="about">
              <div class="about__product">
                <p>О часах</p>
              </div>
              <div class="about__brand">
                <p>О бренде</p>
              </div>
            </div>
            <div class="about__text">
              Классика жанра – лаконичные и остромодные стальные часы – универсальное завершение любого образа. Предпочитаете после работы или учёбы не опаздывать на свидание или вечеринку? Высокоточный кварцевый механизм Miyota вас не подведёт, а выверенный дизайн корпуса с миланским браслетом придутся кстати, какой бы наряд вы ни выбрали.
            </div>
          </div>
          <img :src="'media/images/' + product.picture" alt="" class="article__image__picture">
        </div>
        <div class="characteristics">
          <div class="article__subtitle article__subtitle--characteristics">ОБЩИЕ СВЕДЕНИЯ</div>
          <ul class="info__product--list">
            <li class="info__product--item">Артикул<span class="dash">309.71.00.000.01.01.2</span></li>
            <li class="info__product--item">Для кого<span class="dash">Для женщин</span></li>
            <li class="info__product--item">Коллекция<span class="dash">I want</span></li>
            <li class="info__product--item">Гарантия<span class="dash">1 год</span></li>
          </ul>
          <div class="article__subtitle article__subtitle--characteristics">КОРПУС</div>
          <ul class="info__product--list">
            <li class="info__product--item">Материал<span class="dash">Сталь</span></li>
            <li class="info__product--item">Размер<span class="dash">&#8960; 35 мм</span></li>
            <li class="info__product--item">Высота<span class="dash">9</span></li>
            <li class="info__product--item">Стекло верхнее<span class="dash">Минеральное</span></li>
            <li class="info__product--item">Водонепроницаемость<span class="dash">3 АТМ</span></li>
            <li class="info__product--item">Материал переводной головки<span class="dash">Сталь 316 L</span></li>
          </ul>
          <div class="article__subtitle article__subtitle--characteristics">МЕХАНИЗМ</div>
          <ul class="info__product--list">
            <li class="info__product--item">Производитель<span class="dash">Miyota (CITIZEN)</span></li>
            <li class="info__product--item">Страна<span class="dash">Япония</span></li>
            <li class="info__product--item">Тип механизма<span class="dash">Кварцевый</span></li>
            <li class="info__product--item">Функции<span class="dash">часы, минуты, секунды</span></li>
          </ul>
          <div class="article__subtitle article__subtitle--characteristics">ЦИФЕРБЛАТ</div>
          <ul class="info__product--list">
            <li class="info__product--item">Цвет<span class="dash">Серебристый</span></li>
          </ul>
          <div class="article__subtitle article__subtitle--characteristics">РЕМЕШОК</div>
          <ul class="info__product--list">
            <li class="info__product--item">Материал<span class="dash">Сталь 316 L</span></li>
            <li class="info__product--item">Ширина у основания<span class="dash">18</span></li>
            <li class="info__product--item">Ширина у застежки<span class="dash">18</span></li>
          </ul>
          <div class="article__subtitle article__subtitle--characteristics">ЗАСТЁЖКА</div>
          <ul class="info__product--list">
            <li class="info__product--item">Тип<span class="dash">Пряжка</span></li>
            <li class="info__product--item">Материал<span class="dash">Сталь 316 L</span></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="comments">
      <div class="descriptions_characteristics__title">ОТЗЫВЫ И ОЦЕНКА</div>
      <div class="rating comments__title">
        <div class="rating__group">
          <div class="rating__stars">
            <input class="rating__star" type="radio" name="rating" value="1" checked>
            <input class="rating__star" type="radio" name="rating" value="2">
            <input class="rating__star" type="radio" name="rating" value="3">
            <input class="rating__star" type="radio" name="rating" value="4">
            <input class="rating__star" type="radio" name="rating" value="5">
            <div class="rating__star--disabled"></div>
          </div>
        </div>
        <div class="votes">28 отзывов</div>
      </div>
        
      <comments/>

      <div @click="showComment" class="btn btn--prod_rew" type="submit">оставить отзыв</div>
    </div>
  </div>
</template>

<script>
import comments from './article_sliders/Product_comments'
import Comment from '../modal/Comment'
import {mapGetters, mapActions} from 'vuex'

const body = document.body

export default {
  name: 'article',
  props: {},
  components:{
    comments,
    Comment
  },
  data(){
    return {
      comment_modal_visible: false,
    }
  },
  computed:{
    ...mapGetters([
      'NEW_COLLECTION_PRODUCTS_PREVIEW'
    ]),
    product() {
      let res = {}
      let vm = this
      this.NEW_COLLECTION_PRODUCTS_PREVIEW.map(item => {
        if (item.id === vm.$route.query.article)
        {
          res = item
        }
      })
      return res
    }
  },
  methods: {
    ...mapActions([
      'GET_NEW_COLLECTION_PRODUCTS_PREVIEW'
    ]),
    showComment(){
      bodyAddScroll()
      this.comment_modal_visible = true
    },
    closingComment(){
      bodyRemoveScroll()
      this.comment_modal_visible = false
    },
  },
  mounted() {
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


<style lang="css">
.article{
  display: flex;
  height: auto;
  padding-top: 20px;
}
.article__image{
  width: 60%;
}
.article__image__picture{
  width: 100%;
  height: auto;
}

.article__info{
  width: 40%;
  padding-left: 40px;
  margin-bottom: 150px;
}
.rating{
  display: flex;
  align-items: center;
  padding-top: 50px;
}
.votes{
  opacity: .6;
}
.material-icons__rating,
.material-icons__delivery{
  position: relative;
  top: 0;
  right: 0;
  margin-right: 10px;
  opacity: 1;
  transform: none;
}
.material-icons__rating:hover,
.material-icons__delivery:hover{
  transform: none;
}
.material-icons__delivery{
  padding: 5px;
  border: 1px solid #fff;
}
.article__title{
  font-size: 42px;
  font-weight: 700;
  line-height: 2;
}
.article__subtitle{
  margin-top: 100px;
  font-size: 24px;
  text-transform: uppercase;
}
.article__subtitle--characteristics{
  margin-top: 20px;
}
.article__subtitle--characteristics:first-child{
  margin-top: 40px;
}
.article__product-article{
  font-style: 24px;
  opacity: .6;
}
.cost{
  padding-top: 10px;
  display: flex;
  font-size: 36px;
  line-height: 2.5;
}
.cost__old{
  margin-left: 25px;
  font-size: 32px;
  opacity: .7;
  text-decoration: line-through;
}
.btn--prod_buy{
  margin: 30px 0;
  padding: 25px 30px;
  position: relative;
  right: 0;
  min-width: 200px;
  font-size: 28px;
}
.article__navigation{
  margin-top: 100px;
}
.article__navigation input{
  display: none;
}
.btn--prod-nav{
  margin-bottom: 50px;
  padding: 5px 50px;
  border-bottom: 1px solid #ccc;
  background: none;
  color: #fff;
  font-size: 24px;
  line-height: 1.6;
  text-transform: uppercase;
  cursor: pointer;
}
.btn--prod-nav:hover{
  color: #f1b355;
  border-bottom: 2px solid #f1b355;
}
.article__navigation input:checked + .info__delivery{
  display: block;

}
.info__delivery{
  margin-top: 20px;
  display: none;
}
.info__payment{
  display: block;
}
.info__delivery--courier,
.info__delivery--pickup{
  padding-top: 10px;
  display: flex;
  align-items: center;
}
.delivery__title{
  text-decoration: underline;
  cursor: pointer;
}
.delivery__subtitle{
  opacity: .6;
}
.payment__text{
  margin-top: 30px;
}
.payment__list{
  margin-top: 20px;
  list-style: circle;
}
.info__product--list{
  padding: 0;
}
.info__product--item{
  display: flex;
  margin: 10px 0;
}
.info__product--item::before {
  content: ''; 
  border-bottom: 1px dashed #ccc; 
  flex-grow: 1;
  order: 2;
  margin: 0 5px;
}
.dash{
  order: 3;
}
.descriptions_characteristics{
  margin-bottom: 150px;
}
.descriptions_characteristics__title{
  text-align: center;
  font-size: 32px;
  text-transform: uppercase;
}
.descriptions_characteristics__content{
  display: flex;
}
.descriptions{
  padding: 0 40px;
  width: 50%;
  margin-top: 50px;
}
.descriptions__header{
  margin-bottom: 50px;
  padding: 20px;
  background: #202020;
  text-transform: uppercase;
}
.about{
  display: flex;
}
.about__brand{
  margin-left: 25px;
}
.about__text{
 line-height: 1.6; 
  text-transform: none;
  text-align: justify;
}
.characteristics{
  padding: 0 40px;
  width: 50%;
}
.comments{
  position: relative;
}
.comments__title{
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
}
.btn--prod_rew{
  max-width: 150px;
  height: auto;
  padding: 10px;
  margin: 150px 0;
  margin-left: 42%;
  /* transform: translateX(-50%); */
  text-align: center;
}
.rating__group{
  margin-right: 10px;
  padding: 0;
  position: relative;
  width: 150px;
  height: 30px;
  background-image: url(~@/assets/images/star_off.svg);
  background-size: 30px auto;
}
.rating__star{
  margin: 0;
  padding: 0;
  position: absolute;
  top: 0;
  left: 0;
  width: 30px;
  height: 30px;
  font-size: inherit;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}
.rating__star:focus{
  outline: none;
}
.rating__star:checked,
.rating__star:hover{
  background-image: url(~@/assets/images/star_on.svg);
  transition: background-image .1s ease-in-out;
}
.rating__star:disabled,
.rating__star:hover{
  cursor: none;
}
.rating__star:hover ~ .rating__star{
  background-image: url(~@/assets/images/star_off.svg);
  transition: background-image .1s ease-in-out;
}
.rating__star:nth-of-type(1){
  width: 30px;
  z-index: 5;
}
.rating__star:nth-of-type(2){
  width: 60px;
  z-index: 4;
}
.rating__star:nth-of-type(3){
  width: 90px;
  z-index: 3;
}
.rating__star:nth-of-type(4){
  width: 120px;
  z-index: 2;
}
.rating__star:nth-of-type(5){
  width: 150px;
  z-index: 1;
}
.rating__star--disabled{
  padding: 15px 130px;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 6;
}
</style>