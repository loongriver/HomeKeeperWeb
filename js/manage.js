function search() {
  var userTdList = $(".user");
  var user = $("#search_input").val();
  var i;
  for (i = 0; i < userTdList.length; i++) {
    if (userTdList[i].innerHTML.toString() == user) {

      //将tr的颜色改回黑色
      setTrColor();
      //将目标行标为红色
      userTdList[i].parentNode.style.color = "red";

      //将目标行置于视野中间
      var table_module = $("#table_content");//获得整个表
      var table_height = table_module.height();//获得整个表的高度
      var height = $("#check_height").height();//获得每一行的高度
      table_module.scrollTop(height * i - table_height / 2);


      return true;
    }
  }
  alert("未找到该用户，请重新输入！");
}

function setTrColor(){
  var trList = $("tr");
  var i;
  for (i = 0; i < trList.length ; i ++){
    trList[i].style.color = "black";
  }
}

