var personGraphChart = {
    data : null,
    show_idx : 0
}

$("#chart_container").delegate('.js-closePersonInfo','click',function(){
    $(".personInfo").hide();
});

$(".date_item_list").delegate('.date_item','click',function(e){
    $(".personInfo").hide();
});

personGraphChart.dataTransform = function(){
    var arr = [];

    for(var i in personGraphChart.data){
        var obj = {},
            nodes = [];
            links = [];
        obj.datetime = personGraphChart.data[i].datetime;

        //nodes initial
        for(var key in personGraphChart.data[i].nodes){
            var node = personGraphChart.data[i].nodes[key];
            node.userid = node.id;
            nodes.push(personGraphChart.data[i].nodes[key]);
        }

        //links initial
        for(var j in personGraphChart.data[i].links){
            for(var k in nodes){
                if(personGraphChart.data[i].links[j].user_id == nodes[k].id){
                    nodes[k].isleader = true;
                    for(var q in personGraphChart.data[i].links[j].links){
                        var link = {};
                        link.source = parseInt(k);

                        for(var g in nodes){
                            if(nodes[g].id == personGraphChart.data[i].links[j].links[q]){
                                link.target = parseInt(g);
                                break;
                            }
                        }

                        links.push(link);
                    }
                }
            }
        }

        obj.nodes = nodes;
        obj.links = links;

        arr.push(obj);
    }

    personGraphChart.data = arr;
}

personGraphChart.draw = function(data,$container) {
    personGraphChart.data = data;

    personGraphChart.dataTransform();

    $container.empty();
    $container.append('<div class="col-lg-12" id="force"></div>');
    $container.append('<div class="personInfo">'+
                        '<button type="button" class="close js-closePersonInfo">&times;</button>'+
                        // '<div class="personInfoChart"></div>'+
                        '<div class="personInfoComment"><ul></ul></div>'+
                      '</div>');

    personGraphChart.startDraw(null,personGraphChart.data[0]);
};

personGraphChart.reset = function(){
    $("#force").empty();
     d3.select("#force svg").selectAll('.nodetext')
        .on('mouseover',null)
        .on('mouseout',null)
        .on('click',null);
}

personGraphChart.startDraw = function($date_item,data) {

        personGraphChart.reset();

        if($date_item!=null){
            for(var i = 0 ; i < personGraphChart.data.length ; i++){
                if(personGraphChart.data[i].datetime == $date_item.text())
                    data = personGraphChart.data[i];
            }
        }

        if(data.nodes.length == 0){
            $('.nonInfo').remove();
            $("#force").append('<h4 class="nonInfo text-center"><i class="fa fa-exclamation-circle"></i> 查無資料</h4>');
        }else{
            $('.nonInfo').remove();
        }

        //person graph
        var $target = $("#force");
        var width = $target.width();
        var height = 400;
        var svg = d3.select("#force").append("svg")
            .attr("width", width)
            .attr("height", height);
        var line = svg.selectAll(".line");
        var node = svg.selectAll(".node");

        var idx = 0,
            radius = 10,
            circle_border = 4,
            lineWeight = 2,
            lineColor = '#ccc',
            nodeColor = '#e2e2e2',
            nodeColorHover = '#ffcb0f',
            nodeStrokeColor = '#aaa',
            leaderStrokeColor = '#7C4BBD';

        // define arrow
        var svgD = svg.append('defs');
        var def = svgD.selectAll("defs")
            .data(data.nodes, function(d) {
                d.id = ++idx;
                d3.select("svg defs")
                    .append("pattern")
                    .attr("id", "image" + d.id)
                    .attr("x", 0)
                    .attr("y", 0)
                    .attr("width", 1)
                    .attr("height", 1)
                    .append("image")
                    .attr("x", 0)
                    .attr("y", 0)
                    .attr("width", radius * 2)
                    .attr("height", radius * 2)
                    .attr("xlink:href", d.image);
                return d.id;
            });

        // build the arrow.
        svgD.append("svg:marker")
            .attr("id", "arrow")
            .attr("viewBox", "0 -5 10 10")
            .attr("refX", 20)
            .attr("refY", -1.5)
            .attr("markerWidth", 6)
            .attr("markerHeight", 6)
            .attr("orient", "auto")
            .append("svg:path")
            .attr('fill', lineColor)
            .attr("d", "M0,-5L10,0L0,5");

        var force = d3.layout.force()
            .nodes(data.nodes)
            .links(data.links)
            .size([width, height])
            .linkDistance(100)
            .charge(-500)
            .on('tick', tick)
            .start();

        // add the links and the arrows
        var path = svg.append("svg:g").selectAll("path")
            .data(force.links())
            .enter().append("svg:path")
            .attr("class", "link")
            .attr("marker-end", "url(#arrow)");

        node = svg.selectAll("circle")
            .data(force.nodes())
            .enter()
            .append("circle")
            .attr("class", "node")
            .attr("r", function(d) {
                if (d.isleader) {
                    return radius;
                } else {
                    return radius;
                }
            })
            .style("stroke", function(d) {
                if (d.isleader) {
                    return leaderStrokeColor;
                } else {
                    return nodeStrokeColor;
                }
            })
            .style("stroke-width", function(d) {
                if (d.isleader) {
                    return circle_border + 2;
                } else {
                    return circle_border;
                }
            })
            .style("cursor", "pointer")
            .style("fill", function(d) {
                if (d.image == "") {
                    return "#e2e2e2"
                } else {
                    return "url(#image" + d.id + ")";
                }
            })
            .on('mouseover', function(d) {
                d3.select(this).style("fill", nodeColorHover);
            }).on('mouseout', function(d) {
                d3.select(this).style("fill", nodeColor);
            }).on('click', function(d) {
                drawPersonChart(d);
                if(d.px < width/2 ){
                    $('.personInfo').removeClass('left').addClass('right');
                }else{
                    $('.personInfo').removeClass('right').addClass('left');
                }

                $('.personInfo').fadeIn(400);

            })
            .call(force.drag);

        var text_dy = 15;
        var nodes_text = svg.selectAll(".nodetext")
            .data(data.nodes)
            .enter()
            .append("text")
            .attr("class", "nodetext")
            .style({
                "font-size": "15px",
                "font-family": "Microsoft JhengHei",
                "cursor": "pointer"
            })
            .text(function(d) {
                return d.name;
            }).on('mouseover', function(d) {
                d3.select(this).style("text-decoration", "underline")
                    .style("fill", "#337ab7")
            }).on('mouseout', function(d) {
                d3.select(this).style("text-decoration", "none")
                    .style("fill", "#000")
            }).on('click', function(d) {
                window.open('https://www.facebook.com/' + d.userid)
                //location.href = 'https://www.facebook.com/'+d.userid;
            });


        function tick() {
            //設定node超過邊界position
            data.nodes.forEach(function(d, i) {
                d.x = d.x - radius - circle_border < 0 ? radius + circle_border + 10 : d.x;
                d.x = d.x + radius + circle_border > width ? width - radius - circle_border - 10 : d.x;
                d.y = d.y - radius - circle_border < 0 ? radius + circle_border + 10 : d.y;
                d.y = d.y + radius + circle_border + text_dy > height ? height - radius - text_dy - circle_border - 10 : d.y;
            });

            path.attr("d", function(d) {
                var dx = d.target.x - d.source.x,
                    dy = d.target.y - d.source.y,
                    dr = Math.sqrt(dx * dx + dy * dy);
                return "M" +
                    d.source.x + "," +
                    d.source.y + "A" +
                    dr + "," + dr + " 0 0,1 " +
                    d.target.x + "," +
                    d.target.y;
            });

            //update node positon
            node.attr("cx", function(d) {
                return d.x;
            });
            node.attr("cy", function(d) {
                return d.y;
            });

            nodes_text.attr("x", function(d) {
                return d.x + 18;
            });
            nodes_text.attr("y", function(d) {
                if (d.image == "") {
                    return d.y + 5;
                } else {
                    return d.y + 5;
                    // return d.y + radius + text_dy;
                }
            });
        };
    }

function drawPersonChart(data) {
    var dataSections = data.sections;
    var dataComments = data.comments;
    // var svgW = 300;
    // var svgH = 200;
    // var svgPaddingTop = 20;
    // var svgInnerH = 150;
    // var svg = d3.select('.personInfoChart').html("")
    //     .append('svg')
    //     .attr({
    //         'width': svgW,
    //         'height': svgH
    //     });

    // svg.selectAll('rect')
    //     .data(dataSections)
    //     .enter()
    //     .append('rect')
    //     .attr({
    //         'fill':'#09c',
    //         // 'fill': function(d) {
    //         //     return "rgb(0 ,0, " + d.percentage * 5 + ")"
    //         // },
    //         'height': function(d) {
    //             return d.percentage * 1.5;
    //         },
    //         'width': 50,
    //         'x': function(d, i) {
    //             return i * 60;
    //         },
    //         'y': function(d) {
    //             return svgInnerH + svgPaddingTop - (d.percentage * 1.5);
    //         },
    //     });

    // svg.selectAll(".textPercentage")
    //     .data(dataSections)
    //     .enter()
    //     .append("text")
    //     .text(function(d) {
    //         return d.percentage;
    //     })
    //     .attr("class", "textPercentage")
    //     .attr("text-anchor", "center")
    //     .attr("x", function(d, i) {
    //         return i * 60 + 10;
    //     })
    //     .attr("y", function(d) {
    //         return svgInnerH + svgPaddingTop - (d.percentage * 1.5) - 7;
    //     })
    //     .attr("font-family", "arial")
    //     .attr("font-size", "13px")
    //     .attr("fill", "#ffcb0f");

    // svg.selectAll(".textCategory")
    //     .data(dataSections)
    //     .enter()
    //     .append("text")
    //     .text(function(d) {
    //         return d.name;
    //     })
    //     .attr("class", "textCategory")
    //     .attr("text-anchor", "left")
    //     .attr("x", function(d, i) {
    //         return i * 60 + 10;
    //     })
    //     .attr("y", function(d) {
    //         return svgInnerH + svgPaddingTop + 20;
    //     })
    //     .attr("font-family", "Microsoft JhengHei")
    //     .attr("font-size", "13px")
    //     .attr("fill", "white");

   d3.select(".personInfoComment").select('ul').html("")
    	.selectAll('li')
    	.data(dataComments)
        .enter().append("li")
        .html(function(d){
        	return "<a href='" + d.url + "' target='_blank'><i class='fa fa-bullhorn'></i> " + d.message + "</a>"
		});


}
