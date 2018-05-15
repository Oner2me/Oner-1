var code = $('form .code');
var verti = vertify();
//打开页面生成一个随机数
code.text(verti);
//获取随机
code.click(function(){
    verti = vertify();
    $(this).text(verti);
});
//生成简单的4位随机数
function vertify(){
    var code = '';
    for(var i=0;i<4;i++){
        code+=Math.floor(Math.random()*10).toString();
    }
    return code;
}

//是否自动登录
$('form .clear div').click(function(){
    $(this).children('img').toggle();
});

$('#login').click(function(){
    //判断验证码是否正确
    var code = $('#code').val();
    if(!code){
        alert('验证码不能为空');
        return false;
    }else if(code != verti){
        alert('验证码输入有误');
        return false;
    }else{
        return true;
    }
});
