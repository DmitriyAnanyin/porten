<template>
  <div class="overlay" ref="overlay">
    <div class="modal__content">
      <i class="material-icons" @click="closeModal">close</i>
      <div class="modal__content__header">
        <h1 class="title">Восстановить пароль</h1> 
        <h5>Проверьте почту</h5>
      </div>

      <form @submit.prevent="resetPassword">
        <div class="modal__content__body">
          <div class="form__footer form__footer--center">  
              <div class="form__group form__group--md">
                  <input v-model="email" name="email" value="" class="form__control" type="email" placeholder="Email">
              </div> 
              <div class="form__group form__group--md">  
              <button name="do_reset" class="btn" type="submit">Восстановить</button>  
            </div>
          </div>
        </div>
      </form>
    </div>    
  </div> 
</template>

<script>
// import axios from 'axios'
import { mapActions } from 'vuex'

export default {
  name: 'reset',
  props: {},
  data(){
    return{
      email: null
    }
  },
  methods:{
    ...mapActions(['CREATE_NEW_PASSWORD']),
    resetPassword(){
      this.CREATE_NEW_PASSWORD(this.email);
    },
    closeModal(){
      this.$emit('closeModal')
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
