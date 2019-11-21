<template>
  <div class="login">
    <div class="loginBox">
    <div class="loginAll">
      <div><img :src="require('../assets/img/login/'+imgURL)" alt=""></div>
      <van-icon name="close"
                  class="closeButton"
                  @click="close" />
      <div class="loginTab">
        <van-tabs v-model="active">
          <van-tab title="登录">
            <van-cell-group>
            <van-field @blur="change(3)" @focus="change(0)" v-model="uname" required  clearable label="用户名" placeholder="请输入用户名"></van-field>
            <van-field @blur="change(3)" @focus="change(1)" v-model="upwd" required type="password" clearable label="密码" placeholder="请输入密码"></van-field>
            <van-button type="info" @click="login">登录</van-button>
            </van-cell-group>
          </van-tab>
          <van-tab title="注册">
            <van-cell-group>
            <van-field v-model="runame" required placeholder="请输入用户名"></van-field>
            <van-field type="password" v-model="rupwd" required placeholder="请输入密码"></van-field>
            <van-field type="password" v-model="rupwd2" required placeholder="再次输入密码"></van-field>
            <van-button type="info" @click="register">注册</van-button>
            </van-cell-group>
          </van-tab>
        </van-tabs>
      </div>
      <div class="loginTab2">
        <p class="login_p">
          温馨提示：<br>
          未注册的手机号，登陆时将自动注册<br>
          且代表同意<a class="login_p_a" @click.stop="toast(1)">用户协议</a> <a @click="toast(0)" class="login_p_a">隐私协议</a>
        </p>
        </div>
      </div>
      </div>
    </div>
</template>

<script>
export default {
  data(){
    return{
      active:0,
      uname:"",
      upwd:"",
      runame:"",
      rupwd:"",
      rupwd2:"",
      imgURL:"1.png"
    }
  },
  methods:{
    //登录
    login(){
        if(!/^[a-z0-9]{3,12}$/.test(this.uname)){
        this.$dialog.alert({
          message:"用户名错误"
        })
        return;
        }
        if(!/^[a-z0-9]{3,12}$/.test(this.upwd)){
        this.$dialog.alert({
          message:"密码错误"
        })
        return;
        }
      var url="login";
      var obj={uname:this.uname,upwd:this.upwd};
      this.axios.get(url,{params:obj})
      .then(res=>{
        if(res.data.code<0){
          //登录失败
          this.$dialog.alert({
            message:"登录失败"
          })
        }else{
          //登录成功
           this.$router.push("/");
           localStorage.setItem("key","登录成功");
        }
      })
    },
    //注册
    register(){
      if(this.rupwd!==this.rupwd2){
        this.$dialog.alert({
          message:"请输入相同密码"
        })
        return;
      }
      var url="/register";
      var obj={runame:this.runame,rupwd:this.rupwd}
      this.axios.post(url,obj)
      .then(res=>{
        if(res.data>0){
          this.$dialog.alert({
            message:"注册成功"
          });
        }
      })
      .catch(error=>{
        console.log(error);
      })
    },
    toast(index){
      if(index==0){
       this.$toast('用户协议')
    } else{
      this.$toast('隐私协议')
    }
  },
  //关闭按钮
    close(){
      this.$router.push("/")
    },
    // 动画切换
    change(i){
      if(i==0){
        this.imgURL="2.png"
      }else if(i==1){
        this.imgURL="3.png"
      }else{
        this.imgURL="1.png"
      }
    }
  },

}
</script>
<style scoped>
  .login{
    position:fixed;
    top:0;
    left:0;
    right:0;
    bottom:0;
    width:100%;
    background-image:url("../assets/img/bak1.jpg");
    background-repeat:no-repeat;
    background-size:100% 100%;
    background-attachment:fixed;
  }
  .loginBox{
    display: flex;
    align-items:center;
    justify-content:center;
    position:fixed;
    opacity:0.95;
    top:0;
    left:0;
    right:0;
    bottom:0;
    z-index:500;
  }
  .loginAll{
    position:relative;
    padding:2rem;
    width:26.5rem;
    max-width:90%;
    height:80%;
    font-size:1.2rem;
    background-color:#fff;
    border-radius:8px;
    box-sizing:border-box;
  }
  .loginTab{
    width:90%;
    margin:0 auto;
    text-align:center;

  }
  .van-button{
    width:90%;
    margin-top:1.5rem;
  }
  .loginTab2{
    width:90%;
    margin:0 auto;
  }
  .login_p{
    line-height:1rem;
    color: #767676;
    font-size:1rem;
  }
  .login_p_a{
    color:blue;
  }
  .closeButton{
    position:absolute;
    right:1rem;
    top:0.4rem;
  }
  img{
    position:absolute;
    top:1rem;
    left:50%;
    width:4rem;
    z-index: 100;
    transform:translate(-50%,-40%);
  }
</style>
