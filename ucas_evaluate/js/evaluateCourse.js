for (var i=88;i<132;i++)
{ 
    if($("input[name='item_"+i+"']")[0])
	{
		$("input[name='item_"+i+"']")[0].checked=true;
	}
}
$("input[name='item_90']")[2].checked=true;
$("input[name='radio_102']")[0].checked=true;
document.getElementById('item_97').value = "老师讲解耐心细致，课程内容实用。";
document.getElementById('item_98').value = "课程开设完全满足我的需求，没有更进一步的要求。";
document.getElementById('item_99').value = "平均每周再本课程上花费3小时时间。";
document.getElementById('item_101').value = "积极参与课程，认真思考，完成作业。";

