<template>
  <div class="rounded-lg w-1/4 m-auto mt-2 shadow-2xl">
    <form class="flex flex-col gap-2 p-3 items-center">
    <input class="w-full rounded pl-2" placeholder="Title" v-model="listItem.title" id="title"/>
    <textarea class="w-full rounded pl-2" placeholder="Whats there todo?" v-model="listItem.todo" id="todo"/>
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
  },
  titleIsEmpty(){
    return this.listItem.title === ""
  },
  todoIsEmpty(){
    return this.listItem.todo === ""
  }
},
  methods:{
    addToList(){
      if(this.titleIsEmpty) return alert('Must have a Title')
      if(this.todoIsEmpty) return alert('Must have a todo')
      this.list.push({title: this.listItem.title, todo: this.listItem.todo, id: this.listItem.id++, done: false, edit: false})
      this.listItem.title = ''
      this.listItem.todo = ''
    },
    remove(id){ //updated this bit due to not deleting correct value from list array
      this.list.splice(this.list.indexOf(this.list.find(item => item.id == id)), 1)
    },// used splice instead of filter to remove since I dont want to make a new array holding all values
  }
}
</script>