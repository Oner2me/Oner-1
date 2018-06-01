var C1,C2,C3,C4,C5;

// 验证中文名称
$("#username").blur(function(){
    var username = $("#username");
    var myreg = /^[\u4E00-\u9FA5]{2,10}$/;
    if(!myreg.test(username.val())){
        username.css({'box-shadow':'0 0 3px 2px #FF84B5'}).attr('placeholder','命名有误，请输入2-10个中文').val('');
        return false;
    }else{
        username.css({'box-shadow':'none'});
        C1=true;
        return true;
    }
});
//密码验证
$("#password").blur(function(){
    var myreg = /^[a-zA-Z0-9\-]{6,20}$/;
    var password = $(this);
    if(!myreg.test(password.val())){
        password.css({'box-shadow':'0 0 3px 2px #FF84B5'}).attr('placeholder','密码输入格式不对,请按提示格式重新输入').val('');
        return false;
    }else{
        C2=true;
        password.css({'box-shadow':'none'});
        return true;
    }
});
//确认密码验证
$("#repassword").blur(function(){
    var password = $("#password");
    var repassword = $("#repassword");
    if(!password.val()){
        repassword.css({'box-shadow':'0 0 3px 2px #FF84B5'}).attr('placeholder','密码不能为空');
    }else if(password.val() != repassword.val()){
        repassword.css({'box-shadow':'0 0 3px 2px #FF84B5'}).attr('placeholder','您输入的密码不对,请重新输入').val('');
        return false;
    }else{
        C3=true;
        repassword.css({'box-shadow':'none'});
        return true;
    }
});
//邮箱验证
$("#email").blur(function(){
    var email = $(this);
    var myreg = /^([\.a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-])+/;
    if(!email.val()){
        email.css({'box-shadow':'0 0 3px 2px #FF84B5'}).attr('placeholder','邮箱不能为空！');
        return false;
    }else if(!myreg.test(email.val())){
        email.css({'box-shadow':'0 0 3px 2px #FF84B5'}).attr('placeholder','请输入有效的邮箱地址！').val('');
        return false;
    }
    C4=true;
    email.css({'box-shadow':'none'});
    return true
});
//手机号验证
$("#phone").blur(function(){
    var phone = $(this);
    var myreg = /^1[34578]\d{9}$/;
    if(!myreg.test(phone.val())){
        phone.css({'box-shadow':'0 0 3px 2px #FF84B5'}).attr('placeholder','手机号码有误，请重填').val('');
        return false;
    }else{
        C5=true;
        phone.css({'box-shadow':'none'});
        return true;
    }
});
//必须同意
$('form .clear div').click(function(){
    $(this).children('img').toggle();
});
//单击注册，调用所有验证方法
/*$('section div form .reg').click(function(){
    var clear = $('form .clear div img').is(':visible');
    if(C1&&C2&&C3&&C4&&C5&&clear){
        return true;
    }else{
        $("#username").trigger('blur');
        $("#password").trigger('blur');
        $("#repassword").trigger('blur');
        $("#email").trigger('blur');
        $("#phone").trigger('blur');
        return false;
    }
});*/

$('#submit').click(function(e){
    e.preventDefault();
    var data = $('#form1').serializeArray();
    data = unaaa(data);
    var storageUsers = LsyStorage.getItem('users');
    storageUsers = storageUsers || {};
    if(storageUsers[data.username]){
        alert('当前用户已经注册');
        return false;
    }
    storageUsers[data.username] = data;
    LsyStorage.setItem('users',storageUsers);
});
function unaaa(data){
    var obj={};
    $.each(data,function(key,val){
        var _index = val.name;
        var _val = val.value;
        obj[_index] = _val;
    });
    return obj;

}

function errorStyle(target,msg){
    target.css({'box-shadow':'0 0 3px 2px #FF84B5'}).attr('placeholder',msg);
}






