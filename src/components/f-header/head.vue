<template>
    <header class="head">
        <div class="left">
            <a href="javascript:window.history.go(-1);" class="icon_go_back post_ulog" ></a>                      
            <a class="city_switch" href="/city/">
                <span class="city-name">上海</span><i class="icon_city_switch"></i>
            </a>          
        </div>
        <a class="logo" href="/sh/loupan/fang/">全家</a>
        <div class="right">
            <a href="/my/index/" class="user-center icon_user"></a>
        </div>
    </header>
</template>

<script>
export default {
  name: 'f-header',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
    };
  },
};
</script>

<style scoped>
.head {
    position: relative;
    background-color: #f1f1f1;
    color: #222;
    display: flex;
    -webkit-justify-content: center;
    justify-content: center;
    padding: 0 10px;
    height: 46px; 
    color:#3cc51f;
}
.head, .head .left {
    display: -webkit-flex;
    color:#3cc51f;
}
.head {
    border-bottom: 1px solid #e5e5e5;
}
.head .left {
    -webkit-flex-grow: 1;
    flex-grow: 1;
    display: flex;
    -webkit-justify-content: flex-start;
    justify-content: flex-start;
    -webkit-align-items: center;
    align-items: center;
}
.icon_go_back {
    background-position-y: -16.8125rem;
    -webkit-transform: scale(1.4);
    transform: scale(1.4);
}
.icon_go_back, .icon_user {
    width: 1.0625rem;
    height: 1.0625rem;
}
.icon_city_switch, .icon_delete_history, .icon_drop_btn, .icon_go_back, .icon_history, .icon_info, .icon_search, .icon_triangle_down, .icon_up_btn {
    background-image: url(../../assets/icons.svg);
    background-repeat: no-repeat;
    background-size: 100%;
}

a, img {
    -webkit-touch-callout: none;
}
.head .city_switch {
    margin-left: 5px;
}
.icon_city_switch {
    height: .5625rem;
    width: .5625rem;
    background-position-y: -.5rem;
    display: inline-block;
}
.head .city_switch .city-name {
    font-size: 14px;
    margin-right: 5px;
    color:#3cc51f;
}
.head .logo {
    text-align: center;
    display: block;
    position: absolute;
    width:100px;
    height: 40px;
    line-height: 40px;
    /* left: 50%; */
    padding: 3px 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color:#3cc51f;
}
.head .right {
    -webkit-flex-grow: 1;
    flex-grow: 1;
    display: -webkit-flex;
    display: flex;
    -webkit-justify-content: flex-end;
    justify-content: flex-end;
    -webkit-align-items: center;
    align-items: center;
    color:#3cc51f;
}
.icon_user {
    background: url(../../assets/icons.svg) 100% 100% no-repeat;
    background-size: 100%;
    -webkit-transform: scale(1.5);
    transform: scale(1.5);
}
.icon_go_back, .icon_user {
    width: 1.0625rem;
    height: 1.0625rem;
}
</style>
