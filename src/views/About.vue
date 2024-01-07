<template>
  <div class="about-page">
    <div class="about-top">
      <div class="about-logo">
        <img src="../static/images/about.png" alt="" />
      </div>
      <div class="about-avatar">
        <img
          src="../static/images/about-avatar.jpg"
          @click="backHome"
          title="点击返回首页"
          alt=""
        />
        <div class="about-text">
          <p>沿途避走齐脖的深草, 和滚落衰亡的陡坡</p>
          <p>给蹭过车的老司机递烟解乏,不惦记竹筒盛雨露的事儿</p>
          <p>你要爱荒野上的风声,胜过爱贫穷和思考</p>
          <p>暮冬时烤雪迟夏写长信</p>
          <p>早春不过一棵树</p>
        </div>
      </div>
    </div>
    <div class="about-bottom"></div>
  </div>
</template>

<script setup lang="ts">
import { mainStore } from "../store/index";
import { useRouter } from "vue-router";

const router = useRouter();
const store = mainStore();
const backHome = () => {
  router.push({ path: "/" });
};
</script>

<style lang="scss" scoped>
.about-page {
  .about-top {
    height: 100vh;
    background-color: #171e2f;
  }
  .about-logo {
    width: 50%;
    margin: 0 auto;
    padding-top: 100px;
    img {
      width: 100%;
      height: auto;
      cursor: pointer;
    }
  }

  .about-avatar {
    width: 25%;
    margin: 0 auto;
    padding-top: 50px;
    border-radius: 50%;
    position: relative;
    img {
      width: 100%;
      height: auto;
      border-radius: 50%;
    }
  }
  .about-text {
    position: absolute;
    bottom: -15%;
    color: hsla(0, 0%, 100%, 0.8);
    line-height: 2;
  }
}
</style>