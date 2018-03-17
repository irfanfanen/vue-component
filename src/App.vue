<template>
  <div>
    <input type="text" v-model="name">
    <app-greeter ref="childComponent" :name="name"></app-greeter>
    <button @click="click()">Alert</button>
    <button @click="click_2()">Alert2</button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        name: ''
      }
    },
    methods: {
      click() {
         this.$emit('click');
      },
      click_2() {
        this.$refs.childComponent.click_secound()
      }
    }
  }
</script>