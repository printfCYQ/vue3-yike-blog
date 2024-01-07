<template>
  <div class="share-page">
    <ul>
      <li
        v-for="(item, index) in typeList"
        :key="index"
        :class="currentType == item ? 'active' : ''"
        @click="handleClickType(item)"
      >
        {{ item }}
      </li>
    </ul>
    <div class="share-content">
      <div class="content-left" :class="move ? 'move-left' : ''">
        <ShareContent
          :showTitle="false"
          :currentType="currentType"
          :dataList="data[currentType]"
        ></ShareContent>
      </div>
      <div class="content-right" :class="move ? 'move-right' : ''">
        <div class="content-right-top">
          <ShareContent
            :currentType="getCurrentType(0)"
            :dataList="data[getCurrentType(0)]"
          ></ShareContent>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import ShareContent from "@/components/ShareContent.vue";
import lyqImg from "@/static/lyq.png";

let currentType = ref("文章");
let move = ref(false);
const typeList = ["文章", "随记"];
const data: any = {
  文章: [
    {
      title: "西北大环线第七天",
      desc: "祁连——阿柔大寺——门源菜花——西宁",
      img: lyqImg,
      tag: "所见/旅游 西北",
      date: "2021-10-31",
      upNum: "13",
      viewNum: "23",
    },
    {
      title: "西北大环线第七天",
      desc: "祁连——阿柔大寺——门源菜花——西宁",
      img: lyqImg,
      tag: "所见/旅游 西北",
      date: "2021-10-31",
      upNum: "13",
      viewNum: "23",
    },
    {
      title: "西北大环线第七天",
      desc: "祁连——阿柔大寺——门源菜花——西宁",
      img: lyqImg,
      tag: "所见/旅游 西北",
      date: "2021-10-31",
      upNum: "13",
      viewNum: "23",
    },
  ],
  随记: [
    {
      title: "西北大环线第七天",
      content:
        "懒惰，出自心里。对周末我过的有些懒惰。原本的计划并没有完成。吃的有些饱，本不应该吃的这么饱的。打开一个文件想要下载一些东西。但是下载很慢，不知道为什么，我等的有些急躁，因为原本等着它快下完，进行下一步的计划。今天好不容易就去了一趟图书馆。很急，下着大雨，但今天总算是出去了一趟。",
      date: "2021-10-31",
      img: lyqImg,
    },
    {
      title: "西北大环线第七天",
      content:
        "懒惰，出自心里。对周末我过的有些懒惰。原本的计划并没有完成。吃的有些饱，本不应该吃的这么饱的。打开一个文件想要下载一些东西。但是下载很慢，不知道为什么，我等的有些急躁，因为原本等着它快下完，进行下一步的计划。今天好不容易就去了一趟图书馆。很急，下着大雨，但今天总算是出去了一趟。",
      date: "2021-10-31",
      img: lyqImg,
    },
    {
      title: "西北大环线第七天",
      content:
        "懒惰，出自心里。对周末我过的有些懒惰。原本的计划并没有完成。吃的有些饱，本不应该吃的这么饱的。打开一个文件想要下载一些东西。但是下载很慢，不知道为什么，我等的有些急躁，因为原本等着它快下完，进行下一步的计划。今天好不容易就去了一趟图书馆。很急，下着大雨，但今天总算是出去了一趟。",
      date: "2021-10-31",
      img: lyqImg,
    },
  ],
};

const handleClickType = (item: string) => {
  currentType.value = item;
  move.value = true;
  setTimeout(() => {
    move.value = false;
  }, 1000);
};

const getCurrentType = (i: number) => {
  const temp = typeList.slice();
  const index = temp.indexOf(currentType.value);
  temp.splice(index, 1);
  return temp[i];
};
</script>

<style lang="scss" scoped>
.move-right {
  animation: move_4 1s;
  -webkit-animation: move_4 1s;
}
@-webkit-keyframes move_4 {
  0% {
    -webkit-transform: translateX(-200px);
    opacity: 0;
  }
}
@keyframes move_4 {
  0% {
    -webkit-transform: translateX(-200px);
    opacity: 0;
  }
}

.move-left {
  animation: move_2 1s;
  -webkit-animation: move_2 1s;
}
@-webkit-keyframes move_2 {
  0% {
    -webkit-transform: translateX(200px);
    opacity: 0;
  }
}
@keyframes move_2 {
  0% {
    -webkit-transform: translateX(200px);
    opacity: 0;
  }
}

.share-page {
  ul {
    display: flex;
    li {
      cursor: pointer;
      color: var(--el-yike-fontColorTop);
      transition: all 0.3s;
    }
    li:not(:nth-child(1)) {
      margin-left: 30px;
    }
    li.active {
      font-weight: 700;
      color: var(--el-yike-fontColorBase);
    }
  }

  .share-content {
    width: 100%;
    display: flex;
    margin-top: 30px;
    .content-left {
      width: 65%;
    }

    .content-right {
      width: 35%;
      margin-left: 30px;
      .content-right-top {
        width: 100%;
        height: 560px;
        padding: 30px;
        box-sizing: border-box;
        border-radius: 16px;
        background: var(--el-yike-bgColorTop);
        transition: all 0.3s;
        overflow: auto;
      }
      .content-right-bottom {
        margin-top: 30px;
        width: 100%;
        height: 560px;
        padding: 30px 30px 0;
        box-sizing: border-box;
        border-radius: 16px;
        background: var(--el-yike-bgColorTop);
        transition: all 0.3s;
        overflow: auto;
      }
    }
  }
}
</style>