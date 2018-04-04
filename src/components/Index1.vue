<template>
  <div>
    <swiper :list="demo01_list" ></swiper>
    <div class="bottomAll">
     <grid :cols="4" :show-lr-borders="false" :show-vertical-dividers="false" class="cus-girds">    
       <grid-item v-for=" i in 8" :key="i" class="cus-grid">
         <div class="grid-content">
           <div class="icon-style icon-common" :class="labels[i-1].class"></div>
           <span>{{labels[i-1].label}}</span>
         </div>
       </grid-item>
     </grid>
    </div>
    
    <grid :cols="2" class="article-grids">
      <grid-item v-for="i in 4" :key="i" class="article" >
        <!-- <div class="article">
          <div class="article-content"></div>
          <div class="article-icon"></div>
        </div> -->
        <flexbox>
          <flexbox-item :span="8">
            <div class="article-title">
              <p class="main-title" >{{articles[i-1].title}}</p>
              <p class="sub-title" >{{articles[i-1].subtitle}}</p>
            </div>
          </flexbox-item>
          <flexbox-item>
            <div class="article-icon"><img :src="articles[i-1].img"></div>
          </flexbox-item>
        </flexbox>
      </grid-item>
    </grid>
  </div>
</template>

<i18n>
Grid:
  zh-CN: 九宫格
Go to Cell:
  zh-CN: 跳转到Cell
Custom content:
  zh-CN: 自定义内容
Custom col:
  zh-CN: 自定义列
</i18n>


<script>
import { Swiper, Grid, GridItem, GroupTitle, Flexbox, FlexboxItem } from 'vux';
import icon1 from '@/assets/lion.png';
import icon2 from '@/assets/cat.png';
import icon3 from '@/assets/monkey.png';
import icon4 from '@/assets/cow.png';

const iconLabels = [{
  label: '基盘',
  class: 'icon-jipan',
}, {
  label: '竞争店',
  class: 'icon-jingzhengdian',
}, {
  label: '店铺',
  class: 'icon-mart',
}, {
  label: '合约管理',
  class: 'icon-agree',
}, {
  label: '开发报表',
  class: 'icon-excel',
}, {
  label: '地图找店',
  class: 'icon-gis',
}, {
  label: '查成交',
  class: 'icon-deal',
}, {
  label: '开发百科',
  class: 'icon-wiki',
}];
const baseList = [{
  url: 'https://static.vux.li/demo/1.jpg',
  img: 'https://static.vux.li/demo/1.jpg',
  title: '送你一朵fua',
}, {
  url: 'https://static.vux.li/demo/1.jpg',
  img: 'https://static.vux.li/demo/2.jpg',
  title: '送你一辆车',
}, {
  url: 'https://static.vux.li/demo/1.jpg',
  img: 'https://static.vux.li/demo/3.jpg',
  title: '送你一次旅行',
  fallbackImg: 'https://static.vux.li/demo/3.jpg',
}];

const articleList = [{
  url: 'https://static.vux.li/demo/1.jpg',
  img: icon1,
  title: '送你一朵fua',
  subtitle: '请查看',
}, {
  url: 'https://static.vux.li/demo/1.jpg',
  img: icon2,
  title: '送你一辆车',
  subtitle: '请查看',
}, {
  url: 'https://static.vux.li/demo/1.jpg',
  img: icon3,
  title: '送你一次旅行',
  subtitle: '请查看',
  fallbackImg: 'https://static.vux.li/demo/3.jpg',
}, {
  url: 'https://static.vux.li/demo/1.jpg',
  img: icon4,
  title: '送你一次旅行',
  subtitle: '请查看',
  fallbackImg: 'https://static.vux.li/demo/3.jpg',
}];

export default {
  name: 'Index1',
  components: {
    Swiper,
    Grid,
    GridItem,
    GroupTitle,
    Flexbox,
    FlexboxItem,
  },
  data() {
    return { demo01_list: baseList,
      labels: iconLabels,
      articles: articleList,
    };
  },

};
</script>



<style >
.bottomAll{
    /* border-bottom: 1px solid #D9D9D9; */
    color: #D9D9D9;
    background:#fff;
}
.cus-girds{
  padding-bottom: 10px;
  margin-bottom: 10px;
}
.icon-style{
  width: 32px;
  height: 32px;
  margin: 0 auto;
}
.cus-grid{
  text-align: center;
  padding:15px 0px 0px 0px !important;
  font-size: 12px;
  color: #222;
}
.cus-grid::after{
  border-bottom: none !important;
}
.grid-center {
  font-size: 12px;
  display: block;
  text-align: center;
  color: #666;
}
.icon-jipan{
  background-position: 0px -165px;
}
.icon-jingzhengdian{
  background-position: 0px -124px;
}
.icon-mart{
  background-position: 0px -1144px;
}
.icon-agree{
  background-position: 0px -205px;
}
.icon-biz{
  background-position: 0px -246px;
}
.icon-gis{
  background-position: 0px -83px;
}
.icon-deal{
  background-position: 0px -1225px;
}
.icon-wiki{
  background-position: 0px -328px;
}
.icon-excel{
  background-position: 0px -368px;
}
.icon-common{
    display: block;
    width: 32px;
    height: 32px;   
    background-repeat: no-repeat;
    background-image: url(../assets/sprite.svg);
}
a:active{
  background-color: #ECECEC;
}
.article-grids{
  background: #fff;
}
.article{
  padding: 4px 18px !important;
}
.article-title{
  /* background: burlywood; */
}
.article-icon{
  width: 30px;
  height: 30px;
 
}
.article-icon img{
  width: 100%;
}
.main-title{
  color:#222;
   font-size: 12px;
   font-weight: bold;
}
.sub-title{
  color:#c7baba;
  font-size: 10px;
}
</style>