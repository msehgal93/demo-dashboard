!function(p,g,s,t){"use strict";var h=function(t,e){this.widget="",this.$element=p(t),this.defaultTime=e.defaultTime,this.disableFocus=e.disableFocus,this.disableMousewheel=e.disableMousewheel,this.isOpen=e.isOpen,this.minuteStep=e.minuteStep,this.modalBackdrop=e.modalBackdrop,this.orientation=e.orientation,this.secondStep=e.secondStep,this.showInputs=e.showInputs,this.showMeridian=e.showMeridian,this.showSeconds=e.showSeconds,this.template=e.template,this.appendWidgetTo=e.appendWidgetTo,this.showWidgetOnAddonClick=e.showWidgetOnAddonClick,this._init()};h.prototype={constructor:h,_init:function(){var t=this;this.showWidgetOnAddonClick&&(this.$element.parent().hasClass("input-group")||this.$element.parent().hasClass("input-prepend"))?(this.$element.parent(".input-group, .input-prepend").find(".input-group-addon").on({"click.timepicker":p.proxy(this.showWidget,this)}),this.$element.on({"focus.timepicker":p.proxy(this.highlightUnit,this),"click.timepicker":p.proxy(this.highlightUnit,this),"keydown.timepicker":p.proxy(this.elementKeydown,this),"blur.timepicker":p.proxy(this.blurElement,this),"mousewheel.timepicker DOMMouseScroll.timepicker":p.proxy(this.mousewheel,this)})):this.template?this.$element.on({"focus.timepicker":p.proxy(this.showWidget,this),"click.timepicker":p.proxy(this.showWidget,this),"blur.timepicker":p.proxy(this.blurElement,this),"mousewheel.timepicker DOMMouseScroll.timepicker":p.proxy(this.mousewheel,this)}):this.$element.on({"focus.timepicker":p.proxy(this.highlightUnit,this),"click.timepicker":p.proxy(this.highlightUnit,this),"keydown.timepicker":p.proxy(this.elementKeydown,this),"blur.timepicker":p.proxy(this.blurElement,this),"mousewheel.timepicker DOMMouseScroll.timepicker":p.proxy(this.mousewheel,this)}),!1!==this.template?this.$widget=p(this.getTemplate()).on("click",p.proxy(this.widgetClick,this)):this.$widget=!1,this.showInputs&&!1!==this.$widget&&this.$widget.find("input").each(function(){p(this).on({"click.timepicker":function(){p(this).select()},"keydown.timepicker":p.proxy(t.widgetKeydown,t),"keyup.timepicker":p.proxy(t.widgetKeyup,t)})}),this.setDefaultTime(this.defaultTime)},blurElement:function(){this.highlightedUnit=null,this.updateFromElementVal()},clear:function(){this.hour="",this.minute="",this.second="",this.meridian="",this.$element.val("")},decrementHour:function(){if(this.showMeridian)if(1===this.hour)this.hour=12;else{if(12===this.hour)return this.hour--,this.toggleMeridian();if(0===this.hour)return this.hour=11,this.toggleMeridian();this.hour--}else this.hour<=0?this.hour=23:this.hour--},decrementMinute:function(t){var e;e=t?this.minute-t:this.minute-this.minuteStep,this.minute=e<0?(this.decrementHour(),e+60):e},decrementSecond:function(){var t=this.second-this.secondStep;this.second=t<0?(this.decrementMinute(!0),t+60):t},elementKeydown:function(t){switch(t.keyCode){case 9:case 27:this.updateFromElementVal();break;case 37:t.preventDefault(),this.highlightPrevUnit();break;case 38:switch(t.preventDefault(),this.highlightedUnit){case"hour":this.incrementHour(),this.highlightHour();break;case"minute":this.incrementMinute(),this.highlightMinute();break;case"second":this.incrementSecond(),this.highlightSecond();break;case"meridian":this.toggleMeridian(),this.highlightMeridian()}this.update();break;case 39:t.preventDefault(),this.highlightNextUnit();break;case 40:switch(t.preventDefault(),this.highlightedUnit){case"hour":this.decrementHour(),this.highlightHour();break;case"minute":this.decrementMinute(),this.highlightMinute();break;case"second":this.decrementSecond(),this.highlightSecond();break;case"meridian":this.toggleMeridian(),this.highlightMeridian()}this.update()}},getCursorPosition:function(){var t=this.$element.get(0);if("selectionStart"in t)return t.selectionStart;if(s.selection){t.focus();var e=s.selection.createRange(),i=s.selection.createRange().text.length;return e.moveStart("character",-t.value.length),e.text.length-i}},getTemplate:function(){var t,e,i,s,n,h;switch(n=this.showInputs?(e='<input type="text" data-name="hour" class="bootstrap-timepicker-hour form-control" maxlength="2"/>',i='<input type="text" data-name="minute" class="bootstrap-timepicker-minute form-control" maxlength="2"/>',s='<input type="text" data-name="second" class="bootstrap-timepicker-second form-control" maxlength="2"/>','<input type="text" data-name="meridian" class="bootstrap-timepicker-meridian form-control" maxlength="2"/>'):(e='<span class="bootstrap-timepicker-hour"></span>',i='<span class="bootstrap-timepicker-minute"></span>',s='<span class="bootstrap-timepicker-second"></span>','<span class="bootstrap-timepicker-meridian"></span>'),h='<table><tr><td><a href="#" data-action="incrementHour"><i class="fa fa-chevron-up"></i></a></td><td class="separator">&nbsp;</td><td><a href="#" data-action="incrementMinute"><i class="fa fa-chevron-up"></i></a></td>'+(this.showSeconds?'<td class="separator">&nbsp;</td><td><a href="#" data-action="incrementSecond"><i class="fa fa-chevron-up"></i></a></td>':"")+(this.showMeridian?'<td class="separator">&nbsp;</td><td class="meridian-column"><a href="#" data-action="toggleMeridian"><i class="fa fa-chevron-up"></i></a></td>':"")+"</tr><tr><td>"+e+'</td> <td class="separator">:</td><td>'+i+"</td> "+(this.showSeconds?'<td class="separator">:</td><td>'+s+"</td>":"")+(this.showMeridian?'<td class="separator">&nbsp;</td><td>'+n+"</td>":"")+'</tr><tr><td><a href="#" data-action="decrementHour"><i class="fa fa-chevron-down"></i></a></td><td class="separator"></td><td><a href="#" data-action="decrementMinute"><i class="fa fa-chevron-down"></i></a></td>'+(this.showSeconds?'<td class="separator">&nbsp;</td><td><a href="#" data-action="decrementSecond"><i class="fa fa-chevron-down"></i></a></td>':"")+(this.showMeridian?'<td class="separator">&nbsp;</td><td><a href="#" data-action="toggleMeridian"><i class="fa fa-chevron-down"></i></a></td>':"")+"</tr></table>",this.template){case"modal":t='<div class="bootstrap-timepicker-widget modal hide fade in" data-backdrop="'+(this.modalBackdrop?"true":"false")+'"><div class="modal-header"><a href="#" class="close" data-dismiss="modal">×</a><h3>Pick a Time</h3></div><div class="modal-content">'+h+'</div><div class="modal-footer"><a href="#" class="btn btn-primary" data-dismiss="modal">OK</a></div></div>';break;case"dropdown":t='<div class="bootstrap-timepicker-widget dropdown-menu">'+h+"</div>"}return t},getTime:function(){return""===this.hour?"":this.hour+":"+(1===this.minute.toString().length?"0"+this.minute:this.minute)+(this.showSeconds?":"+(1===this.second.toString().length?"0"+this.second:this.second):"")+(this.showMeridian?" "+this.meridian:"")},hideWidget:function(){!1!==this.isOpen&&(this.$element.trigger({type:"hide.timepicker",time:{value:this.getTime(),hours:this.hour,minutes:this.minute,seconds:this.second,meridian:this.meridian}}),"modal"===this.template&&this.$widget.modal?this.$widget.modal("hide"):this.$widget.removeClass("open"),p(s).off("mousedown.timepicker, touchend.timepicker"),this.isOpen=!1,this.$widget.detach())},highlightUnit:function(){this.position=this.getCursorPosition(),0<=this.position&&this.position<=2?this.highlightHour():3<=this.position&&this.position<=5?this.highlightMinute():6<=this.position&&this.position<=8?this.showSeconds?this.highlightSecond():this.highlightMeridian():9<=this.position&&this.position<=11&&this.highlightMeridian()},highlightNextUnit:function(){switch(this.highlightedUnit){case"hour":this.highlightMinute();break;case"minute":this.showSeconds?this.highlightSecond():this.showMeridian?this.highlightMeridian():this.highlightHour();break;case"second":this.showMeridian?this.highlightMeridian():this.highlightHour();break;case"meridian":this.highlightHour()}},highlightPrevUnit:function(){switch(this.highlightedUnit){case"hour":this.showMeridian?this.highlightMeridian():this.showSeconds?this.highlightSecond():this.highlightMinute();break;case"minute":this.highlightHour();break;case"second":this.highlightMinute();break;case"meridian":this.showSeconds?this.highlightSecond():this.highlightMinute()}},highlightHour:function(){var t=this.$element.get(0),e=this;this.highlightedUnit="hour",t.setSelectionRange&&setTimeout(function(){e.hour<10?t.setSelectionRange(0,1):t.setSelectionRange(0,2)},0)},highlightMinute:function(){var t=this.$element.get(0),e=this;this.highlightedUnit="minute",t.setSelectionRange&&setTimeout(function(){e.hour<10?t.setSelectionRange(2,4):t.setSelectionRange(3,5)},0)},highlightSecond:function(){var t=this.$element.get(0),e=this;this.highlightedUnit="second",t.setSelectionRange&&setTimeout(function(){e.hour<10?t.setSelectionRange(5,7):t.setSelectionRange(6,8)},0)},highlightMeridian:function(){var t=this.$element.get(0),e=this;this.highlightedUnit="meridian",t.setSelectionRange&&(this.showSeconds?setTimeout(function(){e.hour<10?t.setSelectionRange(8,10):t.setSelectionRange(9,11)},0):setTimeout(function(){e.hour<10?t.setSelectionRange(5,7):t.setSelectionRange(6,8)},0))},incrementHour:function(){if(this.showMeridian){if(11===this.hour)return this.hour++,this.toggleMeridian();12===this.hour&&(this.hour=0)}23!==this.hour?this.hour++:this.hour=0},incrementMinute:function(t){var e;e=t?this.minute+t:this.minute+this.minuteStep-this.minute%this.minuteStep,this.minute=59<e?(this.incrementHour(),e-60):e},incrementSecond:function(){var t=this.second+this.secondStep-this.second%this.secondStep;this.second=59<t?(this.incrementMinute(!0),t-60):t},mousewheel:function(t){if(!this.disableMousewheel){t.preventDefault(),t.stopPropagation();var e=t.originalEvent.wheelDelta||-t.originalEvent.detail,i=null;switch("mousewheel"===t.type?i=-1*t.originalEvent.wheelDelta:"DOMMouseScroll"===t.type&&(i=40*t.originalEvent.detail),i&&(t.preventDefault(),p(this).scrollTop(i+p(this).scrollTop())),this.highlightedUnit){case"minute":0<e?this.incrementMinute():this.decrementMinute(),this.highlightMinute();break;case"second":0<e?this.incrementSecond():this.decrementSecond(),this.highlightSecond();break;case"meridian":this.toggleMeridian(),this.highlightMeridian();break;default:0<e?this.incrementHour():this.decrementHour(),this.highlightHour()}return!1}},place:function(){if(!this.isInline){var t=this.$widget.outerWidth(),e=this.$widget.outerHeight(),i=p(g).width(),s=p(g).height(),n=p(g).scrollTop(),h=parseInt(this.$element.parents().filter(function(){}).first().css("z-index"),10)+10,o=this.component?this.component.parent().offset():this.$element.offset(),a=this.component?this.component.outerHeight(!0):this.$element.outerHeight(!1),r=this.component?this.component.outerWidth(!0):this.$element.outerWidth(!1),d=o.left,c=o.top;this.$widget.removeClass("timepicker-orient-top timepicker-orient-bottom timepicker-orient-right timepicker-orient-left"),"auto"!==this.orientation.x?(this.picker.addClass("datepicker-orient-"+this.orientation.x),"right"===this.orientation.x&&(d-=t-r)):(this.$widget.addClass("timepicker-orient-left"),o.left<0?d-=o.left-10:o.left+t>i&&(d=i-t-10));var l,u,m=this.orientation.y;"auto"===m&&(l=-n+o.top-e,u=n+s-(o.top+a+e),m=Math.max(l,u)===u?"top":"bottom"),this.$widget.addClass("timepicker-orient-"+m),"top"===m?c+=a:c-=e+parseInt(this.$widget.css("padding-top"),10),this.$widget.css({top:c,left:d,zIndex:h})}},remove:function(){p("document").off(".timepicker"),this.$widget&&this.$widget.remove(),delete this.$element.data().timepicker},setDefaultTime:function(t){if(this.$element.val())this.updateFromElementVal();else if("current"===t){var e=new Date,i=e.getHours(),s=e.getMinutes(),n=e.getSeconds(),h="AM";0!==n&&60===(n=Math.ceil(e.getSeconds()/this.secondStep)*this.secondStep)&&(s+=1,n=0),0!==s&&60===(s=Math.ceil(e.getMinutes()/this.minuteStep)*this.minuteStep)&&(i+=1,s=0),this.showMeridian&&(0===i?i=12:h=12<=i?(12<i&&(i-=12),"PM"):"AM"),this.hour=i,this.minute=s,this.second=n,this.meridian=h,this.update()}else!1===t?(this.hour=0,this.minute=0,this.second=0,this.meridian="AM"):this.setTime(t)},setTime:function(t,e){var i,s,n,h,o;t?("object"==typeof t&&t.getMonth?(s=t.getHours(),n=t.getMinutes(),h=t.getSeconds(),this.showMeridian&&(o="AM",12<s&&(o="PM",s%=12),12===s&&(o="PM"))):(o=null!==t.match(/p/i)?"PM":"AM",s=(i=(t=t.replace(/[^0-9\:]/g,"")).split(":"))[0]?i[0].toString():i.toString(),n=i[1]?i[1].toString():"",h=i[2]?i[2].toString():"",4<s.length&&(h=s.substr(4,2)),2<s.length&&(n=s.substr(2,2),s=s.substr(0,2)),2<n.length&&(h=n.substr(2,2),n=n.substr(0,2)),2<h.length&&(h=h.substr(2,2)),s=parseInt(s,10),n=parseInt(n,10),h=parseInt(h,10),isNaN(s)&&(s=0),isNaN(n)&&(n=0),isNaN(h)&&(h=0),this.showMeridian?s<1?s=1:12<s&&(s=12):(24<=s?s=23:s<0&&(s=0),s<13&&"PM"===o&&(s+=12)),n<0?n=0:60<=n&&(n=59),this.showSeconds&&(isNaN(h)?h=0:h<0?h=0:60<=h&&(h=59))),this.hour=s,this.minute=n,this.second=h,this.meridian=o,this.update(e)):this.clear()},showWidget:function(){if(!this.isOpen&&!this.$element.is(":disabled")){this.$widget.appendTo(this.appendWidgetTo);var e=this;p(s).on("mousedown.timepicker, touchend.timepicker",function(t){e.$element.parent().find(t.target).length||e.$widget.is(t.target)||e.$widget.find(t.target).length||e.hideWidget()}),this.$element.trigger({type:"show.timepicker",time:{value:this.getTime(),hours:this.hour,minutes:this.minute,seconds:this.second,meridian:this.meridian}}),this.place(),this.disableFocus&&this.$element.blur(),""===this.hour&&(this.defaultTime?this.setDefaultTime(this.defaultTime):this.setTime("0:0:0")),"modal"===this.template&&this.$widget.modal?this.$widget.modal("show").on("hidden",p.proxy(this.hideWidget,this)):!1===this.isOpen&&this.$widget.addClass("open"),this.isOpen=!0}},toggleMeridian:function(){this.meridian="AM"===this.meridian?"PM":"AM"},update:function(t){this.updateElement(),t||this.updateWidget(),this.$element.trigger({type:"changeTime.timepicker",time:{value:this.getTime(),hours:this.hour,minutes:this.minute,seconds:this.second,meridian:this.meridian}})},updateElement:function(){this.$element.val(this.getTime()).change()},updateFromElementVal:function(){this.setTime(this.$element.val())},updateWidget:function(){if(!1!==this.$widget){var t=this.hour,e=1===this.minute.toString().length?"0"+this.minute:this.minute,i=1===this.second.toString().length?"0"+this.second:this.second;this.showInputs?(this.$widget.find("input.bootstrap-timepicker-hour").val(t),this.$widget.find("input.bootstrap-timepicker-minute").val(e),this.showSeconds&&this.$widget.find("input.bootstrap-timepicker-second").val(i),this.showMeridian&&this.$widget.find("input.bootstrap-timepicker-meridian").val(this.meridian)):(this.$widget.find("span.bootstrap-timepicker-hour").text(t),this.$widget.find("span.bootstrap-timepicker-minute").text(e),this.showSeconds&&this.$widget.find("span.bootstrap-timepicker-second").text(i),this.showMeridian&&this.$widget.find("span.bootstrap-timepicker-meridian").text(this.meridian))}},updateFromWidgetInputs:function(){if(!1!==this.$widget){var t=this.$widget.find("input.bootstrap-timepicker-hour").val()+":"+this.$widget.find("input.bootstrap-timepicker-minute").val()+(this.showSeconds?":"+this.$widget.find("input.bootstrap-timepicker-second").val():"")+(this.showMeridian?this.$widget.find("input.bootstrap-timepicker-meridian").val():"");this.setTime(t,!0)}},widgetClick:function(t){t.stopPropagation(),t.preventDefault();var e=p(t.target),i=e.closest("a").data("action");i&&this[i](),this.update(),e.is("input")&&e.get(0).setSelectionRange(0,2)},widgetKeydown:function(t){var e=p(t.target),i=e.data("name");switch(t.keyCode){case 9:if(this.showMeridian&&"meridian"===i||this.showSeconds&&"second"===i||!this.showMeridian&&!this.showSeconds&&"minute"===i)return this.hideWidget();break;case 27:this.hideWidget();break;case 38:switch(t.preventDefault(),i){case"hour":this.incrementHour();break;case"minute":this.incrementMinute();break;case"second":this.incrementSecond();break;case"meridian":this.toggleMeridian()}this.setTime(this.getTime()),e.get(0).setSelectionRange(0,2);break;case 40:switch(t.preventDefault(),i){case"hour":this.decrementHour();break;case"minute":this.decrementMinute();break;case"second":this.decrementSecond();break;case"meridian":this.toggleMeridian()}this.setTime(this.getTime()),e.get(0).setSelectionRange(0,2)}},widgetKeyup:function(t){(65===t.keyCode||77===t.keyCode||80===t.keyCode||46===t.keyCode||8===t.keyCode||46<=t.keyCode&&t.keyCode<=57)&&this.updateFromWidgetInputs()}},p.fn.timepicker=function(s){var n=Array.apply(null,arguments);return n.shift(),this.each(function(){var t=p(this),e=t.data("timepicker"),i="object"==typeof s&&s;e||t.data("timepicker",e=new h(this,p.extend({},p.fn.timepicker.defaults,i,p(this).data()))),"string"==typeof s&&e[s].apply(e,n)})},p.fn.timepicker.defaults={defaultTime:"current",disableFocus:!1,disableMousewheel:!1,isOpen:!1,minuteStep:15,modalBackdrop:!1,orientation:{x:"auto",y:"auto"},secondStep:15,showSeconds:!1,showInputs:!0,showMeridian:!0,template:"dropdown",appendWidgetTo:"body",showWidgetOnAddonClick:!0},p.fn.timepicker.Constructor=h}(jQuery,window,document);