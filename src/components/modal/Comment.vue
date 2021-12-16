<template>
  <div>
    <div class="overlay" ref="overlay">
      <div class="modal__content">
        <i class="material-icons" @click="closeModal">close</i>
        <div class="modal__content__header">
          <h1 class="title">Комментарий {{article_id}}</h1> 
          <h5>{{this.error}}</h5>
        </div>
        
        <form @submit.prevent="sendComment()">
          <div class="modal__content__body">
            <div class="rating__group">
              <div class="rating__stars">
                <input v-model="dataComment.ratingValue" class="rating__star" type="radio" name="rating" value="1" checked >
                <input v-model="dataComment.ratingValue" class="rating__star" type="radio" name="rating" value="2" >
                <input v-model="dataComment.ratingValue" class="rating__star" type="radio" name="rating" value="3" >
                <input v-model="dataComment.ratingValue" class="rating__star" type="radio" name="rating" value="4" >
                <input v-model="dataComment.ratingValue" class="rating__star" type="radio" name="rating" value="5" >
              </div>
            </div>
            <div class="form__group form__group--md">
              <textarea v-model="dataComment.text" cols="50" rows="5" class="form__control form__control--textarea_comment" placeholder="Текст комментария"></textarea>
            </div>   
            <div class="form__group form__group--md">  
              <button class="btn" type="submit">Оставить отзыв</button>  
            </div>
          </div>
        </form>
        
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters} from 'vuex'

export default {
  name: 'comment',
  props: {
    articleId: {
      type: String,
      default(){
        return{

        }
      }
    }
  },
  data(){
    return{
      error: '',
      dataComment:{
        ratingValue: null,
        text: '',
      }
    }
  },
  computed: mapGetters(['DATA_USER']),
  methods: {
    ...mapActions(
      ['SEND_COMMENT']
      ),
    closeModal(){
      this.$emit('closeModal')
    },
    sendComment() {
      let formData = new FormData();
      formData.append('rating', this.dataComment.ratingValue);
      formData.append('text', this.dataComment.text);
      formData.append('article', this.articleId);
      formData.append('id_user', this.DATA_USER[0]['id']);
      
      this.SEND_COMMENT(formData)
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

<style>
.form__control--textarea_comment{
  resize: vertical;
}
</style>