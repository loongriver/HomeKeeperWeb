// 检测是否支持File API
if (window.File && window.FileReader && window.FileList && window.Blob) {
    //  支持
} else {
    alert('不支持');
}

// 图片预览函数，当图片输入控件改变时预览图片
$("#img_input").change(function(e){
    var file = e.target.files[0]; //获取图片资源

    // 只选择图片文件
    if (!file.type.match('image.*')) {
        alert("不是图片");
        return false;
    }

    var reader = new FileReader();

    reader.readAsDataURL(file); // 读取文件
    
    // 渲染文件
    reader.onload = function(arg) {
        
        var img = '<img class="preview" src="' + arg.target.result + '" alt="preview"/>';
        //$(".preview_box").empty().append(img);
        $(".preview").append(img);
    }
})

$(".delete_img").click(function(e){
    // alert("true");
    //$(".preview_box").remove();
    alert($(this).parent().html());
    $(this).parent().remove();
})
