<template>
    <div class="container">
      <navBar :title="title" :right-text="title">
        <van-icon name="search" slot="right" />
      </navBar>
      <div class="ranking_con">
                <div class="ranking_con_item">
                    <div class="con_item_l">
                        <div class="item_l_name">+100.00 poc</div>
                        <div class="item_l_No">adress：23SF234G67523FDG</div>
                    </div>
                     <div class="con_item_r">
                        <div class="item_r_btn">2019-03-17</div>
                        <div class="item_r_img" @click="showList()" > 
                            <img src="../../assets/images/evenmore.png">
                        </div>
                    </div>
                  
                </div>
                <div class="ranking_con_item">
                    <div class="con_item_l">
                        <div class="item_l_name">+100.00 poc</div>
                        <div class="item_l_No">adress：23SF234G67523FDG</div>
                    </div>
                     <div class="con_item_r">
                        <div class="item_r_btn">2019-03-17</div>
                        <div class="item_r_img"> 
                            <img src="../../assets/images/evenmore.png">
                        </div>
                    </div>
                </div>
                <div class="ranking_con_item">
                    <div class="con_item_l">
                        <div class="item_l_name">+100.00 poc</div>
                        <div class="item_l_No">adress：23SF234G67523FDG</div>
                    </div>
                     <div class="con_item_r">
                        <div class="item_r_btn">2019-03-17</div>
                        <div class="item_r_img"> 
                            <img src="../../assets/images/evenmore.png">
                        </div>
                    </div>
                </div>
                <div class="ranking_con_item">
                    <div class="con_item_l">
                        <div class="item_l_name">+100.00 poc</div>
                        <div class="item_l_No">adress：23SF234G67523FDG</div>
                    </div>
                     <div class="con_item_r">
                        <div class="item_r_btn">2019-03-17</div>
                        <div class="item_r_img"> 
                            <img src="../../assets/images/evenmore.png">
                        </div>
                    </div>
                </div>
                <div class="ranking_con_item">
                    <div class="con_item_l">
                        <div class="item_l_name">+100.00 poc</div>
                        <div class="item_l_No">adress：23SF234G67523FDG</div>
                    </div>
                     <div class="con_item_r">
                        <div class="item_r_btn">2019-03-17</div>
                        <div class="item_r_img"> 
                            <img src="../../assets/images/evenmore.png">
                        </div>
                    </div>
                </div>
                <div class="ranking_con_item">
                    <div class="con_item_l">
                        <div class="item_l_name">+100.00 poc</div>
                        <div class="item_l_No">adress：23SF234G67523FDG</div>
                    </div>
                     <div class="con_item_r">
                        <div class="item_r_btn">2019-03-17</div>
                        <div class="item_r_img"> 
                            <img src="../../assets/images/evenmore.png">
                        </div>
                    </div>
                </div>
            </div>
        
        <van-tabbar v-model="active">
               <van-tabbar-item icon="home-o" to='management'>矿机管理</van-tabbar-item>
            <van-tabbar-item icon="search" to='minemachine'>我的收益</van-tabbar-item>
            <van-tabbar-item icon="setting-o" to='usercenter'>个人中心</van-tabbar-item>
        </van-tabbar>
        
    </div>
</template>

<script>
import navBar from "../../components/barBarActive";
import { Tabbar, TabbarItem } from "vant";

export default {
  data() {
    return {
      title: "提币记录",
      active: 1,
      icon: {
        normal: "//img.yzcdn.cn/icon-normal.png",
        active: "//img.yzcdn.cn/icon-active.png"
      },
      sum_earnings: null,
      showStatus:false,
    };
  },
  mounted: function() {},
  methods: {
    goLink() {
      this.$router.push({ path: "/login" });
    },
    showList(){
        this.showStatus=!this.showStatus
    }
  },
  components: {
    navBar: navBar
  }
};
</script>
 
<style lang="less" scoped >
.container {
  width: 100%;
  height: 100%;
  margin: 0 auto;
  overflow: hidden;
  background: #f2f2f2;
  .ranking_con {
    width: 100%;
    height: auto;
    overflow: hidden;
    .ranking_con_item {
      width: 100%;
      height: 1rem;
      display: flex;
      padding: 0rem 0.2rem;
      box-sizing: border-box;
      justify-content: space-between;
      align-items: center;
      position: relative;
      font-size: 0.28rem;
      &:hover {
        background: #cccccc;
      }
    
    }
    .con_item_l {
      display: flex;
      flex-direction: column;
      .item_l_name {
        text-align: left;
      }
    }
    .con_item_r {
      display: flex;
      justify-content: flex-start;
      .item_r_btn {
        width: auto;
        height: 0.4rem;
     
 
        display: flex;
        color: #000;

        align-items: center;

        justify-content: center;
      }
      .item_r_img {
        width: 0.5rem;
        height: 0.4rem;

        display: flex;

        align-items: center;

        justify-content: center;
        img {
          width: 0.12rem;
          height: 0.21rem;
        }
      }
    }
  }
}
</style>
