$(document).ready(function(){$(".list-group-item").on("click",function(t){$(this).closest(".list-group").children(".active").removeClass("active"),$(t.target).addClass("active")}),$(".fullscreen").fseditor({maxHeight:500}),$(".profile-photos img").click(function(t){t.preventDefault();var e=$(this).attr("src"),s=$(this).closest(".item-wrapper").attr("data-name");bootbox.dialog({message:"<img src='"+e+"' class='img-responsive' />",title:s,buttons:{close:{label:"Close",className:"btn-default"}}}),$(".modal .bootbox-close-button").hide()})});