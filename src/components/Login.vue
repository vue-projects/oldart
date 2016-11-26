<template>
  <form>
    <img class="bg" src="../assets/bg1.jpeg" />
    <div class="main">
      <div class="div01">
        <img src="../assets/happy.png" width="513" height="249">
      </div>
      <div class="div02">
        <div class="logo">
          <img src="../assets/logo.png" width="362" height="70"></div>
          <div class=" div03">
            <div class="login">
              <div class="yh">
                用 户 名：
					           <label>
                       <input name="txtUserName" value="taiheerp888" id="txtUserName" class="in-dlk" type="text">
                     </label>
              </div>
            <div class="yh">
                          密&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;码：
						<label>

                            <input name="txtUserPass" id="txtUserPass" class="in-dlk" type="password">
                        </label>
                        </div>
                        <div>
                            <input name="btnLogin" value="登陆" onclick="return sub();" id="btnLogin" class="btn" type="submit"></div>
                    </div>
                    <div class=" trai">
                        <div class="tanchu"></div>
                    </div>
                </div>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      form: {}
    }
  }
}
</script>
<style scope lang="less">
  img.bg {
    min-height: 100%;
    min-width: 1024px;

    width: 100%;
    height: auto;

    position: fixed;
    top: 0;
    left: 0;

    z-index: -1000;
  }
  .main {
    width: 1000px;
  }
  .div01 {
    width: 513px;
    margin-top: 200px;
    float: left;
    margin-right: 27px;
  }
  .div02 {
    width: 460px;
    float: left;
  }
  .logo {
    width: 460px;
    clear: both;
    margin-top: 160px;
  }
  .div03 {
    width: 460px;
    margin-top: 10px;
    clear: both;
  }
  .login {
    width: 340px;
    height: 150px;
    float: left;
    background-color: #ad1703;
    padding-top: 30px;
    padding-left: 20px;
    padding-right: 0px;
  }
  .trai {
    width: 31px;
    height: 249px;
    float: left;
    background: url(../assets/triangle.png) -2px -8px no-repeat;
  }
  .tanchu {
    width: 500px;
    height: 214px;
    position: relative;
    left: 29px;
    top: 15px;
    background-color: #ad1703;
  }
  .yh {
    width: 100%;
    height: 27px;
    line-height: 27px;
    clear: both;
    padding-bottom: 15px;
    color: #fff;
    font-size: 16px;
    font-family: "微软雅黑";
    clear: both;

    input {
      width: 238px;
      height: 27px;
      background-color: #fff;
      border: none;
      padding-left: 3px;
      font-size: 16px;
      font-weight: bold;
      font-family: "微软雅黑";
      color: #666;
    }
  }

  .btn {
    width: 320px;
    height: 35px;
    line-height: 35px;
    background-color: #df6400;
    text-align: center;
    font-size: 20px;
    font-family: "微软雅黑";
    color: #fff;
    border: none;
    cursor: pointer;
  }
</style>
