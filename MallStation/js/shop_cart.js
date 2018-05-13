//点击勾选图片显示对号
$('.col_width_1 div').click(function(){
    $(this).find('.mark').toggle();
});
//页面加载时调用计价系统
pricing();
//当勾选商品是调用一次计价系统
$('tbody .col_width_1 div').click(function(){
    Allselect();
    pricing();
});
//当勾选全选时，让所有商品都选上
$('thead .col_width_1 div').click(function(){
    var state = $(this).find('.mark').is(':hidden');
    if(state){
        $('tbody .col_width_1 div .mark').css('display','none');
    }else{
        $('tbody .col_width_1 div .mark').css('display','block');
    }
    pricing();
});

//删除商品
$('tbody .col_width_9 span').click(function(){
    if(confirm('您确定要删除么？')){
        $(this).parent('tr').remove();
        Allselect();
    }
    pricing();
});

//计价系统 pricing system
function pricing(){
    //单价
    var price = $('tbody .col_width_8 span i');
    //数量
    var num = $('tbody .col_width_7 div input');
    //总价
    var sum = 0;
    var total = [];
    $('tbody .col_width_1 div .mark').each(function(i){
        total[i]=(price[i].innerHTML*num[i].value).toFixed(2);
        if($(this).is(":visible")){
            sum+=parseFloat(total[i]);
        }
    });
    //将总价插入到HTML页面中
    $('section .settlement ul .payable b').text(sum);
    $('section .settlement ul .totals b').text(sum);
}

//判断是否勾选全选
function Allselect(){
    var len = $('table tbody tr').length;
    var show = $('tbody tr').find('.mark').filter(':visible').length;
    if(len == show){
        $('thead .col_width_1 div .mark').css('display','block');
    }else{
        $('thead .col_width_1 div .mark').css('display','none');
    }
}