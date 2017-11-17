<template>
  <div class="demo1">
    demo1初始值 {{demo1}}
    <button @click="test2">demo2值+{{number}}</button><input type="number" v-model.number="number" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  data() {
    return {
      number: 1
    };
  },
  computed: {
    ...mapGetters({
      demo1: 'demo1'
    })
  },

  methods: {
    test2() {
      this.$store.dispatch({
        type: 'demo2add',
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
