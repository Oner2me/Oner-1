//鼠标移上缩略图更改图片
$('section .parameter .picture .list ul li').mouseover(function(){
    //获取当前li下img的src属性
    var src = $(this).children('img').attr('src');
    //将属性赋值给另两个div
    $('section .parameter .picture .magnifier img').attr({'src':src,'alt':src});
    $('section .parameter .picture .big img').attr({'src':src,'alt':src});
});
//缩略图列表左右点击事件
var i=0;
var li_length = $('section .parameter .picture .list ul li').length;//获取LI数量
var ul  =  $('section .parameter .picture .list ul');
var li_width = $('section .parameter .picture .list ul li').width()+14;
//右点击
$('section .parameter .picture .list .right').click(function(){
    i++;
    if(i<=li_length-4){
        ul.animate({left:-i*li_width},300)
    }else{
        i=li_length-4;
    }
    var src = $('section .parameter .picture .list ul li').eq(i).children('img').attr('src');
    $('section .parameter .picture .list ul li').eq(i).addClass('current').siblings().removeClass('current');
    $('section .parameter .picture .magnifier img').attr({'src':src,'alt':src});
    $('section .parameter .picture .big img').attr({'src':src,'alt':src});

});
//左点击
$('section .parameter .picture .list .left').click(function(){
    i--;
    if(i>=0){
        ul.animate({left:-i*li_width},300)
    }else{
        i=0;
    }
    var src = $('section .parameter .picture .list ul li').eq(i).children('img').attr('src');
    $('section .parameter .picture .list ul li').eq(i).addClass('current').siblings().removeClass('current');
    $('section .parameter .picture .magnifier img').attr({'src':src,'alt':src});
    $('section .parameter .picture .big img').attr({'src':src,'alt':src});
});
//放大镜功能
$('section .parameter .picture .magnifier').mousemove(function(event){
    var e = event||window.event;
    var x = e.clientX-$(this).get(0).getBoundingClientRect().left;
    var y = e.clientY-$(this).get(0).getBoundingClientRect().top;
    var Left=x-116;
    var Top=y-106;
    if (Left<0){
        $('section .parameter .picture .magnifier span').css('left',0);
        $('section .parameter .picture .big img').css('left',0);
    }else if(Left>232){
        $('section .parameter .picture .magnifier span').css('left',232);
        $('section .parameter .picture .big img').css('left',-464);
    }else {
        $('section .parameter .picture .magnifier span').css('left',Left);
        $('section .parameter .picture .big img').css('left',-Left*2);
    }
    if (Top<0){
        $('section .parameter .picture .magnifier span').css('top',0);
        $('section .parameter .picture .big img').css('top',0);
    }else if(Top>212){
        $('section .parameter .picture .magnifier span').css('top',212);
        $('section .parameter .picture .big img').css('top',-424);
    }else {
        $('section .parameter .picture .magnifier span').css('top',Top);
        $('section .parameter .picture .big img').css('top',-Top*2);
    }
});

$('section .parameter .picture .magnifier').hover(function(){
    $('section .parameter .picture .magnifier span').fadeIn(50);
    $('section .parameter .picture .big').fadeIn(50);
},function(){
    $('section .parameter .picture .magnifier span').fadeOut(50);
    $('section .parameter .picture .big').fadeOut(50);
});