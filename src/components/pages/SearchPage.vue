<template>
  <div>
    <div class="container">
      <h1 class="title mt_title">Поиск по запросу</h1>
      <input type="text" class="form__control" placeholder="Название товара" value="">
      <div class="product__list">
        <div class="product__item">
          <img class="product__img" src="media/images/clock.jpg" alt="">
          <div class="product__name">Louis XVI ATHOS</div>
          <div class="product__price">165 000 руб.</div>
          <p class="mt30">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non rutrum ornare ut mattis habitant dui arcu. Sagittis amet nunc ut neque quis nibh arcu. Vivamus vestibulum nisi et venenatis sed scelerisque magna consectetur. Amet convallis quis gravida facilisis vulputate. Faucibus facilisi habitasse ipsum interdum dictum aliquet. Velit quis ullamcorper pulvinar nulla malesuada integer. Aenean praesent viverra nulla nullam natoque volutpat curabitur auctor. Viverra viverra ullamcorper scelerisque risus dignissim egestas. Id aliquam a aliquam egestas leo orci pharetra sed diam.</p>
          <button class="btn btn--prod_search btn--prod_search_like"><img src="media/images/like.png">Понравилось</button>
          <button class="btn btn--prod_search btn--prod_search_shop"><img src="media/images/shop.svg">В корзину</button>
          <button class="btn btn--prod_search btn--prod_search_info"><img src="media/images/info.png">Подробнее</button>
        </div>
        <div class="product__item">
          <img class="product__img" src="media/images/clock.jpg" alt="">
          <div class="product__name">Louis XVI ATHOS</div>
          <div class="product__price">165 000 руб.</div>
          <p class="mt30">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non rutrum ornare ut mattis habitant dui arcu. Sagittis amet nunc ut neque quis nibh arcu. Vivamus vestibulum nisi et venenatis sed scelerisque magna consectetur. Amet convallis quis gravida facilisis vulputate. Faucibus facilisi habitasse ipsum interdum dictum aliquet. Velit quis ullamcorper pulvinar nulla malesuada integer. Aenean praesent viverra nulla nullam natoque volutpat curabitur auctor. Viverra viverra ullamcorper scelerisque risus dignissim egestas. Id aliquam a aliquam egestas leo orci pharetra sed diam.</p>
          <button class="btn btn--prod_search btn--prod_search_like"><img src="media/images/like.png">Понравилось</button>
          <button class="btn btn--prod_search btn--prod_search_shop"><img src="media/images/shop.svg">В корзину</button>
          <button class="btn btn--prod_search btn--prod_search_info"><img src="media/images/info.png">Подробнее</button>
        </div>
        <div class="product__item">
          <img class="product__img" src="media/images/clock.jpg" alt="">
          <div class="product__name">Louis XVI ATHOS</div>
          <div class="product__price">165 000 руб.</div>
          <p class="mt30">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non rutrum ornare ut mattis habitant dui arcu. Sagittis amet nunc ut neque quis nibh arcu. Vivamus vestibulum nisi et venenatis sed scelerisque magna consectetur. Amet convallis quis gravida facilisis vulputate. Faucibus facilisi habitasse ipsum interdum dictum aliquet. Velit quis ullamcorper pulvinar nulla malesuada integer. Aenean praesent viverra nulla nullam natoque volutpat curabitur auctor. Viverra viverra ullamcorper scelerisque risus dignissim egestas. Id aliquam a aliquam egestas leo orci pharetra sed diam.</p>
          <button class="btn btn--prod_search btn--prod_search_like"><img src="media/images/like.png">Понравилось</button>
          <button class="btn btn--prod_search btn--prod_search_shop"><img src="media/images/shop.svg">В корзину</button>
          <button class="btn btn--prod_search btn--prod_search_info"><img src="media/images/info.png">Подробнее</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.btn--prod_search{
  min-width: 200px;
  font-size: 18px;
  position: absolute;
  top: 0;
  right: 15%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.btn--prod_search_like{
  top: 15%;
}
.btn--prod_search_shop{
  top: 30%;
}
.btn--prod_search_info{
  top: 45%;
}
</style>