<template>
  <div class="ffui-panel ffui-panel_access">
    <div class="ffui-panel__hd" v-if="header" @click="onClickHeader" v-html="header">
      <slot name="header"></slot>
    </div>
    <div class="ffui-panel__bd">
      <slot name="body">
        <!--type==='1'-->
        <template v-if="type === '1'">
          <a :href="getUrl(item.url)" v-for="item in list" :key="item" @click.prevent="onItemClick(item)" class="ffui-media-box ffui-media-box_appmsg">
            <div class="ffui-media-box__hd" v-if="item.src">
              <img class="ffui-media-box__thumb" :src="item.src" @error="onImgError(item, $event)" alt="">
            </div>
            <div class="ffui-media-box__bd">
              <h4 class="ffui-media-box__title" v-html="item.title"></h4>
              <p class="ffui-media-box__desc" v-html="item.desc"></p>
            </div>
          </a>
        </template>      
      </slot>
    </div>
    <div class="ffui-panel__ft">
      <a
        class="ffui-cell ffui-cell_access ffui-cell_link"
        :href="getUrl(footer.url)"
        v-if="footer && footer.title && type !== '3'"
        @click.prevent="onClickFooter">
        <div class="ffui-cell__bd" v-html="footer.title"></div>
      </a>
    </div>
  </div>
</template>
