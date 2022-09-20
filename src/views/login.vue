<template>
    <div class="bg">
        <nav class="nav">
            <div class="nav_left">
                <img class="head_img" src="../assets/img/head.jpg" alt="哎呀,出错了">
                <div>欢迎来到我的主页 (主页建设中...)</div>
            </div>
            <div class="icons">
                <a href="https://blog.csdn.net/m0_67948827"><img src="../assets/img/icon/favicon(csdn).ico"
                        alt="哎呀,出错了"></a>
                <a href="https://gitee.com/more-coal"><img src="../assets/img/icon/favicon(gitee).ico" alt="哎呀,出错了"></a>
                <a data-email="hj975015584@163.com" href="mailto:hj975015584@163.com"><img class="email_icon"
                        src="../assets/img/icon/email.jpeg" alt="哎呀,出错了"></a>
                <a href="https://github.com/Or-Coal"><img src="../assets/img/icon/favicon.ico" alt="哎呀,出错了"></a>
            </div>
        </nav>
<div class="text_box">
    <div class="text_left">青山不改 绿水长流 我们来日方长<div class="text_right">----祝大家前程似锦</div></div>
</div>
    </div>
</template>
<script>
export default {
}
</script>
<style lang='less' scoped>
.bg {
    background-image: url(../assets/img/bg.jpg);
    height: 100vh;
    background-size: cover;
    .text_box{
        position: relative;
        padding: 6px;
        width: 300px;
        height: 60px;
        background-color: black;  
        opacity: 0.4; 
        color: white;
        top: 60%;
        left: 40%;
        .text_right{
            text-align: right;
        }
    }
    .nav {
        width: 100vw;
        background-color: white;
        height: 5vh;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .nav_left {
            display: flex;
            justify-content: space-between;
        }

        .head_img {
            width: 30px;
            height: 30px;
            margin-right: 10px;
            margin-left: 5px;
        }

        .icons {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .icons img {
            width: 20px;
            margin-top: 8px;
            margin-right: 36px;
        }
    }
}
</style>
