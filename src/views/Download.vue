<template>
  <div class="download-page">
    <div class="download-item" v-for="i in 20" :key="i">
      <div class="item-img">
        <img src="../static/lyq.png" alt="" />
      </div>
      <div class="item-content">
        <div class="title">一刻时光开发素材（视频+字体图标...)</div>
        <div class="type">jpg/png格式文件</div>
        <div class="desc">资源/图标切图</div>
        <div class="down">
          <div class="down-icon">
            <svg class="icon icon-img" aria-hidden="true">
              <use xlink:href="#icon-vip"></use>
            </svg>
            30
          </div>
          <div class="down-btns">
            <div class="btns-code">abcd</div>
            <div class="btns-btn">下载</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style lang="scss" scoped>
.download-page {
  .download-item {
    display: block;
    text-decoration: none;
    overflow: hidden;
    background: var(--el-yike-bgColorTop);
    width: 280px;
    height: 400px;
    float: left;
    box-sizing: border-box;
    margin-right: 30px;
    margin-bottom: 30px;
    border-radius: 8px;
    position: relative;
    transition: all 0.3s;

    .item-img {
      height: 210px;
      width: 100%;
      overflow: hidden;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .item-content {
      padding: 30px 20px 0 20px;
      font-size: 18px;
      overflow: hidden;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      display: -webkit-box;
      .title {
        font-weight: 700;
      }
      .type {
        color: var(--el-yike-fontColorBottom);
        font-size: 12px;
        transition: all 0.3s;
        margin-top: 10px;
      }
      .desc {
        color: var(--el-yike-fontColorBase);
        font-size: 12px;
        margin-top: 5px;
      }

      .down {
        display: flex;
        align-items: center;
        margin-top: 10px;
        justify-content: space-between;
        .down-icon {
          font-size: 12px;
          transition: all 0.3s;
          color: var(--el-yike-fontColorBottom);
        }
        .down-btns {
          display: flex;
          align-items: center;
          .btns-code {
            font-size: 24px;
            font-weight: 700;
            color: var(--el-yike-bgColorBottom);
            line-height: 40px;
          }
          .btns-btn {
            font-size: 14px;
            height: 40px;
            width: 80px;
            border-radius: 20px;
            background: #3b73f0;
            color: #fff;
            text-align: center;
            line-height: 40px;
            text-decoration: none;
            cursor: pointer;
            margin-left: 10px;
          }
        }
      }
    }
  }
}
</style>