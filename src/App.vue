<template>
  <todo-list />
</template>

<script>
import TodoList from './components/TodoList.vue'

export default {
  name: 'App',
  components: {
    'todo-list': TodoList
  }
}
</script>
