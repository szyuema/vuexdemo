<template>
  <div class="demo3">
   <button  @click="test2">全部值+{{number}}</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      number: 5
    };
  },
  methods: {
    test2() {
      this.$store.dispatch({
        type: 'alladd',
        number: this.number
      });
    }
  }
};
</script>

<style lang="less">
.error {
  color: #8b8b8b;
}
</style>
