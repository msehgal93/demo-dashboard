var document=require("jsdom").jsdom(),globals={};"d3"in global&&(globals.d3=global.d3),"window"in global&&(globals.window=global.window),"document"in global&&(globals.document=global.document),global.window=document.parentWindow,global.document=document,module.exports=require("./d3"),"d3"in globals?global.d3=globals.d3:delete global.d3,"window"in globals?global.window=globals.window:delete global.window,"document"in globals?global.document=globals.document:delete global.document;