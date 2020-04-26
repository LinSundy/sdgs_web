<template>
    <div class="homeWrapper">
        <div class="logo"></div>
        <div class="rightImg"></div>
        <div class="desc">
            <div class="textWrapper">
                <h1>商务合作典范</h1>
                <div class="bgText"></div>
            </div>
            <p class="textWrapper">以实现优质服务承诺为目的</p>
            <p class="textWrapper">全面提升服务质量与水平</p>
        </div>
        <div class="inputBox" ref="inputBox">
            <inputWrapper status="normal"></inputWrapper>
        </div>
    </div>
</template>

<script>
    import inputWrapper from '../../components/InputWrapper/index'
    export default {
        name: 'index',
        components: {
            inputWrapper
        },
        data() {
            return {}
        },
        methods: {
            submitSearch(params) {
                this.$router.push({
                    name: 'company_list',
                    params
                })
            }
        }
    }
</script>

<style scoped lang="less">
    @import "index.less";
</style>
