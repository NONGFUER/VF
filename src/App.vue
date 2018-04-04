<template>
  <div id="app" style="height:100%" >
    <!-- <router-view></router-view> -->
    <view-box ref="viewBox" body-padding-top="46px" body-padding-bottom="55px">
      <x-header style="width:100%;position:absolute;left:0;top:0;z-index:100;">标题</x-header>
      
          <router-view></router-view>
       
      
      <Tabbar slot="bottom">
        <TabbarItem><span slot="label">首页</span></TabbarItem>
        <TabbarItem><span slot="label">消息</span></TabbarItem>
        <TabbarItem><span slot="label">我</span></TabbarItem>
      </Tabbar>
   </view-box>
  </div>
</template>

<script>
import { Tabbar, TabbarItem, XHeader, ViewBox } from 'vux';

export default {
  name: 'app',
  components: {
    Tabbar,
    TabbarItem,
    XHeader,
    ViewBox,
  },
};
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';

body {
  background-color: #efeff4;
}
html, body {
  height: 100%;
  width: 100%;
  overflow-x: hidden;
}
</style>
