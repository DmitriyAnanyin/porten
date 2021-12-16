<template>
    <div class="container  product__item ">
      <form @submit.prevent="createProduct" class="form">
      
        <div class="cabinet__form cabinet__form-create-product">
          <div class="form__group form__group--md">
              <input v-model="productValue.product_name" type="text" class="form__control form__control--textarea" placeholder="Название товара" value="">
          </div>
          <div class="form__group form__group--md">
              <input v-model="productValue.cost" type="text" class="form__control form__control--textarea" placeholder="Цена" value="">
          </div>
          <div class="cabinet__form--select">
            <div class="select-box">
            <h3>Коллекция</h3>
              <select v-model="productValue.collection" class="create__select">
                <option>Коллекция 1</option>
                <option>Коллекция 2</option>
                <option>Коллекция 3</option>
                <option>Коллекция 4</option>
                <option>Коллекция 5</option>
                <option>Коллекция 6</option>
              </select>
            </div>
            <div class="select-box">
              <h3>Механизм часов</h3>
              <select v-model="productValue.watch_mechanism" class="create__select">
                <option>Кварцевый</option>
                <option>Механический</option>
              </select>
            </div>
            <div class="select-box">
              <h3>Материал корпуса</h3>
              <select v-model="productValue.body_material" class="create__select">
                <option>Золото</option>
                <option>Серебро</option>
                <option>Золото и керамика</option>
                <option>Золото и сталь</option>
                <option>Сталь</option>
              </select>
            </div>
            <div class="select-box">
              <h3>Основная вставка</h3>
              <select v-model="productValue.main_insert" class="create__select">
                <option>Без вставок</option>
                <option>Брилиант</option>
                <option>Фианит</option>
              </select>
            </div>
            <div class="select-box">
              <h3>Материал браслета</h3>
              <select v-model="productValue.bracelet_material" class="create__select">
                <option>Кожа</option>
                <option>Сталь</option>
              </select>
            </div>
            <div class="select-box">
              <h3>Водонепроницаемость</h3>
              <select v-model="productValue.waterproof" class="create__select">
                <option>3 АТМ</option>
                <option>5 АТМ</option>
                <option>Влагозащита</option>
              </select>
            </div>
            <div class="select-box">
              <h3>Противоударный корпус</h3>
              <select v-model="productValue.shockproof_body" class="create__select">
                <option>Да</option>
                <option>Нет</option>
              </select>
            </div>
            <div class="select-box">
              <h3>Проба</h3>
              <select v-model="productValue.sample" class="create__select">
                <option>585</option>
                <option>925</option>
                <option>Без пробы</option>
              </select>
            </div>
            <div class="select-box">
              <h3>Для кого</h3>
              <select v-model="productValue.gender" class="create__select">
                <option>Для мужчин</option>
                <option>Для женщин</option>
              </select> 
            </div>
            <div class="select-box">
              <h3>Цвет циферблата</h3>
              <select v-model="productValue.dial_color" class="create__select">
                <option>Белый</option>
                <option>Черный</option>
                <option>Перламутровый</option>
                <option>Синий</option>
                <option>Коричневый</option>
                <option>Серебристый</option>
                <option>Шампань</option>
              </select>
            </div>
            <div class="select-box">
              <h3>Цвет браслета</h3>
              <select v-model="productValue.bracelet_color" class="create__select">
                <option>Белый</option>
                <option>Черный</option>
                <option>Синий</option>
                <option>Коричневый</option>
                <option>Красный</option>
                <option>Желтый</option>
                <option>Розовый</option>
                <option>Зеленый</option>
              </select>
            </div>
            <div class="select-box">
              <h3>Страна механизма</h3>
              <select v-model="productValue.style" class="create__select">
                <option>Casual</option>
                <option>Fushion</option>
                <option>Классические</option>
                <option>Часы украшение</option>
              </select>
            </div>
            <div class="select-box">
              <h3>Страна механизма</h3>
              <select v-model="productValue.country_of_mechanism" class="create__select">
                <option>Швейцария</option>
                <option>Япония</option>
              </select>
            </div>
            <div class="select-box">
              <h3>Наличие</h3>
              <select v-model="productValue.availability" class="create__select">
                <option>Есть в наличии</option>
                <option>Нет в наличии</option>
              </select>
            </div>
            
            
            <div class="cabinet__avatar cabinet__avatar--create">
              <h3>Описание</h3>
              <textarea v-model="productValue.description" cols="50" rows="10" class="form__control form__control--textarea" placeholder="Ваш текст"></textarea>
              <h3>Фотография товара</h3>
              <img class="create__img" :src="'media/images/' + this.productValue.product_image.name" alt="">
              <input id="product_image" ref="image" v-on:change="imageToData" class="cabinet_file cabinet_file--create" type="file" value="Выбрать аватар">
            </div>
          </div>
          <button type="submit" class="btn btn--prof">Сохранить</button>
        </div>

      </form>
    </div>
</template>

<script lang="ts">
import axios from 'axios'
export default {
  name: 'createProduct',
  data() {
    return {
      productValue: {
        product_name: '',
        cost: null,
        collection: '',
        watch_mechanism: '',
        body_material: '',
        main_insert: '',
        bracelet_material: '',
        waterproof: '',
        shockproof_body:  '',
        sample: '',
        gender: '',
        dial_color: '',
        bracelet_color: '',
        style: '',
        country_of_mechanism: '',
        availability: '',
        description: '',
        product_image: ''
      }
    }
  },
  methods: {
    imageToData(){
      this.productValue.product_image = this.$refs.image.files[0]
      console.log(this.productValue.product_image.name)
      console.log(this.productValue.product_image)
    },
    createProduct(){
      let formData = new FormData();
      formData.append('product_name', this.productValue.product_name);
      formData.append('cost', this.productValue.cost);
      formData.append('collection', this.productValue.collection);
      formData.append('watch_mechanism', this.productValue.watch_mechanism);
      formData.append('body_material', this.productValue.body_material);
      formData.append('main_insert', this.productValue.main_insert);
      formData.append('bracelet_material', this.productValue.bracelet_material);
      formData.append('waterproof', this.productValue.waterproof);
      formData.append('shockproof_body', this.productValue.shockproof_body);
      formData.append('sample', this.productValue.sample);
      formData.append('gender', this.productValue.gender);
      formData.append('dial_color', this.productValue.dial_color);
      formData.append('bracelet_color', this.productValue.bracelet_color);
      formData.append('style', this.productValue.style);
      formData.append('country_of_mechanism', this.productValue.country_of_mechanism);
      formData.append('availability', this.productValue.availability);
      formData.append('description', this.productValue.description);
      formData.append('product_image', this.productValue.product_image.name);
      formData.append('pubdate', this.productValue.product_image.lastModifiedDate);
      
      if(axios.post('http://porten.api:8080/create_product', formData)
      .then(res => {
        console.log(res)
      }))
      {
        this.productValue = {
          product_name: '',
          cost: null,
          collection: '',
          watch_mechanism: '',
          body_material: '',
          main_insert: '',
          bracelet_material: '',
          waterproof: '',
          shockproof_body:  '',
          sample: '',
          gender: '',
          dial_color: '',
          bracelet_color: '',
          style: '',
          country_of_mechanism: '',
          availability: '',
          description: '',
          product_image: ''
        }
      }
    }
  },
}
</script>

<style>
.cabinet__form-create-product{
  width: 100%;
}
.cabinet__form--select{
  display: flex;
  flex-wrap: wrap;
  
}
.select-box{
  margin: 10px auto;
  padding: 10px;
  width: 30%;
  border: 1px solid #000;
  border-radius: 5px;
}
.create__select{
  width: 100%;
  min-height: 30px;
  background: #363434;
  color: white;
  border-radius: 4px;
}
.cabinet__avatar--create{
  width: 100%;
  padding: 0 ;
  text-align: center;
}
.create__img{
  width: 350px;
  margin: 20px 50%;
  padding: 0;
  transform: translateX(-50%);
  border-radius: 5px;
}
.cabinet_file--create{
  margin-left: 50%;
  transform: translateX(-50%); 
  margin-bottom: 100px;
  bottom: 0;
}
.form__control--textarea{
  margin-left: 50%;
  transform: translateX(-50%); 
  width: 50%;
  max-height: 250px;
  resize: none;
}
.form__control--textarea:first-child{
  margin-top: 50px;
}
</style>