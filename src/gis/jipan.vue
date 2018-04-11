<template>
    <div class="main_start ">
        <section class="page  ">
         <div class="content-area">
            <div class="mod_box house_lists">
                <sticky scroll-box="vux_view_box_body" ref="sticky" :offset="0" :check-sticky-support="false">
                <div class="tab_bar flexbox vux-1px-b" data-mark="booth" id="s5">
                    <div class="tab_tit box_col q_district"  data-mark="booth_area" @click="tab(1)">
                        <h2 class="tit">区域</h2>
                        <i class="icon_triangle_down"></i>
                    </div>
                    <div class="tab_tit box_col q_price" data-mark="booth_price" @click="tab(2)">
                        <h2 class="tit">价格</h2>
                        <i class="icon_triangle_down"> </i>
                    </div>
                    <div class="tab_tit box_col active" data-mark="booth_model" @click="tab(3)">
                        <h2 class="tit">多选 </h2>
                        <i class="icon_triangle_down"></i>
                    </div>
                    <div class="tab_tit box_col q_more" data-mark="booth_more" @click="tab(4)">
                        <h3 class="tit">更多</h3>
                        <i class="icon_triangle_down"></i>
                    </div>
                </div>
                </sticky>
            
                <div class="mod_cont">
                    <ul class="lists" data-mark="list_container" >       
                    <li class="pictext" v-for="item in 5" :key="item">
                        <a href="javascript:" @click="go(`jpDetail`)" class="a_mask"></a>
                        <div class="flexbox">
                            <div class="mod_media">
                                <div class="media_main">
                                    <img src="https://image1.ljcdn.com/shfdfs-image/20170108/f3f9589f-09b3-45d4-86fd-47c2fa8e6223.jpg.210x164.jpg" alt="户型方正，钥匙房，随时可看，电梯高区，诚心出售" class="lazyload">
                                </div>
                            </div>
                            <div class="item_list">
                                <div class="item_main">嘉兴旭辉广场店</div>
                                <div class="item_other text_cut" title="杉林新月环林东路875弄二手房">62.26m²/62.26m²/杉林新月环林东路875弄</div>
                                <div class="item_minor"><span class="price_total"><em>360</em><span class="unit">万</span></span><span class="unit_price">57823元/月</span></div>
                                <div class="tag_box">
                                    <span class="tag subway_house" style="background-color:rgba(89,171,253,0.15);color:rgb(89,171,253)" title="地铁二手房">有摆座</span>
                                    <span class="tag five" style="background-color:rgba(242,161,47,0.15);color:rgb(242,161,47)" title="满五年二手房">住宅型</span>
                                    <span class="tag haskey" style="background-color:rgba(51,190,133,0.15);color:rgb(51,190,133)" title="随时看房二手房">随时看房</span>
                                    <span class="tag elevator" style="background-color:rgba(123,189,255,0.15);color:rgb(123,189,255)" title="有电梯二手房">有摆座</span>
                                </div>
                            </div>
                        </div>
                    </li>
                    </ul>
                </div>
                <!-- <div class="sort_bar" data-mark="btn_sort" style="bottom: 4.28rem;">
                    <i class="icon_sort"></i><span>排序</span>
                </div> -->
                </div>
        </div>
        </section>
       <section class="layer_fixed filter_box" style="" data-mark="panel_box" v-if="isMenuActive" @click.self="toggleMenu" >
    
    <header class="tab_bar flexbox">
        <div class="tab_tit box_col" data-mark="button_area" v-bind:class="{ active: isActive1 }" @click="tab(1)">
            <span class="tit">
                区域
            </span>
            <i class="icon_triangle_down">
            </i>
        </div>
        <div class="tab_tit box_col" data-mark="button_price" v-bind:class="{ active: isActive2 }" @click="tab(2)">
            <span class="tit">
                时间
            </span>
            <i class="icon_triangle_down">
            </i>
        </div>
        <div class="tab_tit box_col" v-bind:class="{ active: isActive3 }" data-mark="button_model" @click="tab(3)">
            <span class="tit">
                确度
            </span>
            <i class="icon_triangle_down">
            </i>
        </div>
        <div class="tab_tit box_col" data-mark="button_more" v-bind:class="{ active: isActive4 }" @click="tab(4)">
            <span class="tit">
                更多
            </span>
            <i class="icon_triangle_down">
            </i>
        </div>
    </header>
    
    <div class="content" >
        
        <div id="s1" class="filter_item lists_area" v-bind:class="{ active: isActive1 }" data-mark="panel_area">
            <group class="checklist" gutter="0">
                <radio :options="radioArea" @on-change="change"></radio>
            </group >
        </div>
       
       
        <div id="s2" class="filter_item lists_price" v-bind:class="{ active: isActive2 }" data-mark="panel_price">
            <radio class="checklist" :options="commonList" @on-change="change"></radio>
            <!-- <checklist class="checklist"  label-position="left" :options="commonList" v-model="checklist002" @on-change="change" :max="1"></checklist> -->
        </div>
     
       
        <div id="s3" class="filter_item lists_model " v-bind:class="{ active: isActive3 }" data-mark="panel_model" >
            <radio class="checklist" :options="areaList" @on-change="change"></radio>
            <!-- <checklist class="checklist"  label-position="left" :options="areaList" v-model="checkAreaList" @on-change="change" :max="1"></checklist> -->
        </div>
       
       
        <div id="s4" class="filter_item lists_more" v-bind:class="{ active: isActive4 }" data-mark="panel_more">
           
            <div class="opt_box">
                <a href="javascript:;" class="btn btn_link" data-act="clear">
                    清空条件
                </a>
                <a href="javascript:;" class="btn btn_green q_button" data-act="submit">
                    确定
                </a>
            </div>
        </div>
       
    </div>
</section> 
        <!-- <float-button fixed style="z-index:40" @click="go(`addJP`)"></float-button> -->
        <a href="javascript:;" class="vc-float-button vc-float-button-red vc-float-button-fixed" @click="go(`addJP`)"> 
            <i class="icon icon-add" style="font-size: 24px;"></i> 
        </a>
        
  </div>
</template>

<script>
import { Checklist, Sticky, Radio, Group } from 'vux';

const show = false;
const isActive11 = false;
const isActive21 = false;
const isActive31 = false;
const isActive41 = false;
const isMenuA = false;
export default {
  name: 'jipan',
  components: {
    Checklist,
    Sticky,
    Radio,
    Group,
  },
  methods: {
      // eslint-disable-next-line
    change(val, label) {
      // console.log('change', val, label);
    },
    toggleMenu() {
      this.isMenuActive = !this.isMenuActive;
      // console.log('event', e);
    },
    tab(num) {
      this.isMenuActive = true;
      if (num === 1) {
        this.isActive1 = true;
        this.isActive2 = false;
        this.isActive3 = false;
        this.isActive4 = false;
      } else if (num === 2) {
        this.isActive1 = false;
        this.isActive2 = true;
        this.isActive3 = false;
        this.isActive4 = false;
      } else if (num === 3) {
        this.isActive1 = false;
        this.isActive2 = false;
        this.isActive3 = true;
        this.isActive4 = false;
      } else if (num === 4) {
        this.isActive1 = false;
        this.isActive2 = false;
        this.isActive3 = false;
        this.isActive4 = true;
      }
    },
    go(name) {
      alert(1);
      this.$router.push(`${name}`);
    },
  },
  data() {
    return {
      showStatus: show,
      isActive1: isActive11,
      isActive2: isActive21,
      isActive3: isActive31,
      isActive4: isActive41,
      isMenuActive: isMenuA,
      radioArea: ['89以下', '90～119', '120及以上'],
      commonList: ['S(已签约)', 'H(一周内)', 'A(一月内)', 'B(三月内)', 'C(半年内)'],
      areaList: ['89以下', '90～119', '120及以上'],
      checklist002: [],
      checkAreaList: [],
    };
  },
};
</script>

<style lang="less">
@import '~vux/src/styles/1px.less';
@import '../styles/ljbase.less';
@import "../components/utils/_vars.less";
@import "../components/utils/_mixins.less";
@import "../fonts/style.less";

.icon{
  position: relative;
}
.checklist{
    width: 100%;
    font-size:14px;
}
p{
    font-size: 14px !important;
}
.vc-float-button{
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  line-height: 1;
  width: 56px;
  height: 56px;
  background-color: @color;
  border: none;
  appearance: none;
  text-decoration: none;
  margin: 0;
  outline: 0;
  transition-duration: 300ms;
  transform: translate3d(0, 0, 0);
  border-radius: 50%;
  color: #FFF;
  .flex-shrink(0);
  .depth(2);
  &:active {
    .depth(3);
  }
  .active-highlight()
}

.vc-float-button-fixed{
  position: fixed;
  right: 16px;
  bottom: 16px;
  z-index:20;
}

.vc-float-button-carbon{
  background-color: @color;
}

.vc-float-button-red{
  background-color: @red;
}

.vc-float-button-green{
  background-color: @green;
}

.vc-float-button-blue{
  background-color: @blue;
}

.vc-float-button-amber{
  background-color: @amber;
}
</style>
