<template>
  <ul>
    <li v-for="todo in todos" :key="todo.id">
      <slot :todo="todo"><!--插槽prop 可以在父作用域中v-slot：default="value"一个值来定义我们提供的插槽prop的名字-->
        这是插槽默认值，即后备内容，父组件没有提供内容的时候显示这个，提供来则本文本不显示
        //slot作为一个承载内容分发的接口
        //具名插槽指的是一个插槽有一个name值，多个插槽中会一一对应
      </slot>
    </li>
  </ul>
</template>

<script>
  export default {
    name:"childSlot",
    props: {
      todos: {
        type: Array
      }
    }
  }
</script>
