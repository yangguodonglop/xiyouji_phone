<template>
    <div class="container">
      <navBar :title="title" :right-text="title">
        <van-icon name="search" slot="right" />
      </navBar>
      <div class="ranking">
          <van-tabs v-model="active_ranking" color="#1989fa">
                <van-tab title="矿机排名">
                        <div class="ranking_time">更新于{{rankList.minerIncomeTime}}</div>
                        <div class="ranking_con">
                            <div class="ranking_con_title">
                                <div class="tltle_l">名次</div>
                                <div class="tltle_m">矿机数量</div>
                                <div class="tltle_r">矿友</div>
                            </div>
                            <div class="ranking_item" v-for="(item,index) in rankList.rankListArr" v-bind:key="index">
                                <div class="ranking_item_l">{{item.minerIncomeRank}}</div>
                                <div class="ranking_item_r">{{item.minerIncomeText}}</div>
                                <div class="ranking_item_m">{{item.minerIncomeFriend}}</div>
                            </div>
                        </div>
                </van-tab>
                <van-tab title="储存力排名">
                        <div class="ranking_time">更新于{{rankList.minerIncomeTime}}</div>
                        <div class="ranking_con">
                            <div class="ranking_con_title">
                                <div class="tltle_l">名次</div>
                                <div class="tltle_m">存储力</div>
                                <div class="tltle_r">矿友</div>
                            </div>
                            <div class="ranking_item" v-for="(item,index) in rankList.rankListStorage" v-bind:key="index">
                                <div class="ranking_item_l">{{item.minerIncomeRank}}</div>
                                <div class="ranking_item_r">{{item.minerIncomeText}}</div>
                                <div class="ranking_item_m">{{item.minerIncomeFriend}}</div>
                            </div>
                      </div>
                </van-tab>
            </van-tabs> 
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
import { rankList } from "../../common/js/api.js";

export default {
  data() {
    return {
      title: "矿机排名",
      active: 1,
      active_ranking: 0,
      icon: {
        normal: "//img.yzcdn.cn/icon-normal.png",
        active: "//img.yzcdn.cn/icon-active.png"
      },
      rankList: {}
    };
  },
  mounted: function() {
    //获取矿机排名信息
    let param = new Object();
    param.minerId = "";
    rankList(param)
      .then(response => {
        console.log(response);
        let { data } = response;
        if (data != null) {
          console.log(response.data);
          this.rankList = response.data;
        }
      })
      .catch(error => {
        Toast("网络错误，请重新请求");
      });
  },
  methods: {
    goLink() {
      this.$router.push({ path: "/login" });
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
  .ranking {
    width: 95%;
    height: auto;
    overflow: hidden;
    margin: 0 auto;
    .ranking_title {
      width: 95%;
      height: 0.6rem;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      font-size: 0.34rem;
      font-weight: bold;
      color: #000;
      margin: 0 auto;
    }
    .ranking_time {
      width: 100%;
      height: 0.6rem;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      font-size: 0.28rem;

      color: #000;
    }
    .ranking_con_title {
      width: 95%;
      height: 0.6rem;
      background: #d7d7d7;
      display: flex;
      margin: 0 auto;
      justify-content: space-between;
      align-items: center;
      padding: 0rem 0.1rem;
      margin-top: 0.3rem;
      box-sizing: border-box;
    }
    .ranking_item {
      width: 95%;
      height: 1rem;
      margin: 0 auto;
      border-bottom: 1px solid #999;
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: #999;
      .ranking_item_l {
        width: 0.5rem;
        height: 0.5rem;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #cccccc;
        font-size: 0.26rem;
        color: #fff;
      }
    }
  }
}
</style>
