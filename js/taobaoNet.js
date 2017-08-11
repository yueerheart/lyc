/**
 * Created by 兜兜 on 2017/6/5.
 */

$(function(){

    /**
     * 品质生活
     */
    $(".qualityC1").mouseover(function () {
        $(this).css("outline","1px solid #f40");
    }).mouseout(function () {
        $(this).css("outline","1px solid #f1f1f1");
    });
    $(".qualityC2").mouseover(function () {
        $(this).css("outline","1px solid #f40");
    }).mouseout(function () {
        $(this).css("outline","1px solid #f1f1f1");
    });

    $(".qualityC1").find("article").find("div").mouseover(function () {
        $(this).find("img").css("opacity","0.8");
        $(this).find("strong").css("color","#f40");
        $(this).find("span").css("color","#f40");
    }).mouseout(function () {
        $(this).find("img").css("opacity","1");
        $(this).find("strong").css("color","black");
        $(this).find("span").css("color","black");
    });


    $(".qhi-er").mouseenter(function () {
        $(this).find(".qhi").fadeIn();

    }).mouseleave(function () {
        $(this).find(".qhi").fadeOut();

    });
    /**
     * 专业
     */
    $(".shihuiC1").mouseover(function () {
        $(this).find(".shihuiC1-r").find(".shihuiC1-img2").css("opacity","0.75");
    }).mouseout(function () {
        $(this).find(".shihuiC1-r").find(".shihuiC1-img2").css("opacity","1");
    });

    $(".shihuiC1-div").mouseover(function () {
        $(this).find(".shihuiC1-div-r").find(".shihuiC1-img2").css("opacity","0.75");
    }).mouseout(function () {
        $(this).find(".shihuiC1-div-r").find(".shihuiC1-img2").css("opacity","1");
    });

    $(".shi-er").mouseenter(function () {
        $(this).find(".shi").fadeIn();

    }).mouseleave(function () {
        $(this).find(".shi").fadeOut();

    });




});