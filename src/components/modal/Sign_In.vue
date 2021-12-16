<template>
  <div>
    <div class="overlay" ref="overlay">
      <div class="modal__content">
        <i class="material-icons" @click="closeModal">close</i>
        <div class="modal__content__header">
          <h1 class="title">Войти в личный кабинет</h1> 
          <h5>{{this.error}}</h5>
        </div>
        
        <form @submit.prevent="sign_in">
          <div class="modal__content__body">
            <div class="form__group form__group--md">
              <input name="login" v-model="params.login" value="" class="form__control" type="text" placeholder="Логин">
            </div>
            <div class="form__group form__group--md">
              <input name="password" v-model="params.password" value="" class="form__control" type="password" placeholder="Пароль">
            </div>   
            <div class="form__group form__group--md">  
              <button name="do_login" class="btn" type="submit">Войти</button>  
            </div>
          </div>
        </form>
        
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'signIn',
  props: {},
  data(){
    return{
      error: null,
      params:{
        login: null,
        password: null,
      }
    }
  },
  computed: mapGetters(['DATA_USER']),
  methods: {
    ...mapActions(
      ['GET_DATA_USER']
      ),
    closeModal(){
      this.$emit('closeModal')
    },
    sign_in() {
      this.GET_DATA_USER(this.params)
      this.closeModal()
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

