var wordCloudChart = {
	data : null,
	width : null,
	show_idx : 0
}

wordCloudChart.draw = function(data,$container) {
	wordCloudChart.data = [];

    for(var i in data){
        var obj =  {};
        obj.onedaycloud = data[i];
        wordCloudChart.data.push(obj);
    }

	var wordcloud_data = wordCloudChart.data;
	wordCloudChart.unbindAll();
    $container.empty();
    $container.append('<div class="col-lg-7" id="wordcloud"></div>');
    $container.append('<div class="col-lg-5"><table id="wordCloudTable"><thead><tr><th>#</th><th>新聞標題</th></tr></thead><tbody></tbody></table></div>');

    wordCloudChart.width = $("#wordcloud").width();

	wordCloudChart.startDraw(null,wordcloud_data[0].onedaycloud);
}

wordCloudChart.unbindAll = function(){
	d3.select("#wordcloud svg")
	  .selectAll("text")
	  .on('click',null)
	  .on('mouseover',null);
}

wordCloudChart.startDraw = function($date_item,data) {
	var wordcloud_data = data;
	if($date_item!=null){
		for(var i = 0 in wordCloudChart.data){
			if(wordCloudChart.data[i].onedaycloud.datetime == $date_item.text())
				wordcloud_data = wordCloudChart.data[i].onedaycloud;
		}
	}

    var colorLow = 'steelblue',
        colorMed = 'white',
        colorHigh = 'rgb(218, 87, 87)',
        width = wordCloudChart.width,
        show_idx = wordCloudChart.show_idx;

    var colorScale = d3.scale.linear()
        .domain([-1, 0, 1])
        .range([colorLow, colorMed, colorHigh]);

    var size = d3.scale.sqrt()
	    .domain([d3.min(wordcloud_data, function(d) {
	        return d.frequency;
	    }), d3.max(wordcloud_data, function(d) {
	        return d.frequency;
	    })])
	    .range([16, 80]);

	//wordCloud
    d3.layout.cloud().size([width, 300])
        .words(wordcloud_data
        	.map(function(d, i) {
            return {
                id: i,
                text: d.text,
                size: size(d.frequency),
                score: d.sentiment,
                articles:d.articles
            };
        }))
        .padding(5)
        .rotate(function() {
            return 0;
        })
        .font("Impact")
        .fontSize(function(d) {
            return d.size;
        })
        .on("end", draw)
        .start();

    $("#wordCloudTable tbody").empty();
    var index = 1;
	if(wordcloud_data.length != 0){
		for(var ii in wordcloud_data[show_idx].articles){
			$("#wordCloudTable tbody").append('<tr><td>'+index+'</td><td><a href="'+wordcloud_data[show_idx].articles[ii].url+'" target="_blank">'+wordcloud_data[show_idx].articles[ii].name+'</a></td></tr>');
			index++;
		}
	}

	function draw(words) {
    	var fill = d3.scale.category20();
    	wordCloudChart.unbindAll();
    	d3.select("#wordcloud svg").remove();
        d3.select("#wordcloud").append("svg")
            .attr("width", width)
            .attr("height", 300)
            .append("g")
            .attr("transform", "translate(400,150)")
            .selectAll("text")
            .data(words)
            .enter().append("text")
            .style("font-size", function(d) {
                return d.size + "px";
            })
            .style("cursor", "pointer")
            .style("font-family", "Impact")
            .style("fill", function(d, i) {
                return fill(i);
            })
            .attr("class", "keyword")
            .attr("text-anchor", "middle")
            .attr("transform", function(d) {
                return "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")";
            })
            .text(function(d) {
                return d.text;
            })
            .on("mouseover", function(dd) {
                d3.selectAll("text.keyword")
                    .style("stroke", "black")
                    .filter(function(d) {
                        return d.id != dd.id;
                    })
                    .style("stroke", "initial");
            })
            .on("click", function(d) {
                $("#wordCloudTable tbody").empty();
            	var index = 1;
            	for(var ii in d.articles){
            		$("#wordCloudTable tbody").append('<tr><td>'+index+'</td><td><a href="'+d.articles[ii].url+'" target="_blank">'+d.articles[ii].name+'</a></td></tr>');
            		index++;
            	}
            });
    }
}