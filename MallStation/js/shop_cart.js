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
//添加商品数量
$('tbody .col_width_7 div .add').click(function(){
    var n=parseInt($(this).siblings('input').val());
    $(this).siblings('input').val(++n);
    pricing();
});
//减少商品数量
$('tbody .col_width_7 div .minus').click(function(){
   var n=parseInt($(this).siblings('input').val());
    --n;
    if(n<1){
        n=1;
    }
    $(this).siblings('input').val(n);
});
//手动改变input框中的数据
$('tbody .col_width_7 div input').change(function(){
    var value = $(this).val();
    var re=/^[0-9]*$/;
    if(!(re.test($(this).val()))||$(this).val()<1){
        $(this).val(1);
    }
    pricing();
});
//删除商品
$('tbody .col_width_9 span').click(function(){
    if(confirm('您确定要删除么？')){
        $(this).parents('tr').remove();
        Allselect();
    }else{
        return false;
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
    if(len == show && len != 0){
        $('thead .col_width_1 div .mark').css('display','block');
    }else{
        $('thead .col_width_1 div .mark').css('display','none');
    }
}

//清空购物车
$('section .settlement ul li:first-child span').click(function(){
    if(confirm('您确定删除所有商品么？')){
        $('tbody tr').remove();
        $('thead .col_width_1 div .mark').css('display','none');
        $('section .settlement ul .payable b').text('0');
        $('section .settlement ul .totals b').text('0');
    }else{
        return false;
    }
});

//去结算
$('section .settlement a').click(function(){
    var len = $('table tbody tr').length;
    var show = $('tbody tr').find('.mark').filter(':visible').length;
    if(len > 0 && show >0){
        return true;
    }else if(len > 0 && show == 0){
        alert('您的商品没有被选中，请勾选商品');
        return false;
    }else if(len==0){
        alert('您还没有商品，请去选购');
        return false;
    }
});