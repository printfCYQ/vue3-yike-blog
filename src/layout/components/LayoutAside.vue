<template>
  <div>
    <div
      class="aside-logo"
      :style="{
        padding: store.asideCollapse ? '20px 30px 0' : '20px',
      }"
    >
      <div class="aside-logo-icon">
        <img src="../../assets/logo.png" alt="" />
      </div>
      <div v-if="store.asideCollapse" class="zoom">
        <div class="aside-logo-name">一刻时光</div>
        <div class="aside-logo-info">
          <div class="aside-logo-info-item">QQ：459987870</div>
          <div class="aside-logo-info-item">WeChat：YQ459987870</div>
        </div>
      </div>
    </div>
    <div
      class="aside-nav"
      :style="{
        padding: store.asideCollapse ? '20px 30px 0' : '20px',
      }"
    >
      <div v-if="store.asideCollapse" class="aside-nav-name zoom">菜单</div>
      <div class="aside-nav-list">
        <div
          class="aside-nav-list-item zoom"
          v-for="(item, index) in menuList"
          :key="index"
          :class="store.path == item.path ? 'active' : ''"
          @click="handleClickMenu(item)"
        >
          <div class="item-icon">
            <svg class="icon icon-img" aria-hidden="true">
              <use
                :xlink:href="
                  store.path == item.path ? item.activeIcon : item.icon
                "
              ></use>
            </svg>
          </div>
          <div v-if="store.asideCollapse" class="item-name zoom">
            {{ item.name }}
          </div>
        </div>
      </div>
    </div>
    <div
      class="aside-theme"
      :style="{
        padding: store.asideCollapse ? '20px 30px 0' : '0 20px',
      }"
    >
      <input class="l" type="checkbox" v-model="check" @change="changeTheme" />
      <div v-if="store.asideCollapse" class="aside-theme-name">深夜模式</div>
    </div>
    <div class="aside-collapse" @click="asideCollapseClick">
      <svg class="icon icon-img" aria-hidden="true">
        <use
          :xlink:href="
            store.asideCollapse ? '#icon-shouqicaidan' : '#icon-zhankaicaidan'
          "
        ></use>
      </svg>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
/// <reference path="../../utils/themes.d.ts" />
import themes from "../../utils/themes";
/// <reference path="../../utils/tools.d.ts" />
import { colorMix } from "../../utils/tools";
import { mainStore } from "../../store/index";
import { useRouter } from "vue-router";

const router = useRouter();
const store = mainStore();

const check = ref(true);
let themeObj: any = {};
const currentSkinName = ref("defaultTheme");

const menuList = [
  {
    name: "首页",
    path: "/home",
    icon: "#icon-home",
    activeIcon: "#icon-home-fill",
  },
  {
    name: "个人分享",
    path: "/share",
    icon: "#icon-template",
    activeIcon: "#icon-template-fill",
  },
  {
    name: "项目产品",
    path: "/product",
    icon: "#icon-product",
    activeIcon: "#icon-product1",
  },

  {
    name: "技术交流",
    path: "/technology",
    icon: "#icon-integral",
    activeIcon: "#icon-integral-fill",
  },
  {
    name: "资源下载",
    path: "/download",
    icon: "#icon-vip",
    activeIcon: "#icon-vip-fill",
  },
  {
    name: "关于",
    path: "/about",
    icon: "#icon-account",
    activeIcon: "#icon-account-fill",
  },
];

const getsTheColorScale = () => {
  const colorList = [
    "primary",
    "success",
    "warning",
    "danger",
    "error",
    "info",
  ];
  const prefix = "--el-color-";
  colorList.map((colorItem) => {
    for (let i = 1; i < 10; i += 1) {
      if (i === 2) {
        // todo 深色变量生成未完成 以基本色设置
        themeObj[`${prefix}${colorItem}-dark-${2}`] = colorMix(
          themeObj[`${prefix}black`],
          themeObj[`${prefix}${colorItem}`],
          1
        );
      } else {
        themeObj[`${prefix}${colorItem}-light-${10 - i}`] = colorMix(
          themeObj[`${prefix}white`],
          themeObj[`${prefix}${colorItem}`],
          i * 0.1
        );
      }
    }
  });
};

onMounted(() => {
  changeTheme();
  store.setPath(router.currentRoute?._value.path)
});

const nowTime = () => {
  return new Date().getHours() > 6 && new Date().getHours() < 18;
};
const changeTheme = (e?: any) => {
  if (e) {
    currentSkinName.value = e.target.checked ? "defaultTheme" : "darkTheme";
  } else {
    currentSkinName.value = nowTime() ? "defaultTheme" : "darkTheme";
    check.value = nowTime();
  }
  store.setTheme(currentSkinName.value);
  themeObj = themes[currentSkinName.value];

  getsTheColorScale();
  Object.keys(themeObj).map((item) => {
    document.documentElement.style.setProperty(item, themeObj[item]);
  });
};
const asideCollapseClick = () => {
  store.setAsideCollapse(!store.asideCollapse);
};

const handleClickMenu = (item: any) => {
  store.setPath(item.path);
  router.push({ path: item.path });
};
</script>

<style lang="scss" scoped>
.zoom {
  animation: zoom_1 0.5s;
  -webkit-animation: zoom_1 0.5s;
}
@keyframes zoom_1 {
  0% {
    -webkit-transform: scale(0);
    opacity: 0;
  }
}
@-webkit-keyframes zoom_1 {
  0% {
    -webkit-transform: scale(0);
    opacity: 0;
  }
}

.aside-logo {
  .aside-logo-icon {
    width: 50px;
    height: 50px;

    img {
      width: 100%;
      height: 100%;
    }
  }

  .aside-logo-name {
    font-size: 20px;
    color: var(--el-yike-fontColorTop);
    margin-top: 20px;
    font-size: 20px;
    font-weight: 700;
    line-height: 1.5;
    transition: all 0.3s;
  }

  .aside-logo-info {
    display: flex;
    flex-direction: column;
    margin-top: 10px;
    transition: all 0.3s;

    .aside-logo-info-item {
      font-size: 12px;
      font-size: 14px;
      color: var(--el-yike-fontColorBottom);
      line-height: 1.5;
      transition: all 0.3s;
    }
  }
}

.aside-nav {
  padding-top: 30px;
  transition: all 0.3s;

  .aside-nav-name {
    font-size: 14px;
    color: var(--el-yike-fontColorBottom);
    line-height: 1.5;
    padding-bottom: 10px;
    transition: all 0.3s;
  }

  .aside-nav-list {
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .aside-nav-list-item {
      height: 56px;
      display: flex;
      flex-direction: row;
      align-items: center;
      cursor: pointer;

      .item-icon {
        width: 20px;
        padding: 4px;
        height: 20px;
        border-radius: 10px;
        background: var(--el-yike-bgColorOther);
        transition: all 0.3s;

        .icon-img {
          width: 100%;
          height: 100%;
          color: var(--el-yike-fontColorBottom);
        }
      }

      .item-name {
        color: var(--el-yike-fontColorTop);
        padding-left: 16px;
        min-width: 154px;
        transition: all 0.3s;
      }
    }

    .aside-nav-list-item.active {
      .item-icon {
        background: #3b73f0;
        .icon-img {
          color: #fff;
        }
      }

      .item-name {
        color: var(--el-yike-fontColorTop);
        font-weight: 700;
      }
    }
  }
}

.aside-theme {
  position: absolute;
  bottom: 60px;
  display: flex;
  align-items: center;
  transition: all 0.3s;

  .aside-theme-name {
    padding-left: 16px;
    min-width: 120px;
    color: var(--el-yike-fontColorBottom);
    transition: all 0.3s;
  }

  .l {
    border-radius: 0.75em;
    box-shadow: 0.125em 0.125em 0 0.125em rgba(0, 0, 0, 0.3) inset;
    color: #fdea7b;
    font-size: 1em;
    display: inline-flex;
    align-items: center;
    margin: auto;
    padding: 0.15em;
    width: 3em;
    height: 1.5em;
    transition: background-color 0.1s 0.3s ease-out,
      box-shadow 0.1s 0.3s ease-out;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }

  .l:before,
  .l:after {
    content: "";
    display: block;
  }

  .l:before {
    background-color: #d7d7d7;
    border-radius: 50%;
    width: 1.2em;
    height: 1.2em;
    transition: background-color 0.1s 0.3s ease-out, transform 0.3s ease-out;
    z-index: 1;
  }

  .l:after {
    background: linear-gradient(transparent 50%, rgba(0, 0, 0, 0.15) 0) 0 50% /
        50% 100%,
      repeating-linear-gradient(
          90deg,
          #bbb 0,
          #bbb,
          #bbb 20%,
          #999 20%,
          #999 40%
        )
        0 50% / 50% 100%,
      radial-gradient(circle at 50% 50%, #888 25%, transparent 26%);
    background-repeat: no-repeat;
    border: 0.25em solid transparent;
    border-left: 0.4em solid #d8d8d8;
    border-right: 0 solid transparent;
    transition: border-left-color 0.1s 0.3s ease-out, transform 0.3s ease-out;
    transform: translateX(-22.5%);
    transform-origin: 25% 50%;
    width: 1.2em;
    height: 1em;
  }

  /* Checked */
  .l:checked {
    background-color: rgba(0, 0, 0, 0.45);
    box-shadow: 0.125em 0.125em 0 0.125em rgba(0, 0, 0, 0.1) inset;
  }

  .l:checked:before {
    background-color: currentColor;
    transform: translateX(125%);
  }

  .l:checked:after {
    border-left-color: currentColor;
    transform: translateX(-2.5%) rotateY(180deg);
  }

  /* Other States */
  .l:focus {
    /* Usually an anti-A11Y practice but set to remove an annoyance just for this demo */
    outline: 0;
  }
}

.aside-collapse {
  position: absolute;
  height: 40px;
  bottom: 0px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px var(--el-yike-bgColorOther) solid;
  cursor: pointer;

  .icon-img {
    color: var(--el-yike-fontColorBottom);
    width: 25px;
    height: 25px;
  }
}
</style>
