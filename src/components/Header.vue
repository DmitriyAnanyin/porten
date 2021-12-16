<template>
  <div class="container">
    <signIn 
    v-if="sign_modal_visible"
    @closeModal="closingSign"
    />
    <auth 
    v-if="auth_modal_visible"
    @closeModal="closingAuth"
    />
    <reset 
    v-if="reset_modal_visible"
    @closeModal="closingReset"
    />
    <header class="header">
      <div class="header__info">
        <img src="media/images/phone-ico.svg" alt="Позвонить">
        <div class="header__info-text">8 (812) 123-45-67 | Работаем 7 дней в неделю | 9:00 — 18:00</div>
      </div>
      <div class="header__signin">
        <div class="prev_person_info" v-if="!data_user.length == []">
          <div class="prev_person_info" v-for="info in data_user" :key="info.id">
            <img @click="LOG_OUT_USER" src="@/assets/images/log-in.svg" alt="Выйти">
            <div class="prev_name ml_10">{{info.name}}</div>
            <div class="prev_name">{{info.surname}}</div>
            <img class="prev_img" src="@/assets/images/chevi.jpg" alt="">
          </div>
        </div>
        
        <div class="ml_10" v-if="data_user.length == []">
          <a @click="showSign">Войти</a> / 
          <a @click="showAuth">Регистрация</a> /
          <a @click="showReset">Восстановить</a>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
import signIn from './modal/Sign_In.vue'
import auth from './modal/Auth'
import Reset from './modal/Reset.vue'
import { mapGetters, mapMutations } from 'vuex'

const body = document.body

export default {
  name: 'v-header',
  components:{
    signIn,
    auth,
    Reset
  },
  data(){
    return{
      sign_modal_visible: false,
      auth_modal_visible: false,
      reset_modal_visible: false
    }
  },
  computed:{
    ...mapGetters({
      data_user: 'DATA_USER'
    })
  },
  methods:{
    ...mapMutations(['LOG_OUT_USER']),
    
    showSign(){
      bodyAddScroll()
      this.sign_modal_visible = true
    },
    showAuth(){
      bodyAddScroll()
      this.auth_modal_visible = true
    },
    showReset(){
      bodyAddScroll()
      this.reset_modal_visible = true
    },
    closingSign(){
      bodyRemoveScroll()
      this.sign_modal_visible = false
    },
    closingAuth(){
      bodyRemoveScroll()
      this.auth_modal_visible = false
    },
    closingReset(){
      bodyRemoveScroll()
      this.reset_modal_visible = false
    }

  },
}

function bodyAddScroll() {
  return body.classList.add('no-scroll')
}
function bodyRemoveScroll() {
  return body.classList.remove('no-scroll')
}
</script>

<style>
.prev_person_info{
  display: flex;
  align-items: center;
}
.prev_name{
  margin-left:5px;
}
.prev_img{
  width: 40px;
  height: 40px;
  border-radius: 50%;
  padding: 10px 0 10px 10px;
}
</style>