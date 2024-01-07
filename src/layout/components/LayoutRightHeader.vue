<template>
  <div class="com-layout-header">
    <div class="com-layout-header-input">
      <input
        :style="{
          background: store.headerFixed
            ? 'var(--el-yike-bgColorBase)'
            : 'var(--el-yike-bgColorTop)',
        }"
        type="search"
        v-model="inputValue"
      />
      <button>
        <!-- <img src="../../static/images/layout/search.png" alt="" /> -->
        <svg class="icon icon-img" aria-hidden="true">
          <use
            xlink:href="#icon-sousuo"
          ></use>
        </svg>
      </button>
    </div>
    <div class="com-layout-header-img">
      <img src="../..//static/images/avatar.jpg" alt="" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { mainStore } from "../../store/index";

const store = mainStore();
const inputValue = ref("");
</script>

<style lang="scss" scoped>
.com-layout-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  padding: 0 40px;

  .com-layout-header-input {
    input {
      background: #fff;
      height: 44px;
      width: 456px;
      border-radius: 12px;
      padding: 0 40px 0 12px;
      color: var(--el-yike-fontColorTop);
      border: 0;
      outline: none;
      transition: all 0.3s;
    }
    button {
      margin-left: -40px;
      height: 44px;
      vertical-align: bottom;
      border: 0;
      outline: none;
      background: transparent;
      cursor: pointer;
      transition: all 0.3s;
      .icon-img {
        width: 30px;
        height: 30px;
      }
    }
  }
  .com-layout-header-img {
    img {
      width: 50px;
      height: 50px;
      border-radius: 50%;
    }
  }
}
</style>