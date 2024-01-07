<template>
  <div class="layout">
    <div
      class="layout-aside"
      :style="{
        width: store.asideCollapse ? asideWidthCollapse : asideWidth,
      }"
    >
      <LayoutAside></LayoutAside>
    </div>
    <div class="layout-right" ref="layoutRight">
      <div
        class="layout-right-header"
        :style="{
          position: store.headerFixed ? 'fixed' : 'absolute',
          background: store.headerFixed
            ? 'var(--el-yike-bgColorTop)'
            : 'var(--el-yike-bgColorBase)',
          width: store.headerFixed
            ? 'calc(100% - ' +
              (store.asideCollapse ? asideWidthCollapse : asideWidth) +
              ')'
            : '100%',
          borderLeft: store.headerFixed
            ? `1px solid var(--el-yike-bgColorBase)`
            : ``,
          borderBottom: store.headerFixed
            ? `1px solid var(--el-yike-bgColorBase)`
            : ``,
        }"
      >
        <LayoutRightHeader></LayoutRightHeader>
      </div>
      <div class="layout-right-content">
        <transition name="slide-fade">
          <router-view />
        </transition>
      </div>
      <div class="layout-right-footer">
        <LayoutRightFooter></LayoutRightFooter>
      </div>
    </div>
    <div v-if="store.scrollTop > 200" class="layout-back-top" @click="backTop">
      <LayoutBackTop></LayoutBackTop>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from "vue";

import { mainStore } from "../store/index";

import LayoutAside from "./components/LayoutAside.vue";
import LayoutRightHeader from "./components/LayoutRightHeader.vue";
import LayoutRightFooter from "./components/LayoutRightFooter.vue";
import LayoutBackTop from "./components/LayoutBackTop.vue";

const layoutRight = ref();
const asideWidthCollapse = "256px";
const asideWidth = "92px";
const store = mainStore();

const handleScroll = (e: any) => {
  console.log(e);
  if (e.target.attributes.class.value === "layout-right") {
    const scrollTop = e.target.scrollTop;
    store.setHeaderFixed(scrollTop > 120);
    store.setScrollTop(scrollTop);
  }
};
onMounted(() => {
  window.addEventListener("scroll", handleScroll, true);
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll, true);
});
const backTop = () => {
  let timer = setInterval(() => {
    let ispeed = Math.floor(-store.scrollTop / 5);
    layoutRight.value.scrollTop = store.scrollTop + ispeed;
    if (store.scrollTop === 0) {
      clearInterval(timer);
    }
  }, 16);
};
</script>

<style lang="scss" scoped>
.layout {
  display: flex;
  height: 100vh;

  &-aside {
    // flex: 0 0 200px;
    background-color: var(--el-yike-bgColorTop);
    transition: all 0.3s;
    position: relative;
    height: 100vh;
    overflow: auto;
    overflow-x: hidden;
  }

  &-right {
    flex: 1;
    display: flex;
    flex-direction: column;
    height: 100vh;
    overflow: scroll;
    overflow-x: hidden;
    position: relative;

    &-header {
      top: 0;
      width: 100%;
      height: 85px;
      z-index: 999;
    }

    &-content {
      flex: 1;
      background: var(--el-yike-bgColorBase);
      padding: 100px 40px 30px 40px;
    }

    &-footer {
      height: 60px;
      background: #456;
    }
  }
  .layout-back-top {
    position: fixed;
    right: 40px;
    bottom: 40px;
    cursor: pointer;
    transition: all 0.3s;
    // opacity: 0;
    z-index: 999;
    &.show {
      opacity: 1;
    }
  }
}

.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>