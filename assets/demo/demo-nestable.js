$(function(){function t(t){var e=t.length?t:$(t.target),l=e.data("output");window.JSON?l.val(window.JSON.stringify(e.nestable("serialize"))):l.val("JSON browser support required for this demo.")}$("#nestable_list_1").nestable({group:1}).on("change",t),$("#nestable_list_2").nestable({group:1}).on("change",t),t($("#nestable_list_1").data("output",$("#nestable_list_1_output"))),t($("#nestable_list_2").data("output",$("#nestable_list_2_output"))),$("#nestable_list_menu").on("click",function(t){var e=$(t.target).data("action");"expand-all"===e&&$(".dd").nestable("expandAll"),"collapse-all"===e&&$(".dd").nestable("collapseAll")}),$("#nestable_list_3").nestable()});