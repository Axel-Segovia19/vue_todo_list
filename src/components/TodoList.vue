<template>
  <div class="rounded-lg w-1/4 m-auto mt-2 shadow-2xl">
    <form class="flex flex-col gap-2 p-3 items-center">
    <v-input place-holder="Title" v-model="title"/>
    <v-textarea place-holder="Whats there todo?" v-model="todo"/>
      <button class="bg-blue-500 text-white p-1 self-end border rounded-lg font-bold" @click.prevent="addToList">Add Todo</button>
    </form>
  </div>
  
<div class="flex gap-1">
    <div class="w-full m-2">
      <h1 class="bg-blue-500 text-center rounded text-xl font-semibold">Not Done</h1>
    <v-list :listArray="notDoneTodos" @remove-in="remove"/>
    </div>
    <div class="w-full mt-2">
      <h1 class="bg-blue-500 text-center rounded text-xl font-semibold">Done</h1>
    <v-list :listArray="doneTodos" @remove-in="remove"/>
    </div>
    
</div>

    
</template>


<script>
import vList from './reusableComponents/vList.vue'
import vInput from './reusableComponents/vInput.vue'
import vTextArea from './reusableComponents/vTextArea.vue'
import { useVuelidate } from '@vuelidate/core'
import { required } from '@vuelidate/validators'

export default {
  components:{
    'v-list' : vList,
    'v-input': vInput,
    'v-textarea': vTextArea
  },
  name: 'TodoList',
  data(){
    return {
      v$: useVuelidate(),
      list: [],
      title: '',
      todo: '',
      id: 0
      
    }
  },
validations(){
    return {
      title : {required},
      todo : {required}
    }
  },
computed:{
  doneTodos(){
    return this.list.filter(item => item.done)
  },
  notDoneTodos(){ 
    return this.list.filter(item => !item.done)
  },
},
  methods:{
    addToList(){
      this.v$.$validate()
      if(!this.v$.$error){
        this.list.push({title: this.title, todo: this.todo, id: this.id++, done: false, edit: false})
        this.title = ''
        this.todo = '' 
        } else {
        alert('Input failed need title')
      }
    },
    remove(id){ //updated this bit due to not deleting correct value from list array
      this.list.splice(this.list.indexOf(this.list.find(item => item.id == id)), 1)
    },// used splice instead of filter to remove since I dont want to make a new array holding all values
  }
}
</script>