
var bubbleChart = {
    bubbleContainerId : "bubble",
    barContainerId : "bar"
};

bubbleChart.draw = function(data,$container) {

    $container.empty();
    $('<div class="sentiment-mean"> <div class="sentiment-circle sentiment-affirmative"><i class="fa fa-smile-o"></i></div> <div class="sentiment-line"></div> <div class="sentiment-circle sentiment-pessimistic"><i class="fa fa-frown-o"></i></div></div>')
        .insertBefore($container);
    $container.append("<div id='"+bubbleChart.bubbleContainerId+"'></div>");
    $container.append("<div id='"+bubbleChart.barContainerId+"'></div>");

    var $target = $("#"+bubbleChart.bubbleContainerId+"");
    var bubble_bar_data = data;
    var height = 100;
    var width = $target.width() - 50 * 2;
    var margin = 60;
    var data = [];
    var date = [];
    var show_idx = 0;

    for (var i in bubble_bar_data) {
        bubble_bar_data[i].id = i;
        bubble_bar_data[i].date_str = bubble_bar_data[i].x;
        bubble_bar_data[i].x = new Date(bubble_bar_data[i].x);
        bubble_bar_data[i].y = 0;
        bubble_bar_data[i].total = 0;
        if(bubble_bar_data[i].sentiment.length==0){
            bubble_bar_data[i].sentiment.push(0,0,0);
        }
        bubble_bar_data[i].total += parseInt(bubble_bar_data[i].sentiment[0]);
        bubble_bar_data[i].total += parseInt(bubble_bar_data[i].sentiment[1]);
        bubble_bar_data[i].total += parseInt(bubble_bar_data[i].sentiment[2]);
    }

    //依照日期重新排序
    bubble_bar_data.sort(function(a,b){
      return new Date(a.x) - new Date(b.x);
    });


    data = bubble_bar_data;

    barChart(bubble_bar_data[show_idx].bar);

    var svg = d3.select("#"+bubbleChart.bubbleContainerId)
        .append('svg')
        .attr('class', 'chart')
        .attr("width", width + margin + margin)
        .attr("height", height + margin + margin);


    var x = d3.time.scale()
        .domain(d3.extent(data, function(d) {
            date.push(d.x);
            return d.x;
        })).range([0, width]);

    var color = d3.scale.ordinal()
        .domain(["0", "1", "2","3"])
        .range([ "rgb(39, 126, 189)", "#eee", "rgb(218, 87, 87)","#000"]);

    var xAxis = d3.svg.axis().scale(x).orient('bottom')
        .tickFormat(d3.time.format("%m-%d")).tickValues(date);

    svg.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(" + margin + "," + parseInt(margin + height) + ")")
        .call(xAxis)
        .selectAll("text")
        .style("text-anchor", "end")
        .attr("dx", "0.5em")
        .attr("dy", "1.5em")
        .attr("transform", function(d) {
            return "rotate(-25)";
        });

    var r = 40;
    var gutter = width / (data.length!=1 ? data.length-1 : 1);
    var pie = d3.layout.pie().value(function(d) {
        return d;
    }).endAngle(Math.PI * -2);

    var radius = d3.scale.sqrt()
        .domain([d3.min(data, function(d) {
            return d.total;
        }), d3.max(data, function(d) {
            return d.total;
        })])
        .range([20, r]);

    var pies = svg.selectAll("svg")
        .data(data)
        .enter().append("svg")
        .attr("width", width + r * 2)
        .attr("height", (r + margin) * 2)
        .append("g")
        .attr("class", "pies")
        .attr("transform", function(d, i) {
            return "translate(" + ((i * gutter) + r) + "," + (r + margin) + ")";
        })
        .style("opacity", function(d,i){
            if(i==show_idx){
                return 1;
            }else{
                return 0.2;
            }
        });


    var k = 0;
    pies.selectAll("g.pies").data(function(d) {
        if(d.total == 0){
            d.sentiment[0] = 99999;
            d.sentiment[1] = 99999;
            d.sentiment[2] = 99999;
        }
        return pie(d.sentiment);
    })
    .enter().append('path')
    .attr("d", function(d, i) {
        var arc = d3.svg.arc()
            .innerRadius(radius(data[k].total) / 3)
            .outerRadius(radius(data[k].total));
        if (i % 3 == 2) k++;
        return arc(d);
    })
    .style("fill", function(d, i) {
        if(d.data == 99999){
            color(3);
        }else{
            return color(i);
        }
    });

    pies.selectAll("g.pies").data(function(d) {
        var rectW = 100,
            rectH = 40,
            rectX = x(d.x),
            rectY = 20;

        if(d.sentiment[0] === 99999 && d.sentiment[1] ===99999 && d.sentiment[2]== 99999){
            d.sentiment[0] = 0;
            d.sentiment[1] = 0;
            d.sentiment[2] = 0;
        }


        svg.append("text")
            .classed("over", true)
            .attr("width", rectW)
            .attr("x", rectX + 5)
            .attr("y", rectY - 7)
            .style("font-size", 12)
            .style("stroke", "steelblue")
            .text("正面新聞:" + d.sentiment[0]);
        svg.append("text")
            .classed("over", true)
            .attr("width", rectW)
            .attr("x", rectX + 5)
            .attr("y", rectY + 27)
            .style("font-size", 12)
            .style("stroke", "#ccc)")
            .text("中立新聞:" + d.sentiment[1]);
        svg.append("text")
            .classed("over", true)
            .attr("width", rectW)
            .attr("x", rectX + 5)
            .attr("y", rectY + 10)
            .style("font-size", 12)
            .style("stroke", "rgb(218, 87, 87)")
            .text("負面新聞:" + d.sentiment[2]);
        
        return d;
    });
}

bubbleChart.fadeAndActive=function($date_item) {
    var data;
    d3.select("svg.chart").selectAll("g.pies")
        .style("opacity", 1)
        .filter(function(d) {
            if(d.date_str == $date_item.text())
                data = d.bar;
            return d.date_str != $date_item.text();
        })
        .transition().style("opacity", 0.5);
    barChart(data);
}


function barChart(data) {
    $("#"+bubbleChart.barContainerId).empty();
    var labelArea = 100,
        chart,
        bar_height = 40,
        height = bar_height * (data.length / 2),
        label_margin = 40,
        chartWidth = $("#bar").width(),
        width = (chartWidth - label_margin * 2 - labelArea) / 2,
        rightOffset = width + labelArea;

    $("#"+bubbleChart.barContainerId).height(height);

    chart = d3.select("#"+bubbleChart.barContainerId)
        .append('svg')
        .attr('class', 'chart')
        .attr('width', chartWidth)
        .attr('height', height);

    var xFrom = d3.scale.linear()
        .domain([0, d3.max(data,function(d){
            return d.number;
        })])
        .range([0, width]);

    var y = d3.scale.ordinal()
        .domain([1,2,3,4,5])
        .rangeBands([10, height - data.length / 2 * 5]);

    var yPosByIndex = function(d, index) {
        return y.range()[index] + index * 5;
    };
    var yPosScoreByIndex = function(d, index) {
        return y.range()[index] + y.rangeBand() / 2 + index * 5;
    };

    chart.selectAll("text.name")
        .data(data.filter(function(d) {
            if(d.sentiment == 1)
                return d;
         }))
        .enter().append("text")
        .attr("x", label_margin)
        .attr("y", yPosScoreByIndex)
        .attr("dy", ".20em")
        .attr("text-anchor", "middle")
        .attr('class', 'name')
        .text(function(d){
            return d.word;
        });

    chart.selectAll("rect.left")
        .data(data.filter(function(d) {
            if(d.sentiment == 1)
                return d;
         }))
        .enter().append("rect")
        .attr("x", rightOffset)
        .attr("y", yPosByIndex)
        .attr("width", 0)
        .attr("class", "left")
        .transition()
        .duration(1500)
        .attr("x", function(d) {
            return width - xFrom(d.number) + labelArea;
        })
        .attr("width", function(d){
            return xFrom(d.number);
        })
        .attr("height", y.rangeBand());

    chart.selectAll("text.leftscore")
        .data(data.filter(function(d) {
            if(d.sentiment == 1)
                return d;
         }))
        .enter().append("text")
        .attr("x", function(d) {
            return width - xFrom(d.number) + labelArea;
        })
        .attr("y", yPosScoreByIndex)
        .attr("dx", "20")
        .attr("dy", ".36em")
        .attr("text-anchor", "end")
        .attr('class', 'score')
        .text(function(d){
            return d.number;
        });

    chart.selectAll("rect.right")
        .data(data.filter(function(d) {
            if(d.sentiment === 0)
                return d;
         }))
        .enter().append("rect")
        .attr("x", rightOffset)
        .attr("y", yPosByIndex)
        .attr("width", 0)
        .attr("class", "right")
        .transition()
        .duration(1500)
        .attr("width", function(d){
            return xFrom(d.number);
         })
        .attr("height", y.rangeBand());

    chart.selectAll("text.right.score")
        .data(data.filter(function(d) {
            if(d.sentiment === 0)
                return d;
         }))
        .enter().append("text")
        .attr("x", function(d) {
            return xFrom(d.number) + rightOffset - 10;
        })
        .attr("y", yPosScoreByIndex)
        .attr("dx", -5)
        .attr("dy", ".36em")
        .attr("text-anchor", "end")
        .attr('class', 'score')
        .text(function(d){
            return d.number;
        });

    chart.selectAll("text.right.name")
        .data(data.filter(function(d) {
            if(d.sentiment === 0)
                return d;
         }))
        .enter().append("text")
        .attr("x", width * 2 + labelArea + label_margin)
        .attr("y", yPosScoreByIndex)
        .attr("dy", ".20em")
        .attr("text-anchor", "middle")
        .attr('class', 'name')
        .text(function(d){
            return d.word;
        });
}
