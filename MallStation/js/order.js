//点击所有商品分类实现下拉效果
$('header .bottom dl dt').click(function(){
    $(this).next().slideToggle(1000);
});