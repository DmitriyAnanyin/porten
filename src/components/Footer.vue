<template>
<div>
  <div class="brands">
    <div class="container">
      <div class="new_collection__title brand_title__margin">Наши бренды</div>
      <span class="line"></span><br>
      <div class="brand__list">
        <div class="brand__item">
          <router-link :to="{name: 'brand_page'}"><a><img src="media/images/brand.png" alt="Бренд"></a></router-link>
        </div>
        <div class="brand__item">
          <router-link :to="{name: 'brand_page'}"><a><img src="media/images/brand.png" alt="Бренд"></a></router-link>
        </div>
        <div class="brand__item">
          <router-link :to="{name: 'brand_page'}"><a><img src="media/images/brand.png" alt="Бренд"></a></router-link>
        </div>
        <div class="brand__item">
          <router-link :to="{name: 'brand_page'}"><a><img src="media/images/brand.png" alt="Бренд"></a></router-link>
        </div>
      </div>
    </div>
  </div>

    <footer class="footer" style="background-image: url(media/images/footer.jpg);">
      <div class="container">
        <div class="footer_nav">
          <div class="about_shop">
            <div class="footer_nav__title">О магазине</div>
            <div class="about_shop__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi semper viverra nunc cursus tortor lectus nunc nulla nibh. Egestas amet consectetur vel vitae aliquam dictum suspendisse. Lobortis eget consequat, tellus et et sed turpis. Pretium quisque vitae, amet, porttitor odio ultricies massa pharetra leo. Et ipsum urna fames in sit mi ultrices nisi, nunc.</div>
          </div>
          <div class="category">
            <div class="footer_nav__title category__title">Категории</div>
            <ul class="category__list">
              <a href="#"><li class="category__item">часы</li></a>
              <a href="#"><li class="category__item">браслеты</li></a>
              <a href="#"><li class="category__item">ремни</li></a>
              <a href="#"><li class="category__item">ювелирные изделия</li></a>
              <a href="#"><li class="category__item">запонки</li></a>
            </ul>
          </div>
          <div class="mailing">
            <div class="footer_nav__title">Рассылка</div>
            <div class="about_shop__text mailing__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi semper viverra nunc cursus tortor lectus nunc nulla nibh.</div>
            <form class="mailing__form" action="/" method="POST">
              <textarea class="mailing__textarea" placeholder="Ваша почта"></textarea>
              <button class="mailing__btn" type="submit">Подписаться</button>
            </form>
          </div>
        </div>
      </div>
    </footer>
    
    <div class="container">
      <p class="copirayt">© 2020 Все права защищены</p>
    </div>
</div>
</template>