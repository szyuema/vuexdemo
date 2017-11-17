
<template>
  <div>
    <input ref="input" :value="value" @input="test($event.target.value)">
    <cinput v-model="my" v-if="value==0.3"></cinput>
  </div>
</template>

<script>
/**
 * 自定义组件
 * v-model  语法糖
 */
export default {
  name: 'cinput',
  data() {
    return {
      my: 10
    };
  },
  props: ['value'],
  methods: {
    test(value) {
      debugger;
      let formattedValue = value / 10;
      if (formattedValue !== value) {
        this.$refs.input.value = formattedValue;
      }
      // 通过 input 事件带出数值
      this.$emit('input', Number(formattedValue));
    }
  }
};
</script>

<style>

</style>

