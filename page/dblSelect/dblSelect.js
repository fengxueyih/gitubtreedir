
//Dom加载完成后开始执行这部分的代码

$(function(){

    //添加功能

    //点击单个添加
    $(".dbl_select .center_select .add").click(function(){
        var $option = $("#left_select option:selected"); //获取选中的项
        $option.appendTo("#right_select"); //追加给对方，同时移除left_select中的项目。用法要注意下。
    });

    //点击全部添加
    $(".dbl_select .center_select .addAll").click(function(){
        var $options = $("#left_select option"); //获取全部的项
        $options.appendTo("#right_select"); //追加给对方
    });

    //双击添加
    $("#left_select").dblclick(function(){ //绑定双击事件
        var $options = $("option:selected",this); //获取选中的项  注意用法
        $options.appendTo("#right_select"); //追加给对方
    });


    //移除功能

    //点击单个移除
    $(".dbl_select .center_select .remove").click(function(){
        var $option = $("#right_select option:selected"); //获取选中的项
        $option.appendTo("#left_select"); //追加给对方，同时移除left_select中的项目。用法要注意下。
    });

    //点击全部移除
    $(".dbl_select .center_select .removeAll").click(function(){
        var $options = $("#right_select option"); //获取全部的项
        $options.appendTo("#left_select"); //追加给对方
    });

    //双击移除
    $("#right_select").dblclick(function(){ //绑定双击事件
        var $options = $("option:selected",this); //获取选中的项  注意用法
        $options.appendTo("#left_select"); //追加给对方
    });

})