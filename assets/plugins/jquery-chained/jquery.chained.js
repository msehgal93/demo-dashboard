!function(c,l,t,e){"use strict";c.fn.chained=function(h){return this.each(function(){var o=this,a=c(o).clone();function t(){var t=!0,e=c("option:selected",o).val();c(o).html(a.html());var i,n="";c(h).each(function(){var t=c("option:selected",this).val();t&&(0<n.length&&(l.Zepto?n+="\\\\":n+="\\"),n+=t)}),i=c.isArray(h)?c(h[0]).first():c(h).first();var s=c("option:selected",i).val();c("option",o).each(function(){c(this).hasClass(n)&&c(this).val()===e?(c(this).prop("selected",!0),t=!1):c(this).hasClass(n)||c(this).hasClass(s)||""===c(this).val()||c(this).remove()}),1===c("option",o).size()&&""===c(o).val()?c(o).prop("disabled",!0):c(o).prop("disabled",!1),t&&c(o).trigger("change")}c(h).each(function(){c(this).bind("change",function(){t()}),c("option:selected",this).length||c("option",this).first().attr("selected","selected"),t()})})},c.fn.chainedTo=c.fn.chained,c.fn.chained.defaults={}}(window.jQuery||window.Zepto,window,document);