<template>
  <div class="w-full" >
    <textarea type="text" class="w-full rounded pl-2" :placeholder="placeHolder"  @input="emitValue" :value="modelValue"/> 
  </div>
</template>


<script>
export default {
  name: 'vTextArea',
  props:{
    modelValue:{
      type: String,
      required: true, 
    },
    placeHolder:{
      type: String,
      required: false, 
      default : ''
    }
  },

  methods:{
    emitValue(event){
      this.$emit('update:modelValue', event.target.value)
    }
  }
}
</script>