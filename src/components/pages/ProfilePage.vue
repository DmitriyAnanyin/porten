<template>
  <div>
    <div class="container container--profile product__item ">
      <form action="/" class="form">
        <div class="cabinet__form">
          <div class="form__group form__group--md">
              <input type="text" class="form__control" placeholder="Ваше имя" value="">
          </div>
          <div class="form__group form__group--md">
              <input type="email" class="form__control" placeholder="Ваш email" value="">
          </div>
          <div class="form__group form__group--md">
              <input type="password" class="form__control" placeholder="Новый пароль" value="">
          </div>
          <div class="form__group form__group--md">
            <input type="password" class="form__control" placeholder="Повторите пароль" value="">
          </div>
        </div>

        <div class="cabinet__avatar">
          <img src="http://placehold.it/150" alt="">
          
              <input class="cabinet_file" type="file" value="Выбрать аватар">
        </div>
        <button type="submit" class="btn btn--prof">Сохранить</button>
      </form>
    </div>
  </div>
</template>

<script>

</script>