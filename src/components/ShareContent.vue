<template>
  <div class="com-share-content">
    <div class="acticle-currentType" v-if="props.showTitle">
      {{ props.currentType }}
    </div>
    <div
      class="article-content-left"
      v-if="props.currentType === '文章' && !props.showTitle"
    >
      <div v-for="(item, index) in dataList" :key="index" class="article-item">
        <div class="article-item-left">
          <img :src="item.img" alt="" />
        </div>
        <div class="article-item-right">
          <div class="article-item-title">{{ item.title }}</div>
          <div class="article-item-desc">{{ item.desc }}</div>
          <div class="article-item-bottom">
            <div class="article-item-bottom-left">
              <div class="article-item-tag">{{ item.tag }}</div>
              <div class="article-item-date">{{ item.date }}</div>
            </div>
            <div class="article-item-bottom-right">
              <div class="article-item-upNum">
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-icon"></use>
                </svg>
                {{ item.upNum }}
              </div>
              <div class="article-item-viewNum">
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-yanjing"></use>
                </svg>
                {{ item.viewNum }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="article-content-right"
      v-if="props.currentType === '文章' && props.showTitle"
    >
      <div v-for="(item, index) in dataList" :key="index" class="article-item">
        <div class="article-item-left">
          <img :src="item.img" alt="" />
        </div>
        <div class="article-item-right">
          <div class="article-item-title">{{ item.title }}</div>
          <div class="article-item-bottom">
            <div class="article-item-tag">{{ item.tag }}</div>
            <div class="article-item-date-num">
              <div class="article-item-date">{{ item.date }}</div>
              <div class="article-item-num">
                <div class="article-item-upNum">
                  <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-icon"></use>
                  </svg>
                  {{ item.upNum }}
                </div>
                <div class="article-item-viewNum">
                  <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-yanjing"></use>
                  </svg>
                  {{ item.viewNum }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="note-content-left" v-if="props.currentType === '随记'">
      <div v-for="(item, index) in dataList" :key="index" class="note-item">
        <div class="note-item-date">
          <div class="year">{{ item.date.substring(0, 4) }}</div>
          <div class="month">{{ item.date.substring(5, 7) }}月</div>
          <div class="day">{{ item.date.substring(8, 10) }}</div>
        </div>
        <div class="note-item-info">
          <div class="note-item-title">{{ item.title }}</div>
          <div class="note-item-content">{{ item.content }}</div>
          <div class="note-item-img">
            <img :src="item.img" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface articlesInterface {
  title?: string;
  img?: string;
  desc?: string;
  tag?: string;
  date: string;
  upNum?: string;
  viewNum?: string;
content?: string;
}

const props = defineProps({
  showTitle: {
    type: Boolean,
    default: true,
  },
  currentType: {
    type: String,
    default: "",
  },
  dataList: {
    type: Array<articlesInterface>,
    default: () => [],
  },
});
</script>

<style lang="scss" scoped>
.com-share-content {
  transition: all 0.3s;
  width: 100%;

  .acticle-currentType {
    font-size: 18px;
    font-weight: 700;
    padding-bottom: 20px;
    color: var(--el-yike-fontColorTop);
  }

  .article-content-left {
    width: 100%;
    .article-item {
      display: flex;
      cursor: pointer;
      border-radius: 16px;
      background: var(--el-yike-bgColorTop);
      text-decoration: none;
      transition: all 0.3s;
      width: 100%;
      height: 200px;
      padding: 20px;
      box-sizing: border-box;

      .article-item-left {
        height: 100%;
        width: auto;
        img {
          border-radius: 12px;
          height: 100%;
          width: 100%;
        }
      }
      .article-item-right {
        margin-left: 30px;
        position: relative;
        flex: 1;

        .article-item-title {
          font-weight: 700;
          font-size: 18px;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          color: var(--el-yike-fontColorBase);
          transition: all 0.3s;
        }

        .article-item-desc {
          padding-top: 12px;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          color: var(--el-yike-fontColorBase);
          transition: all 0.3s;
        }

        .article-item-bottom {
          position: absolute;
          bottom: 0;
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
          .article-item-bottom-left {
            display: flex;
            align-items: center;

            .article-item-tag {
              font-size: 12px;
              color: var(--el-yike-fontColorBase);
            }
            .article-item-date {
              margin-left: 12px;
              color: var(--el-yike-fontColorBottom);
            }
          }
          .article-item-bottom-right {
            display: flex;
            align-items: center;
            font-size: 12px;
            color: var(--el-yike-fontColorBottom);

            .article-item-viewNum {
              margin-left: 10px;
            }
          }
        }
      }
    }
    .article-item:not(:first-child) {
      margin-top: 20px;
    }
  }
  .article-content-right {
    width: 100%;
    .article-item {
      display: flex;
      cursor: pointer;
      .article-item-left {
        width: 40%;
        height: auto;
        img {
          border-radius: 12px;
          height: 100%;
          width: 100%;
        }
      }

      .article-item-right {
        margin-left: 20px;
        position: relative;
        flex: 1;
        .article-item-title {
          font-weight: 700;
          font-size: 14px;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          color: var(--el-yike-fontColorBase);
          transition: all 0.3s;
        }
        .article-item-bottom {
          width: 100%;
          justify-content: space-between;
          position: absolute;
          bottom: 0;

          .article-item-tag {
            font-size: 12px;
            color: var(--el-yike-fontColorBase);
            padding-bottom: 10px;
          }
          .article-item-date-num {
            width: 100%;
            display: flex;
            justify-content: space-between;
            font-size: 12px;
            color: var(--el-yike-fontColorBottom);
          }
          .article-item-date {
            color: var(--el-yike-fontColorBottom);
          }
          .article-item-num {
            display: flex;
            align-items: center;
            .article-item-viewNum {
              margin-left: 5px;
            }
          }
        }
      }
    }
    .article-item:not(:first-child) {
      margin-top: 20px;
    }
  }

  .note-content-left {
    width: 100%;
    .note-item {
      display: flex;
      width: 100%;
      .note-item-date {
        color: var(--el-yike-fontColorBottom);
        font-weight: 700;
        text-align: right;
        font-size: 14px;
        .day {
          font-size: 24px;
          margin-top: 5px;
        }
      }
      .note-item-info {
        margin-left: 20px;
        .note-item-title {
          font-size: 24px;
          padding-bottom: 8px;
          transition: all 0.3s;
          line-height: 1.5;
          color: var(--el-yike-fontColorTop);
        }
        .note-item-content {
          color: var(--el-yike-fontColorBase);
          line-height: 2;
          font-size: 14px;
        }
        .note-item-img {
          margin-top: 20px;
          width: 40%;
          height: auto;
          img {
            height: 100%;
            width: 100%;
            border-radius: 12px;
          }
        }
      }
    }
    .note-item:not(:first-child) {
      margin-top: 30px;
    }
  }
}
</style>