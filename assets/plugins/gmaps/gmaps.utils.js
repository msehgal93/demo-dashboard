GMaps.geolocate=function(e){var t=e.always||e.complete;navigator.geolocation?navigator.geolocation.getCurrentPosition(function(o){e.success(o),t&&t()},function(o){e.error(o),t&&t()},e.options):(e.not_supported(),t&&t())},GMaps.geocode=function(o){this.geocoder=new google.maps.Geocoder;var t=o.callback;o.hasOwnProperty("lat")&&o.hasOwnProperty("lng")&&(o.latLng=new google.maps.LatLng(o.lat,o.lng)),delete o.lat,delete o.lng,delete o.callback,this.geocoder.geocode(o,function(o,e){t(o,e)})};