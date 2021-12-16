<template>
  <div id="app">
    
    <Header />
    <Navigation />

    <router-view></router-view>
    
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default {
  name: 'App',
  components: {
    Header,
    Navigation,
    Footer  
  },
}
</script>

<style>

body{
  background: #000;
  font-family: 'PT Sans', sans-serif, 'Playfair Display', serif;
  color: #fff;
}

body.no-scroll{
  overflow: hidden;
}

a{
  text-decoration: none;
  color: inherit;
}

a:hover{
  text-decoration: underline;
}

ol, ul {
	list-style: none;
}

input:-webkit-autofill,
input:-webkit-autofill:hover, 
input:-webkit-autofill:focus,
textarea:-webkit-autofill,
textarea:-webkit-autofill:hover,
textarea:-webkit-autofill:focus,
select:-webkit-autofill,
select:-webkit-autofill:hover,
select:-webkit-autofill:focus {
  border: none;
  -webkit-text-fill-color: #fff;
  font-size: 1.4rem;
  /* -webkit-box-shadow: 0 0 0px 1000px #202020 inset; */
  transition: background-color 5000s ease-in-out 0s;
}

.bg{
  background: #0F0F0F;
}

.container{
  width: 100%;
  height: auto;
  max-width: 1110px;
  margin: 0 auto;
}

.container--profile{
  max-width: 730px;
  padding: 100px 0;
}

.mt30{
  margin-top: 30px;
}

.col__title-margin{
  margin-top: 93px;
  margin-bottom: 50px;
}

.link_mt{
  padding: 12px 28px;
  margin-top: 61px;
}

.brand_title__margin{
  padding-top: 60px;
  margin-bottom: 40px;
}

.mt_title{
  margin-top: 120px;
  margin-bottom: 40px;
}

.header{
  width: 100%;
  min-height: 44px;

  color: #969696;
  font-size: 14px;
  line-height: 16px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  
}

.header__info{
  display: flex;
}

.header__info-text{
  margin-left: 15px;
}

.header__signin{
  display: inherit;
}

.ml_10{
  margin-left: 10px;
}

.navigation{
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-transform: uppercase;
  position: relative;
}

.navigation-logo{
  width: 105px;
  height: 50px;
}

.navigation-link{
  display: inline-block;
  padding: 32px 20px;
  transition: background-color .2s linear;
  position: relative;
  top: 0;
}


.navigation-link:hover{
  background-color: #1F1F1F;
}

.parent{
  position: relative;
}

.parent:hover .product-bin__list{
  display: block;
}

.first_screen{
  width: 100%;
  height: auto;
  overflow: hidden;
  position: relative;
  top: 0;
  left: 0;
  z-index: 1;
}

.first_screen__image{
  width: 100%;
  height: auto;
}



.first_screen__logo{
  padding: 94px 68px;
  border: 4px solid #fff;

  position: absolute;
  top: 20%;
  left: 50%;
  transform: translateX(-50%);
  /* margin-left: calc(50% - 165px); */
  z-index: 10;
}

.first_screen__logo-img{
  width: 185px;
  height: 85px;
  border-bottom: 2px solid #fff;
}

.first_screen__logo-text{
  font-size: 22px;
  line-height: 28px;
  text-align: center;
  text-transform: uppercase;
}

.first_screen__item{
  position: absolute;
  top: 70%;
  left: auto;
  margin-left: calc(50% - 375px);
  z-index: 10;
}

.first_screen__text{
  max-width: 730px;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  text-transform: uppercase;
}

.new_collection{
  display: flex;
  justify-content: center;
}

.new_collection__product{
    max-width: 55%;
    height: 730px;
    margin: 0 auto;
    text-align: center;
}

.new_collection__title{
  font-family: Playfair Display;
  font-weight: bold;
  font-size: 36px;
  line-height: 48px;
  text-align: center;
  text-transform: uppercase;
}

.new_collection__title-info{
  margin-top: 484px;
  margin-bottom: 30px;
}

.line{
  width: 120px;
  height: 2px;
  float: left;
  margin-left: calc(50% - 60px);
  padding: 0;
  background-color: #fff;
}

.new_collection__product-list{
  display: flex;
  margin-top: 50px;
}




.product__img{
  max-width: 100%;
  height: auto;
  border-radius: 5px;

  background: #191B1C;
}

.product__img--modal{
  max-width: 50%;
}

.product__name{
  padding-top: 25px;
  padding-bottom: 10px;
  font-family: Playfair Display;
  font-size: 18px;
  line-height: 24px;
  text-align: left;
}

.product__price{
  font-family: Playfair Display;
  font-weight: bold;
  font-size: 16px;
  line-height: 21px;
  color: #D0D0D0;
  text-align: left;
}

.new_collection__info{
  width: 45%;
  height: 730px;
  background-repeat: no-repeat;
  background-size:cover;
  text-align: center;
}

.new_collection__cat{
  padding: 12px 28px;
  border: 1px solid #fff;
  text-transform: uppercase;
}

.new_collection__cat:hover{
  text-decoration: none;
}

.collection-h600{
  height: 600px;
}

.collection__text{
  max-width: 471px;
  margin: 0 auto;
  margin-top: 40px;
}

.collection__product-list{
  margin-top: 80px;
  margin-bottom: 110px;
  display: flex;
  flex-wrap: wrap;
}

.collection__product-item{
  padding: 5px;
  padding-bottom: 40px;
  margin: 0 auto;
  margin-bottom: 30px;
  width: 20%;
  /* box-shadow: 0 3px 10px rgba(255, 255, 255, .3); */
  border-radius: 5px;
  position: relative; 
  text-align: right;
}

.new_collection__product-item{
  width: 33%;
  padding: 0 20px;
}

.brands{
  background-color: #0F0F0F;
}

.brand__list{
  display: flex;
}

.brand__item{
  width: 25%;
  padding-top: 10px;
  padding-bottom: 20px;
  text-align: center;
}

.footer{
  padding: 0 30px;
  height: 400px;
}

.footer_nav{
  display: flex;
}

.about_shop{
  width: 33%;
}

.footer_nav__title{
  padding-top: 74px;
  padding-bottom: 40px;
  font-family: Playfair Display;
  font-size: 24px;
  line-height: 32px;

  text-transform: uppercase;
}

.about_shop__text,
.text {
  font-size: 14px;
  line-height: 150%;
}

.category{
  width: 33%;
}

.category__title{
  margin-left: 10px;
}

.category__list{
  display: flex;
  flex-wrap: wrap;
}

.category__item{
  margin: 0 10px;
  margin-bottom: 20px;
  padding: 10px 20px;
  background: #0F0F0F;
}

.mailing{
  width: 33%;
}

.mailing__text{
  margin-bottom: 37px;
}

.mailing__form{
  display: flex;
  flex-direction: row;
}

.mailing__textarea{
  resize: none;
  overflow: hidden;
  border: none;
  background: rgba(255, 255, 255, 0.4);
  color: #fff;
  vertical-align:middle;
}

.mailing__btn{
  border: none;
  max-height: 50px;
  align-items: center;
  padding: 10px 20px;
  background: #0F0F0F;
  color: #fff;
}

.copirayt{
  padding: 17px 0;
}

.overlay{
  background-color: rgba(0,0,0, .8);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 10px;

  position: fixed;
  top: 0;
  left: 0;
  z-index: 1024;
  overflow: auto;
}

.modal__content{
  width: 500px;
  max-width: 100%;
  padding: 8px 80px;
  background-color: #202020;
  border-radius: 5px;
  position: relative;
}

.modal__content__header, 
.modal__content__body, 
.modal__content__footer{
  text-align: center;
}

.modal__content__header--prod{
  padding-top: 10px;
  text-align: left;
}
.modal__content__body--prod{
  text-align: justify;
}

.material-icons{
  opacity: .5;

  position: absolute;
  top: 20px;
  right: 20px;
  transition: opacity, transform .3s linear;
}

.material-icons:hover{
  opacity: 1;
  transform: rotate(90deg);
}
.btn--link{
  background: none;
  border: none;
  color: #fff;
}
.btn--link:hover{
  text-decoration: underline;
}


.btn{
  min-width: 80px;
  height: 35px;
  border: 1px solid #fff;
  background: none;
  color: #fff;
  box-shadow: 0 0 10px rgba(0,0,0, .5);
}
.btn:active {
  transform: translateY(1px);
  filter: saturate(150%);
}
.btn:hover,
.btn:focus {
  color: #f1b355;
  border-color: currentColor;
}

.btn--prof{
  position: absolute;
  bottom: 20px;
  right: 0;
}

/* Form */
.form{
  display: flex;
  position: relative;
}

.form__group{
  margin-bottom: 1.5rem;
  position: relative;
}

.form__group--md{
  margin-bottom: 2.5rem;
}

.form__control{
  display: block;
  width: 100%;
  padding: .5rem 0 .75rem;

  background: none;
  border: none;
  border-bottom: 1px solid #3f3f3f;
  border-radius: 0;
  box-shadow: none;

  font-family: inherit;
  font-size: 1.4rem;
  color: #fff;
}

.form__control::placeholder{
  color: rgba(f, f, f .2);
}

.form__control:focus{
  border-bottom: 1px solid #3137c9;
}

.form__control:active, 
.form__control:hover, 
.form__control:focus {
 outline: none;
 outline-offset: none;
}

.form__control--search{
  display: inline-block;
  width: auto;
  padding: 0;
  font-size: 18px;
}

.form__footer-list{
  display: flex;
  justify-content: center;

  font-size: 1.2rem;
  line-height: 1.2;
}

.form__footer-list li{
  margin: 0 0.5rem;
}

.arrows{
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: -70px;
  cursor: pointer;
}

.arrows__right{
  left: 500px;
}

.product-bin__list{
  width: 500px;
  height: auto;
  padding: 0 10px;
  display: none;
  background: #202020;
  border-radius: 0 0 10px 10px;
  position: absolute;
  top: 63px;
  right: 0;
  z-index: 5000;
}

.product-bin__item{
  width: 100%;
  height: 80px;
  border-bottom: 1px solid #131212;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.product-bin__item:hover{
  background: #1f1f1f;
}

.product-bin__item:last-child{
  border-bottom: none;
}

.product__img--bin{
  width: 64px;
  height: 64px;
  border-radius: 25%;
  background: #000;
}

.title__bin{
  color: #fff;
  font-size: 12px;
}

.price__bin{
  color: #fff;
  font-size: 16px;
  font-weight: 500;
}

.cabinet__form{
  width: 34rem;
}

.cabinet__avatar{
  flex-grow: 1;
  padding-left: 11rem;
}

.cabinet__avatar img{
  display: block;
  margin-bottom: 1.5rem;
}

.cabinet__file{
  font-size: 1.4rem;
  color: #3137c9;
  text-decoration: underline;
  cursor: pointer;
}

.cabinet__file input{
  display: none;
}

.cabinet__file:hover{
  text-decoration: none;
}

.product__item{
  margin: 30px auto;
  padding: 10px 20px;
  background: #202020;
  border-radius: 20px;
  box-shadow: 0 3px 10px rgba(255, 255, 255, .6);

  position: relative;
}



/* MEDIA */

@media(max-width: 1720px) {
  .first_screen__logo {
    padding: 40px 35px;
  }

  .first_screen__text {
    font-size: 13px;
  }

}

/* @media(max-width: 1360px) {
.product-bin__list {
    right: 195px;
  }
} */

@media(max-width: 1100px) {
  .first_screen__text {
   display: none;
   
  }

  .new_collection__product-item{
    width: 50%;
  }
  .new_collection__product-item:last-child{
    display: none;
  }

  .col__title-margin{
    margin-top: 40px;
    margin-bottom: 20px;
  }
  .collection__text {
    margin-top: 20px;
  }
  .link_mt {
    margin-top: 41px;
  }
  .collection-h600{
    height: 400px;
  }
  .collection__product-item{
    width: 33%;
    text-align: center;
  }

  .product__name{
    margin-left: 50px;
  }
  .product__price{
    margin-left: 50px;
  }

  .brand_title__margin{
    padding-top: 30px;
    margin-bottom: 20px;
  }
  .brand__item{
    width: 33%;
    padding-top: 0;
    padding-bottom: 30px;
  }
  .brand__item:last-child{
    display: none;
  }
}

</style>
