!function(s){function o(t){var o=s(t);o.prop("disabled")||o.closest(".form-group").addClass("is-focused")}function i(t){t.closest("label").hover(function(){var t=s(this).find("input");t.prop("disabled")||o(t)},function(){e(s(this).find("input"))})}function e(t){s(t).closest(".form-group").removeClass("is-focused")}s.expr[":"].notmdproc=function(t){return!s(t).data("mdproc")},s.material={options:{validate:!0,input:!0,ripples:!0,checkbox:!0,togglebutton:!0,radio:!0,arrive:!0,autofill:!1,withRipples:[".btn:not(.btn-link)",".card-image",".navbar a:not(.withoutripple)",".dropdown-menu a",".nav-tabs a:not(.withoutripple)",".withripple",".pagination li:not(.active):not(.disabled) a:not(.withoutripple)"].join(","),inputElements:"input.form-control, textarea.form-control, select.form-control",checkboxElements:".checkbox > label > input[type=checkbox]",togglebuttonElements:".togglebutton > label > input[type=checkbox]",radioElements:".radio > label > input[type=radio]"},checkbox:function(t){i(s(t||this.options.checkboxElements).filter(":notmdproc").data("mdproc",!0).after("<span class='checkbox-material'><span class='check'></span></span>"))},togglebutton:function(t){i(s(t||this.options.togglebuttonElements).filter(":notmdproc").data("mdproc",!0).after("<span class='toggle'></span>"))},radio:function(t){i(s(t||this.options.radioElements).filter(":notmdproc").data("mdproc",!0).after("<span class='circle'></span><span class='check'></span>"))},input:function(t){s(t||this.options.inputElements).filter(":notmdproc").data("mdproc",!0).each(function(){var i=s(this),n=i.closest(".form-group");0===n.length&&(i.wrap("<div class='form-group'></div>"),n=i.closest(".form-group")),i.attr("data-hint")&&(i.after("<p class='help-block'>"+i.attr("data-hint")+"</p>"),i.removeAttr("data-hint"));if(s.each({"input-lg":"form-group-lg","input-sm":"form-group-sm"},function(t,o){i.hasClass(t)&&(i.removeClass(t),n.addClass(o))}),i.hasClass("floating-label")){var t=i.attr("placeholder");i.attr("placeholder",null).removeClass("floating-label");var o=i.attr("id"),e="";o&&(e="for='"+o+"'"),n.addClass("label-floating"),i.after("<label "+e+"class='control-label'>"+t+"</label>")}null!==i.val()&&"undefined"!=i.val()&&""!==i.val()||n.addClass("is-empty"),n.append("<span class='material-input'></span>"),0<n.find("input[type=file]").length&&n.addClass("is-fileinput")})},attachInputEventHandlers:function(){var n=this.options.validate;s(document).on("change",".checkbox input[type=checkbox]",function(){s(this).blur()}).on("keydown paste",".form-control",function(t){var o;(void 0===(o=t).which||"number"==typeof o.which&&0<o.which&&!o.ctrlKey&&!o.metaKey&&!o.altKey&&8!=o.which&&9!=o.which&&13!=o.which&&16!=o.which&&17!=o.which&&20!=o.which&&27!=o.which)&&s(this).closest(".form-group").removeClass("is-empty")}).on("keyup change",".form-control",function(){var t=s(this),o=t.closest(".form-group"),i=void 0===t[0].checkValidity||t[0].checkValidity();""===t.val()?o.addClass("is-empty"):o.removeClass("is-empty"),n&&(i?o.removeClass("has-error"):o.addClass("has-error"))}).on("focus",".form-control, .form-group.is-fileinput",function(){o(this)}).on("blur",".form-control, .form-group.is-fileinput",function(){e(this)}).on("change",".form-group input",function(){var t=s(this);if("file"!=t.attr("type")){var o=t.closest(".form-group");t.val()?o.removeClass("is-empty"):o.addClass("is-empty")}}).on("change",".form-group.is-fileinput input[type='file']",function(){var t=s(this).closest(".form-group"),i="";s.each(this.files,function(t,o){i+=o.name+", "}),(i=i.substring(0,i.length-2))?t.removeClass("is-empty"):t.addClass("is-empty"),t.find("input.form-control[readonly]").val(i)})},ripples:function(t){s(t||this.options.withRipples).ripples()},autofill:function(){var t=setInterval(function(){s("input[type!=checkbox]").each(function(){var t=s(this);t.val()&&t.val()!==t.attr("value")&&t.trigger("change")})},100);setTimeout(function(){clearInterval(t)},1e4)},attachAutofillEventHandlers:function(){var o;s(document).on("focus","input",function(){var t=s(this).parents("form").find("input").not("[type=file]");o=setInterval(function(){t.each(function(){var t=s(this);t.val()!==t.attr("value")&&t.trigger("change")})},100)}).on("blur",".form-group input",function(){clearInterval(o)})},init:function(t){this.options=s.extend({},this.options,t);var o=s(document);s.fn.ripples&&this.options.ripples&&this.ripples(),this.options.input&&(this.input(),this.attachInputEventHandlers()),this.options.checkbox&&this.checkbox(),this.options.togglebutton&&this.togglebutton(),this.options.radio&&this.radio(),this.options.autofill&&(this.autofill(),this.attachAutofillEventHandlers()),document.arrive&&this.options.arrive&&(s.fn.ripples&&this.options.ripples&&o.arrive(this.options.withRipples,function(){s.material.ripples(s(this))}),this.options.input&&o.arrive(this.options.inputElements,function(){s.material.input(s(this))}),this.options.checkbox&&o.arrive(this.options.checkboxElements,function(){s.material.checkbox(s(this))}),this.options.radio&&o.arrive(this.options.radioElements,function(){s.material.radio(s(this))}),this.options.togglebutton&&o.arrive(this.options.togglebuttonElements,function(){s.material.togglebutton(s(this))}))}}}(jQuery);