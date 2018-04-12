
$(function(){
    $(document).bind('mousemove',function(e){
        $('#text').text('x轴坐标：'+ e.pageX+','+'Y轴坐标'+ e.pageY);
    });
    $('.a1').click(function(e){
        e.preventDefault();
    });
});
