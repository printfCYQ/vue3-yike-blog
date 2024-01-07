<template>
  <div class="index-page">
    <div class="index-swiper">
      <IndexSwiper></IndexSwiper>
    </div>
    <div class="index-data">
      <div class="index-data-title">模块数据</div>
      <div class="index-data-content">
        <div class="content-left">
          <div class="content-left-total-value">12345</div>
          <div class="content-left-total-label">总访问量</div>
          <div class="content-left-today-value">78</div>
          <div class="content-left-today-label">今日访问量</div>
          <div class="content-left-icons">
            <div class="icons-item">
              <img src="../static/images/wechat.png" alt="" />
              <svg class="icon icon-img" aria-hidden="true">
                <use xlink:href="#icon-weixin"></use>
              </svg>
            </div>
            <div class="icons-item">
              <img src="../static/images/qq.png" alt="" />
              <svg class="icon icon-img" aria-hidden="true">
                <use xlink:href="#icon-QQ"></use>
              </svg>
            </div>
            <a
              class="icons-item"
              target="_blank"
              href="https://space.bilibili.com/35193217?spm_id_from=333.1007.0.0"
            >
              <svg class="icon icon-img" aria-hidden="true">
                <use xlink:href="#icon-bilibili-line"></use>
              </svg>
            </a>
          </div>
        </div>
        <div class="content-right">
          <div
            class="content-right-item"
            v-for="(item, index) in itemList"
            :key="index"
          >
            <div class="item-top">
              <div class="item-top-icon">
                <svg class="icon icon-img" aria-hidden="true">
                  <use :xlink:href="item.icon"></use>
                </svg>
              </div>
              <div class="item-top-value">{{ item.num }}</div>
            </div>
            <div class="item-title">{{ item.title }}</div>
            <div class="item-desc">{{ item.desc }}</div>
            <div class="item-bottom" @click="handleClick(item)">
              <svg class="icon icon-img" aria-hidden="true">
                <use xlink:href="#icon-youjiantou"></use>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import IndexSwiper from "@/components/IndexSwiper.vue";
import { useRouter } from "vue-router";
import { mainStore } from "../store/index";

const router = useRouter();
const store = mainStore();

const itemList = [
  {
    icon: "#icon-template",
    path: "/share",
    num: 12,
    title: "个人分享",
    desc: "我的日常记录，平时所想、记录旅游、摄影…",
  },
  {
    icon: "#icon-product",
    path: "/product",
    num: 35,
    title: "项目&文件",
    desc: "设计及开发项目总结，不限于开发完成的项目，包括一些产品概念...",
  },
  {
    icon: "#icon-integral",
    path: "/technology",
    num: 78,
    title: "技术交流",
    desc: "小白在开发过程中或多或少会遇到并解决一些问题，站在设计的角度去看开发问题。",
  },
];

const handleClick = (item: any) => {
  store.setPath(item.path);
  router.push({ path: item.path });
};
</script>

<style lang="scss" scoped>
.index-page {
  .index-swiper {
    height: 460px;
  }
  .index-data {
    margin-top: 60px;

    .index-data-title {
      font-size: 24px;
      font-weight: 700;
      padding-bottom: 30px;
      transition: all 0.3s;
      color: var(--el-yike-fontColorTop);
    }

    .index-data-content {
      height: 300px;
      display: flex;

      .content-left {
        height: 100%;
        position: relative;
        flex: 1;
        .content-left-total-value {
          font-size: 48px;
          font-weight: 700;
          line-height: 1.4;
          color: var(--el-yike-fontColorTop);
          transition: all 0.3s;
        }
        .content-left-total-label {
          color: var(--el-yike-fontColorBase);
          padding-bottom: 20px;
          transition: all 0.3s;
        }
        .content-left-today-value {
          font-size: 48px;
          font-weight: 700;
          line-height: 1.4;
          color: var(--el-yike-fontColorTop);
          transition: all 0.3s;
        }
        .content-left-today-label {
          color: var(--el-yike-fontColorBase);
          padding-bottom: 20px;
          transition: all 0.3s;
        }
        .content-left-icons {
          display: flex;
          position: absolute;
          bottom: 0;
          .icons-item {
            width: 32px;
            height: 32px;
            margin-right: 20px;
            border: 1px solid var(--el-yike-bgColorBottom);
            border-radius: 10px;
            display: flex;
            justify-content: center;
            align-items: center;
            transition: all 0.3s;
            cursor: pointer;
            .icon-img {
              width: 16px;
              height: 16px;
              color: var(--el-yike-fontColorTop);
            }

            img {
              position: absolute;
              bottom: 40px;
              left: 0;
              width: 0;
              transition: all 0.3s;
            }
          }
          .icons-item:first-child:hover {
            background: #21bf58;
            img {
              position: absolute;
              bottom: 40px;
              left: 0;
              width: 120px;
              transition: all 0.3s;
            }
          }
          .icons-item:nth-child(2):hover {
            background: #0468cc;
            img {
              position: absolute;
              bottom: 40px;
              left: 40px;
              width: 120px;
              transition: all 0.3s;
            }
          }
          .icons-item:last-child:hover {
            background: #fe519b;
          }
        }
      }

      .content-right {
        display: flex;
        flex: 4;

        .content-right-item {
          flex: 1;
          position: relative;
          box-sizing: border-box;
          height: 100%;
          margin-left: 30px;
          border-radius: 16px;
          background: var(--el-yike-bgColorTop);
          padding: 30px;
          transition: all 0.3s;
          .item-top {
            display: flex;
            align-items: center;
            justify-content: space-between;
            .item-top-icon {
              width: 56px;
              height: 56px;
              border-radius: 16px;
              background: rgb(34, 191, 135) none repeat scroll 0% 0%;
              display: flex;
              justify-content: center;
              align-items: center;
              transition: all 0.3s;
              .icon-img {
                width: 30px;
                height: 30px;
              }
            }

            .item-top-value {
              color: rgb(34, 191, 135);
              font-size: 36px;
            }
          }

          .item-title {
            font-size: 18px;
            font-weight: 700;
            color: var(--el-yike-fontColorTop);
            padding-top: 20px;
            transition: all 0.3s;
          }
          .item-desc {
            padding-top: 12px;
            color: var(--el-yike-fontColorBottom);
            transition: all 0.3s;
          }
          .item-bottom {
            width: 80px;
            height: 40px;
            background: #3b73f0;
            border-radius: 20px;
            position: absolute;
            right: 30px;
            bottom: 30px;
            display: flex;
            justify-content: space-around;
            align-items: center;
            color: #fff;
            font-size: 24px;
            cursor: pointer;
            .icon-img {
              width: 25px;
              height: 25px;
              color: var(--el-yike-bgColorTop);
            }
          }
        }

        .content-right-item:nth-child(2n) {
          .item-top-icon {
            background: rgb(160, 72, 250) none repeat scroll 0% 0%;
          }
          .item-top-value {
            color: rgb(160, 72, 250);
            font-size: 36px;
          }
        }

        .content-right-item:last-child {
          .item-top-icon {
            background: rgb(255, 117, 81) none repeat scroll 0% 0%;
          }
          .item-top-value {
            color: rgb(255, 117, 81);
            font-size: 36px;
          }
        }
      }
    }
  }
}
</style>