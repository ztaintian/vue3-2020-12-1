<template>
  <h1>{{ msg }}</h1>
  <el-button @click="count++">count is: {{ count }}</el-button>
  <p v-for="(value,index) in arr" :key="index">
    {{ value.name }}
  </p>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  setup() {
    console.log('ghfafdfs')
  },
  mounted() {
    console.log("dadada");
  },
  data() {
    return {
      arr: [
        {
          name:'000',
          value: 'fafadds'
        }
      ],
      count: 0,
    };
  },
};
</script>
