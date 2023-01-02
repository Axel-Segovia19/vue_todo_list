<template>
  <div v-for="item in listArray" :key="item.id" class="flex flex-row shadow-2xl rounded-lg m-1 float-left">
      <button class="p-1 border-r bg-red-600 rounded-l-lg font-semibold" @click="removeIn(item.id)">X</button>
      <ul class="p-2 w-fit flex flex-col">
      <li v-if="!item.edit">
        <div class="flex gap-2">
        <label for="title-li" class="font-bold">Title:</label>
         <p id="title-li">{{item.title}} </p>
        </div>
        <div class="flex gap-1 shrink">
         <label for="todo-li" class="font-bold">Todo:</label>
        <p id="todo-li" class="break-all">{{item.todo}}</p>
        </div>
        </li>
        <li v-if="item.edit">
        <div class="flex gap-2 py-1">
        <label for="title-li" class="font-bold">Title:</label>
         <v-input id="title-li" v-model="item.title"/>
        </div>
        <div class="flex gap-1 p2-1">
         <label for="todo-li" class="font-bold">Todo:</label>
        <v-textarea id="todo-li" v-model="item.todo"/>
        </div>
        </li>
      </ul>
      <div class="flex">

      <div :class="`p-2 flex ${!item.done ? 'bg-green-500' : 'bg-orange-600'}`">
            <button class="self-center font-bold" type="button" @click.prevent="changeValue(item, 'done')">{{!item.done ? 'Done' : 'Not Done'}}</button>
      </div>
      <div :class="`p-2 ${item.edit ? 'bg-blue-800' : 'bg-blue-500' } rounded-r-lg flex`">
            <button class="self-center font-bold" @click.prevent="changeValue(item, 'edit')">{{item.edit ? 'Save' : 'Edit'}}</button>
      </div>
      </div>
    </div>
</template>


<script>
import vInput from './vInput.vue'
import vTextArea from './vTextArea.vue'

export default {
  components:{
    'v-input' : vInput,
    'v-textarea' : vTextArea},
  emits:['removeIn'],
  name: 'vList',
  props:{
    listArray :{
      type: Array,
      required: true
    }
  },
  methods:{
    removeIn(id){
      this.$emit('removeIn', id)
    },
    changeValue(todo, value){
      return todo[value] = !todo[value]
    }
  }
  
}
</script>