<template>
  <div class="error" @click="test2">
    <p>mapState:</p>
    <p>{{count}}</p>
    <p>{{countAlias}}</p>
    <p>{{countPlusLocalState}}</p>

    <p>mapGetters:</p>
    {{counts}} {{name}} {{doneTodos}}
    <div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';

export default {
  data() {
    return {
      errorcode: 0.1
    };
  },
  computed: {
    // 当一个组件需要获取多个状态时候，使用 mapState 辅助函数帮助我们生成计算属性---state
    ...mapState({
      // 箭头函数可使代码更简练, 可以直接使用state
      count: state => state.count + 10,
      // 获取state 的 count值
      countAlias: 'count',
      // 为了能够使用 `this` 获取局部状态，必须使用常规函数
      countPlusLocalState(state) {
        return state.count + this.errorcode;
      }
    }),
    // getters:有时候我们需要从 store 中的 state 中派生出一些状态
    // 使用对象展开运算符将 getter 混入 computed 对象中 ---getters
    ...mapGetters(['doneTodos']),
    ...mapGetters({
      counts: 'count'
    }),
    // 自定义计算属性
    name() {
      // return this.$store.getters.getTodoById('1');
      return 'this.$store.state.count';
    }
  },

  // watch: {
  //   count: function(val) {
  //     this.$store.state.count;
  //   }
  // },
  methods: {
    test1() {
      this.$store.commit({
        type: 'increment',
        amount: 10
      });
    },
    test2() {
      this.$store.dispatch({
        type: 'increment',
        amount: 10
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
