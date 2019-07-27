<template>
    <div>
        
        <div class="xy_footer">
            <div class="item">
                <div class="item_h2">购买方式</div>
                <div class="item_con" @click="golink3()">点击购买</div>

            </div>
            <div class="item">
                <div class="item_h2">常见问题</div>
                <div class="item_con"  @click="goto('problem','problem_active1')">常见问题</div>
                <div class="item_con" @click="goto('problem','problem_active2')">意见反馈</div>
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
                        <img src="../assets/images/service_icon.png" alt="">

                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{

        }
    },
    mounted:function(){

    },
    methods:{
        golink1(){
            this.$router.push({
                path:"/privacy"
            })
        },
         golink2(){
            this.$router.push({
                path:"/protocol"
            })
        },
           golink3(){
            this.$router.push({
                path:"/buying"
            })
        },
         goto(page, selectId) {
            var path = page;
            var selectId = selectId;
            localStorage.setItem("toId", selectId);
            this.$router.push({
                path: path
            })
        },


    }

}
</script>

<style lang="less">
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
