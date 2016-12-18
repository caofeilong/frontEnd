$(document).ready(function () {

    var timer = null;
    var index = 0;

    var mg = $("#focus img");

    var nvbs = $("#navBra a");

    var len = mg.length;

    function play(n) {


        mg.eq(n).fadeIn(1000).siblings("img").fadeOut(1000);

        nvbs.eq(n).addClass('active').siblings("a").removeClass('active');
        //addClass('')          添加样式
        //removeClass('')       移除样式        移除它本身之外的元素。。
    }

    // eq.(n)   取得mg中的值  n为下标。
    //fadeIn(200)   渐入（200）  用200毫秒渐入
    //fadeOut(200)  渐出（200）  用200毫秒渐它本身之外的元素。
    //siblings(" ")  除了我之外的，我的兄弟姐妹




    //setInterval()  每隔2000毫秒都会执行一次    循环执行
    timer=setInterval(function () {
        index++;
        play(index);
        if (index == len) {        //如果index的值等于mg.length数组的长度，是使index归零
            index = 0;
        }
    }, 2000);
    //setTimeout()  2000毫秒后执行     * 执行一次


    $(".left").click(function() {
        index--;
        if (index < 0) {        //如果index的值等于mg.length数组的长度，是使index归零
            index = len-1;
        }
        play(index);
    });

    $(".right").click(function() {
        index++;
        if (index == len) {        //如果index的值等于mg.length数组的长度，是使index归零
            index = 0;
        }
        play(index);
    });


    $("#focus").hover(
        function(){
            clearInterval(timer);
        },function(){
            timer= setInterval(function () {
                index++;
                play(index);
                if (index == len) {        //如果index的值等于mg.length数组的长度，是使index归零
                    index = 0;
                }
            }, 2000);
        }
    )
})



