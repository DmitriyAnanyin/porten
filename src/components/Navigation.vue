<template>

  <div class="bg">
    <div class="container">
      <article class="navigation">
        <router-link :to="{name: 'home'}"><a><img class="navigation-logo" src="media/images/PORTEN.svg" alt="Логотип"></a></router-link>
        <nav>
          <router-link :to="{name: 'create_product'}"><a class="navigation-link">Создать товар</a></router-link>
          <router-link :to="{name: 'like_page'}"><a class="navigation-link">Понравилось</a></router-link>
          <router-link :to="{name: 'profile_page'}"><a class="navigation-link">Личный кабинет</a></router-link>
          
          <a class="navigation-link navigation-link--search_shop" >
            <form action="">
              <input class="form__control form__control--search" type="search" name="" id="">
              <button class="btn--search"><img src="media/images/search.svg" alt=""></button>
            </form>
          </a>

          <a class="navigation-link navigation-link--search_shop parent"><img src="media/images/shop.svg" alt="Магазин">
            
          </a>
        </nav>
      </article>
    </div>
  </div>
</template>

<script>

export default {
  name: 'navigation',
  props: {},
  components: {
  },
  data() {
    return {
      hover_bin: false,
    }
  },
  methods: {
    showHoverBin() {

    },
  }
}
</script>


<style>
.product-bin__item{
  position: relative;
}
.material-icons__bin{
  opacity: 1;
  color: #fff;
}
.btn--search{
  background: none;
  border: none;
}
</style>
