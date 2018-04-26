//产品里面的样式
var lis =  $('.main .product ul li a');
$.each(lis,function(){
    $(this).find('img:eq(0)').css({'width':'300px','height':'370px'});
    $(this).find('span:eq(0)').css({'font-size':'18px','margin':'10px 0 6px'});
    $(this).find('span:eq(1)').css({'font-size':'14px','margin-bottom':'18px'});
});
$('.main .product ul li:nth-child(3n)').css('margin-right',0);
