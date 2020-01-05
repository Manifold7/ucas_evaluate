for (var i=34;i<67;i++)
{ 
    if($("input[name='item_"+i+"']")[0])
	{
		$("input[name='item_"+i+"']")[0].checked=true;
	}
}
document.getElementById('item_43').value = "老师风趣幽默的讲课风格和扎实的课堂内容。";
document.getElementById('item_44').value = "老师的讲解满足我的期望，没有意见。";
document.getElementById("sb1").click();
