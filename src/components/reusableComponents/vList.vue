<template>
  <div v-for="(item, index) in listArray" :key="item.id" class="flex flex-row border rounded-lg m-1 float-left">
      <button class="p-1 border-r bg-cyan-500 rounded-l-lg font-semibold" @click="$emit('removeIn',index)">X</button>
      <ul class="p-2 w-fit">
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
</template>


<script>
export default {
  emits:['removeIn'],
  name: 'vList',
  props:{
    listArray :{
      type: Array,
      required: true
    }
  }
  
}
</script>