<template>
  <div class="footer">
    <div class="footer-logo">
      <img src="/imgs/logo-footer.png" alt="">
      <p>小米商城</p>
    </div>
    <div class="footer-link">
      <a href="https://www.imooc.com/t/1343480" target="_blank">河畔一角主页</a><span>|</span>
      <a href="https://coding.imooc.com/class/113.html" target="_blank">Vue全栈课程</a><span>|</span>
      <a href="https://coding.imooc.com/class/236.html" target="_blank">React全家桶课程</a><span>|</span>
      <a href="https://coding.imooc.com/class/343.html" target="_blank">微信支付专项课程</a><span>|</span>
      <a href="https://coding.imooc.com/class/392.html" target="_blank" >配套课程:java专用型支付+电商平台双系统实战</a>
    </div>
    <div class="copy-right">Copyright ©2020 <span class="domain">mi.futurefe.com</span> All Rights Reserved</div>
  </div>
</template>
<script>
export default {
  name:'nav-footer'  //加载组件时引入的值
}
</script>
<style lang="scss">
  .footer{
    height: 234px;
    border-top: 4px solid ff6600;
    background-color: #333;
    color: #999;
    font-size: 16px;
    text-align: center;
    border-top: 1px solid #333;
    .footer-logo{
      margin-top: 46px;
      margin-bottom: 31px;
      img{
        width: 53px;
        height: 36px;
        margin-bottom: 13px;

      }
    }
    .footer-link{
      a{
        color: #999;
        display: inline-block;
      }
      span{
        display: inline-block;
        margin:0 10px;
      }
    }
    .copy-right{
      margin-top:13px ;
      .domain{
        color:#ff6000;
      }
    }
  }
</style>
