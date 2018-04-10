
<template>
    <header class="header header_white">
        <div class="flexbox left">
            <a href="javascript:history.back();" class="header_back"></a>
            <a href="/city/" class="city_wrap">
                <span class="switch_city"><em class="city">上海</em><i class="icon_pull"></i></span>
            </a>
        </div>
        <a href="/sh/" class="logo_wrap center"><span class="logo">链家网</span></a>
        <a href="/my/index/" class="my right"><i class="icon_user"></i></a>
    </header>
</template>

<style scoped>
.header {
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    width: 100%;
    height: 3.125rem;
    padding: 0 1.1875rem 0 1.25rem;
    text-align: left;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    justify-content: space-between;
    background-color: #fff;
}
</style>
