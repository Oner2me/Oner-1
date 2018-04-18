var i=0;
var ul = $('.banner ul');
var ol_li = $('.banner ol li');
var lis = $('.banner ul li');
var li_width = lis.width();
var Timer=null;
var Interval=2000;
//克隆第一张图片添加到ul的子集后面
ul.append(lis.first().clone());
//给ol下的li添加点击事件
$('.banner ol li').click(function(){
    i = $(this).index();
    ul.animate({'left':-i*li_width},300);
    $(this).addClass('on').siblings().removeClass('on');
});
//下一页
var lis_length = $('.banner ul li').length;
$('.banner .right').click(function(){
    i++;
    if(i==lis_length){
        i=1;
        ul.css('left',0);
    }
    ul.animate({'left':-i*li_width},300);
    if(i==lis_length-1){
        ol_li.eq(0).addClass('on').siblings().removeClass('on');
    }else{
        ol_li.eq(i).addClass('on').siblings().removeClass('on');
    }
});
//上一页
$('.banner .left').click(function(){
    if(i==0){
        i=lis_length-1;
        ul.css('left',-i*li_width);
    }
    i--;

    ul.animate({'left':-i*li_width},300);
    ol_li.eq(i).addClass('on').siblings().removeClass('on');
});
//定时器
function play(){
    Timer = setInterval(function(){
        $('.banner .right').trigger('click');
    },Interval);
}
function stop(){
    clearInterval(Timer);
}
//鼠标移上停止轮播，移开开始轮播
$('.banner').hover(stop,play);

play();