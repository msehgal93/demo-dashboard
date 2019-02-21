GMaps.prototype.createMarker=function(r){if(null==r.lat&&null==r.lng&&null==r.position)throw"No latitude or longitude defined.";var n=this,e=r.details,t=r.fences,i=r.outside,o={position:new google.maps.LatLng(r.lat,r.lng),map:null};delete r.lat,delete r.lng,delete r.fences,delete r.outside;var a=extend_object(o,r),s=new google.maps.Marker(a);if(s.fences=t,r.infoWindow){s.infoWindow=new google.maps.InfoWindow(r.infoWindow);for(var d=["closeclick","content_changed","domready","position_changed","zindex_changed"],l=0;l<d.length;l++)!function(e,n){r.infoWindow[n]&&google.maps.event.addListener(e,n,function(e){r.infoWindow[n].apply(this,[e])})}(s.infoWindow,d[l])}var c=["animation_changed","clickable_changed","cursor_changed","draggable_changed","flat_changed","icon_changed","position_changed","shadow_changed","shape_changed","title_changed","visible_changed","zindex_changed"],h=["dblclick","drag","dragend","dragstart","mousedown","mouseout","mouseover","mouseup"];for(l=0;l<c.length;l++)!function(e,n){r[n]&&google.maps.event.addListener(e,n,function(){r[n].apply(this,[this])})}(s,c[l]);for(l=0;l<h.length;l++)!function(n,e,t){r[t]&&google.maps.event.addListener(e,t,function(e){e.pixel||(e.pixel=n.getProjection().fromLatLngToPoint(e.latLng)),r[t].apply(this,[e])})}(this.map,s,h[l]);return google.maps.event.addListener(s,"click",function(){this.details=e,r.click&&r.click.apply(this,[this]),s.infoWindow&&(n.hideInfoWindows(),s.infoWindow.open(n.map,s))}),google.maps.event.addListener(s,"rightclick",function(e){e.marker=this,r.rightclick&&r.rightclick.apply(this,[e]),null!=window.context_menu[n.el.id].marker&&n.buildContextMenu("marker",e)}),s.fences&&google.maps.event.addListener(s,"dragend",function(){n.checkMarkerGeofence(s,function(e,n){i(e,n)})}),s},GMaps.prototype.addMarker=function(e){var n;if(e.hasOwnProperty("gm_accessors_"))n=e;else{if(!(e.hasOwnProperty("lat")&&e.hasOwnProperty("lng")||e.position))throw"No latitude or longitude defined.";n=this.createMarker(e)}return n.setMap(this.map),this.markerClusterer&&this.markerClusterer.addMarker(n),this.markers.push(n),GMaps.fire("marker_added",n,this),n},GMaps.prototype.addMarkers=function(e){for(var n,t=0;n=e[t];t++)this.addMarker(n);return this.markers},GMaps.prototype.hideInfoWindows=function(){for(var e,n=0;e=this.markers[n];n++)e.infoWindow&&e.infoWindow.close()},GMaps.prototype.removeMarker=function(e){for(var n=0;n<this.markers.length;n++)if(this.markers[n]===e){this.markers[n].setMap(null),this.markers.splice(n,1),GMaps.fire("marker_removed",e,this);break}return e},GMaps.prototype.removeMarkers=function(e){e=e||this.markers;for(var n=0;n<this.markers.length;n++)this.markers[n]===e[n]&&this.markers[n].setMap(null);var t=[];for(n=0;n<this.markers.length;n++)null!=this.markers[n].getMap()&&t.push(this.markers[n]);this.markers=t};