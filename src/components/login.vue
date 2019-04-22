<template>
  <div class="login-container">
    <div class="login-box">
      <div class="avatar-box">
        <img src="../assets/logo.png" alt>
      </div>

<<<<<<< HEAD
      <el-form ref="loginFormRef" :model="loginForm">
        <el-form-item>
          <el-input v-model="loginForm.username"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input v-model="loginForm.userpass"></el-input>
        </el-form-item>
          <el-row>
            <el-col push="15">
              <el-button type="primary">登录</el-button>
              <el-button type="info">重置</el-button>
            </el-col>
          </el-row>
=======
      <el-form :rules="loginFormRules" ref="loginFormRef" :model="loginForm">
        <el-form-item prop="username">
          <el-input v-model="loginForm.username">
            <i slot="prefix" class="iconfont icon-user"></i>
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input v-model="loginForm.password " show-password>
            <i slot="prefix" class="iconfont icon-3702mima"></i>
          </el-input>
        </el-form-item>
        <el-row>
          <el-col :push="15">
            <el-button type="primary" @click="login">登录</el-button>
            <el-button type="info" @click="resetForm">重置</el-button>
          </el-col>
        </el-row>
>>>>>>> login
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
<<<<<<< HEAD
    data() {
    return {
      // 用户登录表单数据对象(用户名、密码)
      loginForm: {
        username: '',
        password: ''
=======
  methods: {
    //表单域重置
    resetForm() {
      this.$refs.loginFormRef.resetFields()
    },
    login() {
      this.$refs.loginFormRef.validate(async valid => {
        console.log(valid)
        if (valid === true) {
          const { data: dt } = await this.$http.post('/login', this.loginForm)

          if (dt.meta.status !== 200) {
            return this.$message.error('用户名或密码不存在')
          }

          // 通过浏览器的sessionStorage记录服务器返回的token信息
          window.sessionStorage.setItem('token', dt.data.token)

          this.$router.push('/home')
        }
      })
    }
  },
  data() {
    return {
      loginFormRules: {
        username: [
          // required:非空  message:错误提示  trigger:触发校验机制
          { required: true, message: '请输入用户名称', trigger: 'blur' }
        ],
        password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
      },
      // 用户登录表单数据对象(用户名、密码)
      loginForm: {
        username: 'admin',
        password: '123456'
>>>>>>> login
      }
    }
  }
}
</script>

<style lang="less" scoped>
<<<<<<< HEAD
#login-container {
  background-color: #2b4b6b;
  height: 100%;
  overflow: hidden;
  #login-box{
=======
.login-container {
  background-color: #2b4b6b;
  height: 100%;
  overflow: hidden;
  .login-box {
>>>>>>> login
    width: 450px;
    height: 304px;
    background-color: #fff;
    border-radius: 4px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    .el-form {
      position: absolute;
      bottom: 0;
      width: 100%;
      padding: 20px;
      box-sizing: border-box;
    }
<<<<<<< HEAD
    #logo-box{
       width: 130px;
=======
    .avatar-box {
      width: 130px;
>>>>>>> login
      height: 130px;
      border: 1px solid #eee;
      border-radius: 50%;
      padding: 8px;
      box-shadow: 0 0 10px #eee;
      position: absolute;
      left: 50%;
      transform: translate(-50%, -50%);
      background-color: #fff;
      img {
<<<<<<< HEAD
         width: 100%;
=======
        width: 100%;
>>>>>>> login
        height: 100%;
        border-radius: 50%;
        background-color: #eee;
      }
    }
  }
<<<<<<< HEAD
 }

=======
}
>>>>>>> login
</style>
