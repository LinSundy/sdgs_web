<template>
    <div class="companyInfo" v-loading="!infoData">
        <div v-if="infoData">
            <div class="topWrapper">
                <div class="shadeBox">
                    <router-link to="/index"><img class="logo" src="../../assets/logo.png" alt=""></router-link>
                    <div class="lineWrapper"><span class="line"></span><span class="space"></span> <span
                            class="line"></span>
                    </div>
                    <p>以实现优质服务承诺为目的&nbsp;&nbsp;全面提升服务质量与水平</p>
                </div>
            </div>
            <div class="cardWrapper">
                <div class="cardBox">
                    <div class="bg"></div>
                    <div class="cardContent">
                        <a target="_blank" :href="infoData.url">{{infoData.name}}</a>
                        <div class="lineSpace"></div>
                        <div class="card">
                            <div class="leftCard">
                                <div class="shadeBox">
                                    <p class="cashNum"
                                       v-if="infoData.register_capital&&infoData.register_capital.length">
                                        {{infoData.register_capital.replace(/[^0-9||.||,]/ig,'')}}<span
                                            class="tip">{{infoData.register_capital.replace(/[0-9||.||,]/ig,'')}}</span>
                                    </p>
                                    <p class="tip" v-else>暂无</p>
                                    <p class="cashText">注册资本金</p>
                                    <img src="../../assets/cash.png">
                                </div>
                            </div>
                            <div class="rightCard">
                                <p><span class="infoTitle">联系人:</span><span class="infoContent">{{infoData.contact_person?infoData.contact_person:'暂无'}}</span>
                                </p>
                                <p>
                                    <span class="infoTitle">联系方式:</span><span class="infoContent">{{infoData.contacts?infoData.contacts:'暂无'}}</span>
                                    <span class="phoneSpe" v-if="infoData.contacts1">{{infoData.contacts1}}</span>
                                </p>
                                <p><a class="info-url" target="_blank" :href="infoData.url"><span class="infoTitle"
                                                                                                  :title="infoData.url">公司网址:</span><span
                                        class="infoContent webUrl">{{infoData.url?infoData.url:'暂无'}}</span></a></p>
                            </div>
                        </div>
                        <div class="project" v-if="infoData.records&&infoData.records.length">
                            <p class="title">已合作项目<span class="textBg"></span></p>
                            <ul>
                                <li v-for="(item,index) in infoData.records" :key="item.id" :title="item.content"
                                    v-if="index<4">
                                    {{item.content}}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="companyDesc">
                <h2>公司简介</h2>
                <div class="lineSpace"></div>
                <div class="descContent">{{infoData.info}}</div>
                <!-- <p>公司地址:<span>6666666</span></p>-->
            </div>
            <div class="developWrapper"
                 v-if="(infoData.recent_situation&&infoData.recent_situation!='')&&(infoData.credentials&&infoData.credentials!='')">
                <div class="contentWrapper">
                    <div class="item" v-if="infoData.recent_situation&&infoData.recent_situation!=''">
                        <img src="../../assets/left_desc.png">
                        <div class="itemCon">
                            <h2>近三年业绩情况</h2>
                            <div class="lineSpace"></div>
                            <div class="itemDesc">{{infoData.recent_situation}}</div>
                        </div>
                    </div>
                    <div class="item" v-if="infoData.credentials&&infoData.credentials!=''">
                        <div class="itemCon">
                            <h2>资质情况</h2>
                            <div class="lineSpace"></div>
                            <div class="itemDesc">{{infoData.credentials}}</div>
                        </div>
                        <img src="../../assets/right_desc.png">
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
    import {getCompanyInfo} from '../../api/common';

    export default {
        name: 'companyInfo',
        data() {
            return {
                id: this.$route.query.id || '',
                infoData: null
            }
        },
        methods: {
            getData() {
                getCompanyInfo({id: this.id}).then(res => {
                    this.infoData = res.data
                })
            }
        },
        mounted() {
            console.log(this.$route.query, 'id')
            this.getData()
        }
    }
</script>

<style scoped lang="less">
    @import "./index.less";
</style>
