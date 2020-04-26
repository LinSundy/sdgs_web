<template>
    <div class="mainContent">
        <div :class="['inputWrapper',status==='small'&&'smallInputWrapper']">
            <el-input placeholder="输入关键词"
                      v-model="chooseData.search_value"
                      @keyup.enter.native="search"
                      class="input-with-select mainInput">
                <el-button class="selectInput" slot="prepend" @click="showType()">筛选类别
                    <i class="el-icon-arrow-down el-icon--right icon-space" v-if="isShowChooseList"></i>
                    <i class="el-icon-arrow-right el-icon--right icon-space" v-else></i>
                </el-button>
                <el-button class="searchInput" slot="append" icon="el-icon-search" @click="search">搜索</el-button>
            </el-input>
        </div>
        <el-collapse-transition>
            <div class="typeListWrapper" ref="typeList" v-if="isShowChooseList">
                <el-tabs v-model="activeName">
                    <el-tab-pane label="行业类别" name="first">
                        <ul class="typeList">
                            <li :class="[chooseData.industry_type===item.id&&'active']" v-for="item in type" :key="'type'+item.id"
                                @click="handleChoose('type',item)">{{item.name}}
                            </li>
                        </ul>
                    </el-tab-pane>
                    <el-tab-pane label="最低评级" name="second">
                        <ul class="typeList">
                            <li :class="[chooseData.level===item.id && 'active']" v-for="item in level"
                                :key="'level'+item.id"
                                @click="handleChoose('level', item)">
                                {{item.name}}
                            </li>
                        </ul>
                    </el-tab-pane>
                </el-tabs>
            </div>
        </el-collapse-transition>
    </div>
</template>

<script>
    import {LEVEL, TYPE} from "../../utils/enum";

    export default {
        name: 'inputWrapper',
        props: {
          initObj: {
            type: Object,
            default: () => {
              return {
                search_value: '',
                level: 0,
                industry_type: 0
              }
            }
          },
            status: {
                type: String,
                default: 'normal'
            }
        },
        data() {
            return {
                level: LEVEL,
                type: TYPE,
                activeName: 'first',
                isShowChooseList: false,
                chooseData: {
                    search_value: this.initObj.search_value,
                    level: this.initObj.level,
                    industry_type: this.initObj.industry_type
                }
            }
        },
        methods: {
            handleChoose(status, item) {
                if (status === 'type') {
                  this.chooseData.industry_type = item.id
                } else {
                  this.chooseData.level = item.id
                }
            },
            showType() {
                this.isShowChooseList = !this.isShowChooseList
            },
            search() {
                this.$parent.submitSearch(this.chooseData)
                this.isShowChooseList = false
            }
        }
    }
</script>

<style lang="less">
    @import "index.less";
</style>
