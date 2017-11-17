<template>
  <div class="demo2">
   demo2初始值 {{demo2}}
   <button  @click="test2">demo1值+{{number}}</button>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  data() {
    return {
      number: 11
    };
  },
  computed: {
    ...mapGetters({
      demo2: 'demo2'
    })
  },

  methods: {
    test2() {
      this.$store.dispatch({
        type: 'demo1add',
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
