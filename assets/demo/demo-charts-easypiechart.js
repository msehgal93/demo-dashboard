$(function(){try{$(".easypiechart#newvisits").easyPieChart({barColor:"#16a085",trackColor:"transparent",scaleColor:"#eee",scaleLength:8,lineCap:"square",lineWidth:2,size:96,onStep:function(e,a,t){$(this.el).find(".percent").text(Math.round(t))}}),$(".easypiechart#bouncerate").easyPieChart({barColor:"#7ccc2e",trackColor:"transparent",scaleColor:"#eee",scaleLength:8,lineCap:"square",lineWidth:2,size:96,onStep:function(e,a,t){$(this.el).find(".percent").text(Math.round(t))}}),$(".easypiechart#clickrate").easyPieChart({barColor:"#e84747",trackColor:"transparent",scaleColor:"#eee",scaleLength:8,lineCap:"square",lineWidth:2,size:96,onStep:function(e,a,t){$(this.el).find(".percent").text(Math.round(t))}}),$(".easypiechart#covertionrate").easyPieChart({barColor:"#8e44ad",trackColor:"transparent",scaleColor:"#eee",scaleLength:8,lineCap:"square",lineWidth:2,size:96,onStep:function(e,a,t){$(this.el).find(".percent").text(Math.round(t))}}),$("#updatePieCharts").on("click",function(){return $(".easypiechart#newvisits").data("easyPieChart").update(100*Math.random()),$(".easypiechart#bouncerate").data("easyPieChart").update(100*Math.random()),$(".easypiechart#clickrate").data("easyPieChart").update(100*Math.random()),$(".easypiechart#covertionrate").data("easyPieChart").update(100*Math.random()),!1})}catch(e){}});