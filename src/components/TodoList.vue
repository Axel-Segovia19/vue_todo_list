<template>
  <div class="border rounded-lg w-1/4 m-auto mt-2">
    <form class="flex flex-col gap-2 p-3 items-center ">
      <div class="flex gap-2">
      <label for="title">Title:</label>
    <input class="grow" v-model="listItem.title" id="title"/>
      </div>
      <div class="flex gap-2" >
    <label for="todo">To do: </label>
    <textarea class="" v-model="listItem.todo" id="todo"/>
      </div>
      <button class="bg-cyan-500 text-white p-1 self-end border rounded-lg font-bold" @click.prevent="addToList">Click Me</button>
    </form>
  </div>


 
<div class="flex">

    <div class="w-full m-2">
      <h1 class="bg-cyan-500 text-center rounded-t-lg">Not Done</h1>
    <div v-for="(item, index) in notDoneTodos" :key="item.id" class="flex flex-row border rounded-lg inline float-left m-1">
      <button class="p-1 border-r bg-cyan-500 rounded-l-lg font-semibold" @click.prevent="remove(index)">X</button>
      <ul class="p-2">
      <li class="flex flex-col">
        <div class="flex gap-1">
        <label for="title-li" class="font-bold">Title:</label>
         <p id="title-li">{{item.title}} </p>
        </div>
        <div class="flex gap-1">
         <label for="todo-li" class="font-bold">Todo:</label>
        <p id="todo-li" >{{item.todo}}</p>
        </div>
        </li>
      </ul>
      <div class="p-2 self-center">
            <input type="checkbox" v-model="item.done"/>
        </div>
    </div>
    </div>
    <div class="w-full mt-2">
      <h1 class="bg-cyan-500 text-center rounded-t-lg">Done</h1>
    <div v-for="(item, index) in doneTodos" :key="item.id" class="flex flex-row w-fit border rounded-lg inline float-left m-1">
      <button class="p-1 border-r bg-cyan-500 rounded-l-lg" @click.prevent="remove(index)">X</button>
      <ul class="p-2">
      <li class="flex flex-col">
        <div class="flex gap-1">
        <label for="title-li" class="font-bold">Title:</label>
         <p id="title-li">{{item.title}} </p>
        </div>
        <div class="flex gap-1">
         <label for="todo-li" class="font-bold">Todo:</label>
        <p id="todo-li" >{{item.todo}}</p>
        </div>
        </li>
      </ul>
      <div class="p-2 self-center">
            <input type="checkbox" v-model="item.done"/>
        </div>
    </div>
    </div>
    
</div>

    
</template>


<script>
export default {
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