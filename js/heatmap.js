var heatMapChart = {
}

heatMapChart.unbindAll = function(){
	d3.select("#heatmap svg")
	  .selectAll("li")
	  .on('click',null);
}

heatMapChart.dataTransformer = function(data){

	var dataObj = {};
	var days = {};
	dataObj.week = [];
	dataObj.media = [];
	var uniqueNames = [];

	$.each(data, function(i, el){
		$.each(data[i].media, function(j,ele){
			var name = data[i].media[j].name;
			if(days[name] == undefined && name!='empty'){
				days[name] = [];
			}
			if($.inArray(name, uniqueNames) === -1) 
				uniqueNames.push(name);
		});
	});

	if(uniqueNames.length == 1 && uniqueNames[0] == 'empty'){
		return undefined;
	}

	var empty_index = uniqueNames.indexOf('empty');
	if(empty_index > -1 )
		uniqueNames.splice(empty_index,1);

	for(var i = 0 ; i< data.length ; i++){
		//insert week_date
		dataObj.week.push(data[i].datetime);

		var uniqueNames_clone = uniqueNames.slice();
		for(var j = 0 ; j < data[i].media.length ; j++){
			var name = data[i].media[j].name;
			var index = uniqueNames_clone.indexOf(name);
			if(index > -1 )
				uniqueNames_clone.splice(index,1);
			if(name!='empty')
				days[name].push(data[i].media[j]);
		}

		// the channel not in this date, so add zero object
		for(var j = 0 ; j < uniqueNames_clone.length ; j++){
			var obj = {};
			obj.name = uniqueNames_clone[j];
			obj.articles = [];
            obj.count = 0;
            obj.day = 0;
            obj.score = 0;
            days[uniqueNames_clone[j]].push(obj);
		}
	}

	dataObj.media = $.map(days, function(value, index) {
		var k = {};
		k.days = value;
		k.name = index;
	    return k;
	});

	return dataObj;
}

heatMapChart.draw = function(data,$container) {

	data = heatMapChart.dataTransformer(data);

	$container.empty();
    $('<div class="sentiment-mean"> <div class="sentiment-circle sentiment-affirmative"><i class="fa fa-smile-o"></i></div> <div class="sentiment-line"></div> <div class="sentiment-circle sentiment-pessimistic"><i class="fa fa-frown-o"></i></div></div>')
        .insertBefore($container);

    if(data == undefined){
    	$container.append('<h4 class="nonInfo text-center"><i class="fa fa-exclamation-circle"></i>區間內查無資料</h4>');
    	return;
    }else{
    	$container.append('<div id="heatmap" class="col-lg-7"></div>');
    	$container.append('<div class="col-lg-5" id="heatTable"><table><thead><tr><th>＃</th><th>新聞標題</th></tr></thead><tbody></tbody></table></div>');
    }

	var $target = $("#heatmap");
	var heatmap_data = data;
	var week = data.week;
	var media = data.media;

	//week row
	var heatmapDays = d3.select("#heatmap")
		.append("ul")
		.attr('class', 'heatmap-days clearfix');

	heatmapDays.append("div").attr('class', 'col-first');

	heatmapDays.selectAll('li')
	.data(week)
	.enter().append('li')
	.html(function(d){
		return d.substr(5);
	});

	//media row
	var colorLow = 'rgb(218, 87, 87)',
        colorMed = '#DADDF0',
        colorHigh = 'steelblue';

    var colorScale = d3.scale.linear()
        .domain([-1, 0, 1])
        .range([colorLow, colorMed, colorHigh]);

	var heatmapMediaArea = d3.select('#heatmap')
		.append("div")
		.attr('class', 'heatmapMediaArea');

	var mediaRow = heatmapMediaArea.selectAll('ul')
		.data(media)
		.enter().append('ul')
		.attr('class', 'heatmap-media clearfix');

	mediaRow.data(media).append('div')
	.attr('class', 'col-first')
	.html(function(d){
		return d.name;
	});

	var isActive = false;
	//draw media column
	mediaRow.data(media).selectAll('li')
	.data(function(d){
		return d.days;
	})
	.enter().append('li')
	.classed('media-col', true)
	.classed('active', function(d,i){
		if(d.day == 0 && isActive == false){
			isActive = true;
			return true;
		}
	})
	.html(function(d){
		return d.count;
	})
	.style("background-color", function(d) {
    	return colorScale(d.score);
    })
    .style("cursor", "pointer")
    .on('click', function(d) {
    	d3.selectAll('.media-col').classed('active', false);
    	d3.select(this).classed('active', true);

    	$("#heatTable table tbody").empty();
    	var index = 1;
    	for(var ii in d.articles){
    		$("#heatTable table tbody").append('<tr><td>'+index+'</td><td><a href="'+d.articles[ii].url+'" target="_blank">'+d.articles[ii].name+'</a></td></tr>');
    		index++;
    	}
    });

    var index = 1;
    $("#heatTable table tbody").empty();
	for(var i in media[0].days[0].articles){
		var articles = media[0].days[0].articles;
		$("#heatTable tbody").append('<tr><td>'+index+'</td><td><a href="'+articles[i].url+'" target="_blank">'+articles[i].name+'</a></td></tr>');
		index++;
	}

}