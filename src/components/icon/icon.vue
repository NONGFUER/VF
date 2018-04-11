<template>
  <i class="icon" :class="classNames" :style="{'font-size': size + 'px'}"><slot></slot></i>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: '',
    },
    size: {
      type: Number,
      default: 24,
    },
  },
  computed: {
    classNames() {
      const obj = {};
      // eslint-disable-next-line
      obj['icon-' + this.value] = true;
      return obj;
    },
  },
};
</script>

<style >
@import "../../res/icomoon/style.css";
.icon{
  position: relative;
}
</style>
