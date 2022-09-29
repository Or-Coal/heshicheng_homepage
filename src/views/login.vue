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
            <div class="text_left"><span>青山不改 绿水长流 我们来日方长</span>
                <div class="text_right">
                    <div>——祝大家前程似锦</div>
                </div>
            </div>
        </div>
    </div>
    <div class="bottom">
        <footer class="footer">
            <div>Designed & Powerd by <a href="http://heshicheng.cn/" target="_blank">heshicheng</a></div>
            <div>Copyright© 2022 贺金</div>
            <div><a href="https://beian.miit.gov.cn/" target="_blank">鲁ICP备2022030877号</a></div>
        </footer>
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
    width: 98.57vw;
    overflow-x: hidden;
    text-align: center;

    .text_box {
        padding: 0.4vw;
        width: 18vw;
        min-width: 246px;
        background-color: black;
        opacity: 0.4;
        color: white;
        display: inline-block;
        margin-top: 68vh;
        .text_right {
            display: inline-block;

            div {
                background-image: -webkit-linear-gradient(bottom, red, #fd8403, yellow);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
            }
        }
    }

    .nav {
        width: 100vw;
        background-color: white;
        height: 5.33vh;
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        
        .nav_left {
            display: flex;
            justify-content: space-between;
        }

        .head_img {
            width: 2vw;
            height: 2vw;
            margin-right: 0.66vw;
            margin-left: 0.33vw;
            min-width: 30px;
            min-height: 30px;
        }

        .icons {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .icons img {
            width: 1.33vw;
            margin-top: 0.53vw;
            margin-right: 2.4vw;
            min-width: 20px;
            min-height: 8px;
        }
    }
}

.bottom {
    position: relative;
    height: 13vh;
    box-sizing: border-box;
    border: none;
    text-align: center;
    line-height: 30px;
    .footer {
        width: 100%;
        position: absolute;
        bottom: 0;
      a{
        text-decoration: none;
      }
    }
}
</style>
