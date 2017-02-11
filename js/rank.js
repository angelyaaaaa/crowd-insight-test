var rankChart = {
	data : null,
	container : null
}

rankChart.draw = function(data,$container,date_str) {

	rankChart.container = $container;
	rankChart.data = data;

	var dateItemIndex = 0;
	for(var i in rankChart.data){
		if(date_str == rankChart.data[i].datetime)
			dateItemIndex = i;
	}

	rankChart.container.empty();
	rankChart.container.append("<table id='rank-table'></table>");
	var $table = rankChart.container.find('#rank-table');
	$table.append('<thead> <tr> <th>排名</th> <th>粉絲專頁</th> <th>PO文</th> <th>互動</th> </tr> </thead>');
	$table.append('<tbody></tbody>');
	var $tbody = $table.find('tbody');

	if(rankChart.data[dateItemIndex].total_count!=0){
		for(var i in rankChart.data[dateItemIndex].objects){
			var index = parseInt(i)+1;
			$tbody.append('<tr>');
			$tbody.append('<td width="5%">'+index+'</td>');
			$tbody.append('<td width="25%"><a target="_blank" class="page_title" href="'+rankChart.data[dateItemIndex].objects[i].page_url+'"><img src="'+rankChart.data[dateItemIndex].objects[i].page_image+'" />'+rankChart.data[dateItemIndex].objects[i].page_name+'</a></td>');
			$tbody.append('<td><a target="_blank" href="'+rankChart.data[dateItemIndex].objects[i].post_url+'">'+rankChart.data[dateItemIndex].objects[i].post_message+'</a></td>');
			$tbody.append('<td width="15%"><div>評論：'+rankChart.data[dateItemIndex].objects[i].comment_count+'</div></td>');
			$tbody.append('</tr>');
		}
	}

}

rankChart.dateItemClickHandler=function($date_item) {
	rankChart.draw(rankChart.data,rankChart.container,$date_item.text());
}

