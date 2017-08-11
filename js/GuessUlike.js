/**
 * Created by Administrator on 2017/6/6.
 */
/**
 * Created by Administrator on 2017/6/6.
 */
$(function () {
    $(".guess_like_center ul li a img").lazyload({
        effect:"fadeIn",
    });
    $(".guess_like_center ul li").mouseover(function () {
        $(this).find('div').show();
    });
    $(".guess_like_center ul li").mouseout(function () {
        $(this).find('div').hide();
    });
    $(".guess_wrong").click(function () {
        $(this).parent().hide();
        var c=$(this).parent().parent().find('li');
        var r=parseInt(100*Math.random());
        $(this).parent().parent().append(c.eq(r).clone(true));
    });
    $(".guess_wrong_text").click(function () {
        $(this).parent().hide();
        var c=$(this).parent().parent().find('li');
        var r=parseInt(100*Math.random());
        $(this).parent().parent().append(c.eq(r).clone(true));
    });
    $(".guess_same").click(function () {
        window.open("jump/taobaohaohuo.html");
    });
});