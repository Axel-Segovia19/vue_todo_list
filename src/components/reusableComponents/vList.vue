<template>
  <div v-for="item in listArray" :key="item.id" class="flex flex-row border rounded-lg m-1 float-left">
      <button class="p-1 border-r bg-cyan-500 rounded-l-lg font-semibold" @click="removeIn(item.id)">X</button>
      <ul class="p-2 w-fit flex flex-col w-52">
      <li v-if="!item.edit">
        <div class="flex gap-1">
        <label for="title-li" class="font-bold">Title:</label>
         <p id="title-li">{{item.title}} </p>
        </div>
        <div class="flex gap-1">
         <label for="todo-li" class="font-bold">Todo:</label>
        <p id="todo-li" class="break-all">{{item.todo}}</p>
        </div>
        </li>
        <li v-if="item.edit">
        <div class="flex gap-1">
        <label for="title-li" class="font-bold">Title:</label>
         <input id="title-li" v-model="item.title"/>
        </div>
        <div class="flex gap-1">
         <label for="todo-li" class="font-bold">Todo:</label>
        <input id="todo-li" v-model="item.todo"/>
        </div>
        </li>
      </ul>
      <div class="p-2 ">
            <input type="checkbox" v-model="item.done"/>
      </div>
      <div class="p-2 ">
            <input type="checkbox" v-model="item.edit"/>
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
  },
  methods:{
    removeIn(id){
      this.$emit('removeIn', id)
    }
  }
  
}
</script>