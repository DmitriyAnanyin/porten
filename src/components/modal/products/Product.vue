<template>
  <div class="overlay" ref="overlay">
    <div class="modal__content">
      <i class="material-icons" @click="closeModal">close</i>
      <slot></slot>
    </div>
  </div>
</template>

<script>

export default{
  name: 'product',
  props: {},
  data(){
    return{
      
    }
  },
  methods: {
    closeModal(){
      this.$emit('closeModal')
    },
    // addToBin(){
    //   this.$$emit(this.)
    // }
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
.btn--prod{
  min-width: 200px;
  font-size: 18px;
  position: absolute;
  top: 0;
  right: 15%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.btn--prod_like{
  top: 10%;
}
.btn--prod_shop{
  top: 20%;
}
.btn--prod_info{
  top: 30%;
}
</style>