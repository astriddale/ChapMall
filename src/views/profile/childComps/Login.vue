<template>
  <div id="login">
    <nav-bar class="nav-bar" @click.native="back"
      ><div slot="center">查派商城</div></nav-bar
    >
    <div class="contain">
      <div class="big-box">
        <div class="big-contain" v-if="login">
          <div class="btitle">账户登录</div>
          <div class="bform">
            <input type="email" placeholder="邮箱" v-model="formData.email" />
            <span class="errTips" v-show="isError">* 邮箱填写错误 *</span>
            <input
              type="password"
              placeholder="密码"
              v-model="formData.password"
            />
            <span class="errTips" v-show="isError">* 密码填写错误 *</span>
          </div>
          <button class="bbutton" @click="loginClick">登录</button>
        </div>
        <div class="big-contain" v-else>
          <div class="btitle">创建账户</div>
          <div class="bform">
            <input
              type="text"
              placeholder="用户名"
              v-model="formData.username"
            />
            <span class="errTips" v-show="isExist">* 用户名已经存在！ *</span>
            <input type="email" placeholder="邮箱" v-model="formData.email" />
            <input
              type="password"
              placeholder="密码"
              v-model="formData.password"
            />
          </div>
          <button class="bbutton" @click="regClick">注册</button>
        </div>
      </div>
      <div class="small-box">
        <div class="small-contain" v-if="login">
          <button class="sbutton" @click="isLogin">注册</button>
        </div>
        <div class="small-contain" v-else>
          <button class="sbutton" @click="isLogin">登录</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/Navbar";
export default {
  name: "Login",
  data() {
    return {
      login: true,
      formData: {
        username: "",
        password: "",
        email: "",
      },
      isExist: false,
      isError: false,
      domData: {
        username: localStorage.getItem("username"),
        email: localStorage.getItem("email"),
        password: localStorage.getItem("password"),
      },
    };
  },
  components: {
    NavBar,
  },
  methods: {
    isLogin() {
      this.login = !this.login;
    },
    loginClick() {
      if (this.formData.email == "") {
        alert("输入不能为空！！");
      }
      if (this.formData.password == "") {
        alert("输入不能为空！！");
      }
      let res = /[1-20]/g;
      if (!res.test(this.formData.email)) {
        alert("请输入正确邮箱");
      }
      if (
        this.formData.email == this.domData.email &&
        this.formData.password == this.domData.password
      ) {
        // alert("登录成功");
        this.$store.commit("changeLogin", true);
        this.$router.push("/profile");
      } else {
        this.isError = true;
      }
    },
    regClick() {
      if (this.formData.username == "") {
        alert("输入不能为空！！");
      }
      if (this.formData.email == "") {
        alert("输入不能为空！！");
      }
      if (this.formData.password == "") {
        alert("输入不能为空！！");
      }
      localStorage.setItem("username", this.formData.username);
      localStorage.setItem("email", this.formData.email);
      localStorage.setItem("password", this.formData.password);
    },
    back() {
      this.$router.back();
    },
  },
};
</script>

<style scoped>
.nav-bar {
  background-color: var(--color-tint);
  font-weight: 700;
  color: #fff;
}
#login {
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
  overflow: hidden;
}
.contain {
  width: 100%;
  height: 100%;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  box-shadow: 0 0 3px #f0f0f0, 0 0 6px #f0f0f0;
}
.big-box {
  width: 70%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 30%;
  transform: translateX(0%);
  transition: all 1s;
}
.big-contain {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.btitle {
  font-size: 1.5em;
  font-weight: bold;
  color: var(--color-tint);
}
.bform {
  width: 100%;
  height: 40%;
  padding: 2em 0;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
.bform .errTips {
  display: block;
  width: 50%;
  text-align: left;
  color: red;
  font-size: 0.7em;
  margin-left: 1em;
}
.bform input {
  width: 50%;
  height: 30px;
  border: none;
  outline: none;
  border-radius: 10px;
  padding-left: 2em;
  background-color: #f0f0f0;
}
.bbutton {
  width: 20%;
  height: 40px;
  border-radius: 24px;
  border: none;
  outline: none;
  background-color: var(--color-tint);
  color: #fff;
  font-size: 0.9em;
  cursor: pointer;
}
.small-box {
  width: 30%;
  height: 100%;
  background: linear-gradient(135deg, rgb(255, 119, 171), rgb(247, 77, 142));
  position: absolute;
  top: 0;
  left: 0;
  transform: translateX(0%);
  transition: all 1s;
  border-top-left-radius: inherit;
  border-bottom-left-radius: inherit;
}
.small-contain {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.stitle {
  font-size: 1.5em;
  font-weight: bold;
  color: #fff;
}
.scontent {
  font-size: 0.8em;
  color: #fff;
  text-align: center;
  padding: 2em 4em;
  line-height: 1.7em;
}
.sbutton {
  width: 60%;
  height: 40px;
  border-radius: 24px;
  border: 1px solid #fff;
  outline: none;
  background-color: transparent;
  color: #fff;
  font-size: 0.9em;
  cursor: pointer;
}

.big-box.active {
  left: 0;
  transition: all 0.5s;
}
.small-box.active {
  left: 100%;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-top-right-radius: inherit;
  border-bottom-right-radius: inherit;
  transform: translateX(-100%);
  transition: all 1s;
}
</style>
