/**
 * yishenghuo
 * ---------------------------------------------
 * author 严蕊
 */

// 确认取消弹出框
$.dialog=function(params){
    var buttonHTML='';
    // 拼接buttonHTML
    $.each(params.buttons,function(name,obj){    
        buttonHTML += '<a href="#" class="dialog-btn">'+obj.name+'<span></span></a>';
        if(!obj.action){
            obj.action = function(){};
        }
    });
    var markup = '<div class="dialog-bg J-dialog"><div class="dialog-box"><div class="dialog-icon">'
    + '<img src="images/dialog-icon.png" width="66" height="66"></div>'
    + '<h3 class="dialog-title">'+params.title+'</h3><div class="dialog-bottom">'+buttonHTML+'</div></div></div>';
    $(markup).appendTo('.ysh-dialog').fadeIn();
    // 获取按钮名
    var buttons = $('.dialog-btn'),i = 0;
    $.each(params.buttons,function(name,obj){
        // 确定取消按钮
        buttons.eq(i++).click(function(){
            obj.action();
            $(".J-dialog").remove();
            return false;
        });
    });
}

// 下拉框
function dropdown(select,status,option){
    var selectWrap=select;
    var currentStatus=status;
    var option=option;
    $(selectWrap).on("click",function(){
        $(this).children(option).toggleClass("hid");
    });
    $(option+" "+"li").on("click",function(){
        $(this).parents(select).find(currentStatus).html($(this).text());
    })
}