<template>
<div class="xy_con">
    <div class="xy_con_text">
        <headers></headers>
        <div class="problem">
            <div class="income_banner">
                <img src="../../assets/images/income_01.png" alt="">
            </div>
            <div class="problem_con" id="problem_active1">
                <div class="problem_title">常见问题</div>
                <div class="problem_list">
                    <van-collapse v-model="activeNames">
                        <van-collapse-item title="一个西柚机可以多人通过APP共享使用吗？" name="1">目前一个西柚机同一时间只能被一个用户绑定使用，但可以通过解绑再绑定给其他用户使用</van-collapse-item>
                        <van-collapse-item title="更换了手机号如何更换我的西柚账号？" name="2">在APP的个人信息设置中可进行手机号更换，更换手机号后，使用新手机号登录即可查看原手机的绑定的西柚机相关信息</van-collapse-item>
                        <van-collapse-item title="一个账号可以在多个手机上同时登录吗" name="3">为了保障用户的登录安全，我们限定了同一时间只能在一个手机设备上进行APP的操作</van-collapse-item>
                        <van-collapse-item title="西柚机需要外接硬盘吗" name="4">西柚机内部自带硬盘，不需要外接硬盘</van-collapse-item>
                    </van-collapse>
                </div>
            </div>
            <div class="problem_con1" id="problem_active2">
                <div class="problem_title">意见反馈</div>
                <div class="problem_sumit">
                    <div class="item_input">
                        <input type="text" v-model="userName" placeholder="姓名">
                    </div>

                    <div class="item_input">
                        <input type="text" v-model="userTel" placeholder="联系方式">
                    </div>
                    <div class="item_input">
                        <textarea placeholder="问题描述" v-model="userquestion"></textarea>
                    </div>
                    <div class="item_input" style="margin-top:0.1rem;">
                        <p>若需要得到回复，请填写联络方式</p>
                    </div>
                    <div class="item_input" style="margin-top:0.1rem;">
                        <div class="item_button" @click="onSumit()">提交</div>
                    </div>
                </div>

            </div>
        </div>

        <div class="xy_footer">
            <div class="item">
                <div class="item_h2">购买方式</div>
                <div class="item_con" @click="golink3()">点击购买</div>

            </div>
            <div class="item">
                <div class="item_h2">常见问题</div>
                <div class="item_con" @click="golink4()">常见问题</div>
                <div class="item_con" @click="golink5()">意见反馈</div>
            </div>
            <div class="item">
                <div class="item_h2">联系我们</div>
                <div class="item_con">在线QQ</div>
                <div class="item_con">231155479</div>
                <div class="item_con">微信</div>
                <div class="item_con">12345667892</div>
                <div class="item_con">客服电话</div>
                <div class="item_con">01234567(9:00-18:00)</div>
            </div>
            <div class="item">
                <div class="item_h2">关于我们</div>
                <div class="item_con" @click="golink1()">隐私声明</div>
                <div class="item_con" @click="golink2()">用户协议</div>
                <div class="item_con">
                    <div class="kf_button">
                        <div>在线客服</div>
                        <img src="../../assets/images/service_icon.png" alt="">

                    </div>
                </div>

            </div>
        </div>

    </div>
</div>
</template>

<script>
import {
    Toast
} from 'vant';

import headers from '../../components/header'
import footers from '../../components/footer'
import {
    savequestion,

} from '../../common/js/api.js'
export default {
    data() {
        return {
            activeNames: [],
            userName: "",
            userTel: "",
            userquestion: ""
        };
    },
    created: function () {
        this.$nextTick(() => {
            this.getlocal()
        })
    },
    mounted: function () {
        let that = this;
        that.$nextTick(function () {
            window.addEventListener('scroll', that.handleScroll)
        })
        // this.initVideo();
    },
    methods: {
        onSumit() {
            let param = new Object()
            param.login_token = localStorage.getItem('userToken')
            if (param.login_token == null || param.login_token == "") {
                Toast('请登录后在提交意见反馈')

                return false
            }
            param.user_tel_num = this.userTel
            param.quest_cotent = this.userquestion
            param.user_name = this.userName
            //param.login_type = 2

            savequestion(param).then(res => {
                if (res.status != 0) {
                    Toast('网络错误，请重新提交')

                } else {
                    Toast('提交成功')

                }

            }).catch(error => {

            })

        },
        getlocal() {
            //找到锚点id
            let selectId = localStorage.getItem("toId");
            let toElement = document.getElementById(selectId);
            //如果对应id存在，就跳转
            if (selectId) {
                toElement.scrollIntoView()
            }
        },
        golink4() {
            const returnEle = document.querySelector("#problem_active1");
            if (!!returnEle) {
                returnEle.scrollIntoView(true);
            }

        },
        golink5() {
            const returnEle = document.querySelector("#problem_active2");
            if (!!returnEle) {
                returnEle.scrollIntoView(true);
            }

        },
        golink1() {
            this.$router.push({
                path: "/privacy"
            })
        },
        golink2() {
            this.$router.push({
                path: "/protocol"
            })
        },
        golink3() {
            this.$router.push({
                path: "/buying"
            })
        },

    },
    components: {
        headers: headers,
        footers: footers
    }

};
</script>

<style lang="less" scoped>
.van-cell {
    font-size: 0.24rem;
}

.problem {
    width: 7.5rem;
    height: auto;
    margin: 0 auto;

    .income_banner {
        img {
            width: 7.5rem;
            height: 4.23rem;
        }
    }

    .problem_con {
        .problem_title {
            color: #000000;
            font-size: 0.36rem;
            width: 6rem;
            margin: 0.5rem auto;
        }
    }

    .problem_list {
        margin-bottom: 0.5rem;
        text-align: left;
    }

    .problem_con1 {
        width: 7.5rem;
        height: auto;
        background: #F9F9F9;
        overflow: hidden;

        .problem_title {
            color: #000000;
            font-size: 0.36rem;
            width: 6rem;
            margin: 0.5rem auto;
        }

        .problem_sumit {
            width: 6.5rem;
            height: auto;
            overflow: hidden;
            margin: 0rem auto;
            margin-top: 0.3rem;

            .item_input {
                width: 6.5rem;
                height: auto;
                margin-top: 0.3rem;

                p {
                    color: #808080;
                    font-size: 0.12rem;
                }

                input {
                    width: 6.40rem;
                    height: 0.55rem;
                    background: rgba(255, 255, 255, 1);
                    border: 1px solid #6D6D6D;
                    border-radius: 0.05rem;
                    text-indent: 0.2rem;
                }

                textarea {
                    width: 6.32rem;
                    height: 1.55rem;
                    background: rgba(255, 255, 255, 1);
                    border: 1px solid #6D6D6D;
                    border-radius: 0.05rem;
                    text-indent: 0.1rem;
                    outline: none;
                }

                .item_button {
                    width: 2.27rem;
                    height: 0.70rem;
                    background: rgba(36, 36, 36, 1);
                    border-radius: 0.35rem;
                    font-size: 0.26rem;
                    color: #ffffff;
                    margin: 0.5rem auto;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
            }
        }
    }
}

.xy_footer {
    width: 7.5rem;
    height: 6.4rem;
    background: #242424;
    flex-direction: column;
    margin: 0 auto;

    .item {
        width: 50%;
        height: auto;
        float: left;
        overflow: hidden;
        margin-top: 0.7rem;

        .item_h2 {
            font-size: 0.26rem;
            color: #808080;
            text-align: left;
            padding-left: 1rem;
            box-sizing: border-box;
        }

        .item_con {
            font-size: 0.2rem;
            color: #F7F7F7;
            text-align: left;
            padding-left: 1rem;
            box-sizing: border-box;
            font-weight: 100;
            margin-top: 0.1rem;

            .kf_button {
                width: 1.87rem;
                height: 0.55rem;
                border: 1px solid rgba(206, 206, 206, 1);
                color: #FFFFFF;
                border-radius: 27px;
                display: flex;
                justify-content: space-around;
                align-items: center;
                cursor: pointer;

                img {
                    width: 0.44rem;
                    height: 0.44rem;
                }
            }
        }

    }
}
</style>
