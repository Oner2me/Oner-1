//点击勾选图片显示对号
$('.col_width_1 div').click(function(){
    $(this).find('.mark').toggle();
});
pricing();


//订单总额
var totals = $('.settlement ul .totals b');
//本次应付
var payable = $('.settlement ul .payable');
console.log();
//计价系统 pricing system
function pricing(){
    //单价
    var price = $('tbody .col_width_8 span i');
    //数量
    var num = $('tbody .col_width_7 div input');
    //总价
    var sum = 0;
    //总数
    var count = 0;
    var total = [];
    $('tbody .col_width_1 div .mark').each(function(i){
        total[i]=(price[i].innerHTML*num[i].value).toFixed(2);
        if($(this).is(":visible")){
            sum+=parseFloat(total[i]);
            count+=parseFloat(num[i]);
        }
    });
    console.log(sum);
    console.log(count);
    //$("#id").is(":hidden")
}