<template>
    <div v-loading="isLoading">
        <div class="listWrapper" v-if="listData">
            <div class="topWrapper">
                <div class="shadeBox">
                    <router-link to="/index" class="logo"></router-link>
                    <div class="inputBox">
                        <inputWrapper v-if="chooseData" :initObj="chooseData" status="small"></inputWrapper>
                    </div>
                </div>
            </div>
            <div class="listContent" v-if="listData && listData.companies.length">
                <ul>
                    <li class="listItem" v-for="item in listData.companies" :key="item.id">
                        <div class="contentItem">
                            <div @click="toInfo(item)">
                                <h2>{{item.name}}</h2>
                                <div class="space"></div>
                                <div class="desc">{{item.info}}</div>
                                <div class="info">
                                    <p><span class="infoTitle">联系人:</span><span class="infoContent">{{item.contact_person}}</span>
                                    </p>
                                    <p>
                                        <span class="infoTitle">联系方式:</span>
                                        <span class="infoContent">{{item.contacts}}</span>
                                        <span class="infoContent" v-if="item.contacts1">{{item.contacts1}}</span>
                                    </p>
                                    <p>
                                        <span class="infoTitle"></span>
                                        <span class="infoContent webUrl">公司网址: {{item.url}}</span>
                                    </p>
                                </div>
                                <div class="footerBtn">
                                    <div class="checkBtn">
                                        <i class="el-icon-arrow-right"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <p class="noListData" v-else>暂无数据</p>
            <div class="pageWrapper" v-if="listData && listData.companies.length > 1">
                <el-pagination
                        @current-change="changePage"
                        background
                        prev-text="上一页"
                        next-text="下一页"
                        :current-page="nowNum"
                        layout="prev, pager, next"
                        :page-count="listData.paginate.pages">
                </el-pagination>
            </div>
        </div>
    </div>
</template>

<script>
    import inputWrapper from '@/components/InputWrapper/index'
    import {getCompanyList} from '../../api/common';

    export default {
        name: 'CompanyList',
        components: {
            inputWrapper
        },
        data() {
            return {
                nowNum: 1,
                chooseData: {
                    search_value: '',
                    level: 0,
                    industry_type: 0,
                    pageSize: 9,
                    pageNum: 1
                },
                listData: null,
                isLoading: true
            }
        },
        methods: {
            openNewTab(to) {
                const routeData = this.$router.resolve(to)
                window.open(routeData.href, '_blank')
            },
            submitSearch(params) {
                const {search_value, level, industry_type} = params;
                this.chooseData.pageNum = 1
                this.chooseData.search_value = search_value
                this.chooseData.level = level
                this.chooseData.industry_type = industry_type
                this.getData()
            },
            toInfo(item) {
                this.openNewTab({
                    name: 'company_info',
                    query: {
                        id: item.id
                    }
                })
            },
            getData() {
                this.isLoading = true
                let param = {
                    'data': this.chooseData
                }
                getCompanyList(param).then(res => {
                    this.chooseData.pageNum = res.data.paginate.page
                    this.listData = res.data
                    this.companies = res.data.companies
                }).catch(() => {
                }).finally(() => {
                    this.isLoading = false
                })
            },
            changePage(n) {
                this.chooseData.pageNum = n
                this.getData()
            }
        },
        mounted() {
            console.log(typeof this.$route.params.level, 'type')
            this.chooseData.level = this.$route.params.level || 0;
            this.chooseData.industry_type = this.$route.params.industry_type || 0;
            console.log(this.chooseData.industry_type, '行业类别')
            this.chooseData.search_value = this.$route.params.search_value || ''
            this.getData()
        }
    }
</script>

<style scoped lang="less">
    @import "index.less";
</style>
