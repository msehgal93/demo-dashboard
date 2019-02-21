!function(w){"use strict";w.fn.mapael=function(x){for(var e in(x=w.extend(!0,{},w.fn.mapael.defaultOptions,x)).legend)if(w.isArray(x.legend[e]))for(var t=0;t<x.legend[e].length;++t)x.legend[e][t]=w.extend(!0,{},w.fn.mapael.legendDefaultOptions[e],x.legend[e][t]);else x.legend[e]=w.extend(!0,{},w.fn.mapael.legendDefaultOptions[e],x.legend[e]);return this.each(function(){var p=w(this),s=w("<div>").addClass(x.map.tooltip.cssClass).css("display","none"),r=w("."+x.map.cssClass,this).empty().append(s),d=w.fn.mapael.maps[x.map.name],f=new Raphael(r[0],d.width,d.height),e={},t=0,h={},c={},g=[],a=0;for(a in x.map.tooltip.css&&s.css(x.map.tooltip.css),f.setViewBox(0,0,d.width,d.height,!1),d.elems)e=w.fn.mapael.getElemOptions(x.map.defaultArea,x.areas[a]?x.areas[a]:{},x.legend.area),h[a]={mapElem:f.path(d.elems[a]).attr(e.attrs)};for(a in d.elems)e=w.fn.mapael.getElemOptions(x.map.defaultArea,x.areas[a]?x.areas[a]:{},x.legend.area),w.fn.mapael.initElem(f,h[a],e,s,a);for(a in w.fn.mapael.drawLinksCollection(f,x,d.getCoords,s),x.plots)c[a]=w.fn.mapael.drawPlot(a,x,d,f,s);if(p.on("zoom",function(e,t){var a=Math.min(Math.max(t.level,0),x.map.zoom.maxLevel),i=0,n=0,o=1+p.data("zoomLevel")*x.map.zoom.step,l=1+a*x.map.zoom.step,r=0,m=0,s={};if(void 0!==t.latitude&&void 0!==t.longitude&&(s=d.getCoords(t.latitude,t.longitude),t.x=s.x,t.y=s.y),void 0===t.x&&(t.x=f._viewBox[0]+f._viewBox[2]/2),void 0===t.y&&(t.y=f._viewBox[1]+f._viewBox[3]/2),0==a)f.setViewBox(i,n,d.width,d.height);else{if(void 0!==t.fixedCenter&&1==t.fixedCenter){if(l==o)return;r=p.data("panX")+(t.x-p.data("panX"))*(l-o)/l,m=p.data("panY")+(t.y-p.data("panY"))*(l-o)/l,i=Math.min(Math.max(0,r),d.width-d.width/l),n=Math.min(Math.max(0,m),d.height-d.height/l)}else i=Math.min(Math.max(0,t.x-d.width/l/2),d.width-d.width/l),n=Math.min(Math.max(0,t.y-d.height/l/2),d.height-d.height/l);f.setViewBox(i,n,d.width/l,d.height/l)}p.data({zoomLevel:a,panX:i,panY:n,zoomX:t.x,zoomY:t.y})}),x.map.zoom.enabled&&x.map.zoom.mousewheel&&p.on("mousewheel",function(e){var t=r.offset(),a=x.map.width?w.fn.mapael.maps[x.map.name].width/x.map.width:w.fn.mapael.maps[x.map.name].width/r.width(),i=0<e.deltaY?1:-1,n=1/(1+p.data("zoomLevel")*x.map.zoom.step),o=n*a*(e.clientX+w(window).scrollLeft()-t.left)+p.data("panX"),l=n*a*(e.clientY+w(window).scrollTop()-t.top)+p.data("panY");return p.trigger("zoom",{fixedCenter:!0,level:p.data("zoomLevel")+i,x:o,y:l}),!1}),x.map.zoom.enabled&&w.fn.mapael.initZoom(r,f,d.width,d.height,x.map.zoom),void 0!==x.map.zoom.init&&p.trigger("zoom",x.map.zoom.init),w.merge(g,w.fn.mapael.createLegends(p,x,"area",h,1)),p.on("update",function(e,t,a,i,n){var o=0,l=0,r=0,m={};if(g.forEach(function(e){e.forEach&&e.forEach(function(e){void 0!==e.hidden&&1==e.hidden&&w(e.node).trigger("click")})}),void 0!==n&&(n.resetAreas&&(x.areas={}),n.resetPlots&&(x.plots={}),n.animDuration&&(r=n.animDuration)),w.extend(!0,x,t),"object"==typeof i)for(;o<i.length;o++)void 0!==c[i[o]]&&(0<r?function(e){e.mapElem.animate({opacity:0},r,"linear",function(){e.mapElem.remove()}),e.textElem&&e.textElem.animate({opacity:0},r,"linear",function(){e.textElem.remove()})}(c[i[o]]):(c[i[o]].mapElem.remove(),c[i[o]].textElem&&c[i[o]].textElem.remove()),delete c[i[o]]);if("object"==typeof a)for(l in a)void 0===c[l]&&(x.plots[l]=a[l],c[l]=w.fn.mapael.drawPlot(l,x,d,f,s),0<r&&(c[l].mapElem.attr({opacity:0}),c[l].textElem.attr({opacity:0}),c[l].mapElem.animate({opacity:void 0!==c[l].mapElem.originalAttrs.opacity?c[l].mapElem.originalAttrs.opacity:1},r),c[l].textElem.animate({opacity:void 0!==c[l].textElem.originalAttrs.opacity?c[l].textElem.originalAttrs.opacity:1},r)));for(l in h)m=w.fn.mapael.getElemOptions(x.map.defaultArea,x.areas[l]?x.areas[l]:{},x.legend.area),w.fn.mapael.updateElem(m,h[l],s,r);for(l in c)"square"==(m=w.fn.mapael.getElemOptions(x.map.defaultPlot,x.plots[l]?x.plots[l]:{},x.legend.plot)).type?(m.attrs.width=m.size,m.attrs.height=m.size,m.attrs.x=c[l].mapElem.attrs.x-(m.size-c[l].mapElem.attrs.width)/2,m.attrs.y=c[l].mapElem.attrs.y-(m.size-c[l].mapElem.attrs.height)/2):"image"==m.type?(m.attrs.x=c[l].mapElem.attrs.x-(m.width-c[l].mapElem.attrs.width)/2,m.attrs.y=c[l].mapElem.attrs.y-(m.height-c[l].mapElem.attrs.height)/2):m.attrs.r=m.size/2,w.fn.mapael.updateElem(m,c[l],s,r);void 0!==n&&n.afterUpdate&&n.afterUpdate(p,f,h,c,x)}),x.map.width)f.setSize(x.map.width,d.height*(x.map.width/d.width)),w.merge(g,w.fn.mapael.createLegends(p,x,"plot",c,x.map.width/d.width));else{w(window).on("resize",function(){clearTimeout(t),t=setTimeout(function(){r.trigger("resizeEnd")},150)});var i=function(){w.merge(g,w.fn.mapael.createLegends(p,x,"plot",c,r.width()/d.width)),r.unbind("resizeEnd",i)};r.on("resizeEnd",function(){var e=r.width();f.width!=e&&f.setSize(e,d.height*(e/d.width))}).on("resizeEnd",i).trigger("resizeEnd")}x.map.afterInit&&x.map.afterInit(p,f,h,c,x),w(f.desc).append(" and Mapael (http://www.vincentbroute.fr/mapael/)")})},w.fn.mapael.initElem=function(e,t,a,i,n){var o={},l={};void 0!==a.value&&(t.value=a.value),w.fn.mapael.setHoverOptions(t.mapElem,a.attrs,a.attrsHover),a.text&&void 0!==a.text.content?(o=t.mapElem.getBBox(),l=w.fn.mapael.getTextPosition(o,a.text.position,a.text.margin),a.text.attrs["text-anchor"]=l.textAnchor,t.textElem=e.text(l.x,l.y,a.text.content).attr(a.text.attrs),w.fn.mapael.setHoverOptions(t.textElem,a.text.attrs,a.text.attrsHover),w.fn.mapael.setHover(e,t.mapElem,t.textElem),a.eventHandlers&&w.fn.mapael.setEventHandlers(n,a,t.mapElem,t.textElem),w(t.textElem.node).attr("data-id",n)):(w.fn.mapael.setHover(e,t.mapElem),a.eventHandlers&&w.fn.mapael.setEventHandlers(n,a,t.mapElem)),a.tooltip&&a.tooltip.content&&(t.mapElem.tooltipContent=a.tooltip.content,w.fn.mapael.setTooltip(t.mapElem,i),a.text&&void 0!==a.text.content&&(t.textElem.tooltipContent=a.tooltip.content,w.fn.mapael.setTooltip(t.textElem,i))),a.href&&(t.mapElem.href=a.href,t.mapElem.target=a.target,w.fn.mapael.setHref(t.mapElem),a.text&&void 0!==a.text.content&&(t.textElem.href=a.href,t.textElem.target=a.target,w.fn.mapael.setHref(t.textElem))),w(t.mapElem.node).attr("data-id",n)},w.fn.mapael.drawLinksCollection=function(e,t,a,i){var n={},o={},l={},r={},m={};for(var s in t.links)l=w.fn.mapael.getElemOptions(t.map.defaultLink,t.links[s],{}),n="string"==typeof t.links[s].between[0]?t.plots[t.links[s].between[0]]:t.links[s].between[0],o="string"==typeof t.links[s].between[1]?t.plots[t.links[s].between[1]]:t.links[s].between[1],void 0!==n.latitude&&void 0!==n.longitude?r=a(n.latitude,n.longitude):(r.x=n.x,r.y=n.y),void 0!==o.latitude&&void 0!==o.longitude?m=a(o.latitude,o.longitude):(m.x=o.x,m.y=o.y),w.fn.mapael.drawLink(s,e,r.x,r.y,m.x,m.y,l,i)},w.fn.mapael.drawLink=function(e,t,a,i,n,o,l,r){var m={},s=(a+n)/2,p=(i+o)/2,d=-1/((o-i)/(n-a)),f=p-d*s,h=Math.sqrt((n-a)*(n-a)+(o-i)*(o-i)),c=1+d*d,g=-2*s+2*d*f-2*d*p,x=g*g-4*c*(s*s+f*f-f*p-p*f+p*p-l.factor*h*(l.factor*h)),u=0,v=0;return v=0<l.factor?d*(u=(-g+Math.sqrt(x))/(2*c))+f:d*(u=(-g-Math.sqrt(x))/(2*c))+f,m.mapElem=t.path("m "+a+","+i+" C "+u+","+v+" "+n+","+o+" "+n+","+o).attr(l.attrs),w.fn.mapael.initElem(t,m,l,r,e),m},w.fn.mapael.updateElem=function(e,t,a,i){var n,o,l;void 0!==e.value&&(t.value=e.value),t.textElem&&(void 0!==e.text&&void 0!==e.text.content&&e.text.content!=t.textElem.attrs.text&&t.textElem.attr({text:e.text.content}),n=t.mapElem.getBBox(),e.size&&(l=(e.size-n.height)/2,n.x-=l,n.x2+=l,n.y-=l,n.y2+=l),(o=w.fn.mapael.getTextPosition(n,e.text.position,e.text.margin)).x==t.textElem.attrs.x&&o.y==t.textElem.attrs.y||(0<i?(t.textElem.attr({"text-anchor":o.textAnchor}),t.textElem.animate({x:o.x,y:o.y},i)):t.textElem.attr({x:o.x,y:o.y,"text-anchor":o.textAnchor})),w.fn.mapael.setHoverOptions(t.textElem,e.text.attrs,e.text.attrsHover),0<i?t.textElem.animate(e.text.attrs,i):t.textElem.attr(e.text.attrs)),w.fn.mapael.setHoverOptions(t.mapElem,e.attrs,e.attrsHover),0<i?t.mapElem.animate(e.attrs,i):t.mapElem.attr(e.attrs),e.tooltip&&void 0!==e.tooltip.content&&(void 0===t.mapElem.tooltipContent&&(w.fn.mapael.setTooltip(t.mapElem,a),t.textElem&&w.fn.mapael.setTooltip(t.textElem,a)),t.mapElem.tooltipContent=e.tooltip.content,t.textElem&&(t.textElem.tooltipContent=e.tooltip.content)),void 0!==e.href&&(void 0===t.mapElem.href&&(w.fn.mapael.setHref(t.mapElem),t.textElem&&w.fn.mapael.setHref(t.textElem)),t.mapElem.href=e.href,t.mapElem.target=e.target,t.textElem&&(t.textElem.href=e.href,t.textElem.target=e.target))},w.fn.mapael.drawPlot=function(e,t,a,i,n){var o={},l={},r=w.fn.mapael.getElemOptions(t.map.defaultPlot,t.plots[e]?t.plots[e]:{},t.legend.plot);return l=void 0!==r.x&&void 0!==r.y?{x:r.x,y:r.y}:a.getCoords(r.latitude,r.longitude),o="square"==r.type?{mapElem:i.rect(l.x-r.size/2,l.y-r.size/2,r.size,r.size).attr(r.attrs)}:"image"==r.type?{mapElem:i.image(r.url,l.x-r.width/2,l.y-r.height/2,r.width,r.height).attr(r.attrs)}:{mapElem:i.circle(l.x,l.y,r.size/2).attr(r.attrs)},w.fn.mapael.initElem(i,o,r,n,e),o},w.fn.mapael.setHref=function(e){e.attr({cursor:"pointer"}),w(e.node).bind("click",function(){!w.fn.mapael.panning&&e.href&&window.open(e.href,e.target)})},w.fn.mapael.setTooltip=function(t,a){var i=0,e=a.parent(),n=e.offset().left+e.width();w(t.node).on("mouseover",function(e){i=setTimeout(function(){t.tooltipContent&&a.html(t.tooltipContent).css("display","block"),a.css({left:Math.min(n-a.outerWidth()-5,e.pageX+10-w(window).scrollLeft()),top:e.pageY+20-w(window).scrollTop()})},120)}).on("mouseout",function(e){clearTimeout(i),a.css("display","none")}).on("mousemove",function(e){a.css({left:Math.min(n-a.outerWidth()-5,e.pageX+10-w(window).scrollLeft()),top:e.pageY+20-w(window).scrollTop()})})},w.fn.mapael.setEventHandlers=function(a,i,n,o){for(var e in i.eventHandlers)!function(t){w(n.node).on(t,function(e){!w.fn.mapael.panning&&i.eventHandlers[t](e,a,n,o,i)}),o&&w(o.node).on(t,function(e){!w.fn.mapael.panning&&i.eventHandlers[t](e,a,n,o,i)})}(e)},w.fn.mapael.panning=!1,w.fn.mapael.initZoom=function(e,l,r,m,s){var p=e.parent(),t=w("<div>").addClass(s.zoomInCssClass).html("+"),a=w("<div>").addClass(s.zoomOutCssClass).html("&#x2212;"),d=!1,f=0,h=0;p.data("zoomLevel",0).data({panX:0,panY:0}),e.append(t).append(a),t.on("click",function(){p.trigger("zoom",{level:p.data("zoomLevel")+1})}),a.on("click",function(){p.trigger("zoom",{level:p.data("zoomLevel")-1})}),w("body").on("mouseup",function(e){d=!1,setTimeout(function(){w.fn.mapael.panning=!1},50)}),e.on("mousedown",function(e){return d=!0,f=e.pageX,h=e.pageY,!1}).on("mousemove",function(e){var t=p.data("zoomLevel");if(d&&0!=t){var a=(f-e.pageX)/(1+t*s.step)*(r/l.width),i=(h-e.pageY)/(1+t*s.step)*(m/l.height),n=Math.min(Math.max(0,l._viewBox[0]+a),r-l._viewBox[2]),o=Math.min(Math.max(0,l._viewBox[1]+i),m-l._viewBox[3]);(5<Math.abs(a)||5<Math.abs(i))&&(p.data({panX:n,panY:o}),l.setViewBox(n,o,l._viewBox[2],l._viewBox[3]),f=e.pageX,h=e.pageY,w.fn.mapael.panning=!0)}return!1})},w.fn.mapael.drawLegend=function(e,t,a,i,n,o,l){var r={},m={},s=0,p=0,d={},f={},h={},c={},g=0,x=0,u=0,v=0,E=[];if(e.slices&&e.display){for(r=w("."+e.cssClass,t).empty(),m=new Raphael(r.get(0)),p=s=0,e.title&&((d=m.text(e.marginLeftTitle,0,e.title).attr(e.titleAttrs)).attr({y:.5*d.getBBox().height}),s=e.marginLeftTitle+d.getBBox().width,p+=e.marginBottomTitle+d.getBBox().height),g=0,length=e.slices.length;g<length;++g)void 0===e.slices[g].legendSpecificAttrs&&(e.slices[g].legendSpecificAttrs={}),E[g]=w.extend({},"plot"==i?a.map.defaultPlot.attrs:a.map.defaultArea.attrs,e.slices[g].attrs,e.slices[g].legendSpecificAttrs),"area"==i?(void 0===E[g].width&&(E[g].width=30),void 0===E[g].height&&(E[g].height=20)):"square"==e.slices[g].type?(void 0===E[g].width&&(E[g].width=e.slices[g].size),void 0===E[g].height&&(E[g].height=e.slices[g].size)):"image"==e.slices[g].type?(void 0===E[g].width&&(E[g].width=e.slices[g].width),void 0===E[g].height&&(E[g].height=e.slices[g].height)):void 0===E[g].r&&(E[g].r=e.slices[g].size/2),v="image"==e.slices[g].type||"area"==i?Math.max(v,e.marginBottomTitle+d.getBBox().height+o*E[g].height/2):Math.max(v,e.marginBottomTitle+d.getBBox().height+o*E[g].r);for("horizontal"==e.mode&&(s=e.marginLeft),g=0,length=e.slices.length;g<length;++g)void 0!==e.slices[g].display&&1!=e.slices[g].display||(f="area"==i?(u="horizontal"==e.mode?(x=s+e.marginLeft,v-.5*o*E[g].height):(x=e.marginLeft,p),m.rect(x,u,o*E[g].width,o*E[g].height)):"square"==e.slices[g].type?(u="horizontal"==e.mode?(x=s+e.marginLeft,v-.5*o*E[g].height):(x=e.marginLeft,p),m.rect(x,u,o*E[g].width,o*E[g].height)):"image"==e.slices[g].type?(u="horizontal"==e.mode?(x=s+e.marginLeft,v-.5*o*E[g].height):(x=e.marginLeft,p),m.image(e.slices[g].url,x,u,o*E[g].width,o*E[g].height)):(u="horizontal"==e.mode?(x=s+e.marginLeft+o*E[g].r,v):(x=e.marginLeft+o*E[g].r,p+o*E[g].r),m.circle(x,u,o*E[g].r)),delete E[g].width,delete E[g].height,delete E[g].r,f.attr(E[g]),h=f.getBBox(),u="horizontal"==e.mode?(x=s+e.marginLeft+h.width+e.marginLeftLabel,v):(x=e.marginLeft+h.width+e.marginLeftLabel,p+h.height/2),c=m.text(x,u,e.slices[g].label).attr(e.labelAttrs),"horizontal"==e.mode?(s+=e.marginLeft+h.width+e.marginLeftLabel+c.getBBox().width,p="image"==e.slices[g].type||"area"==i?Math.max(p,e.marginBottom+d.getBBox().height+h.height):Math.max(p,e.marginBottomTitle+e.marginBottom+d.getBBox().height+h.height)):(s=Math.max(s,e.marginLeft+h.width+e.marginLeftLabel+c.getBBox().width),p+=e.marginBottom+h.height),w(f.node).attr({"data-type":"elem","data-index":g}),w(c.node).attr({"data-type":"label","data-index":g}),e.hideElemsOnClick.enabled&&(c.attr({cursor:"pointer"}),f.attr({cursor:"pointer"}),w.fn.mapael.setHoverOptions(f,E[g],E[g]),w.fn.mapael.setHoverOptions(c,e.labelAttrs,e.labelAttrsHover),w.fn.mapael.setHover(m,f,c),c.hidden=!1,w.fn.mapael.handleClickOnLegendElem(e,e.slices[g],c,f,n,l)));return"SVG"!=Raphael.type&&e.VMLWidth&&(s=e.VMLWidth),m.setSize(s,p),m}},w.fn.mapael.handleClickOnLegendElem=function(a,i,n,e,o,l){var t=function(){var e=0;for(var t in n.hidden?n.animate({opacity:1},300):n.animate({opacity:.5},300),o)e=w.isArray(o[t].value)?o[t].value[l]:o[t].value,(void 0!==i.sliceValue&&e==i.sliceValue||void 0===i.sliceValue&&(void 0===i.min||e>=i.min)&&(void 0===i.max||e<i.max))&&function(e){n.hidden?(0==a.hideElemsOnClick.opacity&&(o[e].mapElem.show(),o[e].textElem&&o[e].textElem.show()),o[e].mapElem.animate({opacity:void 0!==o[e].mapElem.originalAttrs.opacity?o[e].mapElem.originalAttrs.opacity:1},300),o[e].textElem&&o[e].textElem.animate({opacity:void 0!==o[e].textElem.originalAttrs.opacity?o[e].textElem.originalAttrs.opacity:1},300)):(o[e].mapElem.animate({opacity:a.hideElemsOnClick.opacity},300,"linear",function(){0==a.hideElemsOnClick.opacity&&o[e].mapElem.hide()}),o[e].textElem&&o[e].textElem.animate({opacity:a.hideElemsOnClick.opacity},300,"linear",function(){0==a.hideElemsOnClick.opacity&&o[e].textElem.hide()}))}(t);n.hidden=!n.hidden};w(n.node).on("click",t),w(e.node).on("click",t)},w.fn.mapael.createLegends=function(e,t,a,i,n){var o=[];if(w.isArray(t.legend[a]))for(var l=0;l<t.legend[a].length;++l)o.push(w.fn.mapael.drawLegend(t.legend[a][l],e,t,a,i,n,l));else o.push(w.fn.mapael.drawLegend(t.legend[a],e,t,a,i,n));return o},w.fn.mapael.setHoverOptions=function(e,t,a){"SVG"!=Raphael.type&&delete a.transform,e.attrsHover=a,e.attrsHover.transform?e.originalAttrs=w.extend({transform:"s1"},t):e.originalAttrs=t},w.fn.mapael.setHover=function(e,t,a){var i={},n=0,o=function(){n=setTimeout(function(){w.fn.mapael.elemHover(e,t,a)},120)},l=function(){clearTimeout(n),w.fn.mapael.elemOut(e,t,a)};(i=w(t.node)).on("mouseover",o),i.on("mouseout",l),a&&(w(a.node).on("mouseover",o),w(a.node).on("mouseout",l))},w.fn.mapael.elemHover=function(e,t,a){t.animate(t.attrsHover,t.attrsHover.animDuration),a&&a.animate(a.attrsHover,a.attrsHover.animDuration),e.safari()},w.fn.mapael.elemOut=function(e,t,a){t.animate(t.originalAttrs,t.attrsHover.animDuration),a&&a.animate(a.originalAttrs,a.attrsHover.animDuration),e.safari()},w.fn.mapael.getElemOptions=function(e,t,a){var i=w.extend(!0,{},e,t);if(void 0!==i.value)if(w.isArray(a))for(var n=0,o=a.length;n<o;++n)i=w.extend(!0,{},i,w.fn.mapael.getLegendSlice(i.value[n],a[n]));else i=w.extend(!0,{},i,w.fn.mapael.getLegendSlice(i.value,a));return i},w.fn.mapael.getTextPosition=function(e,t,a){var i=0,n=0,o="";switch(t){case"bottom":i=(e.x+e.x2)/2,n=e.y2+a,o="middle";break;case"top":i=(e.x+e.x2)/2,n=e.y-a,o="middle";break;case"left":i=e.x-a,n=(e.y+e.y2)/2,o="end";break;case"right":i=e.x2+a,n=(e.y+e.y2)/2,o="start";break;default:i=(e.x+e.x2)/2,n=(e.y+e.y2)/2,o="middle"}return{x:i,y:n,textAnchor:o}},w.fn.mapael.getLegendSlice=function(e,t){for(var a=0,i=t.slices.length;a<i;++a)if(void 0!==t.slices[a].sliceValue&&e==t.slices[a].sliceValue||void 0===t.slices[a].sliceValue&&(void 0===t.slices[a].min||e>=t.slices[a].min)&&(void 0===t.slices[a].max||e<t.slices[a].max))return t.slices[a];return{}},w.fn.mapael.defaultOptions={map:{cssClass:"map",tooltip:{cssClass:"mapTooltip"},defaultArea:{attrs:{fill:"#343434",stroke:"#5d5d5d","stroke-width":1,"stroke-linejoin":"round"},attrsHover:{fill:"#f38a03",animDuration:300},text:{position:"inner",margin:10,attrs:{"font-size":15,fill:"#c7c7c7"},attrsHover:{fill:"#eaeaea",animDuration:300}},target:"_self"},defaultPlot:{type:"circle",size:15,attrs:{fill:"#0088db",stroke:"#fff","stroke-width":0,"stroke-linejoin":"round"},attrsHover:{"stroke-width":3,animDuration:300},text:{position:"right",margin:10,attrs:{"font-size":15,fill:"#c7c7c7"},attrsHover:{fill:"#eaeaea",animDuration:300}},target:"_self"},defaultLink:{factor:.5,attrs:{stroke:"#0088db","stroke-width":2},attrsHover:{animDuration:300},text:{position:"inner",margin:10,attrs:{"font-size":15,fill:"#c7c7c7"},attrsHover:{fill:"#eaeaea",animDuration:300}},target:"_self"},zoom:{enabled:!1,maxLevel:5,step:.25,zoomInCssClass:"zoomIn",zoomOutCssClass:"zoomOut",mousewheel:!0}},legend:{area:[],plot:[]},areas:{},plots:{},links:{}},w.fn.mapael.legendDefaultOptions={area:{cssClass:"areaLegend",display:!0,marginLeft:10,marginLeftTitle:5,marginBottomTitle:10,marginLeftLabel:10,marginBottom:10,titleAttrs:{"font-size":16,fill:"#343434","text-anchor":"start"},labelAttrs:{"font-size":12,fill:"#343434","text-anchor":"start"},labelAttrsHover:{fill:"#787878",animDuration:300},hideElemsOnClick:{enabled:!0,opacity:.2},slices:[],mode:"vertical"},plot:{cssClass:"plotLegend",display:!0,marginLeft:10,marginLeftTitle:5,marginBottomTitle:10,marginLeftLabel:10,marginBottom:10,titleAttrs:{"font-size":16,fill:"#343434","text-anchor":"start"},labelAttrs:{"font-size":12,fill:"#343434","text-anchor":"start"},labelAttrsHover:{fill:"#787878",animDuration:300},hideElemsOnClick:{enabled:!0,opacity:.2},slices:[],mode:"vertical"}}}(jQuery);