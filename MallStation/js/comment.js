;(function($,win){
    var Star = function(selector,index) {
        this.star = $(selector);
        this.index = index;
        this.list = this.star.find('span');
        this.on = 'on';
        this.eq = '';

        this.hoverEvent();
        this.clickEvent();
        this.setStar(this.index);
    }

        $.extend(true,Star.prototype,{
            hoverEvent:function(){
                var _this = this;
                this.list.hover(function(){
                    _this.setStar($(this).index()-1);
                },function(){
                    _this.setStar(_this.index);
                });
            },
            clickEvent:function(){
                var _this = this;
                this.list.click(function(){
                    _this.index = $(this).index()-1;
                });
            },
            setStar:function(index){
                if(index<0){
                    this.list.removeClass(this.on);
                    this.star.find('i').css('display','none');
                }else{
                    this.eq = index;
                    this.list.eq(index).addClass(this.on).prevAll().addClass(this.on);
                    this.list.eq(index).nextAll().removeClass(this.on);
                    this.star.find('i').css('display','block');
                    this.star.find('i').text(Math.floor(100*(0.2*(this.eq+1)))+'%');
                }
            }
        });
        Star.init = function(obj,index){
            var _this = this;
            obj.each(function(key,item){
                new _this(item,index);
            });
        };
        win['Star'] = Star;
})(jQuery,window);
Star.init($('.star'),-1);
