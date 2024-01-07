<template>
  <div class="index-swiper">
    <div
      class="swiper-content"
      v-for="(item, index) in data"
      :key="index"
      :class="isActive === index + 1 ? 'active' : ''"
    >
      <div class="swiper-content-left">
        <p class="left-title-h1">{{ item.title1 }}</p>
        <p class="left-title-h2">{{ item.title2 }}</p>
        <p class="left-desc">{{ item.desc }}</p>
        <p class="left-info">
          {{ item.info }}
        </p>
        <div class="left-btns">
          <div class="btns-btn1">
            <a target="_blank" :href="item.bnt1Url">{{ item.btn1 }}</a>
          </div>
          <div class="btns-btn2">
            <a target="_blank" :href="item.bnt2Url">{{ item.btn2 }}</a>
            <svg class="icon icon-img" aria-hidden="true">
              <use xlink:href="#icon-youjiantou"></use>
            </svg>
          </div>
          <div class="btns-btn3">
            <a target="_blank" :href="item.bnt3Url">{{ item.btn3 }}</a>
          </div>
        </div>
      </div>
      <div class="swiper-content-right">
        <img :src="item.imgUrl" alt="" />
      </div>
    </div>
    <div class="swiper-pages">
      <ul>
        <li
          v-for="item in data.length"
          :key="item"
          @click="clickSwiperPage(item)"
          :class="isActive === item ? 'active' : ''"
        ></li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import lyqImg from "@/static/lyq.png";
import ykltImg from "@/static/yklt.png";
let isActive = ref(1);
const data = [
  {
    title1: "留言墙",
    title2: "等你来留言",
    desc: "很多事情值得记录，当然也值得回味。",
    info: "如您对这个应用感兴趣，欢迎下载使用。当然对于需要查看设计稿和下载切图的同学，点击下方对应入口查阅。详细视频请访问b站。",
    btn1: "下载应用",
    btn2: "访问设计稿",
    btn3: "b站地址",
    bnt1Url: "https://www.baidu.com",
    bnt2Url: "https://www.baidu.com",
    bnt3Url: "https://www.baidu.com",
    imgUrl: lyqImg,
  },
  {
    title1: "留言墙2",
    title2: "等你来留言2",
    desc: "很多事情值得记录，当然也值得回味。2",
    info: "如您对这个应用感兴趣，欢迎下载使用。当然对于需要查看设计稿和下载切图的同学，点击下方对应入口查阅。详细视频请访问b站。2",
    btn1: "下载应用",
    btn2: "访问设计稿",
    btn3: "b站地址",
    bnt1Url: "https://www.baidu.com",
    bnt2Url: "https://www.baidu.com",
    bnt3Url: "https://www.baidu.com",
    imgUrl: lyqImg,
  },
  {
    title1: " vue+node.js ",
    title2: " 0到1实现即时通讯聊天室",
    desc: " 单聊、群聊 ",
    info: " 如您对这个应用感兴趣，欢迎下载使用。当然对于需要查看设计稿和下载切图的同学，点击下方对应入口查阅。详细视频请访问b站。 ",
    btn1: "下载应用",
    btn2: "访问设计稿",
    btn3: "b站地址",
    bnt1Url: "https://www.baidu.com",
    bnt2Url: "https://www.baidu.com",
    bnt3Url: "https://www.baidu.com",
    imgUrl: ykltImg,
  },
];
onMounted(() => {
  setInterval(() => {
    isActive.value = isActive.value === data.length ? 1 : isActive.value + 1;
  }, 5000);
});

const clickSwiperPage = (item: number) => {
  isActive.value = item;
};
</script>

<style lang="scss" scoped>
.index-swiper {
  height: 100%;
  width: 100%;

  .swiper-content {
    height: 100%;
    display: none;
    border-radius: 20px;
    overflow: hidden;
    background: var(--el-yike-bgColorTop);
    transition: all 0.3s;

    .swiper-content-left {
      flex: 1;
      padding: 40px 30px;

      .left-title-h1,
      .left-title-h2 {
        font-size: 36px;
        font-weight: 700;
        color: var(--el-yike-fontColorTop, #1f1d2b);
        transition: all 0.3s;
      }

      .left-desc {
        padding-top: 12px;
        max-width: 420px;
        font-size: 16px;
        color: var(--el-yike-fontColorBase, #3b3948);
        line-height: 1.8;
        transition: all 0.3s;
      }

      .left-info {
        padding-top: 40px;
        max-width: 480px;
        color: var(--el-yike-fontColorBottom, #9195a1);
        line-height: 2;
        transition: all 0.3s;
      }
      .left-btns {
        display: flex;
        margin-top: 100px;

        .btns-btn1 {
          background-image: linear-gradient(90deg, #f3ccff 1%, #c1eeff);
          height: 40px;
          width: 120px;
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 24px;
          width: 108px;
          height: 48px;
          font-weight: 700;
          cursor: pointer;
          margin-right: 20px;

          a {
            text-decoration: none;
            color: var(--el-yike-fontColorTop, #1f1d2b);
          }
        }

        .btns-btn2 {
          display: flex;
          justify-content: space-around;
          align-items: center;
          background: #3b73f0;
          border-radius: 24px;
          width: 140px;
          height: 48px;
          font-weight: 700;
          cursor: pointer;
          margin-right: 20px;
          padding: 0 10px;
          transition: all 0.3s;
          a {
            text-decoration: none;
            color: #fff;
          }
          .icon-img {
            width: 25px;
            height: 25px;
            color: var(--el-yike-bgColorTop);
          }
        }

        .btns-btn3 {
          display: flex;
          justify-content: space-around;
          align-items: center;
          line-height: 48px;
          text-decoration: none;
          border-radius: 24px;
          width: 70px;
          height: 48px;
          font-weight: 700;
          cursor: pointer;
          padding: 0 10px;
          transition: all 0.3s;
          a {
            text-decoration: none;
            color: #3b73f0;
          }
        }
      }
    }
    .swiper-content-right {
      flex: 1;
      img {
        height: 100%;
        width: 100%;
      }
    }

    @media screen and (max-width: 900px) {
      .swiper-content-right {
        display: none;
      }
    }
  }

  .swiper-content.active {
    display: flex;
    animation: swing_skew_1 1s ease;
    transform-origin: 0% 100%;
    -webkit-animation: swing_skew_1 1s ease;
    -webkit-transform-origin: 0% 100%;
  }
  @keyframes swing_skew_1 {
    0% {
      opacity: 0;
      -webkit-transform: translateX(400px) skew(-45deg);
    }
    30% {
      opacity: 1;
      -webkit-transform: translateX(0) skew(8deg);
    }
    50% {
      -webkit-transform: translateX(0) skew(-3deg);
    }
    70% {
      -webkit-transform: translateX(0) skew(1deg);
    }
  }
  @-webkit-keyframes swing_skew_1 {
    0% {
      opacity: 0;
      -webkit-transform: translateX(400px) skew(-45deg);
    }
    30% {
      opacity: 1;
      -webkit-transform: translateX(0) skew(8deg);
    }
    50% {
      -webkit-transform: translateX(0) skew(-3deg);
    }
    70% {
      -webkit-transform: translateX(0) skew(1deg);
    }
  }

  .swiper-pages {
    display: flex;
    justify-content: end;
    margin-top: 10px;
    ul {
      display: flex;
      li {
        display: block;
        margin: 0 4px;
        background: var(--el-yike-fontColorBottom);
        width: 16px;
        height: 8px;
        border-radius: 4px;
        transition: all 0.3s;
        cursor: pointer;
      }

      li.active {
        background: #3b73f0;
        width: 32px;
      }
    }
  }
}
</style>