$(function(){
	google.charts.load('current', {'packages':['corechart']});
	//google.charts.setOnLoadCallback(myChart.drawMyDonut);
	var DATE_FORMAT = "YYYY-MM-DD",
		swiper,
		dateTypeSwitch = 0,
		end_date = moment().subtract(1, 'days').format(DATE_FORMAT),
		start_date = moment().subtract(7, 'days').format(DATE_FORMAT),
		chartTypeSwich = 0;

	swiper = new Swiper ('.swiper-container', {
	    loop: false,
	    pagination: '.swiper-pagination',
	    nextButton: '.swiper-button-next',
	    prevButton: '.swiper-button-prev'
  	})

	if(swiper.container.length!=0){
		swiper.on('slideChangeEnd',function(){
			drawChart();
			$(".swiper-slide-active .date_item:eq(0)").click();
		});

		drawSwiperDateEntrys(start_date,end_date);
  	}

	$("#chart_type").on('change',function(e){
		drawChart();
	});

	$(".date_type").on('click',function(e){
		dateTypeSwitch = $(".date_type").index(this);
		$(".date_type").removeClass('active');
		$(this).addClass('active');

		drawSwiperDateEntrys(start_date,end_date);
	});
	
	$('#date_range_picker')
	.daterangepicker({
	    minDate: "2015-01-01",
	    maxDate: end_date,
	    startDate:start_date,
	    endDate:end_date,
	    showDropdowns: true,
	    locale: {
            format: 'YYYY-MM-DD'
        },
        ranges: {
           '昨天': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
           '過去7天': [moment().subtract(6, 'days'), moment()],
           '過去30天': [moment().subtract(29, 'days'), moment()],
           '這個月': [moment().startOf('month'), moment().endOf('month')],
           '上個月': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
        }
	})
	.on('apply.daterangepicker', function(ev, picker) {
		//start_date = picker.startDate.format(DATE_FORMAT);
		//end_date = picker.endDate.format(DATE_FORMAT);
		drawSwiperDateEntrys(start_date,end_date);
	});

	$(".date_item_list").on('click', '.date_item', function(e){
		$(".date_item").removeClass('active');
		$(this).addClass('active');
	});

	function drawSwiperDateEntrys(startDate,endDate){
		startDate = "2016-03-17";
		endDate   = "2016-03-23";		
		if(swiper.slides.length>0){
			swiper.removeAllSlides();
		}

		//calculate entrys
		var entrys = calculateEntry(dateTypeSwitch,startDate,endDate),
			$slide_template = $('<div class="swiper-slide"></div>');

		for(var i = 0 ; i < entrys.length ; i++){
			var $slide = $slide_template.clone();
			for(var j = 0 ; j < entrys[i].length ; j++){
				var $entry_item = '<a href="#" class="date_item">'+ entrys[i][j] + '</a>';
				$slide.append($entry_item);
			}
			swiper.appendSlide($slide[0].outerHTML);
		}

		if(entrys.length==0){
			swiper.appendSlide('<div class="swiper-slide text-danger"><p class="date_item_warning">所選取的時間區間內，沒有找到對應的時間Entry</p></div>');
		}

		$(".date_item:eq(0)").addClass('active');
		$(".date_type:eq(0)").addClass('active');
		drawChart();
	}

	function calculateEntry(type,startDate,endDate){		
		console.debug("start calculate entrys ,type = " + type +", startDate = "+startDate +", endDate = "+ endDate);
		var m_startDate = moment(startDate),
			m_endDate = moment(endDate),
			entrys = new Array(),
			startOf = "",
			page_size = 0;

		switch(parseInt(dateTypeSwitch)){
			//day
			case 0:
			page_size = 7;
			break;
			//week
			case 1:
			startOf = "isoweek";
			page_size = 6;
			break;
			//month
			case 2:
			startOf = "month";
			page_size = 6;
			break;
			//season
			case 3:
			page_size = 4;
			startOf = "quarter";
			break;
			//default = day
			default:
			page_size = 7;
			break;
		}

		var innerArray = new Array();
		while(m_startDate.isSameOrBefore(m_endDate, 'day')){
			if(innerArray.length == page_size){
				entrys[entrys.length] = innerArray;
				innerArray = [];
			}

			if(startOf!==''){
				var tmp_Monday = moment(m_startDate).startOf(startOf);
				if(m_startDate.isSame(tmp_Monday)){
					innerArray.push(m_startDate.format(DATE_FORMAT));
				}
			}else{
				innerArray.push(m_startDate.format(DATE_FORMAT));
			}
			m_startDate.add(1,'d');
		}

		if(innerArray.length != 0 ){
			entrys[entrys.length] = innerArray;
		}

		console.debug("get date entrys : " + entrys);

		return entrys;
	}

	function drawChart(){
		var chartType = $("#chart_type").val(),
			base_url="../mock_data_v1",
			file_prefix,
			file_suffix,
			chart_data = [],
			drawFunc,
			dateitemClickFunc,
			additional_key,
			moment_key;

		$(".sentiment-mean").remove();

		switch(parseInt(chartType)){
			//情緒分析
			case 0:
			file_prefix="bubblebar";
			additional_key = "x";
			drawFunc = bubbleChart.draw;
			dateitemClickFunc = bubbleChart.fadeAndActive;
			break;
			//來源分析
			case 1:
			file_prefix="heatmap";
			additional_key = "datetime";
			drawFunc = heatMapChart.draw;
			break;
			//熱門關鍵
			case 2:
			file_prefix="wordCloud";
			additional_key = "datetime";
			drawFunc = wordCloudChart.draw;
			dateitemClickFunc = wordCloudChart.startDraw;
			break;
			//意見領袖
			case 3:
			file_prefix="personGraph";
			additional_key = "datetime";
			drawFunc = personGraphChart.draw;
			dateitemClickFunc = personGraphChart.startDraw;
			break;
			//熱門排行
			case 4:
			additional_key = "datetime";
			file_prefix = "rank";
			drawFunc = rankChart.draw;
			dateitemClickFunc = rankChart.dateItemClickHandler;
			break;
			
			// 我的情緒
			case 5:
			drawFunc = myChart.mySentiment;
			dateitemClickFunc = myChart.drawMySentiment;		
			break;			
			default:
			break;
		}

		switch(parseInt(dateTypeSwitch)){
			//day
			case 0:
			file_suffix = "d";
			moment_key = "d";
			break;
			//week
			case 1:
			file_suffix = "w";
			moment_key = "w";
			break;
			//month
			case 2:
			file_suffix = "m";
			moment_key = "M";
			break;
			//season
			case 3:
			file_suffix = "q";
			moment_key = "Q";
			break;
			//default = day
			default:
			file_suffix = "d";
			moment_key = "d";
			break;
		}

		$(".swiper-slide-active .date_item").each(function(index,elem){
			var date_str = moment($(this).text(), "YYYY-MM-DD").format("YYYY_MM_DD"),
				date = $(this).text(),
				failed = false,
				apiUrl;

			//熱門排行的API is different format
			if(parseInt(chartType)!=4){
				apiUrl = base_url + "/"+file_prefix+"_"+date_str+"_"+file_suffix+".json";
			}else{
				var startTime = moment($(this).text()).valueOf() / 1000,
					endTime = moment($(this).text()).add(1,moment_key).valueOf() / 1000;

				apiUrl = "/cdri/maker/v1/most_interested/since/"+startTime+"/until/"+endTime;
			}

	        $.ajax({
	        	url:apiUrl,
	        	dataType:"json",
	        	method:"get",
	        	async:false,
	        	success:function(data_obj){
	        		data_obj[additional_key] = date;
	        		chart_data.push(data_obj);
	        	},
	        	error:function(){
	        		failed = true;
	        	}
	        });
	        if(failed){
	        	//$.ajax({
		        //	url:base_url + "/"+file_prefix+"_empty.json",
		        //	dataType:"json",
		        //	method:"get",
		        //	async:false,
		        //	success:function(data_obj){
		        //		data_obj[additional_key] = date;
		        //		chart_data.push(data_obj);
		        //	}
		        //});		
				
				// chrome無法本地讀取json檔，將他包成js obj格式
				var data_obj = new localData(chartType, date);		
				data_obj[additional_key] = date;									
				chart_data.push(data_obj);				
	        }
		});

		drawFunc.apply(this,[chart_data,$("#chart_container"),$(".swiper-slide-active .date_item:eq(0)").text()]);

		for(var i = 0 ; i< 5 ; i++){
			$(".date_item_list").undelegate( '.date_item','click.'+i);
		}
		$(".date_item_list").on('click.'+chartType, '.date_item', function(e){
			if(dateitemClickFunc!==undefined)
				dateitemClickFunc.apply(this,[$(this)]);
		});
	}
	
	
	function localData111(date){		
		var thisObject = this;
		this.hasInfo = true,
		this.x = date,
		this.y = 0,
		this.size = 1;
		(function(){			
			switch(date){
				case "2016-03-12":
				thisObject.sentiment = [109, 29, 42];
				thisObject.bar = [
					{number: 19, rank: 1, word: "智慧", sentiment: 1},
					{number: 17, rank: 2, word: "喜歡", sentiment: 1},
					{number: 15, rank: 3, word: "經驗", sentiment: 1},
					{number: 14, rank: 4, word: "喜歡的", sentiment: 1},
					{number: 13, rank: 5, word: "發展", sentiment: 1},
					{number: 15, rank: 1, word: "沒有", sentiment: 0},
					{number: 13, rank: 2, word: "吝嗇", sentiment: 0},
					{number: 13, rank: 3, word: "不是", sentiment: 0},
					{number: 11, rank: 4, word: "問題", sentiment: 0},
					{number: 8, rank: 5, word: "不知", sentiment: 0}
				];
				break;
				case "2016-03-13":
				thisObject.sentiment = [136, 25, 29];
				thisObject.bar = [
					{number: 23, rank: 1, word: "開發", sentiment: 1},
					{number: 22, rank: 2, word: "成為", sentiment: 1},
					{number: 21, rank: 3, word: "喜歡", sentiment: 1},
					{number: 16, rank: 4, word: "智慧", sentiment: 1},
					{number: 16, rank: 5, word: "發展", sentiment: 1},
					{number: 16, rank: 1, word: "問題", sentiment: 0},
					{number: 15, rank: 2, word: "沒有", sentiment: 0},
					{number: 13, rank: 3, word: "吝嗇", sentiment: 0},
					{number: 12, rank: 4, word: "利用", sentiment: 0},
					{number: 11, rank: 5, word: "不是", sentiment: 0}
				];
				break;
				case "2016-03-14":
				thisObject.sentiment = [121, 38, 42];
				thisObject.bar = [
					{number: 17, rank: 1, word: "成為", sentiment: 1},
					{number: 16, rank: 2, word: "智慧", sentiment: 1},
					{number: 16, rank: 3, word: "喜歡", sentiment: 1},
					{number: 15, rank: 4, word: "知道", sentiment: 1},
					{number: 12, rank: 5, word: "喜歡的", sentiment: 1},
					{number: 12, rank: 2, word: "沒有", sentiment: 0},
					{number: 14, rank: 1, word: "不是", sentiment: 0},
					{number: 12, rank: 3, word: "吝嗇", sentiment: 0},
					{number: 10, rank: 4, word: "問題", sentiment: 0},
					{number: 7, rank: 5, word: "不能", sentiment: 0}
				];
				break;
				case "2016-03-15":
				thisObject.sentiment = [72, 28, 31];
				thisObject.bar = [
					{number: 12, rank: 1, word: "重要", sentiment: 1},
					{number: 11, rank: 2, word: "知道", sentiment: 1},
					{number: 11, rank: 3, word: "喜歡", sentiment: 1},
					{number: 10, rank: 4, word: "成為", sentiment: 1},
					{number: 10, rank: 5, word: "經驗", sentiment: 1},
					{number: 14, rank: 1, word: "問題", sentiment: 0},
					{number: 14, rank: 2, word: "不是", sentiment: 0},
					{number: 11, rank: 3, word: "沒有", sentiment: 0},
					{number: 8, rank: 4, word: "不能", sentiment: 0},
					{number: 7, rank: 5, word: "不斷", sentiment: 0}
				];
				break;
				case "2016-03-16":
				thisObject.sentiment = [80, 25, 27];
				thisObject.bar = [
					{number: 13, rank: 1, word: "知道", sentiment: 1},
					{number: 11, rank: 2, word: "機會", sentiment: 1},
					{number: 11, rank: 3, word: "發展", sentiment: 1},
					{number: 9, rank: 4, word: "智慧", sentiment: 1},
					{number: 9, rank: 5, word: "成為", sentiment: 1},
					{number: 16, rank: 1, word: "沒有", sentiment: 0},
					{number: 11, rank: 2, word: "不是", sentiment: 0},
					{number: 10, rank: 3, word: "問題", sentiment: 0},
					{number: 8, rank: 4, word: "不會", sentiment: 0},
					{number: 6, rank: 5, word: "不可", sentiment: 0}
				];
				break;
				case "2016-03-17":
				thisObject.sentiment = [100, 28, 41];
				thisObject.bar = [
					{number: 16, rank: 1, word: "智慧", sentiment: 1},
					{number: 15, rank: 2, word: "發展", sentiment: 1},
					{number: 14, rank: 3, word: "知道", sentiment: 1},
					{number: 11, rank: 4, word: "喜歡", sentiment: 1},
					{number: 10, rank: 5, word: "成為", sentiment: 1},
					{number: 16, rank: 1, word: "沒有", sentiment: 0},
					{number: 16, rank: 2, word: "不是", sentiment: 0},
					{number: 14, rank: 3, word: "不會", sentiment: 0},
					{number: 8, rank: 4, word: "問題", sentiment: 0},
					{number: 7, rank: 5, word: "利用", sentiment: 0}
				];
				break;
				case "2016-03-18":
				thisObject.sentiment = [134, 29, 33];
				thisObject.bar = [
					{number: 23, rank: 1, word: "喜歡", sentiment: 1},
					{number: 21, rank: 2, word: "開發", sentiment: 1},
					{number: 18, rank: 3, word: "智慧", sentiment: 1},
					{number: 17, rank: 4, word: "成為", sentiment: 1},
					{number: 15, rank: 5, word: "喜歡的", sentiment: 1},
					{number: 14, rank: 1, word: "沒有", sentiment: 0},
					{number: 14, rank: 2, word: "吝嗇", sentiment: 0},
					{number: 11, rank: 3, word: "不是", sentiment: 0},
					{number: 10, rank: 4, word: "問題", sentiment: 0},
					{number: 8, rank: 5, word: "不知", sentiment: 0}
				];
				break;
			}		
		})();		
	}
});

