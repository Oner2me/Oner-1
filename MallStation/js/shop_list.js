//轮播图
//定义变量
var i = 0;
var li_length = $('body').width();
var li_first = $('.banner ul li:first-child');
var ul_Interval = 1000;
var Timer = null;
var Interval = 1800;

//克隆
$('.banner ul').append(li_first.clone());
//点击下边小圆点切换
$('.banner ol li').click(function(){
    i=$(this).index();
    $('.banner ul').animate({'left':-i*li_length},ul_Interval);
    $('.banner ol li').eq(i).addClass('on').siblings().removeClass('on');
});
//重新统计下图片的数量
var lengths = $('.banner ul li').length;
//点击右边箭头切换
$('.banner .right').click(function(){
    i++;
    if(i==lengths){
        i=1;
        $('.banner ul').css('left',0);
    }
    $('.banner ul').animate({'left':-i*li_length},ul_Interval);
    if(i==lengths-1){
        $('.banner ol li').eq(0).addClass('on').siblings().removeClass('on');
    }else{
        $('.banner ol li').eq(i).addClass('on').siblings().removeClass('on');
    }
});
//点击左边箭头切换
$('.banner .left').click(function(){
    if(i==0){
        i=lengths-1;
        $('.banner ul').css('left',-i*li_length);
    }
    i--;
    $('.banner ul').animate({'left':-i*li_length},ul_Interval);
    $('.banner ol li').eq(i).addClass('on').siblings().removeClass('on');
});
//添加定时器
function play(){
    Timer = setInterval(function(){
        $('.banner .right').trigger('click');
    },Interval);
}
function stop(){
    clearInterval(Timer);
}
//鼠标移上banner图移除定时器
$('.banner').hover(function(){
    stop();
    $('.banner span').show();
},function(){
    play();
    $('.banner span').hide();
});
play();

//点击所有商品分类实现下拉效果
$('header .bottom dl dt').click(function(){
    $(this).next().slideToggle(1000);
});


//左侧导航分类中点击下啦效果
$('#category dl').on('click',function(){
    if($(this).hasClass('unfold')){
        $(this).removeClass('unfold').find('dd').slideUp(500);
    }else{
        $(this).addClass('unfold').find('dd').slideDown(500);
    }
});
