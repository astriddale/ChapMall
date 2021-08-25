<template>
  <div id="user-info">
    <a href="#" class="clear-fix">
      <slot name="user-icon">
        <svg class="privateImage-svg left">
          <use
            xmlns:xlink="http://www.w3.org/1999/xlink"
            xlink:href="#avatar-default"
          ></use>
        </svg>
      </slot>
      <div v-if="isShow" class="login-info left">
        <slot name="user-nickname">
          <div @click="login">登录/注册</div>
        </slot>
        <div class="phone">
          <span>
            <svg data-v-735ff1be="" fill="#fff" class="icon-mobile">
              <use
                data-v-735ff1be=""
                xmlns:xlink="http://www.w3.org/1999/xlink"
                xlink:href="#mobile"
              ></use>
            </svg>
          </span>
          <slot name="user-phone">暂无绑定手机号</slot>
        </div>
      </div>
      <div v-else class="logined">
        <div>用户名：{{ userName }}</div>
        <div>手机号：{{ userPhone }}</div>
        <button @click="retire">退出登录</button>
      </div>
      <svg data-v-735ff1be="" fill="#fff" class="arrow-svg right">
        <use
          data-v-735ff1be=""
          xmlns:xlink="http://www.w3.org/1999/xlink"
          xlink:href="#arrow-right"
        ></use>
      </svg>
    </a>
  </div>
</template>

<script>
export default {
  name: "UserInfo",
  data() {
    return {
      userName: localStorage.getItem("username"),
      userPhone: localStorage.getItem("email"),
    };
  },
  computed: {
    isShow() {
      return this.$store.state.changed;
    },
  },
  methods: {
    login() {
      this.$router.replace("/login");
    },
    retire() {
      this.$store.state.changed = true;
      // this.$store.commit("changeLogin", false);
      console.log(this.$store.state.changed);
    },
  },
};
</script>

<style scoped>
#user-info {
  background-color: rgba(204, 204, 204, 0.5);
  padding: 15px;
  /* margin-top: -5px; */
}

#user-info .privateImage-svg {
  width: 60px;
  height: 60px;
  background-color: #fff;
  border-radius: 30px;
}

.left {
  float: left;
}

#user-info .arrow-svg {
  width: 11px;
  height: 22px;
  margin-top: 18px;
}

#user-info .login-info {
  color: #fff;
  margin: 10px 0 0 10px;
}

#user-info .login-info .phone {
  position: relative;

  font-size: 13px;
  margin-top: 5px;
  margin-left: 15px;
  font-weight: 300;
}

#user-info .login-info .phone .icon-mobile {
  position: absolute;
  width: 12px;
  height: 18px;
  left: -15px;
  top: 0px;
}
.logined {
  position: relative;
  top: 15px;
  left: 20px;
}
</style>
