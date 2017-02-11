var myChart = {
	date : null,
	data : null,
	data_selected : null
};

myChart.myData = function(){
	
};

myChart.mySentiment = function(data, $container){
	$container.empty();
	var sentiment = '<div class="sentiment-mean">' + 
						'<div class="sentiment-circle sentiment-affirmative"><i class="fa fa-smile-o"></i></div>' + 
						'<div class="sentiment-line"></div>' + 
						'<div class="sentiment-circle sentiment-pessimistic"><i class="fa fa-frown-o"></i></div>' + 
					'</div>';
	$(sentiment).insertBefore($container);
	$container.append('<div id="myChart_donut"></div>');	
	$container.append('<div id="mychart_bar"></div>');		
	
	myChart.data = data;	
	myChart.drawMySentiment();
};
myChart.drawMySentiment = function($date_selected){
	myChart.reset();
	myChart.dateSelect($date_selected);
	myChart.drawMyDonut();
	myChart.drawMyBar();			
};
myChart.dateSelect = function($date_selected){
	if($date_selected != null){
		myChart.date = $date_selected.text();		
	}else{
		myChart.date = $(".date_item_list .active").text();		
	}		
	
	// data from selected date
	for(var i in myChart.data){
		if(myChart.data[parseInt(i)].x == myChart.date){
			myChart.data_selected = myChart.data[i];				
		}		
	};	
	
};
myChart.reset = function(){
	$("#mychart_bar").empty();
};
myChart.drawMyDonut = function(){
	if($("#myChart_donut") == null){
		return;
	}else{
		myChart.fadeAndActive();		
	};
	
	for(var i = 0; i < myChart.data.length; ++i){
		var isActive = "";
		if(myChart.date == myChart.data[i].x){
			isActive = "active";
		}
		$("#myChart_donut").append('<div id="donut_single.' + i + '" class="float_left donut_single ' + isActive + '" name="' + myChart.data[i].x + '"></div>');	
		
		var sentiment = myChart.data[i].sentiment;
		var data = [];
		data.push(['sentiment', 'number']);
		for(var j = sentiment.length - 1; j >= 0; --j){
			switch(j){
				case 0:
					data.push(['正面貼文', sentiment[j]]);	
				break;
				case 1:
					data.push(['負面貼文', sentiment[j]]);
				break;
				case 2:
					data.push(['中壢貼文', sentiment[j]]);
				break;
				default:
				break;
			}
			
			
		}
		
		data = google.visualization.arrayToDataTable(data);

		var options = {
			tooltip: {"trigger":"none"}, 
			width: 150,
			height: 150,
			pieHole: 0.35,
			legend: 'none',
			slices: {				
				0: {color: 'rgb(238, 238, 238)'},
				1: {color: 'rgb(218, 87, 87)'},
				2: {color: 'steelblue'}
			}
		};

		var chart = new google.visualization.PieChart(document.getElementById('donut_single.' + i));
		chart.draw(data, options);
		
		
	
	
	};
	$("#myChart_donut").append('<div class="float_clear"></div>');	
};
myChart.fadeAndActive = function(){
	$("#myChart_donut .active").removeClass("active");
	$(".donut_single").each(function(){
		var $item = $(this)
		if($item.attr("name") == myChart.date){
			$item.addClass("active");	
		};		
	});
}
myChart.drawMyBar = function(){	
	var positive = [],
		negative = [],
		positive_val = [],
		negative_val = [];
	var obj = myChart.data_selected;		
	
	// add the data into array
	for(var i = 0; i < obj.bar.length; ++i){
		if(i < obj.bar.length / 2){
			positive.push(obj.bar[i].word);			
			positive_val.push(obj.bar[i].number * -1);			
		}else{
			negative.push(obj.bar[i].word);			
			negative_val.push(obj.bar[i].number);			
		}		
	};
	
	// draw bar graph
	$('#mychart_bar').highcharts({
		chart: {
			type: 'bar'
		},
		title: {
			text: ''
		},
		
		xAxis: [{
			categories: positive,
			reversed: true
		}, { // mirror axis on right side
			categories: negative,
			opposite: true,
			reversed: true,
			linkedTo: 0
		}],
		yAxis: {
			title: {},
			labels: {
				formatter: function () {
					return Math.abs(this.value);
				}
			}
		},

		plotOptions: {
			bar: {
				dataLabels: {
					enabled: true,
					formatter: function() {
						return Math.abs(this.y);
					},
					inside: true,
					padding: 8 // <-- Instead of x				  
				}
			},
			series: {
				stacking: 'normal'
			}
		},

		tooltip: {
			enabled: false
			//formatter: function () {
			//	return Highcharts.numberFormat(Math.abs(this.point.y), 0);
			//}
		},

		series: [{
			name: ' 正面能量',
			data: positive_val,
			color: "steelblue"
		}, {
			name: '負面能量',
			data: negative_val,
			color: "rgb(218, 87, 87)"
		}]
	});	
};
