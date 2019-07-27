<template>
<div class="xy_con">
    <div class="xy_con_text">
        <headers></headers>
        <div class="xy_con_buy">
            <div class="item_l" @click="goIndex()">西柚机</div>
            <div class="item_con">

                <div class="item_r" @click="goParam()">参数</div>
                <div class="item_r active" @click="buying()">购买</div>
            </div>
        </div>

        <div class="xy_banner" id="comment4">
            <div class="xy_banner_item1">
                <div class="item1">西柚机</div>
                <div class="item2">共享经济时代的智能硬盘</div>
                <div class="item3">998元</div>
            </div>
            <div class="xy_banner_item8" id="comment">
                <div class="item_h2">什么是西柚机</div>
                <div class="item_con active">是全球共享经济时代背景诞生的一款智能硬件产品</div>
                <div class="item_con">用户在购买了西柚机后</div>
                <div class="item_con">简单部署后即可共享出闲置网络带宽存储空间</div>
                <div class="item_con">赚取积分奖励，并进行各种价值兑换</div>
            </div>
            <div class="xy_banner_item2">
                <video width="100%" height="725" controls class="my_video" poster="../../assets/images/bg_02_active.png">
                    <source src="../../assets/images/test.mp4" type="video/mp4">
                    <source src="movie.ogg" type="video/ogg">
                </video>
            </div>
            <div class="xy_banner_item3">
                <div class="item_h2">强大的硬件性能</div>

                <div class="item_con active"> 1T存储空间+RK3328</div>
                <div class="item_con">android7.1操作系统</div>
                <div class="item_con">24小时高效的贡献</div>
                <div class="item_con">闲置资源最大化收益率</div>
            </div>
            <div class="xy_banner_item4">
                <div class="item_h2">稳定的收益来源</div>

                <div class="item_con active"> 已达成合作意向企业</div>
                <div class="item_con">直播点播、CDN加速</div>
                <div class="item_con">热点资源分发业务</div>
                <div class="item_con">将提供稳定而持久的收益保障</div>
                <div class="item_con active1"><a href="#" style="font-weight: bold" @click="goIncome()">收益是什么?</a></div>

            </div>
            <div class="xy_banner_item5">
                <div class="item_h2">强大的底层技术支撑</div>

                <div class="item_con active"> 自主研发西柚机分布式存储网络</div>
                <div class="item_con">高可用性、安全私密、高速</div>
                <div class="item_con">实现共享资源</div>
                <div class="item_con">高质量、高效率、无损耗的利用</div>
            </div>
            <div class="xy_banner_item6">
                <div class="item_h2">共享资源、共享未来</div>

                <div class="item_con active"> 基于网络资源共享技术</div>
                <div class="item_con">将闲置宽带及存储共享给企业或个人</div>

            </div>
            <div class="xy_banner_item7" id="comment1">
                <div class="item">
                    <div class="item_h3">手机APP</div>
                    <div class="item_text active">随时随地查看积分收益</div>
                    <div class="item_text">管理西柚机</div>
                    <div class="item_code">
                        <img src="../../assets/images/code.png" alt=""  v-if="iponestatus">
                        <img src="../../assets/images/code_01.png" alt=""  v-if="androidstatus">

                    </div>
                    <div class="item_ios" v-bind:class="{ active22: androidstatus }" @click="changecode()">
                        <div class="item_img" >
                             <img src="../../assets/images/ios-icon1.png" alt="" v-if="androidstatus">
                             <img src="../../assets/images/ios-icon.png" alt=""  v-if="iponestatus">

                        </div>
                        <div   class="p_text">Iphone下载</div>
                    </div>
                    <div class="item_android" v-bind:class="{ active11: iponestatus }"  @click="changecode1()" >
                        <div class="item_img">
                             <img v-if="androidstatus" src="../../assets/images/android-icon1.png" alt="">
                             <img v-if="iponestatus" src="../../assets/images/android-icon.png" alt="">
                        </div>
                        <div class="p_text">Android下载</div>
                    </div>
                </div>
            </div>
        </div>
        <div id="comment3">
            <footers></footers>
        </div>

    </div>
</div>
</template>

<script>
import headers from '../../components/header'
import footers from '../../components/footer'
export default {
    data() {
        return {
            iponestatus:true,
            androidstatus:false
        };
    },
    created: function () {
        // this.$nextTick(() => {
        //     this.getlocal()
        // })
    },
    mounted: function () {
        // let that = this;
        // that.$nextTick(function () {
        //     window.addEventListener('scroll', that.handleScroll)
        // })
        // this.initVideo();
    },
    methods: {
         changecode(){
            this.iponestatus=false
            this.androidstatus=true
        },
          changecode1(){
            this.iponestatus=true
            this.androidstatus=false
        },
        goIncome() {
            this.$router.push({
                path: "/income"
            })
        },
        goParam() {
            this.$router.push({
                path: "/parameter"
            })
        },
        buying() {
            this.$router.push({
                path: "/buying"
            })
        },
        //   getlocal() {
        //     //找到锚点id
        //     let selectId = localStorage.getItem("toId");
        //     let toElement = document.getElementById(selectId);
        //     //如果对应id存在，就跳转
        //     if (selectId) {
        //         toElement.scrollIntoView()
        //     }
        // },

    },
    components: {
        headers: headers,
        footers: footers
    }
};
</script>

<style lang="less" scoped>
.xy_con {
    width: 7.5rem;
    height: auto;
    overflow: auto;
    text-align: center;
    margin:0 auto;
    .xy_con_text {
        width: 100%;
        height: auto;
        margin: 0 auto;
    }

    .xy_con_buy {
        width: 100%;
        height: 0.8rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 0.3rem;
        color: #242424;
        margin:0 auto;

        .item_l {
            margin-left: 0.33rem;
        }

        .item_con {
            display: flex;
            justify-content: flex-start;
            align-items: center;

            //  margin-right: 0.33rem;
            .item_r {
                margin-right: 0.4rem;

                &.active {
                    width: 1.13rem;
                    height: 0.46rem;
                    background: rgba(36, 36, 36, 1);
                    border-radius: 0.23rem;
                    color: #FFFFFF;
                    font-size: 0.3rem;
                    line-height: 0.46rem;

                }
            }
        }

    }

    .xy_banner_item8 {
        width: 100%;
        height: auto;
        overflow: hidden;
        margin-bottom: 0.4rem;

        .item_h2 {
            font-size: 0.46rem;
            font-weight: 500;
            color: rgba(1, 1, 1, 1);
            margin-top: 0.9rem;
        }

        .item_con {
            font-size: 0.26rem;
            font-weight: 500;
            color: rgba(68, 68, 69, 1);
            margin-top: 0.1rem;

            &.active {
                margin-top: 0.6rem;
            }
        }
    }

    .xy_banner_item1 {
        background: url(../../assets/images/bg_01.png) no-repeat center;
        width: 100%;
        height: 8.19rem;
        background-size: 7.5rem 8.19rem;
        overflow: hidden;

        .item1 {
            font-size: 0.72rem;
            font-weight: 500;
            color: rgba(49, 49, 49, 1);
            margin-top: 0.60rem
        }

        .item2 {
            font-size: 0.36rem;
            font-weight: 500;
            color: rgba(95, 95, 95, 1);
            margin-top: 0.30rem;
        }

        .item3 {
            font-size: 0.48rem;
            font-weight: 500;
            color: rgba(0, 0, 0, 1);
            margin-top: 0.2rem;

        }

    }

    .xy_banner_item2 {
        // background: url(../../assets/images/bg_02.png) no-repeat center;
        width: 100%;
        height: 5.03rem;

        // background-size: 7.5rem 5.03rem;
        .my_video {
            width: 100%;
            height: 5.00rem;
        }
    }

    .xy_banner_item3 {
        background: url(../../assets/images/bg_03.png) no-repeat center;
        width: 100%;
        height: 9.31rem;
        background-size: 7.5rem 9.31rem;
        overflow: hidden;

        .item_h2 {
            font-size: 0.46rem;
            font-weight: 500;
            color: rgba(1, 1, 1, 1);
            margin-top: 0.9rem;
        }

        .item_con {
            font-size: 0.26rem;
            font-weight: 500;
            color: rgba(68, 68, 69, 1);
            margin-top: 0.15rem;

            &.active {
                margin-top: 0.6rem;
            }
        }
    }

    .xy_banner_item4 {
        background: url(../../assets/images/bg_04.png) no-repeat center;
        width: 100%;
        height: 9.53rem;
        background-size: 7.5rem 9.51rem;
        overflow: hidden;

        .item_h2 {
            font-size: 0.46rem;
            font-weight: 500;
            color: rgba(1, 1, 1, 1);
            margin-top: 0.6rem;
        }

        .item_con {
            font-size: 0.26rem;
            font-weight: 500;
            color: rgba(68, 68, 69, 1);
            margin-top: 0.15rem;

            &.active {
                margin-top: 0.5rem;
            }

            &.active1 a {
                margin-top: 0.5rem;
                color: rgba(68, 68, 69, 1);
                text-decoration: underline;
            }
        }
    }

    .xy_banner_item5 {
        background: url(../../assets/images/bg_05.png) no-repeat center;
        width: 100%;
        height: 9.35rem;
        background-size: 7.5rem 9.32rem;
        overflow: hidden;

        .item_h2 {
            font-size: 0.46rem;
            font-weight: 500;
            color: rgba(1, 1, 1, 1);
            margin-top: 0.6rem;
        }

        .item_con {
            font-size: 0.26rem;
            font-weight: 500;
            color: rgba(68, 68, 69, 1);
            margin-top: 0.15rem;

            &.active {
                margin-top: 0.5rem;
            }

            &.active1 a {
                margin-top: 0.5rem;
                color: rgba(68, 68, 69, 1);
                text-decoration: underline;
            }
        }
    }

    .xy_banner_item6 {
        background: url(../../assets/images/bg_06.png) no-repeat center;
        width: 100%;
        height: 9.38rem;
        background-size: 7.5rem 9.4rem;
        overflow: hidden;

        .item_h2 {
            font-size: 0.46rem;
            font-weight: 500;
            color: rgba(1, 1, 1, 1);
            margin-top: 0.6rem;
        }

        .item_con {
            font-size: 0.26rem;
            font-weight: 500;
            color: rgba(68, 68, 69, 1);
            margin-top: 0.15rem;

            &.active {
                margin-top: 0.5rem;
            }

            &.active1 a {
                margin-top: 0.5rem;
                color: rgba(68, 68, 69, 1);
                text-decoration: underline;
            }
        }
    }

    .xy_banner_item7 {
        background: url(../../assets/images/bg_07_active.png) no-repeat center;
        width: 7.5rem;
        height: 11.19rem;
        background-size: 7.5rem 11.19rem;
        overflow: hidden;
        display: flex;
        justify-content: flex-start;
        text-align: left;
        margin: 0 auto;

        .item {
            width: 3rem;
            height: auto;
            margin-left: 0.8rem;

            .item_h3 {
                font-size: 0.48rem;
                font-weight: 500;
                color: rgba(49, 49, 49, 1);
                margin-top: 2.4rem;
            }

            .item_text {
                color: #313131;
                font-size: 0.26rem;
                margin-top: 0.1rem;

                &.active {
                    margin-top: 0.4rem;
                }
            }

            .item_ios {
                width: 2.04rem;
                height: 0.49rem;
                border: 1px solid rgba(14, 27, 54, 1);
                border-radius: 0.1rem;
                display: flex;
                justify-content: space-around;
                align-items: center;
                margin-top: 0.3rem;

                .item_img {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }

                img {
                    width: 0.44rem;
                    height: 0.44rem;
                }
            }

            .item_android {
                width: 2.04rem;
                height: 0.49rem;
                border: 1px solid rgba(14, 27, 54, 1);
                border-radius: 0.1rem;
                display: flex;
                justify-content: space-around;
                align-items: center;
                margin-top: 0.3rem;
                

                .item_img {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }

                img {
                    width: 0.44rem;
                    height: 0.44rem;
                }
            }
             .active11{
                            background: #000000;
                             .p_text {
                                color: #ffffff;
                                font-size: 0.26rem;
                            }

                        }
                            .active22{
                            background: #000000;
                             .p_text {
                                color: #ffffff;
                                font-size: 0.26rem;
                            }

                        }

            .item_code {

                margin-top: 0.4rem;

                img {
                    width: 1.47rem;
                    height: 1.47rem;
                }
            }

        }
    }

    // .xy_footer {
    //     width: 100%;
    //     height: 6.4rem;
    //     background: #242424;
    //     flex-direction: column;

    //     .item {
    //         width: 50%;
    //         height: auto;
    //         float: left;
    //         overflow: hidden;
    //         margin-top: 0.7rem;

    //         .item_h2 {
    //             font-size: 0.26rem;
    //             color: #808080;
    //             text-align: left;
    //             padding-left: 1rem;
    //             box-sizing: border-box;
    //         }

    //         .item_con {
    //             font-size: 0.2rem;
    //             color: #F7F7F7;
    //             text-align: left;
    //             padding-left: 1rem;
    //             box-sizing: border-box;
    //             font-weight: 100;
    //             margin-top: 0.1rem;

    //             .kf_button {
    //                 width: 1.87rem;
    //                 height: 0.55rem;
    //                 border: 1px solid rgba(206, 206, 206, 1);
    //                 color: #FFFFFF;
    //                 border-radius: 27px;
    //                 display: flex;
    //                 justify-content: space-around;
    //                 align-items: center;
    //                 cursor: pointer;

    //                 img {
    //                     width: 0.44rem;
    //                     height: 0.44rem;
    //                 }
    //             }
    //         }

    //     }
    // }
}
</style>
