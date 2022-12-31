<template>
  <div class="border rounded-lg w-1/4 m-auto mt-2 shadow-xl">
    <form class="flex flex-col gap-2 p-3 items-center ">
      <label for="title" class="self-start">Title:</label>
    <input class="w-full" v-model="listItem.title" id="title"/>
    <label for="todo" class="self-start">To do: </label>
    <textarea class="w-full" v-model="listItem.todo" id="todo"/>
      <button class="bg-cyan-500 text-white p-1 self-end border rounded-lg font-bold" @click.prevent="addToList">Click Me</button>
    </form>
  </div>
  
<div class="flex">
    <div class="w-full m-2">
      <h1 class="bg-cyan-500 text-center rounded-t-lg">Not Done</h1>
    <v-list :listArray="notDoneTodos" @remove-in="remove(index)"/>
    </div>
    <div class="w-full mt-2">
      <h1 class="bg-cyan-500 text-center rounded-t-lg">Done</h1>
    <v-list :listArray="doneTodos" @remove-in="remove(index)"/>
    </div>
    
</div>

    
</template>


<script>
import vList from './reusableComponents/vList.vue'

export default {
  components:{
    'v-list' : vList
  },
  name: 'TodoList',
  data(){
    return {
      list: [],
      listItem: {
        title: '',
        todo: '',
        id: 0
      }
    }
  },
computed:{
  doneTodos(){
    return this.list.filter(item => item.done)
  },
  notDoneTodos(){
    return this.list.filter(item => !item.done)
  }
},
  methods:{
    addToList(){
      this.list.push({title: this.listItem.title, todo: this.listItem.todo, id: this.listItem.id++, done: false})
      this.listItem.title = ''
      this.listItem.todo = ''
    },
    remove(index){
      this.list.splice(index, 1)
    },
  }
}
</script>