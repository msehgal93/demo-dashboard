!function(e){"use strict";"function"==typeof define&&define.amd?define(["jquery","./jquery.fileupload-process"],e):e(window.jQuery)}(function(o){"use strict";o.blueimp.fileupload.prototype.options.processQueue.push({action:"validate",always:!0,acceptFileTypes:"@",maxFileSize:"@",minFileSize:"@",maxNumberOfFiles:"@",disabled:"@disableValidation"}),o.widget("blueimp.fileupload",o.blueimp.fileupload,{options:{getNumberOfFiles:o.noop,messages:{maxNumberOfFiles:"Maximum number of files exceeded",acceptFileTypes:"File type not allowed",maxFileSize:"File is too large",minFileSize:"File is too small"}},processActions:{validate:function(e,i){if(i.disabled)return e;var l=o.Deferred(),r=this.options,s=e.files[e.index],t=r.getNumberOfFiles();return t&&"number"===o.type(i.maxNumberOfFiles)&&t+e.files.length>i.maxNumberOfFiles?s.error=r.i18n("maxNumberOfFiles"):!i.acceptFileTypes||i.acceptFileTypes.test(s.type)||i.acceptFileTypes.test(s.name)?i.maxFileSize&&s.size>i.maxFileSize?s.error=r.i18n("maxFileSize"):"number"===o.type(s.size)&&s.size<i.minFileSize?s.error=r.i18n("minFileSize"):delete s.error:s.error=r.i18n("acceptFileTypes"),s.error||e.files.error?(e.files.error=!0,l.rejectWith(this,[e])):l.resolveWith(this,[e]),l.promise()}}})});