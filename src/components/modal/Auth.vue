<template>
  <div class="overlay" ref="overlay">
    <div class="modal__content">
      <i class="material-icons" @click="closeModal">close</i>
      <div class="modal__content__header">
        <h1 class="title">Регистрация</h1> 
        <h5>{{this.error}}</h5>
      </div>
      
      <form @submit.prevent="createUser" method="POST">
        <div class="modal__content__body">
          <div class="form__group form__group--md">
            <input name="name" v-model="dataUser.name" class="form__control" type="text" 
          placeholder="Имя">
          </div>
          <div class="form__group form__group--md">
            <input name="surname" v-model="dataUser.surname" class="form__control" type="text" 
          placeholder="Фамилия">
          </div>
          <div class="form__group form__group--md">
            <input name="login" v-model="dataUser.login" class="form__control" type="text" 
          placeholder="Логин">
          </div>
          <div class="form__group form__group--md">
            <input name="email" v-model="dataUser.email" class="form__control" type="email" placeholder="Email">
          </div>
          <div class="form__group form__group--md">
            <input name="password" v-model="dataUser.password" class="form__control" type="password" placeholder="Пароль">
          </div>                         
          <div class="form__group form__group--md">
            <input name="check_password" v-model="dataUser.check_password" class="form__control" type="password" placeholder="Повторите пароль">
          </div>   
          <div class="form__group form__group--md">  
            <button name="do_sign_up" class="btn" type="submit" >Зарегистрироваться</button>  
          </div>
        </div>
      </form>
    </div>
  </div>
</template>


<script>
import { mapActions } from 'vuex'

export default {
  name: 'auth',
  props: {},
  data() {
    return{
      error: null,
      dataUser:{
        name: null,
        surname: null,
        login: null,
        email: null,
        password: null,
        check_password: null,
        is_admin: 0
      }
    }
  },
  methods: {
    ...mapActions(['CREATE_USER']),
    closeModal(){ 
      this.$emit('closeModal')
    },
    createUser() {
      let params = new URLSearchParams();
      params.append('name', this.dataUser.name);
      params.append('surname', this.dataUser.surname);
      params.append('login', this.dataUser.login);
      params.append('email', this.dataUser.email);
      params.append('password', this.dataUser.password);
      params.append('check_password', this.dataUser.check_password);
      params.append('is_admin', this.dataUser.is_admin);
      if(this.dataUser.password === this.dataUser.check_password){
        this.CREATE_USER(params)
        this.closeModal()
      } else {
        this.error = 'Пароли не совпадают!'
      }
      
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

<style>
.modal__content__body{
  text-align: right;
}
</style>